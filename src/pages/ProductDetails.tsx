
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProductDetails from "@/components/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar visible={false} />
      <ProductDetails />
      
      {/* Footer would go here, same as index page */}
      <footer className="bg-teal-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">LENT-IT</h3>
              <p className="text-white/80 mb-4">
                Premium fashion rentals for the discerning individual.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Shop</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Bestsellers</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Collections</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Size Guide</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
            <p>© {new Date().getFullYear()} LENT-IT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetailsPage;
