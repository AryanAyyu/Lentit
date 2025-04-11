
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Star,
  MapPin,
  ArrowLeft,
  Heart,
  ShoppingCart,
  Share2,
  Truck,
  RefreshCw,
  IndianRupee
} from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { featuredProducts } from '../data/mockData';
import Navbar from './Navbar';
import {useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetailsThrift = () => {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || '0');
  
  const product = featuredProducts.find(p => p.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  if (!product) {
    return (
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">The product you are looking for doesn't exist or has been removed.</p>
          <Link to="/thrift">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
            </Button>
          </Link>
        </div>
      
    );
  }

  // Generate additional images for the carousel (in a real app, these would come from the database)
  const productImages = [
    product.image,
    product.image, // Duplicate for demo purposes
    product.image, // Duplicate for demo purposes
  ];
  
  // Related products (in a real app, these would be filtered based on categories or tags)
  const relatedProducts = featuredProducts
    .filter(p => p.id !== productId)
    .slice(0, 4);
  
  return (
    <div className="min-h-screen">
        <Navbar />
        <div className="pt-10 lg:pt-[100px] pb-8 px-6 bg-muted ">

            <div className="container mx-auto px-4 py-8">
                <Link to="/thrift" className="inline-flex items-center text-thrift-600 hover:text-thrift-700 mb-6">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Products
                </Link>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Product Images */}
                <div>
                    <Carousel className="w-full">
                    <CarouselContent>
                        {productImages.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                            <div className="bg-white rounded-lg overflow-hidden">
                                <img 
                                src={image} 
                                alt={`${product.name} - View ${index + 1}`} 
                                className="w-full h-[400px] object-cover"
                                />
                            </div>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                    </Carousel>
                    
                    <div className="mt-4 flex justify-center space-x-2">
                    {productImages.map((image, index) => (
                        <button 
                        key={index}
                        className={`w-16 h-16 border-2 rounded-md overflow-hidden ${index === 0 ? 'border-thrift-500' : 'border-gray-200'}`}
                        >
                        <img 
                            src={image} 
                            alt={`Thumbnail ${index + 1}`} 
                            className="w-full h-full object-cover"
                        />
                        </button>
                    ))}
                    </div>
                </div>
                
                {/* Product Info */}
                <div>
                    <div className="mb-6">
                    <Badge className="mb-2 bg-accent1">{product.category || 'Clothing'}</Badge>
                    <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                    
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400' : ''}`} />
                        ))}
                        </div>
                        <span className="text-sm text-gray-600">(24 reviews)</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-6">
                        <span className="text-2xl font-bold text-thrift-700 flex items-center">
                        <IndianRupee className="h-5 w-5 mr-1" /> 
                        {product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                        <span className="text-gray-500 line-through flex items-center">
                            <IndianRupee className="h-4 w-4" /> 
                            {product.originalPrice.toFixed(2)}
                        </span>
                        )}
                    </div>
                    
                    <p className="text-gray-700 mb-6">
                        {product.description || 'This vintage item has been carefully selected for its quality and unique style. Perfect for adding character to your wardrobe.'}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium">Size</p>
                        <p className="text-lg">{product.size}</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium">Condition</p>
                        <p className="text-lg">{product.condition || 'Good'}</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium">Brand</p>
                        <p className="text-lg">{product.brand || 'Unknown'}</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm font-medium">Seller</p>
                        <div className="flex items-center">
                            <p className="text-lg">{product.seller}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    <div className="flex gap-4 mb-8">
                    <Button className="flex-grow bg-thrift-600 hover:bg-thrift-700 text-white">
                        <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                    </Button>
                    <Button variant="outline" className="border-thrift-500 text-thrift-600" size="icon">
                        <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="outline" className="border-thrift-500 text-thrift-600" size="icon">
                        <Share2 className="h-5 w-5" />
                    </Button>
                    </div>
                    
                    <div className="space-y-3">
                    <div className="flex items-start">
                        <Truck className="h-5 w-5 text-thrift-600 mr-3 mt-0.5" />
                        <div>
                        <p className="font-medium">Free Shipping</p>
                        <p className="text-sm text-gray-600">Free shipping on all orders over ₹1,000</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <RefreshCw className="h-5 w-5 text-thrift-600 mr-3 mt-0.5" />
                        <div>
                        <p className="font-medium">30-Day Returns</p>
                        <p className="text-sm text-gray-600">Return or exchange within 30 days</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-thrift-600 mr-3 mt-0.5" />
                        <div>
                        <p className="font-medium">Local Seller</p>
                        <p className="text-sm text-gray-600">Supporting sustainable fashion in your community</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                
                {/* Related Products */}
                <div className="mt-16">
                <h2 className="text-2xl font-bold mb-8">You might also like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {relatedProducts.map((product) => (
                    <Link to={`/thrift/productthrift/${product.id}`} key={product.id}>
                        <Card className="product-card-thrift">
                        <div className="h-56 bg-gray-200 overflow-hidden">
                            <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <CardContent className="p-4">
                            <h3 className="font-medium text-base mb-1 truncate">{product.name}</h3>
                            <div className="flex justify-between items-center mb-2">
                            <span className="font-bold text-thrift-700 flex items-center">
                                <IndianRupee className="h-3.5 w-3.5 mr-0.5" /> {product.price.toFixed(2)}
                            </span>
                            <span className="text-sm text-gray-500">{product.size}</span>
                            </div>
                            <p className="text-xs text-gray-500 truncate">Seller: {product.seller}</p>
                        </CardContent>
                        </Card>
                    </Link>
                    ))}
                </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductDetailsThrift;
