import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import Login from "./components/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import { AuthProvider } from "./contexts/AuthContext";
import Special from "./pages/Special";
import Thrift from "./pages/Thrift";
import ProductListing from "./components/ProductListing";
import IndividualProducts from "./components/IndividualProducts";
import ThriftStores from "./components/ThriftStore";
import ThriftStoreDetails from "./components/ThriftStoreDetails";
import SellYourOwn from "./components/SellYourOwn";
import ProductDetailsThrift from "./components/ProductDetailsThrift";
import SellYourProduct from "./pages/SellYourProduct";
import NewArrivalsPageThrift from "./components/NewArrivalsPageThrift";
import OnlyForYouPageThrift from "./components/OnlyForYouPageThrift";
import Wishlist from "./components/Wishlist";
import Loader from "./components/Loader";
import Settings from "./components/Settings";
import SettingsPage from "./components/Settings";
import MyListings from "./components/MyListings";
import PricingPage from "./components/PricingPage";
import ShippingGuidePage from "./components/ShippingGuidePage";
import SellerDashboardPage from "./components/SellerDashboardPage";
import SizeGuidePage from "./components/SizeGuidePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/thrift" element={<Thrift />} />
                <Route path="/category/:category" element={<Special />} />{" "}
                {/* Changed from CategoryPage to Special */}
                <Route
                  path="/products/:category/:subcategory"
                  element={<ProductListing />}
                />
                <Route
                  path="/product/:category/:subcategory/:productId"
                  element={<ProductDetails />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/test" element={<Loader />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route
                  path="/thrift/individual-products"
                  element={<IndividualProducts />}
                />
                <Route
                  path="/thrift/thrift-stores"
                  element={<ThriftStores />}
                />
                <Route
                  path="/thrift/thrift-stores/:id"
                  element={<ThriftStoreDetails />}
                />
                <Route
                  path="/thrift/productthrift/:id"
                  element={<ProductDetailsThrift />}
                />
                <Route path="/thrift/sell" element={<SellYourProduct />} />
                <Route
                  path="/only-for-you"
                  element={<OnlyForYouPageThrift />}
                />
                <Route
                  path="/new-arrivals"
                  element={<NewArrivalsPageThrift />}
                />

              <Route path="/thrift/my-listings" element={<MyListings />} />
              <Route path="/thrift/pricing" element={<PricingPage />} />
              <Route path="/thrift/shipping-guide" element={<ShippingGuidePage />} />
              <Route path="/thrift/seller-dashboard" element={<SellerDashboardPage />} />
              <Route path="/size-guide" element={<SizeGuidePage />} />

                {/* Remove the /special/:category route as it's redundant with /category/:category */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);
export default App;
