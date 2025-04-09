import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const itemsPerView = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(reviews.length / itemsPerView);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Calculate transform for carousel effect
  const transformValue = `translateX(-${currentIndex * 100}%)`;

  return (
    <section className="py-7 lg:py-10 px-4 sm:px-6 bg-gray-50">
      <div className="mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-rose-900 mb-2">
            Customer Reviews
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            See what our customers have to say about their rental experience
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="relative h-full">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: transformValue }}
            >
              {Array(totalSlides).fill(0).map((_, slideIndex) => (
                <div 
                  key={slideIndex} 
                  className="w-full flex-shrink-0"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 h-[100%] w-[100%]">
                    {reviews
                      .slice(slideIndex * itemsPerView, slideIndex * itemsPerView + itemsPerView)
                      .map((review) => (
                        <div
                          key={review.id}
                          className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full"
                        >
                          <div className="flex items-center mb-4">
                            <img
                              src={review.image}
                              alt={review.name}
                              className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                              <h3 className="font-medium text-gray-900">{review.name}</h3>
                              <p className="text-sm text-gray-500">{review.date}</p>
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
                          <p className="text-gray-700 text-sm md:text-base">{review.text}</p>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array(totalSlides).fill(0).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-rose-900' : 'bg-gray-300'}`}
              aria-label={`Go to review set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;