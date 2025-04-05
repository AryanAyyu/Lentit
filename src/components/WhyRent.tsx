import { useEffect, useRef } from "react";
import { ShoppingBag, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const WhyRent = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

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
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-pink-100 to-rose-100">
      <div className="container mx-auto">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="why-rent-item reveal-on-scroll">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-rose-700 leading-tight mb-4 sm:mb-6">
              Why buy when you can{" "}
              <span className="text-yellow-600">rent and thrift</span>{" "}
              for a fraction of the price?
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mb-6 sm:mb-8">
              Join thousands of fashion-forward customers who choose sustainability without compromising on style. 
              Rent premium, wear luxury, save money.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className="bg-[#74070E] hover:bg-[#5a050b] text-white gap-2 py-2 sm:py-2">
                <ShoppingBag size={16} />
                Rent your Own
              </Button>
              <Button variant="outline" className="border-rose-500 text-rose-900 hover:bg-rose-200 gap-2 py-2 sm:py-2">
                <Package size={16} />
                Thrift your Own
              </Button>
            </div>
          </div>
          <div className="why-rent-item reveal-on-scroll grid grid-cols-2 gap-3 sm:gap-4" style={{ transitionDelay: "200ms" }}>
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden h-40 sm:h-48 md:h-64 transform sm:translate-y-4">
              <img 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Premium Fashion" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden h-40 sm:h-48 md:h-64">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Sustainable Fashion" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden h-40 sm:h-48 md:h-64">
              <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Shopping Experience" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative rounded-lg sm:rounded-xl overflow-hidden h-40 sm:h-48 md:h-64 transform sm:-translate-y-4">
              <img 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Premium Experience" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRent;