import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  Bell,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import Cart from "@/components/Cart";
import Wishlist from "@/components/Wishlist";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
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
import Logo from "./Logo";
import MobileNotifications from "@/components/MobileNotification";

type ServiceType = "renting" | "thrifting";
type Notification = {
  id: number;
  text: string;
  read: boolean;
  time: string;
};
type Category = {
  title: string;
  path: string;
  submenu: {
    title: string;
    path: string;
  }[];
};

const productSuggestions = [
  "Elegant Silk Blouse",
  "Premium Denim Jeans",
  "Classic Cashmere Sweater",
];

const serviceRoutes: Record<ServiceType, string> = {
  renting: "/",
  thrifting: "/thrift",
};

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [isMobileNotificationsOpen, setIsMobileNotificationsOpen] =
    useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      text: "Your item has been shipped!",
      read: false,
      time: "2 hours ago",
    },
    {
      id: 2,
      text: "New items matching your wishlist",
      read: false,
      time: "1 day ago",
    },
    {
      id: 3,
      text: "Your rental period ends tomorrow",
      read: true,
      time: "3 days ago",
    },
  ]);

  const isMobile = useIsMobile();
  const dropdownRefs = useRef<(HTMLLIElement | null)[]>([]);
  const { itemCount: cartItemCount } = useCart();
  const { itemCount: wishlistItemCount } = useWishlist();
  const [selectedLocation, setSelectedLocation] = useState("New Delhi");

  // Determine current service type based on route
  const currentServiceType = location.pathname.startsWith("/thrift")
    ? "thrifting"
    : "renting";

  // Categories data with paths
  const rentingLeftCategories: Category[] = [
    {
      title: "Men",
      path: "/products/men",
      submenu: [
        { title: "Sherwani", path: "/products/men/sherwani" },
        { title: "Kurta & Pajama", path: "/products/men/kurta-pajama" },
        { title: "Ethnic Wear", path: "/products/men/ethnic-wear" },
        { title: "Ethnic Footwear", path: "/products/men/ethnic-footwear" },
        { title: "Suits & Blazers", path: "/products/men/suits-blazers" },
        { title: "Jackets", path: "/products/men/jackets" },
      ],
    },
    {
      title: "Women",
      path: "/products/women",
      submenu: [
        { title: "Lehengas", path: "/products/women/lehengas" },
        { title: "Sarees", path: "/products/women/sarees" },
        { title: "Gowns", path: "/products/women/gowns" },
        { title: "Jackets", path: "/products/women/jackets" },
        { title: "Heels", path: "/products/women/heels" },
        {
          title: "Kurtis & Suit Sets",
          path: "/products/women/kurtis-suit-sets",
        },
      ],
    },
  ];

  const rentingRightCategories: Category[] = [
    {
      title: "Costumes",
      path: "/products/costumes",
      submenu: [
        {
          title: "Indian Ethnic Costumes",
          path: "/products/costumes/indian-ethnic",
        },
        {
          title: "Japanese Kimono & Yukata",
          path: "/products/costumes/japanese",
        },
        { title: "Superhero Costumes", path: "/products/costumes/superhero" },
        {
          title: "Doctor, Nurse & Lab Coat Costumes",
          path: "/products/costumes/medical",
        },
        {
          title: "Police, Army & Firefighter Costumes",
          path: "/products/costumes/uniform",
        },
        { title: "Halloween Costumes", path: "/products/costumes/halloween" },
      ],
    },
    {
      title: "Accessories",
      path: "/products/accessories",
      submenu: [
        { title: "Jewellery", path: "/products/accessories/jewellery" },
        { title: "Watches", path: "/products/accessories/watches" },
        { title: "Sunglasses", path: "/products/accessories/sunglasses" },
        {
          title: "Belts & Scarves",
          path: "/products/accessories/belts-scarves",
        },
        { title: "Bags", path: "/products/accessories/bags" },
        {
          title: "Bridal & Ethnic Accessories",
          path: "/products/accessories/bridal",
        },
      ],
    },
  ];

  const thriftingLeftCategories: Category[] = [
    {
      title: "Buy Clothes",
      path: "/products/buy-clothes",
      submenu: [
        { title: "Men's Clothing", path: "/products/buy-clothes/mens" },
        { title: "Women's Clothing", path: "/products/buy-clothes/womens" },
        { title: "Kids", path: "/products/buy-clothes/kids" },
      ],
    },
    {
      title: "Buy Accessories",
      path: "/products/buy-accessories",
      submenu: [
        { title: "Accessories", path: "/products/buy-accessories/accessories" },
        { title: "Footwear", path: "/products/buy-accessories/footwear" },
        { title: "Vintage", path: "/products/buy-accessories/vintage" },
      ],
    },
  ];

  const thriftingRightCategories: Category[] = [
    {
      title: "Sell",
      path: "/sell",
      submenu: [
        { title: "List an Item", path: "/sell/list" },
        { title: "My Listings", path: "/sell/listings" },
        { title: "Pricing", path: "/sell/pricing" },
        { title: "Shipping Guide", path: "/sell/shipping" },
        { title: "Seller Dashboard", path: "/sell/dashboard" },
      ],
    },
  ];

  const locations = ["Delhi", "Mumbai", "Kanpur", "Lucknow", "Kolkata"];

  // Calculate unread notifications
  const unreadCount = useMemo(
    () => notifications.filter((n) => !n.read).length,
    [notifications]
  );

  // Get the appropriate categories based on service type
  const leftCategories =
    currentServiceType === "thrifting"
      ? thriftingLeftCategories
      : rentingLeftCategories;
  const rightCategories =
    currentServiceType === "thrifting"
      ? thriftingRightCategories
      : rentingRightCategories;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const transparentRoutes = ["/", "/thrift"];
  const isTransparentRoute = transparentRoutes.includes(location.pathname);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 20;
      setIsScrolled(shouldShow);
      setShowLogo(shouldShow);
    };

    if (isTransparentRoute) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true);
      setShowLogo(true);
    }
  }, [isTransparentRoute]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow =
      mobileMenuOpen || isMobileNotificationsOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, isMobileNotificationsOpen]);

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const handleLinkHover = (index: number) => {
    dropdownRefs.current.forEach((ref, i) => {
      if (i !== index && ref) {
        ref.classList.remove(
          "hover:opacity-100",
          "hover:visible",
          "hover:translate-y-0"
        );
      }
    });
  };

  const handleServiceChange = (value: ServiceType) => {
    navigate(serviceRoutes[value]);
    if(value === "renting") {
      window.scrollTo(0,0);
    }
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  const renderNotifications = () => (
    <div className="w-full p-0">
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
            className={`p-4 border-b cursor-pointer ${
              notification.read ? "" : "bg-blue-50"
            }`}
            onClick={() => markAsRead(notification.id)}
          >
            <div className="flex justify-between">
              <p className="text-sm">{notification.text}</p>
              {!notification.read && (
                <span className="h-2 w-2 bg-red-400 rounded-full"></span>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {notification.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F4E3B2] backdrop-blur-md shadow-sm py-3 text-[#74070E]"
          : "bg-transparent py-5 text-[#F4E3B2]"
      }`}
    >
      {/* Desktop Navbar */}
      <div className="hidden md:hidden lg:block">
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Left side */}
          <div className="flex items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className={`flex items-center text-foreground mr-4 py-2 ${
                    isScrolled
                      ? "bg-[#F4E3B2] text-[#74070E]"
                      : "bg-transparent text-[#F4E3B2]"
                  }`}
                >
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{selectedLocation}</span>
                  <ChevronDown size={14} className="ml-1 opacity-70" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-2" style={{ zIndex: 1001 }}>
                <div className="space-y-1">
                  <h3 className="font-medium text-sm px-2 py-1.5">
                    Select Location
                  </h3>
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
                value={currentServiceType}
                onValueChange={(value) =>
                  handleServiceChange(value as ServiceType)
                }
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

            {/* Left Categories */}
            <ul className="flex items-center space-x-6">
              {leftCategories.map((category, index) => (
                <li
                  key={index}
                  ref={(el) => (dropdownRefs.current[index] = el)}
                  className="group relative py-2"
                  onMouseEnter={() => handleLinkHover(index)}
                >
                  <Link
                    to={category.path}
                    className="nav-link py-2 flex items-center"
                    onClick={(e) => {
                      if (category.submenu.length > 0) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {category.title}
                    {category.submenu.length > 0 && (
                      <ChevronDown
                        size={16}
                        className="ml-1 transition-transform group-hover:rotate-180"
                      />
                    )}
                  </Link>
                  {category.submenu.length > 0 && (
                    <div className="absolute left-0 top-full mt-1 min-w-[180px] bg-white shadow-lg rounded-lg p-4 z-50 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                      <ul className="space-y-2">
                        {category.submenu.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              to={item.path}
                              className="block py-1.5 px-2 text-[#74070E] hover:underline"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Center Logo - Only visible after scroll */}
          {showLogo && (
            <div
              className={`flex justify-center items-center ${
                currentServiceType === "thrifting" ? "w-1/4" : "w-1/3"
              }`}
            >
              <Logo
                isSmall={isScrolled}
                className={isScrolled ? "ml-10" : ""}
              />
            </div>
          )}

          {/* Right side */}
          <div className="flex items-center">
            {/* Right Categories */}
            <ul className="flex items-center space-x-6 mr-6">
              {rightCategories.map((category, index) => (
                <li
                  key={index}
                  ref={(el) =>
                    (dropdownRefs.current[index + leftCategories.length] = el)
                  }
                  className="group relative py-2"
                  onMouseEnter={() =>
                    handleLinkHover(index + leftCategories.length)
                  }
                >
                  <Link
                    to={category.path}
                    className="nav-link py-2 flex items-center"
                    onClick={(e) => {
                      if (category.submenu.length > 0) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {category.title}
                    {category.submenu.length > 0 && (
                      <ChevronDown
                        size={16}
                        className="ml-1 transition-transform group-hover:rotate-180"
                      />
                    )}
                  </Link>
                  {category.submenu.length > 0 && (
                    <div className="absolute left-0 top-full mt-1 min-w-[180px] bg-white shadow-lg rounded-lg p-4 z-50 opacity-0 invisible translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                      <ul className="space-y-2">
                        {category.submenu.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              to={item.path}
                              className="block py-1.5 px-2 text-[#74070E] hover:underline"
                            >
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
              <PopoverContent
                className="w-80 p-0"
                style={{
                  zIndex: 1001,
                  marginTop: "8px",
                }}
              >
                {renderNotifications()}
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

      {/* Mobile Navbar - Updated Layout */}
      <div className="md:block lg:hidden">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Left side - Menu button */}
          <button 
            onClick={() => setMobileMenuOpen(true)} 
            className="z-10"
          >
            <Menu
              size={24}
              className={isScrolled ? "text-[#74070E]" : "text-[#F4E3B2]"}
            />
          </button>

          {/* Center - Service toggle and logo */}
          <div className="flex-1 flex items-center justify-center gap-2 mx-2 relative">
            {/* Service toggle - positioned to the left of the logo */}
            <div className="flex items-center gap-1 absolute left-0">
              <ToggleGroup
                type="single"
                value={currentServiceType}
                onValueChange={(value) =>
                  handleServiceChange(value as ServiceType)
                }
                className="flex"
              >
                <ToggleGroupItem
                  value="renting"
                  className={`text-xs px-3 py-1 border ${
                    isScrolled ? "border-[#74070E]" : "border-[#F4E3B2]"
                  } data-[state=on]:bg-[#74070E] data-[state=on]:text-[#F4E3B2] rounded-l-full`}
                >
                  Renting
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="thrifting"
                  className={`text-xs px-3 py-1 border ${
                    isScrolled ? "border-[#74070E]" : "border-[#F4E3B2]"
                  } data-[state=on]:bg-[#74070E] data-[state=on]:text-[#F4E3B2] rounded-r-full`}
                >
                  Thrifting
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Logo - centered with proper spacing */}
            {showLogo && (
              <div className=" ml-[90px] md:mx-auto lg:mx-auto">
                <Logo isSmall={true} />
              </div>
            )}
          </div>

          {/* Right side - Icons */}
          <div className="flex items-center gap-2 z-10 ml-[-35px]">
            <Link to="/login">
              <User
                size={20}
                className={ `ml-[5px] ${isScrolled ? "text-[#74070E]" : "text-[#F4E3B2]"}`}
              />
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
              className="fixed top-5 left-3 p-2 text-[#74070E] z-[1001]"
            >
              <X size={24} />
            </button>

            {/* Menu Content - Scrollable container */}
            <div className="h-[100vh] w-full fixed pt-16 pb-8 overflow-y-auto bg-[#F4E3B2]">
              <div className="container mx-auto px-4 mt-1 text-[#74070E]">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      className="w-full justify-between mb-6"
                    >
                      <div className="flex items-center font-bold">
                        <MapPin size={16} className="mr-2 font-bold" />
                        <span>{selectedLocation}</span>
                      </div>
                      <ChevronDown size={16} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full" style={{ zIndex: 1001 }}>
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
                  {[...leftCategories, ...rightCategories].map(
                    (category, index) => (
                      <Disclosure key={index}>
                        {({ open }) => (
                          <div className="border-b border-gray-700">
                            <Disclosure.Button className="flex justify-between items-center w-full py-3 px-2">
                              <Link
                                to={
                                  category.submenu.length > 0
                                    ? "#"
                                    : category.path
                                }
                                onClick={(e) => {
                                  if (category.submenu.length > 0) {
                                    e.preventDefault();
                                  } else {
                                    setMobileMenuOpen(false);
                                  }
                                }}
                                className="font-bold"
                              >
                                {category.title}
                              </Link>
                              {category.submenu.length > 0 && (
                                <ChevronDown
                                  className={`transition-transform ${
                                    open ? "rotate-180" : ""
                                  }`}
                                />
                              )}
                            </Disclosure.Button>
                            {category.submenu.length > 0 && (
                              <Disclosure.Panel className="pl-4">
                                {category.submenu.map((item, idx) => (
                                  <Link
                                    key={idx}
                                    to={item.path}
                                    className="py-2.5 px-2 text-gray-600 hover:bg-gray-50 rounded-lg flex justify-ends"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {item.title}
                                  </Link>
                                ))}
                              </Disclosure.Panel>
                            )}
                          </div>
                        )}
                      </Disclosure>
                    )
                  )}
                </div>

                {/* Additional Links */}
                <div className="space-y-2">
                  <div className="flex items-center w-full py-1 px-1 rounded-lg hover:bg-gray-50">
                    <Wishlist />
                    <span>Wishlist ({wishlistItemCount})</span>
                  </div>
                  <button
                    className="flex items-center w-full py-3 px-4 rounded-lg hover:bg-gray-50 h-100vh fixed z-[999] "
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsMobileNotificationsOpen(true);
                    }}
                  >
                    <Bell size={20} className="mr-3 text-[#74070E]" />
                    <span>Notifications ({unreadCount})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Notifications Panel */}
      <MobileNotifications
        isOpen={isMobileNotificationsOpen}
        onClose={() => setIsMobileNotificationsOpen(false)}
        notifications={notifications}
        markAsRead={markAsRead}
        markAllAsRead={markAllAsRead}
        unreadCount={unreadCount}
      />

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