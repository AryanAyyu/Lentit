
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slideData = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
    title: "Elegant Collection",
    subtitle: "Discover timeless pieces crafted with precision"
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Summer Essentials",
    subtitle: "Light fabrics for your perfect summer style"
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    title: "Premium Accessories",
    subtitle: "Complete your look with our curated selection"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="relative w-full h-screen overflow-hidden mt-0">
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
                backgroundImage: `url(${slide.imageUrl})`,
                filter: "brightness(0.85)" 
              }}
            />
            <div className="absolute inset-0 bg-black opacity-30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  {slide.subtitle}
                </p>
                <button className="bg-teal-900 hover:bg-teal-500 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 animate-fade-in hover:shadow-lg" style={{ animationDelay: "0.4s" }}>
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slideData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
