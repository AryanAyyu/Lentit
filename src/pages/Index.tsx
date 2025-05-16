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

const Index = () => {
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
      setShowNavbar(window.scrollY > 150);
    };

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
        <Navbar 
            // onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            // showNavbar={showNavbar}
        />
      
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
        <Categories />
        <DealOfTheDay />
        <Features />
        <NewArrivals />
        <WhyRent />
        <HowItWorks />
        <HotDeals />
        <CustomerReviews />
        
        {/* Featured Products */}
        {/* Featured Products - Horizontal Scroll */}
        <section className="py-2 px-1 md:px-2 lg:px-4 bg-white">
          <div className="mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-rose-900 mb-3">Featured Products</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our curated selection of premium products, crafted with exceptional quality and timeless design.
              </p>
            </div>

            <div className="relative group">
              {/* Left scroll indicator (fades in when scrollable) */}
              <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Product scroll container */}
              <div 
                className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide gap-1 sm:gap-4"
                style={{
                  scrollSnapType: 'x mandatory',
                  scrollPadding: '0 1rem'
                }}
              >
                {products.map((product) => (
                  <div 
                    key={product.id}
                    className="flex-shrink-0 w-60 sm:w-80 snap-start"
                  >
                    <ProductCard 
                      {...product}
                      className="h-full"
                    />
                  </div>
                ))}
              </div>
              
              {/* Right scroll indicator (always visible if scrollable) */}
              <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l z-10 pointer-events-none" />
            </div>
          </div>
        </section>
        
        <AppDownload />

        <Footer/>
      </div>
    </div>
  );
};

export default Index;