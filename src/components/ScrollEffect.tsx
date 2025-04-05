import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const ScrollEffect: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      // Use smaller threshold for mobile (50px) vs desktop (100px)
      const threshold = isMobile ? 50 : 100;
      setIsScrolled(window.scrollY > threshold);
    };

    // Add passive scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]); // Re-run effect when isMobile changes

  return (
    <div 
      className={cn(
        "fixed z-50 transition-all duration-500 ease-in-out",
        "transform", // Ensure transform properties work
        isMobile ? "ml-0" : "ml-10", // Adjust horizontal positioning
        isScrolled
          ? cn(
              "top-0 left-1/2 -translate-x-1/2",
              "flex items-center justify-center",
              "opacity-100 ml-10",
              isMobile 
                ? "h-12 scale-75 mt-1" // Mobile scrolled style
                : "h-14 scale-90 mt-2" // Desktop scrolled style
            )
          : cn(
              "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              "opacity-90",
              isMobile 
                ? "scale-100" // Mobile initial style
                : "scale-110" // Desktop initial style
            )
      )}
    >
      <Logo 
        isSmall={isScrolled} 
        className={isMobile ? (isScrolled ? "w-12" : "w-20") : (isScrolled ? "w-28" : "w-32")}
      />
    </div>
  );
};

export default ScrollEffect;