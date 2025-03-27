
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

const DealOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  const dealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const newSeconds = prevTime.seconds - 1;
        if (newSeconds >= 0) {
          return { ...prevTime, seconds: newSeconds };
        }
        
        const newMinutes = prevTime.minutes - 1;
        if (newMinutes >= 0) {
          return { ...prevTime, minutes: newMinutes, seconds: 59 };
        }
        
        const newHours = prevTime.hours - 1;
        if (newHours >= 0) {
          return { hours: newHours, minutes: 59, seconds: 59 };
        }
        
        // Reset when countdown is done
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

    if (dealRef.current) {
      observer.observe(dealRef.current);
    }

    return () => {
      if (dealRef.current) {
        observer.unobserve(dealRef.current);
      }
    };
  }, []);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div ref={dealRef} className="reveal-on-scroll order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-vanilla text-white text-sm font-medium px-3 py-1 rounded-full">Limited Time</span>
              <span className="text-foreground/70">Deal ends soon</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-coffee mb-4">Deal of the Day</h2>
            <h3 className="text-2xl font-semibold mb-2">Designer Evening Gown</h3>
            <p className="text-xl text-vanilla font-medium mb-1">
              $59.99 <span className="text-foreground/70 text-base line-through ml-2">$149.99</span>
            </p>
            <p className="text-foreground/70 mb-8 max-w-md">
              This stunning designer evening gown is perfect for special occasions. Rent it now for a fraction of the retail price!
            </p>
            
            <div className="flex gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="bg-muted w-16 h-16 rounded-lg flex items-center justify-center text-coffee text-2xl font-bold">
                  {formatTime(timeLeft.hours)}
                </div>
                <span className="text-sm text-foreground/70 mt-1">Hours</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-muted w-16 h-16 rounded-lg flex items-center justify-center text-coffee text-2xl font-bold">
                  {formatTime(timeLeft.minutes)}
                </div>
                <span className="text-sm text-foreground/70 mt-1">Minutes</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-muted w-16 h-16 rounded-lg flex items-center justify-center text-coffee text-2xl font-bold">
                  {formatTime(timeLeft.seconds)}
                </div>
                <span className="text-sm text-foreground/70 mt-1">Seconds</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Button className="bg-coffee hover:bg-coffee/90">Rent Now</Button>
              <Button variant="outline" className="border-coffee text-coffee hover:bg-coffee/10">
                View Details
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 reveal-on-scroll" style={{ transitionDelay: "200ms" }}>
            <div className="rounded-xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1642956369651-ccc858c72de7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Deal of the Day" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute top-4 right-4 bg-vanilla text-white font-bold text-lg rounded-full h-16 w-16 flex items-center justify-center">
                60% OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
