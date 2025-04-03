import React from 'react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

interface LogoProps {
  className?: string;
  isSmall?: boolean;
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
      "relative flex items-center justify-center text-white font-bold transition-all duration-500 cursor-pointer",
      isSmall ? "text-2xl text-rose-900" : "text-6xl md:text-7xl lg:text-8xl mr-2",
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