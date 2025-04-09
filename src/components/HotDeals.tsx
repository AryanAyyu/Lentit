import { useRef } from "react";
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
    title: "Weekend Getaway ",
    discount: "35% OFF",
    imageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    mobileImageUrl: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    description: "The perfect selection of casual and formal wear for your weekend trip.",
    link: "/deals/weekend-bundle"
  },
  {
    id: 603,
    title: "Wedding Guest ",
    discount: "30% OFF",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    mobileImageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    description: "Look spectacular as a wedding guest with our curated collection.",
    link: "/deals/wedding-guest"
  }
];

const HotDeals = () => {
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
    <section className="py-5 sm:py-8 px-4 sm:px-6 bg-muted">
      <div className=" mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-8">
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
            className="overflow-x-auto whitespace-nowrap pb-4 [&::-webkit-scrollbar]:hidden -ms-overflow-style:none scrollbar-width:none"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="inline-flex">
              {deals.map((deal) => (
                <div 
                  key={deal.id} 
                  className="inline-block flex-shrink-0 w-[50vw]  lg:w-[calc(20%-1rem)] mr-[calc(7vw-1rem)] lg:mr-[calc(3vw-1rem)] ]"
                  style={{ 
                    minWidth: 'calc(35% - 1rem)',
                    // marginRight: 'calc(7vw - 1rem)'
                  }}
                >
                  <div className="relative bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm sm:shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
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
                      <h3 className="text-sm sm:text-xl font-semibold text-rose-900 mb-4 sm:mb-8 sm:mb-2">{deal.title}</h3>
                      {/* <p className="text-stone-600 text-sm sm:text-base mb-3 sm:mb-4">{deal.description}</p> */}
                      <Link to={deal.link} className="block">
                        <Button className="w-full bg-[#F4E3B2] text-rose-900 text-sm sm:text-base py-2 sm:py-2">
                          View Deal
                        </Button>
                      </Link>
                    </div>
                  </div>
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
      </div>
    </section>
  );
};

export default HotDeals;