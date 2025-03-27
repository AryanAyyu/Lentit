
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { SmartphoneNfc, Download, Star, ShoppingBag, Clock } from "lucide-react";

const AppDownload = () => {
  const appRef = useRef<HTMLDivElement>(null);

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

    const elements = document.querySelectorAll(".app-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-rose-600 to-pink-500 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={appRef} className="app-item reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download Our App For <span className="text-pink-200">Enhanced Experience</span>
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Enjoy a seamless rental experience with our mobile app. Browse, book, and manage your rentals on the go.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full mt-1">
                  <SmartphoneNfc className="w-6 h-6 text-pink-200" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Virtual Try-On</h3>
                  <p className="text-white/80">
                    Our app features advanced AR technology that lets you virtually try on outfits before renting.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full mt-1">
                  <ShoppingBag className="w-6 h-6 text-pink-200" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Easy Booking</h3>
                  <p className="text-white/80">
                    Book your favorite fashion items with just a few taps and have them delivered to your doorstep.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-full mt-1">
                  <Clock className="w-6 h-6 text-pink-200" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Rental Reminders</h3>
                  <p className="text-white/80">
                    Get timely notifications about your rental period and upcoming return dates.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-rose-600 hover:bg-white/90 gap-2">
                <Download size={18} />
                App Store
              </Button>
              <Button className="bg-white text-rose-600 hover:bg-white/90 gap-2">
                <Download size={18} />
                Google Play
              </Button>
            </div>
          </div>
          
          <div className="app-item reveal-on-scroll" style={{ transitionDelay: "200ms" }}>
            <div className="relative">
              <div className="bg-pink-300/40 w-64 h-64 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=736&q=80" 
                alt="Mobile App" 
                className="relative z-10 max-w-xs mx-auto shadow-2xl rounded-3xl border-8 border-white/10"
              />
              
              {/* Floating elements to enhance the visual appeal */}
              <div className="absolute -top-10 -right-10 bg-white/20 p-4 backdrop-blur-md rounded-2xl shadow-xl z-20 animate-float">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <Star className="w-5 h-5 text-yellow-300" />
                  <Star className="w-5 h-5 text-yellow-300" />
                  <Star className="w-5 h-5 text-yellow-300" />
                  <Star className="w-5 h-5 text-yellow-300" />
                </div>
                <p className="text-xs mt-1">4.9 App Rating</p>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white/20 p-3 backdrop-blur-md rounded-2xl shadow-xl z-20 animate-float" style={{ animationDelay: "1s" }}>
                <p className="text-xs font-bold">10K+ Downloads</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
