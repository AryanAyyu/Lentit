
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  hoverImageUrl?: string;
  index: number;
}

const ProductCard = ({ id, name, price, imageUrl, hoverImageUrl, index }: ProductCardProps) => {
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
      className={`reveal-on-scroll product-card bg-white shadow-md`}
      style={{ transitionDelay: `₹{index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <Link to={`/product/₹{id}`} className="block overflow-hidden relative aspect-[3/4]">
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlist(!isWishlist);
            }}
            className="bg-white/80 backdrop-blur-sm hover:bg-white p-2 rounded-full transition-all duration-300"
          >
            <Heart
              size={20}
              className={isWishlist ? "fill-vanilla text-vanilla" : "text-foreground"}
            />
          </button>
        </div>
        <img
          src={isHovered && hoverImageUrl ? hoverImageUrl : imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
        />
        <div className="absolute left-0 right-0 bottom-0 py-4 px-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button className="w-full bg-white text-slate-800 py-2 rounded-lg font-medium text-sm">
            Quick View
          </button>
        </div>
      </Link>
      <div className="p-4">
        <h3 className="font-medium text-stone-900 mb-1 line-clamp-1">{name}</h3>
        <p className="text-rose-900 font-medium">₹{price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
