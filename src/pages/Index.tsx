import { useEffect, useRef } from "react";
import { useState } from "react";
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
    hoverImageUrl: "https://images.unsplash.com/photo-1582615549805-3da9e5964772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=766&q=80"
  },
  {
    id: 3,
    name: "Classic Cashmere Sweater",
    price: 149.99,
    imageUrl: "https://images.unsplash.com/photo-1580331451062-99ff132a704c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 4,
    name: "Tailored Wool Blazer",
    price: 199.99,
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1612462841054-ff818e1d3995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
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
    imageUrl: "https://images.unsplash.com/photo-1638290109243-597e5b8c838a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1601370552761-6eb9c9928f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
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

  const [visibleCount, setVisibleCount] = useState(4);
  const isExpanded = visibleCount >= products.length;

  const toggleProducts = () => {
    setVisibleCount(isExpanded ? 4 : products.length);
  };

  
  const itemsRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(false);

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
      <Navbar visible={showNavbar} />
    {/* <> */}
    
    <div className="min-h-screen">
      <Navbar visible={showNavbar} />  
      <TopImage/>
      <ScrollEffect />
      <Hero />
      <Features />
      <HomePage/>
      <Categories />
      <AppDownload />
      <DealOfTheDay />
      <NewArrivals />
      <HowItWorks />
      <HotDeals />
      <CustomerReviews />
      <WhyRent />
      

      {/* Featured Products */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-4 text-rose-900">Featured Products</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
            Discover our curated selection of premium products, crafted with exceptional quality and timeless design.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, visibleCount).map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
          </div>
          {products.length > 4 && (
            <div className="text-center mt-12">
              <button
                onClick={toggleProducts}
                className="bg-[#F4E3B2] text-[#74070E] px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-md active:transform active:scale-95"
              >
                {isExpanded ? "View Less" : "View All Products"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer - No Newsletter section */}
      <footer className="bg-[#74070E] text-[#F4E3B2] py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Lent-It</h3>
              <p className="text-white/80 mb-4">
                Premium fashion rental for the discerning individual.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Men</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Women</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Costumes</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Size Guide</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>© {new Date().getFullYear()} Lent-It. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Index;
