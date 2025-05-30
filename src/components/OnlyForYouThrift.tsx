import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, IndianRupee, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { featuredProducts } from "@/data/mockData";

const OnlyForYouThrift = () => {
  // Get 8 random products (for mobile scroll) but only show first 4 on desktop
  const allProducts = featuredProducts.sort(() => Math.random() - 0.5);
  const mobileProducts = allProducts.slice(0, 8); // For mobile scroll
  const desktopProducts = allProducts.slice(0, 4); // Only 4 for desktop

  return (
    <section className="py-8 bg-[#F4E3B2]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-thrift-800">Only For You</h2>
            <p className="text-thrift-600">
              Handpicked items based on your preferences
            </p>
          </div>
          <div className="hidden md:block">
            <Link to="/only-for-you">
              <Button className="bg-rose-900 hover:bg-rose-800 text-white">
                View More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile horizontal scroll - shows 8 products */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex space-x-4 w-max">
            {mobileProducts.map((product) => (
              <div key={product.id} className="w-64 flex-shrink-0">
                <Link to={`/thrift/productthrift/${product.id}`}>
                  <Card className="product-card-thrift h-[3/4] hover:shadow-lg transition-shadow">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-base mb-2 truncate">
                        {product.name}
                      </h3>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-thrift-700 flex items-center">
                          <IndianRupee className="h-3.5 w-3.5 mr-0.5" />
                          {product.price.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500">
                          {product.size}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop grid - shows exactly 4 products */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {desktopProducts.map((product) => (
            <Link to={`/thrift/productthrift/${product.id}`} key={product.id}>
              <Card className="product-card-thrift h-full hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium text-base mb-2 truncate">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-thrift-700 flex items-center">
                      <IndianRupee className="h-3.5 w-3.5 mr-0.5" />
                      {product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {product.size}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Mobile View More button */}
      </div>
    </section>
  );
};

export default OnlyForYouThrift;
