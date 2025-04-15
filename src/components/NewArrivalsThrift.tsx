import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, IndianRupee, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { featuredProducts } from '@/data/mockData';

const NewArrivalsThrift = () => {
  return (
    <section className="py-2 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-thrift-800">New Arrivals</h2>
            <p className="text-thrift-600">Fresh finds added to our collection</p>
          </div>
         {/* View More button - hidden on mobile */}
        <div className="hidden md:block text-center mt-8">
          <Link to="/new-arrivals">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              View More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        </div>
        
        {/* Mobile horizontal scroll - ALL PRODUCTS */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex space-x-4 w-max">
            {featuredProducts.map((product) => (
              <div key={product.id} className="w-64 flex-shrink-0">
                <Link to={`/thrift/productthrift/${product.id}`}>
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
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid - FIRST 3 PRODUCTS */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 4).map((product) => (
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
    </section>
  );
};

export default NewArrivalsThrift;