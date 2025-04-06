import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';

const ScrollEffect: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const threshold = isMobile ? 50 : 100;
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, isHomePage]);

  if (!isHomePage) return null;

  return (
    <div 
      className={cn(
        "fixed z-40 transition-all duration-500 ease-in-out",
        "transform",
        isMobile ? "ml-0" : "ml-10",
        isScrolled
          ? cn(
              "top-0 left-1/2 -translate-x-1/2",
              "flex items-center justify-center",
              "opacity-100",
              isMobile 
                ? "h-12 scale-75 mt-1" 
                : "h-14 scale-90 mt-2"
            )
          : cn(
              "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              "opacity-90",
              isMobile 
                ? "scale-100" 
                : "scale-110"
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