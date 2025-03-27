
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { toast } from "sonner";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
  rentalDays: number;
  securityDeposit: number;
};

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setItems(prevItems => {
      // Check if item already exists
      const existingItemIndex = prevItems.findIndex(i => 
        i.id === item.id && 
        i.size === item.size && 
        i.color === item.color &&
        i.startDate.getTime() === item.startDate.getTime() &&
        i.endDate.getTime() === item.endDate.getTime()
      );

      if (existingItemIndex > -1) {
        // Update quantity if item exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + item.quantity
        };
        toast.success(`Updated quantity in cart`);
        return updatedItems;
      } else {
        // Add new item
        toast.success(`Added "${item.name}" to cart`);
        return [...prevItems, item];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== id);
      toast.success("Item removed from cart");
      return updatedItems;
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast.success("Cart cleared");
  };

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  
  const total = items.reduce((sum, item) => {
    const rentalFee = item.price * item.rentalDays * item.quantity;
    return sum + rentalFee + (item.quantity * item.securityDeposit);
  }, 0);

  const value = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    itemCount,
    total
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
