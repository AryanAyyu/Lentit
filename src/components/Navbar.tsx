import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Menu, X, ChevronDown, ShoppingBag, User, Heart, Search, MapPin, Bell 
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import Cart from "@/components/Cart";
import Wishlist from "@/components/Wishlist";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger 
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Disclosure } from "@headlessui/react";

const productSuggestions = [
  "Elegant Silk Blouse",
  "Premium Denim Jeans",
  "Classic Cashmere Sweater"
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceType, setServiceType] = useState<"renting" | "thrifting">("renting");
  const [selectedLocation, setSelectedLocation] = useState("New Delhi");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Your item has been shipped!", read: false, time: "2 hours ago" }
  ]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  
  const isMobile = useIsMobile();
  const dropdownRefs = useRef<(HTMLLIElement | null)[]>([]);
  const { itemCount: cartItemCount } = useCart();
  const { itemCount: wishlistItemCount } = useWishlist();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      setShowLogo(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Notification count
  useEffect(() => {
    const count = notifications.filter(n => !n.read).length;
    setUnreadCount(count);
  }, [notifications]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const leftCategories = [
    { title: "Clothing", submenu: ["Dresses", "Tops", "Bottoms"] }
  ];

  const rightCategories = [
    { title: "Costumes", submenu: ["Police Uniform", "Lawyer's Gown"] }
  ];

  const locations = ["Delhi", "Mumbai", "Bangalore"];

  const handleLinkHover = (index: number) => {
    dropdownRefs.current.forEach((ref, i) => {
      if (i !== index && ref) {
        ref.classList.remove("hover:opacity-100", "hover:visible", "hover:translate-y-0");
      }
    });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-md shadow-sm py-3 text-[#74070E]" 
        : "bg-transparent py-5 text-[#F4E3B2]"
    }`}>
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="flex items-center text-foreground mr-4 py-2">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{selectedLocation}</span>
                  <ChevronDown size={14} className="ml-1 opacity-70" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-2">
                <div className="space-y-1">
                  <h3 className="font-medium text-sm px-2 py-1.5">Select Location</h3>
                  <div className="border-t my-1" />
                  {locations.map((location) => (
                    <Button
                      key={location}
                      variant="ghost"
                      className="w-full justify-start text-sm"
                      onClick={() => setSelectedLocation(location)}
                    >
                      {location}
                    </Button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            <div className="mr-6">
              <ToggleGroup 
                type="single" 
                value={serviceType}
                onValueChange={(value) => {
                  if (value) setServiceType(value as "renting" | "thrifting");
                }}
                className="border rounded-full"
              >
                <ToggleGroupItem 
                  value="renting" 
                  className="text-xs rounded-l-full px-3 data-[state=on]:bg-[#74070E] data-[state=on]:text-[#F4E3B2]"
                >
                  Renting
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="thrifting" 
                  className="text-xs rounded-r-full px-3 data-[state=on]:bg-[#74070E] data-[state=on]:text-[#F4E3B2]"
                >
                  Thrifting
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <ul className="flex items-center space-x-6">
              {leftCategories.map((category, index) => (
                <li 
                  key={index}
                  ref={el => dropdownRefs.current[index] = el}
                  className="group relative py-2"
                  onMouseEnter={() => handleLinkHover(index)}
                >
                  <Link to="#" className="nav-link py-2 flex items-center">
                    {category.title}
                    <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="nav-dropdown min-w-[180px] bg-white shadow-lg rounded-lg p-4 z-50">
                    <ul className="space-y-2">
                      {category.submenu.map((item, idx) => (
                        <li key={idx}>
                          <Link to="#" className="block py-1.5 px-2 hover:text-[#74070E]">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Logo */}
          <div className="w-1/3 flex justify-center items-center">
            {showLogo && (
              <Link to="/" className="text-2xl font-bold">
                <span className="text-[#74070E]"></span>
              </Link>
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center">
            <ul className="flex items-center space-x-6 mr-6">
              {rightCategories.map((category, index) => (
                <li 
                  key={index}
                  ref={el => dropdownRefs.current[index + leftCategories.length] = el}
                  className="group relative py-2"
                  onMouseEnter={() => handleLinkHover(index + leftCategories.length)}
                >
                  <Link to="#" className="nav-link py-2 flex items-center">
                    {category.title}
                    <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="nav-dropdown min-w-[180px] bg-white shadow-lg rounded-lg p-4 z-50">
                    <ul className="space-y-2">
                      {category.submenu.map((item, idx) => (
                        <li key={idx}>
                          <Link to="#" className="block py-1.5 px-2 hover:text-[#74070E]">
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            <button onClick={() => setIsSearchOpen(true)} className="mr-6">
              <Search size={20} />
            </button>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="p-2 relative mr-4">
                  <Bell size={20} />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#74070E] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0">
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Notifications</h3>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={markAllAsRead}
                      className="text-xs"
                    >
                      Mark all as read
                    </Button>
                  </div>
                </div>
                <div className="max-h-[300px] overflow-auto">
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-4 border-b cursor-pointer ${notification.read ? '' : 'bg-blue-50'}`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex justify-between">
                        <p className="text-sm">{notification.text}</p>
                        {!notification.read && (
                          <span className="h-2 w-2 bg-red-400 rounded-full"></span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            <Wishlist />
            <Link to="/login" className="mx-4">
              <User size={20} />
            </Link>
            <Cart />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden">
        <div className="container mx-auto px-4 flex items-center justify-between align-items-center">
          {/* Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2"
          >
            <Menu size={24} className={isScrolled ? "text-[#74070E]" : "text-[#F4E3B2]"} />
          </button>

          {/* Centered Toggle */}
          <div className="flex-1 flex justify-center px-2">
          <ToggleGroup 
                type="single" 
                value={serviceType}
                onValueChange={(value) => {
                  if (value) setServiceType(value as "renting" | "thrifting");
                }}
                className="border rounded-full mr-20"
              >
                <ToggleGroupItem 
                  value="renting" 
                  className="text-xs rounded-l-full px-3 data-[state=on]:bg-[#74070E] data-[state=on]:text-[#F4E3B2]"
                >
                  Renting
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="thrifting" 
                  className="text-xs rounded-r-full px-3 data-[state=on]:bg-[#74070E] data-[state=on]:text-[#F4E3B2]"
                >
                  Thrifting
                </ToggleGroupItem>
              </ToggleGroup>
          </div>

          {/* Scroll-triggered Logo */}
          {showLogo && (
            <div className={`absolute left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
              showLogo ? 'opacity-100' : 'opacity-0'
            }`}>
              <Link to="/" className="text-xl font-bold">
                <span className="text-[#74070E]"></span>
              </Link>
            </div>
          )}

          {/* Right Icons */}
          <div className="flex items-center space-x-2">
            <Link to="/login" className="p-2">
              <User size={20} className={isScrolled ? "text-[#74070E]" : "text-[#F4E3B2]"} />
            </Link>
            <Cart />
          </div>
        </div>

        

        {/* Mobile Menu - Full Screen Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[1000] bg-white">
            {/* Close Button - Fixed at top right */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="fixed top-4 right-4 p-2 text-[#74070E] z-[1001]"
            >
              <X size={24} />
            </button>

            {/* Menu Content - Scrollable container */}
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
                  <PopoverContent className="w-full">
                    {locations.map((location) => (
                      <Button
                        key={location}
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={() => setSelectedLocation(location)}
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
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center w-full py-3 px-4 mb-4 rounded-lg bg-gray-50"
                >
                  <Search size={20} className="mr-3 text-[#74070E]" />
                  <span>Search Products</span>
                </button>

                {/* Categories */}
                <div className="space-y-2 mb-6">
                  {[...leftCategories, ...rightCategories].map((category, index) => (
                    <Disclosure key={index}>
                      {({ open }) => (
                        <div className="border-b border-gray-100">
                          <Disclosure.Button className="flex justify-between items-center w-full py-3 px-2">
                            <span className="font-medium">{category.title}</span>
                            <ChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                          </Disclosure.Button>
                          <Disclosure.Panel className="pl-4">
                            {category.submenu.map((item, idx) => (
                              <Link
                                key={idx}
                                to="#"
                                className="block py-2.5 px-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                                onClick={() => setMobileMenuOpen(false)}
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
                    className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Heart size={20} className="mr-3 text-[#74070E]" />
                    <span>Wishlist ({wishlistItemCount})</span>
                  </Link>
                  <button className="flex items-center w-full py-3 px-4 rounded-lg hover:bg-gray-50">
                    <Bell size={20} className="mr-3 text-[#74070E]" />
                    <span>Notifications ({unreadCount})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search Dialog (Shared) */}
      <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <CommandInput placeholder="Search for products..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {productSuggestions.map((product) => (
              <CommandItem
                key={product}
                value={product}
                onSelect={() => {
                  console.log(`Selected: ${product}`);
                  setIsSearchOpen(false);
                }}
              >
                <Search className="mr-2 h-4 w-4" />
                <span>{product}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </nav>
  );
};

export default Navbar;