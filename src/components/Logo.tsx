import React from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface LogoProps {
  className?: string;
  isSmall?: boolean;
  forceShow?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className,
  isSmall = false,
  forceShow = false,
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isThriftPage = location.pathname.startsWith("/thrift");

  const handleClick = () => {
    if (isHomePage || isThriftPage) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const logoText = isThriftPage ? "Lent-It" : "Lent-It";
  const logoLink = isThriftPage ? "/thrift" : "/";

  return (
    <div
      className={cn(
        "relative flex items-center whitespace-nowrap font-bold transition-all duration-500 cursor-pointer",
        isSmall
          ? "text-3xl text-[#74070E] ml-8"
          : "text-6xl md:text-7xl lg:text-5xl text-white",
        className
      )}
    >
      <Link
        to={logoLink}
        onClick={handleClick}
        className="hover:opacity-90 transition-opacity"
      >
        <span>{logoText}</span>
      </Link>
    </div>
  );
};

export default Logo;