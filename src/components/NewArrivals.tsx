import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { ArrowRight } from "lucide-react";

const newArrivals = [
  {
    id: 501,
    name: "Luxury Evening Suit",
    price: 129.99,
    imageUrl: "https://images.unsplash.com/photo-1660119602205-3aa5be623a3f?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hoverImageUrl: "https://plus.unsplash.com/premium_photo-1661308219954-a8035fbeb546?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 502,
    name: "Designer Gown",
    price: 149.99,
    imageUrl: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=735&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1557130641-1b14718f096a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 503,
    name: "Premium Watch Collection",
    price: 99.99,
    imageUrl: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=694&q=80"
  },
  {
    id: 504,
    name: "Silk Bow Tie Set",
    price: 49.99,
    imageUrl: "https://plus.unsplash.com/premium_photo-1661308261387-9aca7336e9ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fFNpbGslMjBCb3clMjBUaWUlMjBTZXR8ZW58MHx8MHx8fDA%3D",
    hoverImageUrl: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
  },
  {
    id: 505,
    name: "Leather Handbag",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=736&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=738&q=80"
  },
  {
    id: 506,
    name: "Cashmere Scarf",
    price: 59.99,
    imageUrl: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
  },
  {
    id: 507,
    name: "Silk Blouse",
    price: 69.99,
    imageUrl: "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=736&q=80"
  },
  {
    id: 508,
    name: "Wool Coat",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=736&q=80",
    hoverImageUrl: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
  }
];

const NewArrivals = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-3 px-4 bg-[#F4E3B2]">
      <div className="max-w-9xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-rose-900">
              New Arrivals
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base text-center sm:text-left">
              The latest premium fashion items now available for rent
            </p>
          </div>
          <Link to="/category/all" className="hidden sm:block">
            <Button
              variant="outline"
              className="border-rose-600 text-rose-900 hover:bg-rose-50 hover:text-rose-900 flex items-center gap-2"
              size="sm"
            >
              View All Arrivals
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        <div className="relative">
          {/* Scroll buttons for desktop */}
          <button 
            onClick={scrollLeft}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-50"
            aria-label="Scroll left"
          >
            <ArrowRight className="w-5 h-5 rotate-180 text-rose-900" />
          </button>
          
          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto whitespace-nowrap pb-4 scrollbar-hide"
          >
            <div className="inline-flex gap-4 sm:gap-24">
              {newArrivals.map((product) => (
                <div 
                  key={product.id}
                  className="inline-block w-[200px] sm:w-[220px] flex-shrink-0"
                >
                  <ProductCard
                    {...product}
                    className="hover:shadow-md transition-shadow duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Scroll buttons for desktop */}
          <button 
            onClick={scrollRight}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-50"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-5 h-5 text-rose-900" />
          </button>
        </div>

        {/* Mobile View All Button */}
        <div className="mt-3 sm:hidden text-center">
          <Link to="/category/all">
            <Button
              variant="outline"
              className="border-rose-600 text-rose-900 hover:bg-rose-50 hover:text-rose-900 flex items-center gap-2 mx-auto"
              size="sm"
            >
              View All Arrivals
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;