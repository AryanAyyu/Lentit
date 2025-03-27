import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ChevronRight, 
  Minus, 
  Plus, 
  Heart, 
  Eye, 
  CalendarIcon,
  Truck, 
  Shield,
  RotateCcw, 
  Check
} from "lucide-react";
import { format, addDays } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

// Mock product data
const productData = {
  id: 1,
  name: "Premium Navy Suit",
  price: 29.99, // Price per day
  securityDeposit: 99.99,
  description: "This premium Premium Navy Suit is perfect for special occasions, formal events, or professional settings. Crafted with high-quality materials for comfort and style.\n\nWhen you rent with LENT-IT, you're not just saving money, you're also making an environmentally conscious choice by reducing waste and supporting sustainable fashion practices.",
  features: [
    "Premium quality materials and craftsmanship",
    "Perfect fit with multiple size options",
    "Professionally cleaned and sanitized between each rental",
    "Delivered in protective packaging",
    "Easy returns - we handle all logistics"
  ],
  rentalProcess: [
    "Select your product and rental duration",
    "Choose your delivery and return dates",
    "Pay the rental fee and security deposit",
    "Receive your freshly cleaned item",
    "Return using our prepaid shipping method",
    "Receive your security deposit back after successful return"
  ],
  specifications: [
    { name: "Material", value: "Wool Blend" },
    { name: "Color", value: "Navy Blue" },
    { name: "Care", value: "Dry Clean Only" },
    { name: "Fit", value: "Regular" },
    { name: "Pieces", value: "2 (Jacket & Trousers)" }
  ],
  reviews: [
    { id: 1, author: "Michael K.", rating: 5, text: "Perfect fit and excellent quality. Arrived on time and in perfect condition.", date: "2 weeks ago" },
    { id: 2, author: "Sarah T.", rating: 4, text: "Great suit, looked very professional for my interview. Return process was easy.", date: "1 month ago" },
    { id: 3, author: "David R.", rating: 5, text: "Saved so much money by renting this suit for a one-time event. Will definitely use LENT-IT again!", date: "2 months ago" }
  ],
  colors: [
    { name: "Navy", value: "#1a2b4d" },
    { name: "Charcoal", value: "#333333" },
    { name: "Black", value: "#000000" }
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  images: [
    "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1582142306909-195724d0b8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1583846783214-7229a91b20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
  ],
  recommended: [
    {id: 101, name: "Designer Bow Tie", price: 5.99, imageUrl: "https://images.unsplash.com/photo-1607027382291-a225a312d6d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"},
    {id: 102, name: "Premium Watch", price: 15.99, imageUrl: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"},
    {id: 103, name: "Luxury Evening Suit", price: 34.99, imageUrl: "https://images.unsplash.com/photo-1627651055994-e3a4aa0419a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=749&q=80"}
  ]
};

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isWishlist, setIsWishlist] = useState(false);
  const [isTryOn, setIsTryOn] = useState(false);
  const [startDate, setStartDate] = useState<Date | undefined>(addDays(new Date(), 1));
  const [endDate, setEndDate] = useState<Date | undefined>(addDays(new Date(), 3));
  const [isInView, setIsInView] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  const isItemInWishlist = id ? isInWishlist(parseInt(id)) : false;

  // Calculate the rental duration and total cost
  const rentalDays = startDate && endDate 
    ? Math.max(1, Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)))
    : 1;
  
  const rentalFee = productData.price * rentalDays;
  const securityDeposit = productData.securityDeposit;
  const totalCost = rentalFee + securityDeposit;

  useEffect(() => {
    // Simulate loading of data
    const timeout = setTimeout(() => {
      setIsInView(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Virtual try on function
  const handleTryOn = () => {
    setIsTryOn(!isTryOn);
  };

  // Add to cart function
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size before adding to cart");
      return;
    }
    
    if (!startDate || !endDate) {
      toast.error("Please select rental dates");
      return;
    }
    
    const rentalDays = startDate && endDate 
      ? Math.max(1, Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)))
      : 1;
    
    addToCart({
      id: productData.id,
      name: productData.name,
      price: productData.price,
      quantity: quantity,
      size: selectedSize,
      color: selectedColor.name,
      imageUrl: productData.images[0],
      startDate: startDate || new Date(),
      endDate: endDate || addDays(new Date(), 1),
      rentalDays: rentalDays,
      securityDeposit: productData.securityDeposit
    });
    
    toast.success("Added to cart successfully!");
  };

  // Toggle wishlist
  const toggleWishlist = () => {
    if (isItemInWishlist) {
      removeFromWishlist(productData.id);
    } else {
      addToWishlist({
        id: productData.id,
        name: productData.name,
        price: productData.price,
        imageUrl: productData.images[0]
      });
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-sm font-medium text-foreground/70 hover:text-coffee">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-foreground/50" />
                  <Link to="/collections" className="ml-1 text-sm font-medium text-foreground/70 hover:text-coffee">
                    Collections
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-foreground/50" />
                  <span className="ml-1 text-sm font-medium text-coffee">
                    {productData.name}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
          {/* Product Images */}
          <div className={`space-y-4 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 translate-x-[-20px]'}`}>
            <div className="bg-muted/30 rounded-xl overflow-hidden aspect-[4/5] relative">
              {isTryOn && (
                <div className="absolute inset-0 z-10 bg-black/70 flex items-center justify-center">
                  <div className="text-center p-6 max-w-md">
                    <h3 className="text-xl font-semibold text-white mb-4">Virtual Try-On Mode</h3>
                    <p className="text-white/80 mb-6">Use your camera to see how this item would look on you. Please allow camera access when prompted.</p>
                    <button
                      onClick={handleTryOn}
                      className="bg-vanilla hover:bg-vanilla/90 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300"
                    >
                      Exit Try-On
                    </button>
                  </div>
                </div>
              )}
              <img
                src={productData.images[selectedImage]}
                alt={productData.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {productData.images.map((image, index) => (
                <button
                  key={index}
                  className={`rounded-lg overflow-hidden aspect-square ${
                    selectedImage === index ? "ring-2 ring-vanilla" : "opacity-70 hover:opacity-100"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`${productData.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'opacity-100' : 'opacity-0 translate-x-[20px]'}`}>
            <h1 className="text-3xl font-semibold text-coffee mb-2">{productData.name}</h1>
            <p className="text-xl text-vanilla mb-1">${productData.price} <span className="text-sm text-foreground/70">per day</span></p>
            
            {/* Rental Duration Section */}
            <div className="mb-6 mt-4 bg-muted/30 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-foreground mb-3">Rental Duration</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-foreground/70 mb-1">Start Date:</p>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="w-full flex items-center justify-between px-4 py-2 border border-input rounded-md bg-background hover:bg-accent/50 transition-colors">
                        <span>{startDate ? format(startDate, "PPP") : "Select date"}</span>
                        <CalendarIcon size={16} />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white shadow-lg rounded-lg z-50" align="start">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={(date) => {
                          setStartDate(date);
                          // Auto-adjust end date to be at least one day after start date
                          if (date && (!endDate || date >= endDate)) {
                            setEndDate(addDays(date, 1));
                          }
                        }}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <p className="text-xs text-foreground/70 mb-1">End Date:</p>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button className="w-full flex items-center justify-between px-4 py-2 border border-input rounded-md bg-background hover:bg-accent/50 transition-colors">
                        <span>{endDate ? format(endDate, "PPP") : "Select date"}</span>
                        <CalendarIcon size={16} />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white shadow-lg rounded-lg z-50" align="start">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        initialFocus
                        disabled={(date) => date < (startDate || new Date())}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Rental Period:</span>
                  <span className="font-medium">{rentalDays} day{rentalDays !== 1 ? 's' : ''}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rental Fee:</span>
                  <span className="font-medium">${rentalFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Security Deposit (Refundable):</span>
                  <span className="font-medium">${securityDeposit.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold border-t pt-2 mt-2">
                  <span>Total:</span>
                  <span className="text-vanilla">${totalCost.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            {/* Color selector */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-foreground mb-3">Color: {selectedColor.name}</h3>
              <div className="flex space-x-3">
                {productData.colors.map((color) => (
                  <button
                    key={color.name}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      selectedColor.name === color.name
                        ? "ring-2 ring-offset-2 ring-coffee"
                        : ""
                    }`}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color.value }}
                    aria-label={`Select ${color.name} color`}
                  >
                    {selectedColor.name === color.name && (
                      <span className="text-white">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Size selector */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-foreground mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {productData.sizes.map((size) => (
                  <button
                    key={size}
                    className={`min-w-[4rem] py-2 border rounded-md transition-all ${
                      selectedSize === size
                        ? "border-coffee bg-coffee text-white"
                        : "border-border text-foreground hover:border-coffee"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <a href="#" className="text-sm text-vanilla mt-2 inline-block">
                Size Guide
              </a>
            </div>
            
            {/* Quantity selector */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-foreground mb-3">Quantity</h3>
              <div className="flex border border-border rounded-md w-fit">
                <button
                  className="px-4 py-2 text-foreground/70 hover:text-foreground transition-colors"
                  onClick={decreaseQuantity}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <div className="w-12 flex items-center justify-center border-x border-border">
                  {quantity}
                </div>
                <button
                  className="px-4 py-2 text-foreground/70 hover:text-foreground transition-colors"
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Virtual Try-on button */}
            <div className="flex flex-wrap gap-4 mb-6">
              <button
                onClick={handleTryOn}
                className="flex items-center space-x-2 px-4 py-2 border border-vanilla text-vanilla rounded-md hover:bg-vanilla/10 transition-colors"
              >
                <Eye size={18} />
                <span>Try Me</span>
              </button>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 mb-8">
              <button 
                className="bg-coffee hover:bg-coffee/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex-1 flex items-center justify-center gap-2"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button 
                className="border border-coffee text-coffee hover:bg-coffee/10 font-medium py-3 px-6 rounded-lg transition-all duration-300 flex-1 flex items-center justify-center gap-2"
                onClick={toggleWishlist}
              >
                <Heart className={`${isWishlist ? "fill-coffee" : ""}`} size={18} />
                {isWishlist ? "Saved" : "Save"}
              </button>
            </div>
            
            {/* Shipping info - Modified to be side by side */}
            <div className="border-t border-border pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start space-x-3">
                  <Truck className="text-vanilla mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="font-medium">Free Standard Shipping</h4>
                    <p className="text-sm text-foreground/70">3-5 business days</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RotateCcw className="text-vanilla mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="font-medium">Easy Returns</h4>
                    <p className="text-sm text-foreground/70">30-day return window</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="text-vanilla mt-1 flex-shrink-0" size={18} />
                  <div>
                    <h4 className="font-medium">Authenticity Guaranteed</h4>
                    <p className="text-sm text-foreground/70">Quality assurance with every rental</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product details, specifications, and reviews tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <div className={`transition-opacity duration-500 ${activeTab === 'description' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-semibold text-coffee mb-4">Product Description</h2>
                  <div className="prose text-foreground/80 max-w-none mb-8">
                    {productData.description.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                    <div>
                      <h3 className="text-xl font-semibold text-coffee mb-4">Features</h3>
                      <ul className="space-y-2">
                        {productData.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Check size={18} className="text-vanilla mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-coffee mb-4">Rental Process</h3>
                      <ol className="space-y-2 list-decimal list-inside">
                        {productData.rentalProcess.map((step, index) => (
                          <li key={index} className="pl-1">{step}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-6">
              <div className={`transition-opacity duration-500 ${activeTab === 'specifications' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-semibold text-coffee mb-4">Product Specifications</h2>
                  <div className="overflow-hidden bg-white shadow-sm border border-input rounded-lg">
                    <table className="min-w-full divide-y divide-input">
                      <tbody className="divide-y divide-input">
                        {productData.specifications.map((spec, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">{spec.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground/80">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className={`transition-opacity duration-500 ${activeTab === 'reviews' ? 'opacity-100' : 'opacity-0'}`}>
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-semibold text-coffee mb-4">Customer Reviews</h2>
                  <div className="space-y-6">
                    {productData.reviews.map((review) => (
                      <div key={review.id} className="border border-input rounded-lg p-4 bg-white">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium">{review.author}</p>
                            <div className="flex items-center mt-1">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-foreground/60">{review.date}</span>
                        </div>
                        <p className="mt-3 text-foreground/80">{review.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Recommended Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-coffee mb-8">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {productData.recommended.map((product, index) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
                <div className="bg-muted/30 rounded-lg overflow-hidden">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <p className="text-vanilla mt-1">${product.price}/day</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
