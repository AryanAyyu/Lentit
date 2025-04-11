import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import WhyRent from "@/components/WhyRent";
import DealOfTheDay from "@/components/DealOfTheDay";
import NewArrivals from "@/components/NewArrivals";
import HowItWorks from "@/components/HowItWorks";
import HotDeals from "@/components/HotDeals";
import CustomerReviews from "@/components/CustomerReviews";
import AppDownload from "@/components/AppDownload";
import ProductCard from "@/components/ProductCard";
import ScrollEffect from "@/components/ScrollEffect";
import TopImage from "@/components/TopImage";
import HomePage from "@/components/DownloadModal";
import MobileMenu from "@/components/MobileMenu";
import Footer from "@/components/Footer";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ArrowRight, ShoppingBag, Users, Tag, IndianRupee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { thriftStores, featuredProducts } from '@/data/mockData';

// Mock products data
const products = [
  {
    id: 1,
    name: "Elegant Silk Blouse",
    price: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 2,
    name: "Premium Denim Jeans",
    price: 99.99,
    imageUrl: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1685435690165-97ba05cb8c1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UHJlbWl1bSUyMERlbmltJTIwSmVhbnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    name: "Classic Cashmere Sweater",
    price: 149.99,
    imageUrl: "https://images.unsplash.com/photo-1631541911232-72bc7448820a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D%3D&auto=format&fit=crop&w=500&q=60",
    hoverImageUrl: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 4,
    name: "Tailored Wool Blazer",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1715408153725-186c6c77fb45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGFpbG9yZWQlMjBXb29sJTIwQmxhemVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 5,
    name: "Designer Leather Handbag",
    price: 249.99,
    imageUrl: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=757&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
  },
  {
    id: 6,
    name: "Italian Leather Shoes",
    price: 179.99,
    imageUrl: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80"
  },
  {
    id: 7,
    name: "Luxury Cashmere Scarf",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1609803384069-19f3e5a70e75?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1609803384370-0e73ef8d424f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 8,
    name: "Designer Sunglasses",
    price: 159.99,
    imageUrl: "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
  }
];

const Thrift = () => {
  const partneredStores = thriftStores.filter(store => store.isVerified).slice(0, 4);
  const initialFeaturedProducts = featuredProducts.slice(0, 5);
  const [showAllProducts, setShowAllProducts] = useState(false);
  
  const displayedProducts = showAllProducts ? featuredProducts.slice(0, 10) : initialFeaturedProducts;

  // Product visibility state
  const [visibleCount, setVisibleCount] = useState(4);
  const isExpanded = visibleCount >= products.length;

  // Scroll and navbar states
  const itemsRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(false);

  // Mobile menu and search states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("New York");
  const [wishlistItemCount] = useState(3);
  const [unreadCount] = useState(2);

  // Categories and locations data
  const locations = ["Delhi", "Mumbai", "Kanpur", "Lucknow", "Kolkata"];
  
  const leftCategories = [
    {
      title: "Women",
      submenu: ["Dresses", "Tops", "Bottoms", "Outerwear", "Accessories"]
    },
    {
      title: "Men",
      submenu: ["Shirts", "Pants", "Suits", "Outerwear", "Accessories"]
    }
  ];
  
  const rightCategories = [
    {
      title: "Occasions",
      submenu: ["Wedding", "Party", "Formal", "Casual", "Costume"]
    },
    {
      title: "Services",
      submenu: ["How It Works", "Pricing", "Membership", "Delivery", "FAQ"]
    }
  ];

  // Toggle product visibility
  const toggleProducts = () => {
    setVisibleCount(isExpanded ? 4 : products.length);
  };

  // Scroll effect and intersection observer
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 100);
    };

    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".reveal-on-scroll");
    hiddenElements.forEach((el) => observer.observe(el));

    window.addEventListener("scroll", handleScroll);

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navbar with mobile menu toggle */}
        <Navbar />
        
      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        setIsSearchOpen={setIsSearchOpen}
        locations={locations}
        leftCategories={leftCategories}
        rightCategories={rightCategories}
        wishlistItemCount={wishlistItemCount}
        unreadCount={unreadCount}
      />

      {/* Search Modal (you'll need to create this component) */}
      {/* {isSearchOpen && (
        <SearchModal onClose={() => setIsSearchOpen(false)} />
      )} */}

      {/* Main Content */}
      <div className="overflow-x-hidden">
        <TopImage/>
        
        <ScrollEffect />
        {/* <Hero /> */}
        <HomePage/>

        {/* Category Section */}
        <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-thrift-800">
            How Would You Like to Shop?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Buy from Individuals */}
            <Link to="/thrift/individual-products" className="block">
              <div className="category-card-thrift bg-gradient-to-br from-thrift-50 to-thrift-100 border border-thrift-200 hover:border-thrift-300">
                <Users size={48} className="text-thrift-600" />
                <h3 className="text-xl font-bold text-thrift-800">Buy from Individuals</h3>
                <p className="text-thrift-600 mb-4">
                  Browse unique pre-loved items sold directly by people like you.
                </p>
                <Button variant="secondary" className="mt-auto">
                  Browse Items <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Link>

            {/* Shop Thrift Stores */}
            <Link to="/thrift/thrift-stores" className="block">
              <div className="category-card-thrift bg-gradient-to-br from-accent1-light to-accent1 border border-accent1 hover:border-accent1-dark">
                <ShoppingBag size={48} className="text-accent1-dark" />
                <h3 className="text-xl font-bold text-thrift-800">Shop Thrift Stores</h3>
                <p className="text-thrift-600 mb-4">
                  Discover curated collections from established thrift stores.
                </p>
                <Button variant="secondary" className="mt-auto">
                  Find Stores <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Link>

            {/* Sell Your Own */}
            <Link to="/thrift/sell" className="block">
              <div className="category-card-thrift bg-gradient-to-br from-accent2-light to-accent2 border border-accent2 hover:border-accent2-dark">
                <Tag size={48} className="text-white" />
                <h3 className="text-xl font-bold text-thrift-800">Sell Your Own</h3>
                <p className="text-thrift-600 mb-4">
                  List your pre-loved clothing and accessories for others to discover.
                </p>
                <Button variant="secondary" className="mt-auto">
                  Start Selling <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
        </section>

        {/* Partnered Thrift Stores Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-thrift-800">
              Partnered Thrift Stores
            </h2>
            <Link to="/thrift/thrift-stores">
              <Button variant="outline" className="border-thrift-500 text-thrift-600">
                View All Stores
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partneredStores.map((store) => (
              <Link to={`/thrift/thrift-stores/${store.id}`} key={store.id}>
                <Card className="h-full store-card-thrift hover:border-thrift-300">
                  <div className="h-48 bg-gray-200 relative">
                    <img 
                      src={store.image} 
                      alt={store.name} 
                      className="w-full h-full object-cover"
                    />
                    {store.isVerified && (
                      <Badge className="absolute top-2 right-2 bg-thrift-600 text-white flex items-center gap-1">
                        <CheckCircle2 className="h-3 w-3" /> Verified
                      </Badge>
                    )}
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-bold text-lg mb-1">{store.name}</h3>
                    <p className="text-gray-500 text-sm mb-2">{store.location}</p>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(store.rating) ? "text-yellow-400" : "text-gray-300"}>★</span>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">{store.rating.toFixed(1)}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-thrift-800">
            Featured Products
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {displayedProducts.map((product) => (
              <Link to={`/thrift/productthrift/${product.id}`} key={product.id}>
                <Card className="product-card-thrift overflow-hidden">
                  <div className="h-56 bg-gray-200 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-base mb-1 truncate">{product.name}</h3>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-bold text-thrift-700 flex items-center">
                        <IndianRupee className="h-3.5 w-3.5 mr-0.5" /> {product.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-500">{product.size}</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">Seller: {product.seller}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            {!showAllProducts ? (
              <Button 
                className="bg-teal-600 hover:bg-teal-700 text-white"
                onClick={() => setShowAllProducts(true)}
              >
                View More Products
              </Button>
            ) : (
              <Link to="/thrift/individual-products">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                  View All Products
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
        
        <AppDownload />

        <Footer/>
      </div>
    </div>
  );
};

export default Thrift;