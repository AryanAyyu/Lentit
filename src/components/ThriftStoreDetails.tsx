
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Globe, 
  Clock, 
  ShoppingCart, 
  ArrowLeft,
  Heart,
  IndianRupee
} from 'lucide-react';
import { thriftStores } from '@/data/mockData';
import Navbar from './Navbar';
import Footer from './Footer';

const ThriftStoreDetails = () => {
  const location = useLocation();
  
  const { id } = useParams<{ id: string }>();
  const storeId = parseInt(id || '0');
  
  const store = thriftStores.find(s => s.id === storeId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  if (!store) {
    return (
    <>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Store Not Found</h1>
          <p className="mb-6">The store you are looking for doesn't exist or has been removed.</p>
          <Link to="/thrift/thrift-stores">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Stores
            </Button>
          </Link>
        </div>
    </>
    );
  }
  
  return (
    <div className="min-h-screen">
        <Navbar />
        <div className="pt-10 lg:pt-[100px] pb-8 px-6 bg-muted ">
      {/* Store Header */}
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <Link to="/thrift/thrift-stores" className="inline-flex items-center text-thrift-600 hover:text-thrift-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to all stores
          </Link>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img 
                src={store.image} 
                alt={store.name} 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div className="md:w-2/3">
              <div className="flex items-center mb-2">
                <h1 className="text-3xl font-bold text-thrift-800 mr-3">{store.name}</h1>
                {store.isVerified && (
                  <Badge className="bg-thrift-600 text-white flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Verified
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{store.location}</span>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(store.rating) ? "text-yellow-400" : "text-gray-300"}>★</span>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{store.rating.toFixed(1)} rating</span>
              </div>
              
              <p className="text-gray-700 mb-6">{store.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                  <Clock className="h-5 w-5 text-thrift-600 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Hours</p>
                    <p className="text-sm font-medium">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                  <Phone className="h-5 w-5 text-thrift-600 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="text-sm font-medium">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                  <Globe className="h-5 w-5 text-thrift-600 mr-2" />
                  <div>
                    <p className="text-xs text-gray-500">Website</p>
                    <a href="#" className="text-sm font-medium text-thrift-600 hover:underline">
                      Visit website
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button className="bg-thrift-600 hover:bg-thrift-700 text-white">
                  Contact Store
                </Button>
                <Button variant="outline" className="border-thrift-600 text-thrift-600">
                  Save to Favorites
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Store Products */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Products from {store.name}</h2>
        
        {store.products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {store.products.map((product) => (
              <Link to={`/thrift/productthrift/${product.id}`} key={product.id}>
                <Card className="product-card-thrift">
                  <div className="relative h-64 bg-gray-200 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute top-2 right-2 bg-white/80 rounded-full hover:bg-white"
                    >
                      <Heart className="h-5 w-5 text-gray-600 hover:text-accent2" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-lg mb-1 truncate">{product.name}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-thrift-700 flex items-center">
                        <IndianRupee className="h-4 w-4 mr-0.5" /> {product.price.toFixed(2)}
                      </span>
                      <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">{product.size}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3 truncate">Condition: {product.condition}</p>
                    <p className="text-xs text-gray-500 mb-4">Seller: {store.name}</p>
                    <Button className="w-full bg-thrift-600 hover:bg-thrift-700 text-white">
                      <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">This store hasn't listed any products yet.</p>
          </div>
        )}
      </div>
        </div>
        <Footer/>
    </div>
  );
};

export default ThriftStoreDetails;
