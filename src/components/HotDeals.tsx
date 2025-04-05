
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
    description: "Everything you need for your holiday party, including dress, accessories, and more.",
    link: "/deals/holiday-package"
  },
  {
    id: 602,
    title: "Weekend Getaway Bundle",
    discount: "35% OFF",
    imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    description: "The perfect selection of casual and formal wear for your weekend trip.",
    link: "/deals/weekend-bundle"
  },
  {
    id: 603,
    title: "Wedding Guest Collection",
    discount: "30% OFF",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
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
    <section className="py-16 px-6 bg-muted">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-rose-900 mb-2">Hot Deals of the Week</h2>
            <p className="text-foreground/70 max-w-md">
              Limited-time offers on premium fashion rentals
            </p>
          </div>
          <Link to="/deals">
            <Button variant="outline" className="border-stone-700 text-stone-900 hover:bg-rose-100 flex items-center gap-2 mt-4 md:mt-0">
              All Deals
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
        
        <div ref={dealsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div 
              key={deal.id} 
              className="deal-item reveal-on-scroll relative bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={deal.imageUrl} 
                  alt={deal.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#74070E] text-white px-3 py-1 rounded-full font-medium">
                  {deal.discount}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-rose-900 mb-2">{deal.title}</h3>
                <p className="text-foreground/70 mb-4">{deal.description}</p>
                <Link to={deal.link}>
                  <Button className="w-full bg-stone-900 hover:bg-stone-600 text-white">
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
