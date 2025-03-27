
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { toast } from "sonner";

type WishlistItem = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

interface WishlistContextType {
  items: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
  clearWishlist: () => void;
  itemCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<WishlistItem[]>([]);

  const addToWishlist = (item: WishlistItem) => {
    setItems(prevItems => {
      if (prevItems.some(i => i.id === item.id)) {
        toast.info(`"${item.name}" is already in your wishlist`);
        return prevItems;
      } else {
        toast.success(`Added "${item.name}" to wishlist`);
        return [...prevItems, item];
      }
    });
  };

  const removeFromWishlist = (id: number) => {
    setItems(prevItems => {
      const item = prevItems.find(i => i.id === id);
      const updatedItems = prevItems.filter(item => item.id !== id);
      if (item) {
        toast.success(`Removed "${item.name}" from wishlist`);
      }
      return updatedItems;
    });
  };

  const isInWishlist = (id: number) => {
    return items.some(item => item.id === id);
  };

  const clearWishlist = () => {
    setItems([]);
    toast.success("Wishlist cleared");
  };

  const itemCount = items.length;

  const value = {
    items,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
    itemCount
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
