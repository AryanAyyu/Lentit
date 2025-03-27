
import { useState } from 'react';
import { X, Heart, ShoppingBag } from 'lucide-react';
import { useWishlist } from '@/contexts/WishlistContext';
import { useCart } from '@/contexts/CartContext';
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

const Wishlist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromWishlist, itemCount, clearWishlist } = useWishlist();
  
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="relative p-2">
          <Heart size={20} />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-vanilla text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="mb-5">
          <SheetTitle className="text-xl font-semibold">Your Wishlist ({itemCount})</SheetTitle>
        </SheetHeader>
        
        {itemCount === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 p-6 text-center">
            <Heart size={64} className="text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
            <p className="text-muted-foreground mb-6">Save items you love to your wishlist and find them here anytime.</p>
            <Button onClick={() => setIsOpen(false)} asChild>
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto pr-2">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-4 border-b">
                    <Link 
                      to={`/product/${item.id}`} 
                      className="h-24 w-20 bg-muted rounded-md overflow-hidden flex-shrink-0"
                      onClick={() => setIsOpen(false)}
                    >
                      <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover" />
                    </Link>
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <Link 
                          to={`/product/${item.id}`}
                          className="font-medium hover:text-coffee"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <button 
                          onClick={() => removeFromWishlist(item.id)} 
                          className="text-muted-foreground hover:text-foreground"
                        >
                          <X size={18} />
                        </button>
                      </div>
                      
                      <div className="text-sm mt-1">
                        <p className="font-medium text-vanilla">${item.price}/day</p>
                      </div>
                      
                      <div className="mt-3">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="text-xs"
                          asChild
                        >
                          <Link to={`/product/${item.id}`} onClick={() => setIsOpen(false)}>
                            <ShoppingBag className="h-3.5 w-3.5 mr-1" />
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t mt-auto pt-4">
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Continue Shopping
                </Button>
                <Button 
                  variant="ghost"
                  className="w-full text-muted-foreground"
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
