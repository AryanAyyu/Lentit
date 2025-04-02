
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  isSmall?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, isSmall = false }) => {
  return (
    <div className={cn(
      "relative flex items-center justify-center text-white font-bold transition-all duration-500",
      isSmall ? "text-2xl text-rose-900" : "text-6xl md:text-7xl lg:text-8xl mr-2",
      className
    )}>
      <span className=''>Lent-It</span>
    </div>
  );
};

export default Logo;
