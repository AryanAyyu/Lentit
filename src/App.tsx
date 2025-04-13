import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import Login from "./pages/Login";
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
