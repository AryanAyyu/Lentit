
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IndianRupee, Package, TrendingUp, Users, ShoppingBag, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { motion } from 'framer-motion';
import { BarChart, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from './Navbar';
import Footer from './Footer';

// Mock data for charts
const salesData = [
  { month: 'Jan', sales: 4000, visits: 2400 },
  { month: 'Feb', sales: 3000, visits: 1398 },
  { month: 'Mar', sales: 2000, visits: 9800 },
  { month: 'Apr', sales: 2780, visits: 3908 },
  { month: 'May', sales: 1890, visits: 4800 },
  { month: 'Jun', sales: 2390, visits: 3800 },
  { month: 'Jul', sales: 3490, visits: 4300 },
];

const categoryData = [
  { name: 'T-shirts', value: 35 },
  { name: 'Jeans', value: 25 },
  { name: 'Dresses', value: 18 },
  { name: 'Shoes', value: 15 },
  { name: 'Accessories', value: 7 },
];

const SellerDashboardPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
    <div className="min-h-screen">
      <Navbar/>
      <div className="pt-10 lg:pt-[100px] pb-8 px-6 bg-muted ">
        <div className="container mx-auto px-4 py-8">
        < div 
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-7xl mx-auto"
        >
            < div variants={item} className="mb-8">
            <h1 className="text-3xl font-bold text-thrift-800">Seller Dashboard</h1>
            <p className="text-gray-600 mt-2">Monitor your sales, listings, and performance</p>
            </ div>
            
            {/* Summary Cards */}
            < div variants={item} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            < div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
            >
                <div className="p-5">
                <div className="flex items-center justify-between">
                    <div>
                    <p className="text-sm font-medium text-gray-500">Total Sales</p>
                    <p className="text-2xl font-bold text-thrift-800 mt-1 flex items-center">
                        <IndianRupee className="h-5 w-5 mr-1" />12,450
                    </p>
                    </div>
                    <div className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                </div>
                <p className="text-xs text-green-600 font-medium mt-2">
                    +12.5% from last month
                </p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 px-5 py-2">
                <p className="text-xs text-green-700 font-medium">15 orders this month</p>
                </div>
            </ div>

            < div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
            >
                <div className="p-5">
                <div className="flex items-center justify-between">
                    <div>
                    <p className="text-sm font-medium text-gray-500">Active Listings</p>
                    <p className="text-2xl font-bold text-thrift-800 mt-1">24</p>
                    </div>
                    <div className="p-2 bg-thrift-100 rounded-lg">
                    <Package className="h-6 w-6 text-thrift-600" />
                    </div>
                </div>
                <p className="text-xs text-thrift-600 font-medium mt-2">
                    76% of your limit
                </p>
                </div>
                <div className="bg-gradient-to-r from-thrift-50 to-thrift-100 px-5 py-2">
                <Progress value={76} className="h-1" />
                </div>
            </ div>

            < div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
            >
                <div className="p-5">
                <div className="flex items-center justify-between">
                    <div>
                    <p className="text-sm font-medium text-gray-500">Profile Views</p>
                    <p className="text-2xl font-bold text-thrift-800 mt-1">142</p>
                    </div>
                    <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                    </div>
                </div>
                <p className="text-xs text-blue-600 font-medium mt-2">
                    +23% from last week
                </p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-5 py-2">
                <p className="text-xs text-blue-700 font-medium">8 new followers</p>
                </div>
            </ div>

            < div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
            >
                <div className="p-5">
                <div className="flex items-center justify-between">
                    <div>
                    <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
                    <p className="text-2xl font-bold text-thrift-800 mt-1">4.2%</p>
                    </div>
                    <div className="p-2 bg-purple-100 rounded-lg">
                    <ShoppingBag className="h-6 w-6 text-purple-600" />
                    </div>
                </div>
                <p className="text-xs text-purple-600 font-medium mt-2">
                    +0.5% from last month
                </p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 px-5 py-2">
                <p className="text-xs text-purple-700 font-medium">Industry avg: 3.1%</p>
                </div>
            </ div>
            </ div>
            
            {/* Charts */}
            <Tabs defaultValue="sales" className="mb-8">
            < div variants={item}>
                <TabsList className="mb-6">
                <TabsTrigger value="sales">Sales Analytics</TabsTrigger>
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
                </TabsList>
            </ div>
            
            <TabsContent value="sales">
                < div 
                variants={item}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                >
                <Card className="col-span-1 lg:col-span-2">
                    <CardHeader>
                    <CardTitle>Monthly Sales & Visits</CardTitle>
                    </CardHeader>
                    <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sales" stroke="#526f46" strokeWidth={2} activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="visits" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                    </CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                    <CardTitle>Sales by Category</CardTitle>
                    </CardHeader>
                    <CardContent className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={categoryData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8ba77e" barSize={20} />
                        </BarChart>
                    </ResponsiveContainer>
                    </CardContent>
                </Card>
                </ div>
            </TabsContent>
            
            <TabsContent value="inventory">
                < div variants={item} className="space-y-6">
                <Card>
                    <CardHeader>
                    <CardTitle>Inventory Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="space-y-4">
                        <div>
                        <div className="flex justify-between text-sm font-medium mb-1">
                            <span>Out of Stock Items</span>
                            <span>3 items</span>
                        </div>
                        <Progress value={12} className="h-2" />
                        </div>
                        <div>
                        <div className="flex justify-between text-sm font-medium mb-1">
                            <span>Low Stock Items</span>
                            <span>5 items</span>
                        </div>
                        <Progress value={20} className="h-2 bg-yellow-100" indicatorClassName="bg-yellow-500" />
                        </div>
                        <div>
                        <div className="flex justify-between text-sm font-medium mb-1">
                            <span>Adequate Stock</span>
                            <span>16 items</span>
                        </div>
                        <Progress value={68} className="h-2 bg-green-100" indicatorClassName="bg-green-500" />
                        </div>
                    </div>
                    </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                    <CardHeader>
                        <CardTitle>Most Viewed Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3">
                        <li className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                            <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-200 rounded-md mr-3">
                            </div>
                            <span>Vintage Denim Jacket</span>
                            </div>
                            <span className="text-gray-500">142 views</span>
                        </li>
                        <li className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                            <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-200 rounded-md mr-3">
                            </div>
                            <span>Floral Summer Dress</span>
                            </div>
                            <span className="text-gray-500">98 views</span>
                        </li>
                        <li className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                            <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-200 rounded-md mr-3">
                            </div>
                            <span>Leather Crossbody Bag</span>
                            </div>
                            <span className="text-gray-500">76 views</span>
                        </li>
                        </ul>
                    </CardContent>
                    </Card>
                    
                    <Card>
                    <CardHeader>
                        <CardTitle>Inventory Alerts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                        <div className="flex items-center p-3 bg-red-50 border border-red-100 rounded-md">
                            <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                            <div>
                            <p className="font-medium text-red-700">Out of Stock</p>
                            <p className="text-sm text-red-600">Vintage Leather Belt - Brown</p>
                            </div>
                        </div>
                        <div className="flex items-center p-3 bg-yellow-50 border border-yellow-100 rounded-md">
                            <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                            <div>
                            <p className="font-medium text-yellow-700">Low Stock</p>
                            <p className="text-sm text-yellow-600">Oversized Knit Cardigan (2 left)</p>
                            </div>
                        </div>
                        <div className="flex items-center p-3 bg-blue-50 border border-blue-100 rounded-md">
                            <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
                            <div>
                            <p className="font-medium text-blue-700">Listing Expiring</p>
                            <p className="text-sm text-blue-600">3 listings expiring in 2 days</p>
                            </div>
                        </div>
                        </div>
                    </CardContent>
                    </Card>
                </div>
                </ div>
            </TabsContent>
            
            <TabsContent value="performance">
                < div variants={item} className="space-y-6">
                <Card>
                    <CardHeader>
                    <CardTitle>Seller Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                        <div className="text-4xl font-bold text-thrift-600">4.8</div>
                        <p className="text-sm text-gray-500 mt-1">Seller Rating</p>
                        <div className="flex items-center justify-center mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                            <svg key={star} className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            ))}
                        </div>
                        </div>
                        <div className="text-center">
                        <div className="text-4xl font-bold text-thrift-600">98%</div>
                        <p className="text-sm text-gray-500 mt-1">On-Time Shipping</p>
                        <Progress value={98} className="h-2 mt-3" />
                        </div>
                        <div className="text-center">
                        <div className="text-4xl font-bold text-thrift-600">2.1%</div>
                        <p className="text-sm text-gray-500 mt-1">Return Rate</p>
                        <Progress value={2.1} max={10} className="h-2 mt-3" />
                        </div>
                    </div>
                    </CardContent>
                </Card>
                
                <Card>
                    <CardHeader>
                    <CardTitle>Recent Reviews</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <div className="space-y-4">
                        <div className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between">
                            <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} className={`w-4 h-4 ${star <= 5 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                            </div>
                            <span className="text-xs text-gray-500">2 days ago</span>
                        </div>
                        <p className="mt-2 text-sm">
                            "Amazing quality for a vintage piece! Fast shipping and great packaging."
                        </p>
                        <p className="text-xs text-gray-500 mt-1">For: Vintage Denim Jacket</p>
                        </div>
                        
                        <div className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between">
                            <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                            </div>
                            <span className="text-xs text-gray-500">1 week ago</span>
                        </div>
                        <p className="mt-2 text-sm">
                            "Item was exactly as described. Nice condition for pre-loved clothing!"
                        </p>
                        <p className="text-xs text-gray-500 mt-1">For: Floral Summer Dress</p>
                        </div>
                    </div>
                    </CardContent>
                </Card>
                </ div>
            </TabsContent>
            </Tabs>
            
            < div variants={item} className="flex justify-between items-center">
            <div>
                <h2 className="text-xl font-bold text-thrift-800">Recent Orders</h2>
                <p className="text-sm text-gray-500">Manage your recent orders and shipments</p>
            </div>
            <Button className="bg-thrift-600 hover:bg-thrift-700">
                View All Orders
            </Button>
            </ div>
            
            < div variants={item}>
            <div className="mt-6 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 ">
                    <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#TF-5432</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Priya Sharma</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Vintage Denim Jacket</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹1,250</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Delivered
                        </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Apr 28, 2025</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#TF-5431</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rahul Verma</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Leather Crossbody Bag</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹950</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                            Shipped
                        </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Apr 27, 2025</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#TF-5430</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Ananya Patel</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Floral Summer Dress</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹850</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                            Processing
                        </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Apr 26, 2025</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </ div>
        </ div>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default SellerDashboardPage;
