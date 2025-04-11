
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search, CheckCircle2, MapPin, Store } from 'lucide-react';
import { thriftStores } from '@/data/mockData';
import Navbar from './Navbar';
import {useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const ThriftStores = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);
  
  const filteredStores = thriftStores.filter(store => {
    const matchesSearch = searchTerm === '' || 
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesVerified = !showVerifiedOnly || store.isVerified;
    
    return matchesSearch && matchesVerified;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <div className="min-h-screen">
        <Navbar />
        <div className="pt-10 lg:pt-[100px] pb-8 px-6 bg-muted ">
      {/* Header */}
      <div className="bg-accent1-light py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-thrift-800 mb-4">
            Shop Thrift Stores
          </h1>
          <p className="text-lg text-thrift-600 max-w-2xl">
            Explore curated collections from established thrift stores. Each store offers unique items and styles.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full md:w-1/2 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search for stores by name or location..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center ml-auto">
              <Checkbox
                id="verified-only"
                checked={showVerifiedOnly}
                onCheckedChange={() => setShowVerifiedOnly(!showVerifiedOnly)}
              />
              <Label htmlFor="verified-only" className="ml-2 cursor-pointer flex items-center">
                Verified Stores Only
                <CheckCircle2 className="ml-1 h-4 w-4 text-thrift-600" />
              </Label>
            </div>
          </div>
        </div>
        
        {/* Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <Link to={`/thrift/thrift-stores/${store.id}`} key={store.id}>
              <Card className="h-full store-card-thrift hover:border-thrift-300">
                <div className="h-48 bg-gray-200 relative">
                  <img 
                    src={store.image} 
                    alt={store.name} 
                    className="w-full h-full object-cover"
                  />
                  {store.isVerified && (
                    <Badge className="absolute top-3 right-3 bg-thrift-600 text-white flex items-center gap-1 px-3 py-1">
                      <CheckCircle2 className="h-3 w-3" /> Verified
                    </Badge>
                  )}
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-xl mb-2">{store.name}</h3>
                  <div className="flex items-center text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{store.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{store.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(store.rating) ? "text-yellow-400" : "text-gray-300"}>★</span>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{store.rating.toFixed(1)}</span>
                    </div>
                    <span className="text-sm text-thrift-600">
                      {store.products.length} items
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        {filteredStores.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <Store className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-800 mb-2">No Stores Found</h3>
            <p className="text-gray-500">We couldn't find any stores matching your search criteria.</p>
            <Button 
              variant="link" 
              className="text-thrift-600 mt-2"
              onClick={() => {
                setSearchTerm('');
                setShowVerifiedOnly(false);
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default ThriftStores;
