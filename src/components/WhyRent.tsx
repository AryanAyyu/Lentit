
import { useEffect, useRef } from "react";
import { ShoppingBag, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyRent = () => {
  const contentRef = useRef<HTMLDivElement>(null);

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

    const elements = document.querySelectorAll(".why-rent-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-pink-100 to-rose-100">
      <div className="container mx-auto">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="why-rent-item reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-700 leading-tight mb-6">
              Why buy <br/>
              <span className="text-pink-500">when you can rent</span> <br/>
              for a fraction of the price?
            </h2>
            <p className="text-foreground/70 text-lg mb-8">
              Join thousands of fashion-forward customers who choose sustainability without compromising on style. 
              Rent premium, wear luxury, save money.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-rose-600 hover:bg-rose-700 text-white gap-2">
                <ShoppingBag size={18} />
                Start Renting
              </Button>
              <Button variant="outline" className="border-pink-500 text-pink-500 hover:bg-pink-50 gap-2">
                <Package size={18} />
                Start Thrifting
              </Button>
            </div>
          </div>
          <div className="why-rent-item reveal-on-scroll grid grid-cols-2 gap-4" style={{ transitionDelay: "200ms" }}>
            <div className="relative rounded-xl overflow-hidden h-64 transform translate-y-8">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80" 
                alt="Premium Fashion" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=720&q=80" 
                alt="Sustainable Fashion" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-64">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80" 
                alt="Shopping Experience" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden h-64 transform translate-y-(-8)">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80" 
                alt="Premium Experience" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRent;
