import { X, ChevronDown, Search, Heart, Bell, MapPin, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Disclosure } from "@headlessui/react";
import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  setIsSearchOpen: (open: boolean) => void;
  locations: string[];
  leftCategories: { title: string; submenu: string[] }[];
  rightCategories: { title: string; submenu: string[] }[];
  wishlistItemCount: number;
  unreadCount: number;
}

const MobileMenu = ({
  isOpen,
  onClose,
  selectedLocation,
  setSelectedLocation,
  setIsSearchOpen,
  locations,
  leftCategories,
  rightCategories,
  wishlistItemCount,
  unreadCount
}: MobileMenuProps) => {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white">
      {/* Overlay that covers the entire screen */}
      <div className="absolute inset-0 bg-black/10" onClick={onClose} />
      
      {/* Menu Container */}
      <div className="relative z-[10000] h-full bg-white shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#74070E] z-[10001]"
        >
          <X size={24} />
        </button>

        {/* Menu Content */}
        <div className="h-full pt-16 pb-8 overflow-y-auto">
          <div className="container mx-auto px-4">
            {/* Location Selector */}
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="w-full justify-between mb-6">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>{selectedLocation}</span>
                  </div>
                  <ChevronDown size={16} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full z-[10002]">
                {locations.map((location) => (
                  <Button
                    key={location}
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => {
                      setSelectedLocation(location);
                      onClose();
                    }}
                  >
                    {location}
                  </Button>
                ))}
              </PopoverContent>
            </Popover>

            {/* Search */}
            <button
              onClick={() => {
                setIsSearchOpen(true);
                onClose();
              }}
              className="flex items-center w-full py-3 px-4 mb-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <Search size={20} className="mr-3 text-[#74070E]" />
              <span className="font-medium">Search Products</span>
            </button>

            {/* Categories */}
            <div className="space-y-2 mb-6">
              {[...leftCategories, ...rightCategories].map((category, index) => (
                <Disclosure key={index}>
                  {({ open }) => (
                    <div className="border-b border-gray-100">
                      <Disclosure.Button className="flex justify-between items-center w-full py-3 px-2 hover:bg-gray-50 rounded-lg">
                        <span className="font-medium">{category.title}</span>
                        <ChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                      </Disclosure.Button>
                      <Disclosure.Panel className="pl-4">
                        {category.submenu.map((item, idx) => (
                          <Link
                            key={idx}
                            to="#"
                            className="block py-2.5 px-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                            onClick={onClose}
                          >
                            {item}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>

            {/* Additional Links */}
            <div className="space-y-2">
              <Link
                to="/wishlist"
                className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={onClose}
              >
                <Heart size={20} className="mr-3 text-[#74070E]" />
                <span className="font-medium">Wishlist ({wishlistItemCount})</span>
              </Link>
              <Link
                to="/notifications"
                className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={onClose}
              >
                <Bell size={20} className="mr-3 text-[#74070E]" />
                <span className="font-medium">Notifications ({unreadCount})</span>
              </Link>
              <Link
                to="/login"
                className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={onClose}
              >
                <User size={20} className="mr-3 text-[#74070E]" />
                <span className="font-medium">Account</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;