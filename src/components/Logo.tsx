// Logo.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

// Define the props interface explicitly
interface LogoProps {
  className?: string;
  isSmall?: boolean;
  children?: React.ReactNode; // Optional children prop
}

const Logo: React.FC<LogoProps> = ({ className, isSmall = false }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleClick = () => {
    if (isHomePage) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={cn(
      "relative flex items-center whitespace-nowrap text-white font-bold transition-all duration-500 cursor-pointer  sm:ml-20 mr-6 mt-2",
      isSmall ? "text-4xl text-rose-900" : "text-6xl md:text-7xl lg:text-8xl mr-2",
      className
    )}>
      <Link 
        to="/" 
        onClick={handleClick}
        className="hover:opacity-90 transition-opacity"
      >
        <span className=''>Lent-It</span>
      </Link>
    </div>
  );
};

export default Logo;