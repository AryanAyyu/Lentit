
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { AlertCircle, HelpCircle, Ruler, UserCheck } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import Navbar from './Navbar';
import Footer from './Footer';

const SizeGuidePage = () => {
  const [gender, setGender] = useState<'women' | 'men' | 'kids'>('women');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const tableVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const pulse = {
    scale: [1, 1.02, 1],
    transition: { 
      duration: 2, 
      ease: "easeInOut", 
      times: [0, 0.5, 1],
      repeat: Infinity
    }
  };

  return (
    <>
    <div className="min-h-screen">
      <Navbar/>
      <div className="pt-10 lg:pt-[100px] pb-8 px-6 bg-muted ">
      <div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-12"
      >
        <div variants={itemVariants} className="max-w-4xl mx-auto text-center mb-12">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-thrift-800 relative inline-block"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Size Guide
            <div
              className="absolute bottom-0 left-0 h-1 bg-accent1-DEFAULT"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            />
          </h1>
          <p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find your perfect fit with our comprehensive size charts. Properly measured clothing ensures comfort and helps reduce returns.
          </p>
        </div>

        <div variants={itemVariants} className="mb-10">
          <div className="bg-thrift-50 p-6 rounded-lg border border-thrift-200">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="p-3 bg-thrift-100 rounded-full">
                <Ruler className="h-6 w-6 text-thrift-700" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-thrift-800 mb-2">How to Measure Yourself</h2>
                <p className="text-gray-600 mb-4">
                  For the most accurate measurements, use a soft measuring tape and wear lightweight clothes or measure directly on your body.
                </p>
                <button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-thrift-600 font-medium flex items-center"
                >
                  <span>Watch measurement video</span>
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div variants={itemVariants} className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-white">
              <Button
                variant={gender === 'women' ? "default" : "ghost"}
                className={`rounded-sm px-6 ${gender === 'women' ? "bg-thrift-600" : ""}`}
                onClick={() => setGender('women')}
              >
                Women
              </Button>
              <Button
                variant={gender === 'men' ? "default" : "ghost"}
                className={`rounded-sm px-6 ${gender === 'men' ? "bg-thrift-600" : ""}`}
                onClick={() => setGender('men')}
              >
                Men
              </Button>
              <Button
                variant={gender === 'kids' ? "default" : "ghost"}
                className={`rounded-sm px-6 ${gender === 'kids' ? "bg-thrift-600" : ""}`}
                onClick={() => setGender('kids')}
              >
                Kids
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="tops" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="tops">Tops</TabsTrigger>
                <TabsTrigger value="bottoms">Bottoms</TabsTrigger>
                <TabsTrigger value="dresses">Dresses</TabsTrigger>
                <TabsTrigger value="footwear">Footwear</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="tops">
              <div 
                variants={tableVariants}
                initial="hidden"
                animate="visible"
                className="overflow-x-auto"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden border">
                  <table 
                    className="min-w-full divide-y divide-gray-200"
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <thead className="bg-thrift-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">Size</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">Bust (cm)</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">Waist (cm)</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">US Size</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">EU Size</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {gender === 'women' && (
                        <>
                          <tr className="hover:bg-thrift-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">XS</td>
                            <td className="px-6 py-4 whitespace-nowrap">80-84</td>
                            <td className="px-6 py-4 whitespace-nowrap">60-64</td>
                            <td className="px-6 py-4 whitespace-nowrap">0-2</td>
                            <td className="px-6 py-4 whitespace-nowrap">32-34</td>
                          </tr>
                          <tr className="hover:bg-thrift-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">S</td>
                            <td className="px-6 py-4 whitespace-nowrap">85-89</td>
                            <td className="px-6 py-4 whitespace-nowrap">65-69</td>
                            <td className="px-6 py-4 whitespace-nowrap">4-6</td>
                            <td className="px-6 py-4 whitespace-nowrap">36-38</td>
                          </tr>
                          <tr className="hover:bg-thrift-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">M</td>
                            <td className="px-6 py-4 whitespace-nowrap">90-94</td>
                            <td className="px-6 py-4 whitespace-nowrap">70-74</td>
                            <td className="px-6 py-4 whitespace-nowrap">8-10</td>
                            <td className="px-6 py-4 whitespace-nowrap">40-42</td>
                          </tr>
                          <tr className="hover:bg-thrift-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">L</td>
                            <td className="px-6 py-4 whitespace-nowrap">95-99</td>
                            <td className="px-6 py-4 whitespace-nowrap">75-79</td>
                            <td className="px-6 py-4 whitespace-nowrap">12-14</td>
                            <td className="px-6 py-4 whitespace-nowrap">44-46</td>
                          </tr>
                          <tr className="hover:bg-thrift-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">XL</td>
                            <td className="px-6 py-4 whitespace-nowrap">100-104</td>
                            <td className="px-6 py-4 whitespace-nowrap">80-84</td>
                            <td className="px-6 py-4 whitespace-nowrap">16-18</td>
                            <td className="px-6 py-4 whitespace-nowrap">48-50</td>
                          </tr>
                        </>
                      )}
                      
                      {gender === 'men' && (
                        <>
                          <tr className="hover:bg-thrift-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">XS</td>
                            <td className="px-6 py-4 whitespace-nowrap">86-91</td>
                            <td className="px-6 py-4 whitespace-nowrap">71-76</td>
                            <td className="px-6 py-4 whitespace-nowrap">32-34</td>
                            <td className="px-6 py-4 whitespace-nowrap">42-44</td>
                          </tr>
                          <tr className="hover:bg-thrift-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">S</td>
                            <td className="px-6 py-4 whitespace-nowrap">92-97</td>
                            <td className="px-6 py-4 whitespace-nowrap">77-82</td>
                            <td className="px-6 py-4 whitespace-nowrap">36-38</td>
                            <td className="px-6 py-4 whitespace-nowrap">46-48</td>
                          </tr>
                          <tr className="hover:bg-thrift-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">M</td>
                            <td className="px-6 py-4 whitespace-nowrap">98-103</td>
                            <td className="px-6 py-4 whitespace-nowrap">83-88</td>
                            <td className="px-6 py-4 whitespace-nowrap">40-42</td>
                            <td className="px-6 py-4 whitespace-nowrap">50-52</td>
                          </tr>
                          <tr className="hover:bg-thrift-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">L</td>
                            <td className="px-6 py-4 whitespace-nowrap">104-109</td>
                            <td className="px-6 py-4 whitespace-nowrap">89-94</td>
                            <td className="px-6 py-4 whitespace-nowrap">44-46</td>
                            <td className="px-6 py-4 whitespace-nowrap">54-56</td>
                          </tr>
                          <tr className="hover:bg-thrift-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">XL</td>
                            <td className="px-6 py-4 whitespace-nowrap">110-115</td>
                            <td className="px-6 py-4 whitespace-nowrap">95-100</td>
                            <td className="px-6 py-4 whitespace-nowrap">48-50</td>
                            <td className="px-6 py-4 whitespace-nowrap">58-60</td>
                          </tr>
                        </>
                      )}
                      
                      {gender === 'kids' && (
                        <>
                          <tr className="hover:bg-thrift-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">2-3Y</td>
                            <td className="px-6 py-4 whitespace-nowrap">53-55</td>
                            <td className="px-6 py-4 whitespace-nowrap">51-53</td>
                            <td className="px-6 py-4 whitespace-nowrap">2T-3T</td>
                            <td className="px-6 py-4 whitespace-nowrap">92-98</td>
                          </tr>
                          <tr className="hover:bg-thrift-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">4-5Y</td>
                            <td className="px-6 py-4 whitespace-nowrap">56-58</td>
                            <td className="px-6 py-4 whitespace-nowrap">54-56</td>
                            <td className="px-6 py-4 whitespace-nowrap">4-5</td>
                            <td className="px-6 py-4 whitespace-nowrap">104-110</td>
                          </tr>
                          <tr className="hover:bg-thrift-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">6-7Y</td>
                            <td className="px-6 py-4 whitespace-nowrap">59-61</td>
                            <td className="px-6 py-4 whitespace-nowrap">57-59</td>
                            <td className="px-6 py-4 whitespace-nowrap">6-7</td>
                            <td className="px-6 py-4 whitespace-nowrap">116-122</td>
                          </tr>
                          <tr className="hover:bg-thrift-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">8-9Y</td>
                            <td className="px-6 py-4 whitespace-nowrap">62-64</td>
                            <td className="px-6 py-4 whitespace-nowrap">60-62</td>
                            <td className="px-6 py-4 whitespace-nowrap">8-9</td>
                            <td className="px-6 py-4 whitespace-nowrap">128-134</td>
                          </tr>
                          <tr className="hover:bg-thrift-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">10-11Y</td>
                            <td className="px-6 py-4 whitespace-nowrap">65-67</td>
                            <td className="px-6 py-4 whitespace-nowrap">63-65</td>
                            <td className="px-6 py-4 whitespace-nowrap">10-11</td>
                            <td className="px-6 py-4 whitespace-nowrap">140-146</td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="bottoms">
              <div 
                variants={tableVariants}
                initial="hidden"
                animate="visible"
                className="overflow-x-auto"
              >
                {/* Similar table structure as tops but with bottoms measurements */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-thrift-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">Size</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">Waist (cm)</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">Hip (cm)</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">Inseam (cm)</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">US Size</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {gender === 'women' && (
                        <>
                          <tr className="hover:bg-thrift-50">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">XS</td>
                            <td className="px-6 py-4 whitespace-nowrap">60-64</td>
                            <td className="px-6 py-4 whitespace-nowrap">84-88</td>
                            <td className="px-6 py-4 whitespace-nowrap">76-78</td>
                            <td className="px-6 py-4 whitespace-nowrap">0-2</td>
                          </tr>
                          <tr className="hover:bg-thrift-50">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">S</td>
                            <td className="px-6 py-4 whitespace-nowrap">65-69</td>
                            <td className="px-6 py-4 whitespace-nowrap">89-93</td>
                            <td className="px-6 py-4 whitespace-nowrap">78-80</td>
                            <td className="px-6 py-4 whitespace-nowrap">4-6</td>
                          </tr>
                          <tr className="hover:bg-thrift-50">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">M</td>
                            <td className="px-6 py-4 whitespace-nowrap">70-74</td>
                            <td className="px-6 py-4 whitespace-nowrap">94-98</td>
                            <td className="px-6 py-4 whitespace-nowrap">80-82</td>
                            <td className="px-6 py-4 whitespace-nowrap">8-10</td>
                          </tr>
                          <tr className="hover:bg-thrift-50">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">L</td>
                            <td className="px-6 py-4 whitespace-nowrap">75-79</td>
                            <td className="px-6 py-4 whitespace-nowrap">99-103</td>
                            <td className="px-6 py-4 whitespace-nowrap">82-84</td>
                            <td className="px-6 py-4 whitespace-nowrap">12-14</td>
                          </tr>
                        </>
                      )}
                      
                      {gender === 'men' && (
                        <>
                          <tr className="hover:bg-thrift-50">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">XS</td>
                            <td className="px-6 py-4 whitespace-nowrap">71-76</td>
                            <td className="px-6 py-4 whitespace-nowrap">86-91</td>
                            <td className="px-6 py-4 whitespace-nowrap">78-80</td>
                            <td className="px-6 py-4 whitespace-nowrap">28-30</td>
                          </tr>
                          <tr className="hover:bg-thrift-50">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">S</td>
                            <td className="px-6 py-4 whitespace-nowrap">77-82</td>
                            <td className="px-6 py-4 whitespace-nowrap">92-97</td>
                            <td className="px-6 py-4 whitespace-nowrap">80-82</td>
                            <td className="px-6 py-4 whitespace-nowrap">31-32</td>
                          </tr>
                          <tr className="hover:bg-thrift-50">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">M</td>
                            <td className="px-6 py-4 whitespace-nowrap">83-88</td>
                            <td className="px-6 py-4 whitespace-nowrap">98-103</td>
                            <td className="px-6 py-4 whitespace-nowrap">82-84</td>
                            <td className="px-6 py-4 whitespace-nowrap">33-34</td>
                          </tr>
                          <tr className="hover:bg-thrift-50">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">L</td>
                            <td className="px-6 py-4 whitespace-nowrap">89-94</td>
                            <td className="px-6 py-4 whitespace-nowrap">104-109</td>
                            <td className="px-6 py-4 whitespace-nowrap">84-86</td>
                            <td className="px-6 py-4 whitespace-nowrap">36-38</td>
                          </tr>
                        </>
                      )}
                      
                      {gender === 'kids' && (
                        <>
                          <tr className="hover:bg-thrift-50">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">2-3Y</td>
                            <td className="px-6 py-4 whitespace-nowrap">51-53</td>
                            <td className="px-6 py-4 whitespace-nowrap">53-55</td>
                            <td className="px-6 py-4 whitespace-nowrap">34-38</td>
                            <td className="px-6 py-4 whitespace-nowrap">2T-3T</td>
                          </tr>
                          <tr className="hover:bg-thrift-50">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">4-5Y</td>
                            <td className="px-6 py-4 whitespace-nowrap">54-56</td>
                            <td className="px-6 py-4 whitespace-nowrap">56-58</td>
                            <td className="px-6 py-4 whitespace-nowrap">39-44</td>
                            <td className="px-6 py-4 whitespace-nowrap">4-5</td>
                          </tr>
                          <tr className="hover:bg-thrift-50">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">6-7Y</td>
                            <td className="px-6 py-4 whitespace-nowrap">57-59</td>
                            <td className="px-6 py-4 whitespace-nowrap">59-61</td>
                            <td className="px-6 py-4 whitespace-nowrap">45-51</td>
                            <td className="px-6 py-4 whitespace-nowrap">6-7</td>
                          </tr>
                          <tr className="hover:bg-thrift-50">
                            <td className="px-6 py-4 whitespace-nowrap font-medium">8-9Y</td>
                            <td className="px-6 py-4 whitespace-nowrap">60-62</td>
                            <td className="px-6 py-4 whitespace-nowrap">62-64</td>
                            <td className="px-6 py-4 whitespace-nowrap">52-58</td>
                            <td className="px-6 py-4 whitespace-nowrap">8-9</td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            {/* Dresses and Footwear tabs with similar content */}
            <TabsContent value="dresses">
              <div variants={tableVariants} initial="hidden" animate="visible" className="overflow-x-auto">
                {/* Dresses measurements table */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-thrift-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">Size</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">Bust (cm)</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">Waist (cm)</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">Hip (cm)</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">Length (cm)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-thrift-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium">XS</td>
                        <td className="px-6 py-4 whitespace-nowrap">80-84</td>
                        <td className="px-6 py-4 whitespace-nowrap">60-64</td>
                        <td className="px-6 py-4 whitespace-nowrap">86-90</td>
                        <td className="px-6 py-4 whitespace-nowrap">95-97</td>
                      </tr>
                      <tr className="hover:bg-thrift-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium">S</td>
                        <td className="px-6 py-4 whitespace-nowrap">85-89</td>
                        <td className="px-6 py-4 whitespace-nowrap">65-69</td>
                        <td className="px-6 py-4 whitespace-nowrap">91-95</td>
                        <td className="px-6 py-4 whitespace-nowrap">97-99</td>
                      </tr>
                      <tr className="hover:bg-thrift-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium">M</td>
                        <td className="px-6 py-4 whitespace-nowrap">90-94</td>
                        <td className="px-6 py-4 whitespace-nowrap">70-74</td>
                        <td className="px-6 py-4 whitespace-nowrap">96-100</td>
                        <td className="px-6 py-4 whitespace-nowrap">99-101</td>
                      </tr>
                      <tr className="hover:bg-thrift-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium">L</td>
                        <td className="px-6 py-4 whitespace-nowrap">95-99</td>
                        <td className="px-6 py-4 whitespace-nowrap">75-79</td>
                        <td className="px-6 py-4 whitespace-nowrap">101-105</td>
                        <td className="px-6 py-4 whitespace-nowrap">101-103</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="footwear">
              <div variants={tableVariants} initial="hidden" animate="visible" className="overflow-x-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-thrift-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">UK</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">EU</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">US (Women)</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">US (Men)</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-thrift-800 uppercase tracking-wider">Foot Length (cm)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-thrift-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium">3</td>
                        <td className="px-6 py-4 whitespace-nowrap">36</td>
                        <td className="px-6 py-4 whitespace-nowrap">5</td>
                        <td className="px-6 py-4 whitespace-nowrap">-</td>
                        <td className="px-6 py-4 whitespace-nowrap">22.5</td>
                      </tr>
                      <tr className="hover:bg-thrift-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium">4</td>
                        <td className="px-6 py-4 whitespace-nowrap">37</td>
                        <td className="px-6 py-4 whitespace-nowrap">6</td>
                        <td className="px-6 py-4 whitespace-nowrap">-</td>
                        <td className="px-6 py-4 whitespace-nowrap">23.5</td>
                      </tr>
                      <tr className="hover:bg-thrift-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium">5</td>
                        <td className="px-6 py-4 whitespace-nowrap">38</td>
                        <td className="px-6 py-4 whitespace-nowrap">7</td>
                        <td className="px-6 py-4 whitespace-nowrap">-</td>
                        <td className="px-6 py-4 whitespace-nowrap">24</td>
                      </tr>
                      <tr className="hover:bg-thrift-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium">6</td>
                        <td className="px-6 py-4 whitespace-nowrap">39</td>
                        <td className="px-6 py-4 whitespace-nowrap">8</td>
                        <td className="px-6 py-4 whitespace-nowrap">6.5</td>
                        <td className="px-6 py-4 whitespace-nowrap">24.5</td>
                      </tr>
                      <tr className="hover:bg-thrift-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium">7</td>
                        <td className="px-6 py-4 whitespace-nowrap">40-41</td>
                        <td className="px-6 py-4 whitespace-nowrap">9</td>
                        <td className="px-6 py-4 whitespace-nowrap">7.5</td>
                        <td className="px-6 py-4 whitespace-nowrap">25.5</td>
                      </tr>
                      <tr className="hover:bg-thrift-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium">8</td>
                        <td className="px-6 py-4 whitespace-nowrap">42</td>
                        <td className="px-6 py-4 whitespace-nowrap">10</td>
                        <td className="px-6 py-4 whitespace-nowrap">8.5</td>
                        <td className="px-6 py-4 whitespace-nowrap">26</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div variants={fadeIn} className="max-w-4xl mx-auto mt-12 mb-8">
          <Alert className="border-thrift-300 bg-thrift-50">
            <AlertCircle className="h-5 w-5 text-thrift-700" />
            <AlertTitle className="text-thrift-800">Important Note on Sizing</AlertTitle>
            <AlertDescription className="text-thrift-700">
              Vintage and pre-loved clothing may have inconsistent sizing due to different brand standards and clothing age. We recommend using measurements rather than size labels for the best fit. If you're between sizes, it's generally best to size up.
            </AlertDescription>
          </Alert>
        </div>
        
        <div 
          variants={itemVariants} 
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16"
        >
          <div whileHover={pulse} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-accent1-light rounded-full mr-3">
                <UserCheck className="h-5 w-5 text-accent1-dark" />
              </div>
              <h3 className="text-lg font-semibold">Finding Your Perfect Fit</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent1-DEFAULT mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Measure yourself using a soft measuring tape</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent1-DEFAULT mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Stand naturally when taking measurements</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent1-DEFAULT mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>For bust/chest, measure at the fullest point</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent1-DEFAULT mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Waist is measured at the narrowest point</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-accent1-DEFAULT mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Hip measurements should be at the widest point</span>
              </li>
            </ul>
          </div>
          
          <div whileHover={pulse} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-thrift-100 rounded-full mr-3">
                <HelpCircle className="h-5 w-5 text-thrift-700" />
              </div>
              <h3 className="text-lg font-semibold">Sizing FAQ</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-medium mb-1">How do I measure my inseam?</p>
                <p className="text-sm text-gray-600">Measure from the crotch seam to the bottom of the leg along the inner seam.</p>
              </div>
              <div>
                <p className="font-medium mb-1">What if I'm between sizes?</p>
                <p className="text-sm text-gray-600">We recommend sizing up for a more comfortable fit, especially with vintage items.</p>
              </div>
              <div>
                <p className="font-medium mb-1">Do vintage sizes run differently?</p>
                <p className="text-sm text-gray-600">Yes, vintage clothing often runs smaller than modern sizes. Always check measurements.</p>
              </div>
              <div>
                <p className="font-medium mb-1">How much room for stretch?</p>
                <p className="text-sm text-gray-600">Our measurements are for the garment laying flat. Stretchy materials may accommodate 1-2cm more.</p>
              </div>
            </div>
          </div>
        </div>

        <div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mb-12 max-w-lg mx-auto"
        >
          <p className="text-thrift-600 font-medium mb-4">Still have questions about sizing?</p>
          <Button className="bg-thrift-600 hover:bg-thrift-700">
            Contact Customer Support
          </Button>
        </div>
      </div>
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default SizeGuidePage;
