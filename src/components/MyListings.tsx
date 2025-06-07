import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { IndianRupee, Edit, Trash, Eye, PackageCheck, Clock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredProducts } from '@/data/mockData';
import Navbar from './Navbar';
import Footer from './Footer';

// Mock data for my listings - using a subset of featured products
const myListings = featuredProducts.slice(0, 5).map(product => ({
  ...product,
  status: Math.random() > 0.5 ? 'active' : 'pending',
  views: Math.floor(Math.random() * 100),
  dateAdded: '2025-04-' + Math.floor(Math.random() * 30 + 1).toString().padStart(2, '0')
}));

const MyListings = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  // Filter listings based on the active tab
  const filteredListings = activeTab === "all" 
    ? myListings 
    : myListings.filter(listing => listing.status === activeTab);

  return (
    <>
    <div className="min-h-screen">
      <Navbar/>
      <div className="pt-10 lg:pt-[100px] pb-8 px-6 bg-muted ">
        <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-thrift-800">My Listings</h1>
            <p className="text-thrift-600 mt-2">Manage your product listings</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-teal-600 hover:bg-thrift-700">
            <Link to="/thrift/sell" className="text-white">Create New Listing</Link>
          </Button>
        </div>

        <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all">All Listings</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <ListingsTable listings={filteredListings} />
          </TabsContent>
          
          <TabsContent value="active" className="mt-0">
            <ListingsTable listings={filteredListings} />
          </TabsContent>
          
          <TabsContent value="pending" className="mt-0">
            <ListingsTable listings={filteredListings} />
          </TabsContent>
        </Tabs>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
};

// Table component to display listings
const ListingsTable = ({ listings }: { listings: any[] }) => {
  if (listings.length === 0) {
    return (
      <div className="text-center py-12 border rounded-lg bg-gray-50">
        <p className="text-gray-500">No listings found</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {listings.map((listing) => (
          <Card key={listing.id} className="overflow-hidden">
            <div className="flex">
              <div className="w-28 h-28 min-w-[7rem] flex-shrink-0"> {/* Fixed image size */}
                <img 
                  src={listing.image} 
                  alt={listing.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardContent className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-medium text-base line-clamp-2 break-words"> {/* Multi-line name */}
                      {listing.name}
                    </h3>
                    <StatusBadge status={listing.status} />
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2 mt-1">
                    <Eye className="h-3.5 w-3.5 mr-1" />
                    <span>{listing.views} views</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-thrift-700 flex items-center">
                    <IndianRupee className="h-3.5 w-3.5 mr-0.5" />
                    {listing.price.toFixed(2)}
                  </span>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <Edit className="h-3.5 w-3.5" />
                    </Button>
                    <Button size="icon" variant="outline" className="h-8 w-8 text-red-500 hover:text-red-700">
                      <Trash className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      <table className="w-full border-collapse hidden md:table">
        <thead>
          <tr className="border-b">
            <th className="py-4 px-2 text-left">Product</th>
            <th className="py-4 px-2 text-left">Price</th>
            <th className="py-4 px-2 text-left">Status</th>
            <th className="py-4 px-2 text-left">Views</th>
            <th className="py-4 px-2 text-left">Date Added</th>
            <th className="py-4 px-2 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing) => (
            <tr key={listing.id} className="border-b hover:bg-gray-50">
              <td className="py-4 px-2">
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-3">
                    <img 
                      src={listing.image} 
                      alt={listing.name} 
                      className="w-full h-full object-cover rounded" 
                    />
                  </div>
                  <span className="font-medium">{listing.name}</span>
                </div>
              </td>
              <td className="py-4 px-2">
                <span className="font-bold text-thrift-700 flex items-center">
                  <IndianRupee className="h-3.5 w-3.5 mr-0.5" />
                  {listing.price.toFixed(2)}
                </span>
              </td>
              <td className="py-4 px-2">
                <StatusBadge status={listing.status} />
              </td>
              <td className="py-4 px-2">
                <div className="flex items-center">
                  <Eye className="h-3.5 w-3.5 mr-1 text-gray-500" />
                  <span>{listing.views}</span>
                </div>
              </td>
              <td className="py-4 px-2">
                <div className="flex items-center text-gray-500">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{listing.dateAdded}</span>
                </div>
              </td>
              <td className="py-4 px-2 text-right">
                <div className="flex justify-end gap-2">
                  <Button size="icon" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="text-red-500 hover:text-red-700">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Badge component for listing status
const StatusBadge = ({ status }: { status: string }) => {
  if (status === 'active') {
    return (
      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
        <PackageCheck className="h-3 w-3" />
        Active
      </Badge>
    );
  } else {
    return (
      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 flex items-center gap-1">
        <AlertCircle className="h-3 w-3" />
        Pending
      </Badge>
    );
  }
};

export default MyListings;