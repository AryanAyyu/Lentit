
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProductDetails from "@/components/ProductDetails";
import Footer from "@/components/Footer";

const ProductDetailsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductDetails />
      
      <Footer/>
    </div>
  );
};

export default ProductDetailsPage;
