import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { cn } from '@/lib/utils';

const ScrollEffect: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollThreshold = 100; // When to start transitioning the logo

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrollPosition > scrollThreshold;

  

  return (
    <div 
      className={cn(
        "fixed z-50 transition-all duration-500 ease-in-out ml-10 mt-2 ",
        isScrolled 
          ? "top-0 left-1/2 -translate-x-1/2 w-auto h-14 flex items-center justify-center opacity-100 scale-90 backdrop-blur-md"
          : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-75 scale-110 "
      )}
      style={{
        transition: 'all 0.5s ease-in-out',
      }}
    >
      <Logo isSmall={isScrolled} />
    </div>
  );
};

export default ScrollEffect;