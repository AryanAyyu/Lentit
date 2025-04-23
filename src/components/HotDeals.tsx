import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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
    title: "Weekend Getaway",
    discount: "35% OFF",
    imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    mobileImageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "The perfect selection of casual and formal wear for your weekend trip.",
    link: "/deals/weekend-bundle"
  },
  {
    id: 603,
    title: "Wedding Guest",
    discount: "30% OFF",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    mobileImageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    description: "Look spectacular as a wedding guest with our curated collection.",
    link: "/deals/wedding-guest"
  },
  {
    id: 604,
    title: "Summer Essentials",
    discount: "25% OFF",
    imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    mobileImageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Lightweight and breathable outfits perfect for summer adventures.",
    link: "/deals/summer-essentials"
  },
  {
    id: 605,
    title: "Business Formal",
    discount: "20% OFF",
    imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    mobileImageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "Professional attire for your important meetings and conferences.",
    link: "/deals/business-formal"
  }
];

const HotDeals = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.deal-card')?.clientWidth || 300;
      scrollContainerRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector('.deal-card')?.clientWidth || 300;
      scrollContainerRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-2 md:py-4 lg:py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50 to-white">
      <div className=" mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 lg:mb-10 gap-4">
          <div className="text-center sm:text-left mx-auto md:mx-0 lg:mx-0">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-rose-900 mb-2">
              Hot Deals of the Week
            </h2>
            <p className="text-stone-600 text-sm md:text-base lg:text-lg max-w-lg">
              Limited-time offers on premium fashion rentals
            </p>
          </div>
          <Link to="/deals" className="w-full sm:w-auto hidden md:block lg:block">
            <Button 
              variant="outline" 
              className="w-full sm:w-auto border-rose-800 text-rose-900 hover:bg-rose-50 hover:text-rose-900 hover:border-rose-900 flex items-center gap-2 transition-colors duration-200"
            >
              View All Deals
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
        
        <div className="relative group">
          {/* Navigation buttons - only show on non-touch devices or larger screens */}
          <button 
            onClick={scrollLeft}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 items-center justify-center rounded-full bg-white shadow-md text-rose-900 hover:bg-rose-50 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={scrollRight}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 items-center justify-center rounded-full bg-white shadow-md text-rose-900 hover:bg-rose-50 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto whitespace-nowrap pb-6 scroll-smooth snap-x [&::-webkit-scrollbar]:hidden -ms-overflow-style: none scrollbar-width: none"
          >
            <div className="inline-flex gap-4 md:gap-6">
              {deals.map((deal) => (
                <div 
                  key={deal.id} 
                  className="inline-block deal-card snap-start flex-shrink-0 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[350px] h-[300px] md:h-[370px] lg:h-[370px]"
                >
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
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
                      <div className="absolute top-3 right-6 md:right-5 lg:right-2 bg-rose-800 text-white px-3 py-1 rounded-full font-bold text-xs sm:text-sm shadow-md">
                        {deal.discount}
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                      <div className="mb-4 md:mb-5">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-rose-900 mb-2">{deal.title}</h3>
                        <p className="text-stone-600 text-sm sm:text-base line-clamp-2">{deal.description}</p>
                      </div>
                      <div className="mt-auto">
                        <Link to={deal.link} className="block">
                          <Button className="w-full bg-amber-100 hover:bg-amber-200 text-rose-900 font-medium text-sm sm:text-base py-2 sm:py-3 transition-colors duration-200">
                            View Deal
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          
          <Link to="/deals" className="w-full sm:w-auto">
            <Button 
              variant="outline" 
              className="md:hidden lg:hidden w-full sm:w-auto border-rose-800 text-rose-900 hover:bg-rose-50 hover:text-rose-900 hover:border-rose-900 flex items-center gap-2 transition-colors duration-200"
            >
              View All Deals
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HotDeals;