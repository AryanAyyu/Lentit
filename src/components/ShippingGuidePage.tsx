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
      <div className="pt-10 lg:pt-[100px] pb-8 px-4 sm:px-6 bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold text-thrift-800 mb-3 sm:mb-4">
                Shipping Guide
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                Everything you need to know about shipping on ThriftFinds
              </p>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <section>
                <div className="flex items-center mb-3 sm:mb-4">
                  <Package className="h-5 w-5 sm:h-6 sm:w-6 text-thrift-600 mr-2" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-thrift-700">Packaging Guidelines</h2>
                </div>
                <Card className="overflow-hidden">
                  <CardContent className="p-4 sm:p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="font-semibold text-base sm:text-lg">Do's</h3>
                        <ul className="space-y-2 ml-0 sm:ml-4">
                          <li className="flex">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Use clean, sturdy boxes or poly mailers</span>
                          </li>
                          <li className="flex">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Wrap clothing items in tissue paper</span>
                          </li>
                          <li className="flex">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Add padding for delicate items</span>
                          </li>
                          <li className="flex">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Include a thank you note</span>
                          </li>
                          <li className="flex">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>Secure package with strong tape</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="font-semibold text-base sm:text-lg">Don'ts</h3>
                        <ul className="space-y-2 ml-0 sm:ml-4">
                          <li className="flex">
                            <span className="text-red-500 mr-2">✗</span>
                            <span>Use damaged boxes or worn packaging</span>
                          </li>
                          <li className="flex">
                            <span className="text-red-500 mr-2">✗</span>
                            <span>Ship unwashed clothing</span>
                          </li>
                          <li className="flex">
                            <span className="text-red-500 mr-2">✗</span>
                            <span>Underpay for shipping weight</span>
                          </li>
                          <li className="flex">
                            <span className="text-red-500 mr-2">✗</span>
                            <span>Forget to secure all openings</span>
                          </li>
                          <li className="flex">
                            <span className="text-red-500 mr-2">✗</span>
                            <span>Use excessive packaging</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
                <section className="flex-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-thrift-600 mr-2" />
                    <h2 className="text-xl sm:text-2xl font-semibold text-thrift-700">Shipping Options</h2>
                  </div>
                  <Card>
                    <CardContent className="p-4 sm:p-6">
                      <div className="space-y-4 sm:space-y-6">
                        <div className="p-3 sm:p-4 bg-thrift-50 rounded-lg border border-thrift-100">
                          <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Standard Shipping</h3>
                          <p className="text-sm sm:text-base text-gray-600">
                            3-5 business days delivery time. Best for most items under 1kg.
                          </p>
                          <div className="mt-2 sm:mt-3 font-medium text-sm sm:text-base">From ₹80 - ₹200</div>
                        </div>
                        
                        <div className="p-3 sm:p-4 bg-yellow-100 rounded-lg border border-accent1-DEFAULT">
                          <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Express Shipping</h3>
                          <p className="text-sm sm:text-base text-gray-600">
                            1-2 business days delivery time. For urgent deliveries.
                          </p>
                          <div className="mt-2 sm:mt-3 font-medium text-sm sm:text-base">From ₹150 - ₹350</div>
                        </div>
                        
                        <div className="p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Bulk Shipping</h3>
                          <p className="text-sm sm:text-base text-gray-600">
                            For store owners shipping multiple items. Special rates available.
                          </p>
                          <div className="mt-2 sm:mt-3 font-medium text-sm sm:text-base">Contact for pricing</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
                
                <section className="flex-1">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-thrift-600 mr-2" />
                    <h2 className="text-xl sm:text-2xl font-semibold text-thrift-700">Shipping Zones</h2>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden border">
                      <thead className="bg-thrift-100">
                        <tr>
                          <th className="py-2 px-3 sm:py-3 sm:px-4 text-left text-sm sm:text-base">Zone</th>
                          <th className="py-2 px-3 sm:py-3 sm:px-4 text-left text-sm sm:text-base">Areas</th>
                          <th className="py-2 px-3 sm:py-3 sm:px-4 text-left text-sm sm:text-base">Standard</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">Zone A</td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">Metro Cities</td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">2-3 days</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">Zone B</td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">Major Cities</td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">3-4 days</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">Zone C</td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">Tier 2 Cities</td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">4-5 days</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">Zone D</td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">Remote Areas</td>
                          <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">5-7 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>
              
              <section>
                <div className="flex items-center mb-3 sm:mb-4">
                  <Info className="h-5 w-5 sm:h-6 sm:w-6 text-thrift-600 mr-2" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-thrift-700">Frequently Asked Questions</h2>
                </div>
                <Card>
                  <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="font-medium text-base sm:text-lg mb-1">When should I ship my item?</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Ship your item within 2 business days of receiving payment to maintain good seller ratings.
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-medium text-base sm:text-lg mb-1">How do I print a shipping label?</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Go to your seller dashboard, select the order, and click "Print Shipping Label". You can use standard A4 paper.
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-medium text-base sm:text-lg mb-1">What if my package is lost?</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        All shipments come with basic insurance. Report lost packages in your seller dashboard within 7 days of shipping.
                      </p>
                    </div>
                    <Separator />
                    <div>
                      <h3 className="font-medium text-base sm:text-lg mb-1">Can I ship internationally?</h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        Currently, ThriftFinds supports domestic shipping within India only. International shipping will be available soon.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
            
            <div className="mt-8 sm:mt-12 bg-thrift-600 text-rose-900 p-4 sm:p-6 rounded-lg text-center">
              <Clock className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2" />
              <h2 className="text-lg sm:text-xl font-bold mb-2">Need More Help?</h2>
              <p className="text-sm sm:text-base mb-3 sm:mb-4">
                Our support team is available Monday to Friday, 9am to 6pm IST to assist you with shipping questions.
              </p>
              <div className="font-medium text-sm sm:text-base">
                Contact: support@Lentit.in | +91-1234567890
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