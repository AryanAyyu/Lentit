
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Package, Truck, MapPin, Info, Clock } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const ShippingGuidePage = () => {
  return (
    <>
    <div className="min-h-screen">
      <Navbar/>
      <div className="pt-10 lg:pt-[100px] pb-8 px-6 bg-muted ">
        <div className=" mx-auto px-4 py-12">
            <div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-8xl mx-auto"
            >
            <div className="text-center mb-12">
                <h1 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-4xl font-bold text-thrift-800 mb-4"
                >
                Shipping Guide
                </h1>
                <p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-lg text-gray-600"
                >
                Everything you need to know about shipping on ThriftFinds
                </p>
            </div>
            
            <div 
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-8"
            >
                <section>
                <div className="flex items-center mb-4">
                    <Package className="h-6 w-6 text-thrift-600 mr-2" />
                    <h2 className="text-2xl font-semibold text-thrift-700">Packaging Guidelines</h2>
                </div>
                <Card className="overflow-hidden">
                    <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Do's</h3>
                        <ul className="space-y-2 ml-[200px]">
                            <li className="flex">
                            <span className="text-green-500 mr-2">✓</span>
                            Use clean, sturdy boxes or poly mailers
                            </li>
                            <li className="flex">
                            <span className="text-green-500 mr-2">✓</span>
                            Wrap clothing items in tissue paper
                            </li>
                            <li className="flex">
                            <span className="text-green-500 mr-2">✓</span>
                            Add padding for delicate items
                            </li>
                            <li className="flex">
                            <span className="text-green-500 mr-2">✓</span>
                            Include a thank you note
                            </li>
                            <li className="flex">
                            <span className="text-green-500 mr-2">✓</span>
                            Secure package with strong tape
                            </li>
                        </ul>
                        </div>
                        <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Don'ts</h3>
                        <ul className="space-y-2 ml-[200px]">
                            <li className="flex">
                            <span className="text-red-500 mr-2">✗</span>
                            Use damaged boxes or worn packaging
                            </li>
                            <li className="flex">
                            <span className="text-red-500 mr-2">✗</span>
                            Ship unwashed clothing
                            </li>
                            <li className="flex">
                            <span className="text-red-500 mr-2">✗</span>
                            Underpay for shipping weight
                            </li>
                            <li className="flex">
                            <span className="text-red-500 mr-2">✗</span>
                            Forget to secure all openings
                            </li>
                            <li className="flex">
                            <span className="text-red-500 mr-2">✗</span>
                            Use excessive packaging
                            </li>
                        </ul>
                        </div>
                    </div>
                    </CardContent>
                </Card>
                </section>
                <div className='flex justify-center gap-10 align-middle'>
                <section>
                <div className="flex items-center mb-4">
                    <Truck className="h-6 w-6 text-thrift-600 mr-2" />
                    <h2 className="text-2xl font-semibold text-thrift-700">Shipping Options</h2>
                </div>
                <Card>
                    <CardContent className="p-6">
                    <div className="space-y-6">
                        <div 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 bg-thrift-50 rounded-lg border border-thrift-100"
                        >
                        <h3 className="font-semibold text-lg mb-2">Standard Shipping</h3>
                        <p className="text-gray-600">
                            3-5 business days delivery time. Best for most items under 1kg.
                        </p>
                        <div className="mt-3 font-medium">From ₹80 - ₹200</div>
                        </div>
                        
                        <div 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 bg-yellow-100 rounded-lg border border-accent1-DEFAULT"
                        >
                        <h3 className="font-semibold text-lg mb-2">Express Shipping</h3>
                        <p className="text-gray-600">
                            1-2 business days delivery time. For urgent deliveries.
                        </p>
                        <div className="mt-3 font-medium">From ₹150 - ₹350</div>
                        </div>
                        
                        <div 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                        >
                        <h3 className="font-semibold text-lg mb-2">Bulk Shipping</h3>
                        <p className="text-gray-600">
                            For store owners shipping multiple items. Special rates available.
                        </p>
                        <div className="mt-3 font-medium">Contact for pricing</div>
                        </div>
                    </div>
                    </CardContent>
                </Card>
                </section>
                
                <section>
                <div className="flex items-center mb-4">
                    <MapPin className="h-6 w-6 text-thrift-600 mr-2" />
                    <h2 className="text-2xl font-semibold text-thrift-700">Shipping Zones</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden border">
                    <thead className="bg-thrift-100">
                        <tr>
                        <th className="py-3 px-4 text-left">Zone</th>
                        <th className="py-3 px-4 text-left">Areas</th>
                        <th className="py-3 px-4 text-left">Standard Time</th>
                        <th className="py-3 px-4 text-left">Express Time</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4">Zone A</td>
                        <td className="py-3 px-4">Metro Cities (Delhi, Mumbai, Bangalore, Chennai)</td>
                        <td className="py-3 px-4">2-3 days</td>
                        <td className="py-3 px-4">1 day</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4">Zone B</td>
                        <td className="py-3 px-4">Other Major Cities</td>
                        <td className="py-3 px-4">3-4 days</td>
                        <td className="py-3 px-4">1-2 days</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4">Zone C</td>
                        <td className="py-3 px-4">Tier 2 Cities</td>
                        <td className="py-3 px-4">4-5 days</td>
                        <td className="py-3 px-4">2 days</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4">Zone D</td>
                        <td className="py-3 px-4">Remote Areas</td>
                        <td className="py-3 px-4">5-7 days</td>
                        <td className="py-3 px-4">2-3 days</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </section>
                </div>
                
                <section>
                <div className="flex items-center mb-4">
                    <Info className="h-6 w-6 text-thrift-600 mr-2" />
                    <h2 className="text-2xl font-semibold text-thrift-700">Frequently Asked Questions</h2>
                </div>
                <Card>
                    <CardContent className="p-6 space-y-4">
                    <div>
                        <h3 className="font-medium text-lg mb-1">When should I ship my item?</h3>
                        <p className="text-gray-600">
                        Ship your item within 2 business days of receiving payment to maintain good seller ratings.
                        </p>
                    </div>
                    <Separator />
                    <div>
                        <h3 className="font-medium text-lg mb-1">How do I print a shipping label?</h3>
                        <p className="text-gray-600">
                        Go to your seller dashboard, select the order, and click "Print Shipping Label". You can use standard A4 paper.
                        </p>
                    </div>
                    <Separator />
                    <div>
                        <h3 className="font-medium text-lg mb-1">What if my package is lost?</h3>
                        <p className="text-gray-600">
                        All shipments come with basic insurance. Report lost packages in your seller dashboard within 7 days of shipping.
                        </p>
                    </div>
                    <Separator />
                    <div>
                        <h3 className="font-medium text-lg mb-1">Can I ship internationally?</h3>
                        <p className="text-gray-600">
                        Currently, ThriftFinds supports domestic shipping within India only. International shipping will be available soon.
                        </p>
                    </div>
                    </CardContent>
                </Card>
                </section>
            </div>
            
            <div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="mt-12 bg-thrift-600 text-rose-900 p-6 rounded-lg text-center"
            >
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <h2 className="text-xl font-bold mb-2">Need More Help?</h2>
                <p className="mb-4">
                Our support team is available Monday to Friday, 9am to 6pm IST to assist you with shipping questions.
                </p>
                <div className="font-medium">
                Contact: support@Lentit.com | +91-1234567890
                </div>
            </div>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default ShippingGuidePage;
