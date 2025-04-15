import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, IndianRupee } from 'lucide-react';
import { featuredProducts } from '@/data/mockData';
import Navbar from './Navbar';
import Footer from './Footer';

const NewArrivalsPageThrift = () => {
  // Get all new arrivals (for demo using all featured products)
  const allNewArrivals = featuredProducts;

  return (
    <div className="min-h-screen">
      <Navbar/>
      <div className="pt-10 lg:pt-[100px] pb-8 px-6 bg-muted ">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-thrift-800">New Arrivals</h1>
            <p className="text-thrift-600">Fresh finds added to our collection</p>
          </div>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Package className="h-4 w-4" /> Latest
          </Badge>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allNewArrivals.map((product) => (
            <Link to={`/thrift/productthrift/${product.id}`} key={product.id}>
              <Card className="product-card h-full hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <Badge className="mb-2">New</Badge>
                  <h3 className="font-medium text-base mb-2 truncate">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-thrift-700 flex items-center">
                      <IndianRupee className="h-3.5 w-3.5 mr-0.5" />
                      {product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500">{product.size}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default NewArrivalsPageThrift;
