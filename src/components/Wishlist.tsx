import { useState } from 'react';
import { X, Heart, ShoppingBag } from 'lucide-react';
import { useWishlist } from '@/contexts/WishlistContext';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';

const Wishlist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromWishlist, itemCount, clearWishlist } = useWishlist();
  const isMobile = useIsMobile();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="relative p-2">
          <Heart size={20} />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#74070E] text-[#F4E3B2] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent 
        side={isMobile ? "bottom" : "right"} 
        className={`w-full ${isMobile ? 'h-[80vh] rounded-t-lg' : 'sm:max-w-md'} flex flex-col`}
      >
        <SheetHeader className="mb-4">
          <SheetTitle className="text-lg sm:text-xl font-semibold text-rose-900">
            Your Wishlist ({itemCount})
          </SheetTitle>
        </SheetHeader>
        
        {itemCount === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 p-4 sm:p-6 text-center">
            <Heart size={isMobile ? 48 : 64} className="text-rose-200 mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">Your wishlist is empty</h3>
            <p className="text-stone-500 text-sm sm:text-base mb-4 sm:mb-6">
              Save items you love to your wishlist and find them here anytime.
            </p>
            <Button 
              onClick={() => setIsOpen(false)} 
              className="bg-[#74070E] hover:bg-[#5a050b] text-[#F4E3B2]"
              asChild
            >
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto pr-1 sm:pr-2">
              <div className="space-y-3 sm:space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 sm:gap-4 py-3 sm:py-4 border-b">
                    <Link 
                      to={`/product/${item.id}`} 
                      className={`${isMobile ? 'h-20 w-16' : 'h-24 w-20'} bg-muted rounded-md overflow-hidden flex-shrink-0`}
                      onClick={() => setIsOpen(false)}
                    >
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </Link>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-2">
                        <Link 
                          to={`/product/${item.id}`}
                          className="font-medium text-sm sm:text-base hover:text-[#74070E] truncate"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <button 
                          onClick={() => {
                            removeFromWishlist(item.id);
                            toast.success("Removed from wishlist");
                          }}
                          className="text-stone-400 hover:text-rose-900 flex-shrink-0"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      
                      <div className="text-sm mt-1">
                        <p className="font-medium text-[#74070E]">${item.price}/day</p>
                      </div>
                      
                      <div className="mt-2 sm:mt-3">
                        <Button 
                          variant="outline" 
                          size={isMobile ? "sm" : "default"}
                          className="text-xs sm:text-sm border-[#74070E] text-[#74070E] hover:bg-[#F4E3B2]"
                          asChild
                        >
                          <Link to={`/product/${item.id}`} onClick={() => setIsOpen(false)}>
                            <ShoppingBag className="h-3.5 w-3.5 mr-1 sm:mr-2" />
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t mt-auto pt-3 sm:pt-4">
              <div className="space-y-2 sm:space-y-3">
                <Button 
                  variant="outline"
                  size={isMobile ? "sm" : "default"}
                  className="w-full border-[#74070E] text-[#74070E] hover:bg-[#F4E3B2]"
                  onClick={() => setIsOpen(false)}
                >
                  Continue Shopping
                </Button>
                <Button 
                  variant="ghost"
                  size={isMobile ? "sm" : "default"}
                  className="w-full text-stone-500 hover:text-rose-900 hover:bg-rose-50"
                  onClick={() => {
                    clearWishlist();
                    toast.success("Wishlist cleared");
                  }}
                >
                  Clear Wishlist
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Wishlist;