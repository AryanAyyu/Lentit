import { Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/contexts/WishlistContext";

interface WishlistButtonProps {
  className?: string;
  iconSize?: number;
  showCount?: boolean;
}

export const WishlistButton = ({ 
  className = "", 
  iconSize = 20,
  showCount = true 
}: WishlistButtonProps) => {
  const { itemCount } = useWishlist();
  
  return (
    <Button 
      variant="ghost" 
      className={`relative p-2 hover:bg-rose-50/50 transition-colors ${className}`}
      aria-label="Wishlist"
    >
      <Heart size={iconSize} className="text-current" />
      {showCount && itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#74070E] text-[#F4E3B2] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Button>
  );
};