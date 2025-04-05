import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const deals = [
  {
    id: 601,
    title: "Holiday Party Package",
    discount: "40% OFF",
    imageUrl: "https://images.unsplash.com/photo-1601118964938-228a89955311?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG9saWRheSUyMFBhcnR5fGVufDB8fDB8fHww",
    mobileImageUrl: "https://images.unsplash.com/photo-1601118964938-228a89955311?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG9saWRheSUyMFBhcnR5fGVufDB8fDB8fHww",
    description: "Everything you need for your holiday party, including dress, accessories, and more.",
    link: "/deals/holiday-package"
  },
  {
    id: 602,
    title: "Weekend Getaway Bundle",
    discount: "35% OFF",
    imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    mobileImageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "The perfect selection of casual and formal wear for your weekend trip.",
    link: "/deals/weekend-bundle"
  },
  {
    id: 603,
    title: "Wedding Guest Collection",
    discount: "30% OFF",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    mobileImageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    description: "Look spectacular as a wedding guest with our curated collection.",
    link: "/deals/wedding-guest"
  }
];

const HotDeals = () => {
  const dealsRef = useRef<HTMLDivElement>(null);

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

    const elements = document.querySelectorAll(".deal-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 bg-muted">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
          <div className="mb-4 sm:mb-0">
            <h2 className="text-2xl sm:text-3xl font-semibold text-rose-900 mb-1 sm:mb-2">Hot Deals of the Week</h2>
            <p className="text-stone-600 text-sm sm:text-base max-w-md">
              Limited-time offers on premium fashion rentals
            </p>
          </div>
          <Link to="/deals" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto border-stone-700 text-stone-900 hover:bg-rose-100 flex items-center gap-2">
              All Deals
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
        
        <div ref={dealsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {deals.map((deal, index) => (
            <div 
              key={deal.id} 
              className="deal-item reveal-on-scroll relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm sm:shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/9] overflow-hidden">
                <picture>
                  <source media="(max-width: 639px)" srcSet={deal.mobileImageUrl} />
                  <source media="(min-width: 640px)" srcSet={deal.imageUrl} />
                  <img 
                    src={deal.imageUrl} 
                    alt={deal.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#74070E] text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full font-medium text-xs sm:text-sm">
                  {deal.discount}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-rose-900 mb-1 sm:mb-2">{deal.title}</h3>
                <p className="text-stone-600 text-sm sm:text-base mb-3 sm:mb-4">{deal.description}</p>
                <Link to={deal.link} className="block">
                  <Button className="w-full bg-stone-900 hover:bg-stone-700 text-white text-sm sm:text-base py-2 sm:py-2">
                    View Deal
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDeals;