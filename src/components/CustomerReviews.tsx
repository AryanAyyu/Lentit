
import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    text: "I rented a designer dress for my friend's wedding and couldn't be happier! The quality was impeccable, and I received so many compliments. The process was seamless from browsing to return.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Michael Chen",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    text: "As someone who needs formal attire for occasional business events, this service is perfect. Why buy an expensive suit when you can rent one that looks even better? Great selection and service.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    rating: 4,
    text: "I love the concept of fashion rental - it's sustainable and budget-friendly. The items I've rented have always arrived on time and in perfect condition. My only feedback would be to expand the accessories collection.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "David Thompson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    rating: 5,
    text: "I used the rental service for a black-tie event and was thoroughly impressed. The tuxedo fit perfectly, and the quality was indistinguishable from buying new. Will definitely use again!",
    date: "2 months ago"
  },
  {
    id: 5,
    name: "Olivia Williams",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
    rating: 5,
    text: "The costume selection is amazing! I rented for a themed party and everyone thought I had spent a fortune. The shipping was fast and the return process couldn't be easier.",
    date: "1 week ago"
  }
];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const maxIndex = Math.ceil(reviews.length / 3) - 1;

  const goToNext = () => {
    setCurrentIndex(prev => (prev < maxIndex ? prev + 1 : prev));
  };
  
  const goToPrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
  };

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

    if (reviewsRef.current) {
      observer.observe(reviewsRef.current);
    }

    return () => {
      if (reviewsRef.current) {
        observer.unobserve(reviewsRef.current);
      }
    };
  }, []);

  const visibleReviews = reviews.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-rose-900 mb-2">Customer Reviews</h2>
            <p className="text-foreground/70 max-w-md">
              See what our customers have to say about their rental experience
            </p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button 
              onClick={goToPrev}
              disabled={currentIndex === 0}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous reviews"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next reviews"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div 
          ref={reviewsRef} 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-on-scroll"
        >
          {visibleReviews.map((review, index) => (
            <div 
              key={review.id} 
              className="bg-white p-6 rounded-xl shadow-md"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-medium text-stone-900">{review.name}</h3>
                  <p className="text-sm text-foreground/60">{review.date}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-foreground/80">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
