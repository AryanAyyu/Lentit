
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { ArrowRight } from "lucide-react";

// Mock new arrivals data
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
  }
];

const NewArrivals = () => {
  const arrivalsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );

    const elements = document.querySelectorAll(".new-arrival-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-16 px-6 bg-muted">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-rose-900 mb-2">New Arrivals</h2>
            <p className="text-foreground/70 max-w-md">
              The latest premium fashion items now available for rent
            </p>
          </div>
          <Link to="/category/all">
            <Button variant="outline" className="border-rose-600 text-rose-900 hover:bg-teal-600 flex items-center gap-2 mt-4 md:mt-0">
              View All
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
        
        <div ref={arrivalsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map((product, index) => (
            <div key={product.id} className="new-arrival-item">
              <ProductCard {...product} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
