import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ShoppingBag, 
  User, 
  Heart, 
  Search,
  MapPin,
  Bell
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
  CommandList,
} from "@/components/ui/command";


const productSuggestions = [
  "Elegant Silk Blouse",
  "Premium Denim Jeans",
  "Classic Cashmere Sweater",
  "Tailored Wool Blazer",
  "Designer Leather Handbag",
  "Italian Leather Shoes",
  "Luxury Cashmere Scarf",
  "Designer Sunglasses"
];

interface NavbarProps {
  visible: boolean;
}
const Navbar: React.FC<NavbarProps> = ({ visible }) => {
  

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [serviceType, setServiceType] = useState<"renting" | "thrifting">("renting");
  const [selectedLocation, setSelectedLocation] = useState("New Delhi");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Your item has been shipped!", read: false, time: "2 hours ago" },
    { id: 2, text: "20% off on weekend rentals!", read: false, time: "1 day ago" },
    { id: 3, text: "New collection available for rent", read: true, time: "3 days ago" }
  ]);
  const [unreadCount, setUnreadCount] = useState(0);
  
  const isMobile = useIsMobile();
  const dropdownRefs = useRef<(HTMLLIElement | null)[]>([]);
  const { itemCount: cartItemCount } = useCart();
  const { itemCount: wishlistItemCount } = useWishlist();

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

  // Updated category structure
  const leftCategories = [
    {
      title: "Clothing",
      submenu: ["Dresses", "Tops", "Bottoms", "Outerwear", "Activewear"]
    },
    {
      title: "Accessories",
      submenu: ["Jewelry", "Bags", "Scarves", "Hats", "Sunglasses"]
    }
  ];

  const rightCategories = [
    {
      title: "Costumes",
      submenu: ["Police Uniform", "Lawyer’s Gown", "Anarkali Suit", "Kathak Costume", "Lord Krishna Costume"]
    },
    {
      title: "Collections",
      submenu: ["New Arrivals", "Bestsellers", "Seasonal", "Sustainable", "Limited Edition"]
    }
  ];

  const locations = [
    "Delhi", "Ghaziabad", "Gurgaon", "Faridabad", "Noida",
    "Greater Noida", "Kanpur", "Lucknow", "Mumbai", "Pune",
    "Bangalore", "Chennai", "Hyderabad", "Ahmedabad", "Surat"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkHover = (index: number) => {
    dropdownRefs.current.forEach((ref, i) => {
      if (i !== index && ref) {
        ref.classList.remove("hover:opacity-100", "hover:visible", "hover:translate-y-0");
      }
    });
  };


  return (
    <nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? "bg-white/90 backdrop-blur-md shadow-sm py-3 text-[#74070E]" 
      : "bg-transparent py-5 text-[#F4E3B2]"
  }`}
>

      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Left side: Location, service toggle, and categories */}
        <div className="flex items-center">
          {/* Location Selector */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="flex items-center text-foreground mr-4 py-2">
                <MapPin size={16} className={`mr-1 ${
                  isScrolled ? "text-[#74070E]" : "text-[#F4E3B2] "
                }`} />
                <span className={`text-sm ${
                  isScrolled
                  ? "text-[#74070E]"
                  : "text-[#F4E3B2]"
                }`}>{selectedLocation}</span>
                <ChevronDown size={14} className={`ml-1 opacity-70 ${
                  isScrolled ? "text-[#74070E]" 
                  : "text-[#F4E3B2]"
                }`} />
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

          {/* Service Type Toggle */}
          <div className={`mr-6 ${isMobile ? 'hidden' : 'block'}`}>
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

          {/* Left Categories (Clothing & Accessories) */}
          {!isMobile && (
            <ul className="flex items-center space-x-6">
              {leftCategories.map((category, index) => (
                <li 
                  key={index}
                  ref={el => dropdownRefs.current[index] = el}
                  className="group relative py-2"
                  onMouseEnter={() => handleLinkHover(index)}
                >
                  <Link 
                    to="#" 
                    className={`nav-link py-2 flex items-center transition-colors duration-200 ${
                      isScrolled
                      ? 'text-[#74070E]'
                      // ? console.log(true)
                      : 'text-[#F4E3B2]'
                      // : console.log(false)
                    }`}
                  >
                    {category.title}
                    <ChevronDown size={16} className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  <div className="nav-dropdown min-w-[180px] bg-white shadow-lg rounded-lg p-4 z-50">
                    <ul className="space-y-2">
                      {category.submenu.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            to="#"
                            className="block py-1.5 px-2 text-foreground/80 hover:text-[#74070E] hover:bg-muted/50 rounded transition-colors duration-200"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* <div className="w-1/3 flex justify-center items-center">
          {isHomePage?
          ( 
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-rose-700">
              <span className="mr-1 text-yellow-900">LENT</span>-IT
              </Link>
            </div>
          )
          :
          (
            <div></div>
          )
          }
        </div>  */}
        
        {/* Center: Logo
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-rose-700">
            <span className="mr-1 text-yellow-900">LENT</span>-IT
          </Link>
        </div> */}

        <div className="w-1/3 flex justify-center items-center">
          {/* Logo space - intentionally empty as the logo will be positioned absolutely via ScrollEffect */}
        </div>

        {/* Right side: Categories + Icons */}
        <div className="flex items-center">
          {/* Right Categories (Footwear & Collections) */}
          {!isMobile && (
            <ul className="flex items-center space-x-6 mr-6">
              {rightCategories.map((category, index) => (
                <li 
                  key={index}
                  ref={el => dropdownRefs.current[index + leftCategories.length] = el}
                  className="group relative py-2"
                  onMouseEnter={() => handleLinkHover(index + leftCategories.length)}
                >
                  <Link 
                    to="#" 
                    className={`nav-link py-2 flex items-center transition-colors duration-200 ${
                      isScrolled
                      ? "text-[#74070E]"
                      : "text-[#F4E3B2]"
                    }`}
                  >
                    {category.title}
                    <ChevronDown size={16} className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  <div className="nav-dropdown min-w-[180px] bg-white shadow-lg rounded-lg p-4 z-50">
                    <ul className="space-y-2">
                      {category.submenu.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            to="#"
                            className="block py-1.5 px-2 text-foreground/80 hover:text-[#74070E] hover:bg-muted/50 rounded transition-colors duration-200"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* Search button */}
          <button 
            className={`hover:text-[#74070E] transition-colors duration-200 mr-6 ${
              isScrolled
                      ? "text-[#74070E]"
                      // ? console.log(true)
                      : "text-[#F4E3B2]"
                      // : console.log(false)
            }`}
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={20} />
          </button>

          {/* Search dialog */}
          <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <CommandInput placeholder="Search for products..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                {productSuggestions.map((product) => (
                  <div
                    key={product}
                    className="flex items-center px-2 py-3 cursor-pointer hover:bg-accent hover:text-accent-foreground"
                    onClick={() => {
                      console.log(`Selected: ${product}`);
                      setIsSearchOpen(false);
                    }}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    <span>{product}</span>
                  </div>
                ))}
              </CommandGroup>
            </CommandList>
          </CommandDialog>

          {/* Notifications */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="p-2 relative mr-4 hover:text-[#74070E] transition-colors duration-200">
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
                    className="text-xs text-stone-600 hover:text-stone-900"
                  >
                    Mark all as read
                  </Button>
                </div>
              </div>
              <div className="max-h-[300px] overflow-auto">
                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-muted-foreground">
                    No notifications
                  </div>
                ) : (
                  notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-4 border-b last:border-0 cursor-pointer hover:bg-muted/50 ${notification.read ? '' : 'bg-blue-200'}`}
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
                  ))
                )}
              </div>
            </PopoverContent>
          </Popover>

          {/* Other icons */}
          <Wishlist />
          <Link to="/login" className={`text-foreground hover:text-pink-500 transition-colors duration-200 mx-4 ${
            isScrolled
            ? "text-[#74070E]"
            : "text-[#F4E3B2]"
          }`}>
            <User size={20} className={`${
              isScrolled
              ? "text-[#74070E]"
              : "text-[#F4E3B2]"
            }`} />
          </Link>
          <Cart />
          
          {/* Mobile menu button */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 text-foreground focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && (
        <div
          className={`absolute top-full left-0 right-0 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="mb-4 flex justify-center">
              <ToggleGroup 
                type="single" 
                value={serviceType} 
                onValueChange={(value) => {
                  if (value) setServiceType(value as "renting" | "thrifting");
                }}
                className="border rounded-full w-full max-w-xs"
              >
                <ToggleGroupItem 
                  value="renting" 
                  className="text-sm rounded-l-full w-1/2 data-[state=on]:bg-amber-600 data-[state=on]:text-white"
                >
                  Renting
                </ToggleGroupItem>
                <ToggleGroupItem 
                  value="thrifting" 
                  className="text-sm rounded-r-full w-1/2 data-[state=on]:bg-amber-600 data-[state=on]:text-white"
                >
                  Thrifting
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            <ul className="space-y-4">
              {[...leftCategories, ...rightCategories].map((category, index) => (
                <li key={index} className="py-2">
                  <div
                    className="flex items-center justify-between cursor-pointer text-foreground"
                    onClick={() => {
                      const el = document.getElementById(`mobile-submenu-${index}`);
                      if (el) {
                        el.classList.toggle("hidden");
                      }
                    }}
                  >
                    <span>{category.title}</span>
                    <ChevronDown size={16} />
                  </div>
                  <ul id={`mobile-submenu-${index}`} className="hidden pl-4 mt-2 space-y-2">
                    {category.submenu.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to="#"
                          className="block py-1.5 text-foreground/80 hover:text-pink-500"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;