import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const slideData = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
    mobileImageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Elegant Collection",
    subtitle: "Discover timeless pieces crafted with precision"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    mobileImageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Summer Essentials",
    subtitle: "Light fabrics for your perfect summer style"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    mobileImageUrl: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Premium Accessories",
    subtitle: "Complete your look with our curated selection"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slideData.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    resetTimeout();
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    resetTimeout();
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideData.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    resetTimeout();
    setCurrentSlide((prevSlide) =>
      prevSlide === slideData.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Touch event handlers for mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      goToNextSlide();
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      goToPrevSlide();
    }
  };

  return (
    <div 
      className="relative w-full h-[70vh] sm:h-screen overflow-hidden mt-0"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        ref={slidesRef}
        className="w-full h-full flex transition-transform duration-1000 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slideData.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative flex-shrink-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${isMobile ? slide.mobileImageUrl : slide.imageUrl})`,
                filter: "brightness(0.85)" 
              }}
            />
            <div className="absolute inset-0 bg-black opacity-30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 sm:p-6">
              <div className="max-w-4xl mx-auto text-center px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-md sm:max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  {slide.subtitle}
                </p>
                <button 
                  className="bg-[#74070E] text-[#F4E3B2] font-medium py-2 px-6 sm:py-3 sm:px-8 rounded-lg transition-all duration-300 animate-fade-in hover:shadow-lg text-sm sm:text-base" 
                  style={{ animationDelay: "0.4s" }}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={goToPrevSlide}
        className="hidden sm:block absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={isMobile ? 20 : 24} />
      </button>
      <button
        onClick={goToNextSlide}
        className="hidden sm:block absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-2 sm:p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={isMobile ? 20 : 24} />
      </button>

      {/* Dots - Smaller and more spaced on mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slideData.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;