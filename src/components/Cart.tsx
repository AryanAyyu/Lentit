
import { useState } from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
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

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeFromCart, updateQuantity, clearCart, itemCount, total } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="relative p-2">
          <ShoppingBag size={20} />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-vanilla text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="mb-5">
          <SheetTitle className="text-xl font-semibold">Your Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        
        {itemCount === 0 ? (
          <div className="flex flex-col items-center justify-center flex-1 p-6 text-center">
            <ShoppingBag size={64} className="text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
            <p className="text-muted-foreground mb-6">Looks like you haven't added any items to your cart yet.</p>
            <Button onClick={() => setIsOpen(false)} asChild>
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-auto pr-2">
              <div className="space-y-4">
                {items.map((item) => {
                  const rentalFee = item.price * item.rentalDays * item.quantity;
                  const securityFee = item.securityDeposit * item.quantity;
                  const itemTotal = rentalFee + securityFee;
                  
                  return (
                    <div key={`${item.id}-${item.size}-${item.startDate.toString()}`} className="flex gap-4 py-4 border-b">
                      <div className="h-24 w-20 bg-muted rounded-md overflow-hidden flex-shrink-0">
                        <img src={item.imageUrl} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)} 
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <X size={18} />
                          </button>
                        </div>
                        
                        <div className="text-sm text-muted-foreground mt-1">
                          <p>Size: {item.size} • Color: {item.color}</p>
                          <p className="mt-1">
                            Rental period: {format(item.startDate, 'MMM dd')} - {format(item.endDate, 'MMM dd')} ({item.rentalDays} days)
                          </p>
                        </div>
                        
                        <div className="flex justify-between items-end mt-2">
                          <div className="flex border rounded-md">
                            <button 
                              className="px-2 py-1 border-r"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span className="px-3 py-1">{item.quantity}</span>
                            <button 
                              className="px-2 py-1 border-l"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          
                          <div className="text-right">
                            <p className="font-medium">₹{itemTotal.toFixed(2)}</p>
                            <p className="text-xs text-muted-foreground">
                              Rental: ₹{rentalFee.toFixed(2)} + Deposit: ₹{securityFee.toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="border-t mt-auto pt-4">
              <div className="flex justify-between py-2">
                <span>Subtotal</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-4">Shipping and taxes calculated at checkout</p>
              
              <div className="space-y-3">
                <Button asChild className="w-full bg-coffee hover:bg-coffee/90">
                  <Link to="/checkout" onClick={() => setIsOpen(false)}>
                    Checkout
                  </Link>
                </Button>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Continue Shopping
                  </Button>
                  <Button 
                    variant="outline"
                    size="icon"
                    onClick={clearCart}
                    className="text-muted-foreground"
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
