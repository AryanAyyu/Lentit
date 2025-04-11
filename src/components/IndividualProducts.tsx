
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Heart, Filter, Search } from 'lucide-react';
import { individualProducts } from '@/data/mockData';
import Navbar from './Navbar';
import Cart from './Cart';
import {useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const IndividualProducts = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  
  const categories = [...new Set(individualProducts.map(p => p.category))];
  const sizes = [...new Set(individualProducts.map(p => p.size))];
  const conditions = [...new Set(individualProducts.map(p => p.condition))];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const toggleSize = (size: string) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };
  
  const toggleCondition = (condition: string) => {
    if (selectedConditions.includes(condition)) {
      setSelectedConditions(selectedConditions.filter(c => c !== condition));
    } else {
      setSelectedConditions([...selectedConditions, condition]);
    }
  };
  
  const filteredProducts = individualProducts.filter(product => {
    // Search filter
    const matchesSearch = searchTerm === '' || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Price filter
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    // Category filter
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.includes(product.category);
    
    // Size filter
    const matchesSize = selectedSizes.length === 0 || 
      selectedSizes.includes(product.size);
    
    // Condition filter
    const matchesCondition = selectedConditions.length === 0 || 
      selectedConditions.includes(product.condition);
    
    return matchesSearch && matchesPrice && matchesCategory && matchesSize && matchesCondition;
  });
  
  return (
    <div className="min-h-screen">
        <Navbar />
        <div className="pt-10 lg:pt-[100px] pb-8 px-6 bg-muted ">
      {/* Header */}
      <div className="bg-thrift-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-thrift-800 mb-4">
            Buy from Individuals
          </h1>
          <p className="text-lg text-thrift-600 max-w-2xl">
            Browse unique pre-loved items from individual sellers. Find one-of-a-kind pieces at amazing prices.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-4 rounded-lg border border-gray-200 sticky top-20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold flex items-center">
                  <Filter className="h-5 w-5 mr-2" /> Filters
                </h2>
                <Button variant="ghost" className="text-sm text-thrift-600 hover:text-thrift-700">
                  Reset All
                </Button>
              </div>
              
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search items..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <Slider
                  defaultValue={[0, 20000]}
                  max={20000}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategory(category)}
                      />
                      <Label
                        htmlFor={`category-${category}`}
                        className="ml-2 text-sm cursor-pointer"
                      >
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Sizes */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Sizes</h3>
                <div className="space-y-2">
                  {sizes.map((size) => (
                    <div key={size} className="flex items-center">
                      <Checkbox
                        id={`size-${size}`}
                        checked={selectedSizes.includes(size)}
                        onCheckedChange={() => toggleSize(size)}
                      />
                      <Label
                        htmlFor={`size-${size}`}
                        className="ml-2 text-sm cursor-pointer"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Condition */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Condition</h3>
                <div className="space-y-2">
                  {conditions.map((condition) => (
                    <div key={condition} className="flex items-center">
                      <Checkbox
                        id={`condition-${condition}`}
                        checked={selectedConditions.includes(condition)}
                        onCheckedChange={() => toggleCondition(condition)}
                      />
                      <Label
                        htmlFor={`condition-${condition}`}
                        className="ml-2 text-sm cursor-pointer"
                      >
                        {condition}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing <span className="font-medium">{filteredProducts.length}</span> result(s)
              </p>
              <div className="flex gap-2">
                <Select defaultValue="recommended">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="product-card-thrift">
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
                        <span className="font-bold text-thrift-700">₹{product.price.toFixed(2)}</span>
                        <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">{product.size}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-3 truncate">Condition: {product.condition}</p>
                      <p className="text-xs text-gray-500 mb-4">Seller: {product.seller}</p>
                      <Button className="w-full bg-thrift-600 hover:bg-thrift-700 text-white">
                        <Cart className="h-4 w-4 mr-2" /> Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-500">No products found matching your filters.</p>
                <Button 
                  variant="link" 
                  className="text-teal-600 mt-2"
                  onClick={() => {
                    setSearchTerm('');
                    setPriceRange([0, 200]);
                    setSelectedCategories([]);
                    setSelectedSizes([]);
                    setSelectedConditions([]);
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default IndividualProducts;
