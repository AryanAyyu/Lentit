import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  imageUrl: string;
  hoverImageUrl?: string;
  index: number;
  categoryName?: string; // New prop for category name
}

const CategoryCard = ({ 
  id, 
  name, 
  imageUrl, 
  hoverImageUrl, 
  index, 
  categoryName 
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`reveal-on-scroll category-card bg-white shadow-md w-[170px] sm:w-[270px] h-[310px] sm:h-[450px]`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full flex flex-col">
        

        {/* Product image */}
        <div className="flex-1 overflow-hidden">
          <img
            src={isHovered && hoverImageUrl ? hoverImageUrl : imageUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>

        {/* Quick view overlay */}
        <div className="absolute left-0 right-0 bottom-0 py-4 px-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button className="w-full bg-white text-slate-800 py-2 rounded-lg font-medium text-sm">
            Quick View
          </button>
        </div>

        {/* Product info */}
        <div className="p-4">
          {categoryName && (
            <p className="text-xs text-gray-500 mb-1 uppercase tracking-wider">
              {categoryName}
            </p>
          )}
          <h3 className="font-medium text-stone-900 line-clamp-1">{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;