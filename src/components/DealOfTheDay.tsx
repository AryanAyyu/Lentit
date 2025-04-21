import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

const DealOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });
  const dealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const sec = prev.seconds - 1;
        if (sec >= 0) {
          return { ...prev, seconds: sec };
        }
        const min = prev.minutes - 1;
        if (min >= 0) {
          return { hours: prev.hours, minutes: min, seconds: 59 };
        }
        const hr = prev.hours - 1;
        if (hr >= 0) {
          return { hours: hr, minutes: 59, seconds: 59 };
        }
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
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );
    if (dealRef.current) observer.observe(dealRef.current);
    return () => {
      if (dealRef.current) observer.unobserve(dealRef.current);
    };
  }, []);

  const formatTime = (t: number) => (t < 10 ? `0${t}` : t);

  return (
    <section className="py-1 pb-10 px-2 sm:px-2 bg-[#F4E3B2]">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center justify-evenly md:mr-10">
          {/* Text & Countdown */}
          <div
            ref={dealRef}
            className="reveal-on-scroll order-2 lg:order-1 sm:pl-20 md:pl-0 lg:pl-10"
          >
            <div className="flex items-center gap-1 mb-3 md:mb-4">
              <span className="bg-rose-900 text-[#F4E3B2] text-xs sm:text-sm font-medium px-2 sm:px-3 p-2 ml-4 md:py-1 rounded-full">
                Limited Time
              </span>
              <span className="text-foreground/70 text-sm sm:text-base">
                Deal ends soon
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-900 mb-1 md:mb-4">
              Deal of the Day
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              Designer Evening Gown
            </h3>
            <p className="text-lg sm:text-xl text-rose-800 font-medium mb-1 ">
              ₹2000{" "}
              <span className="text-foreground/70 text-sm sm:text-base line-through ml-2">
                ₹2500
              </span>
            </p>
            <p className="text-foreground/70 text-sm md:text-lg sm:text-base mb-3 md:mb-8 max-w-md">
              This stunning designer evening gown is perfect for special
              occasions. Rent it now for a fraction of the retail price!
            </p>

            <div className="flex gap-4 sm:gap-6 mb-3 md:mb-8 justify-center md:justify-start md:ml-24">
              {["hours", "minutes", "seconds"].map((unit) => (
                <div key={unit} className="flex flex-col items-center">
                  <div className="bg-muted w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-stone-900 text-xl sm:text-2xl font-bold">
                    {formatTime(timeLeft[unit as keyof typeof timeLeft])}
                  </div>
                  <span className="text-xs sm:text-sm text-foreground/70 mt-1">
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-row gap-4 sm:gap-4 justify-center md:justify-start lg-justify-center md:ml-24">
              <Button className="bg-[#74070E] text-[#F4E3B2] hover:text-white text-sm sm:text-base py-2 sm:py-2.5">
                Rent Now
              </Button>
              <Button
                variant="outline"
                className="border-stone-600 text-stone-900 hover:bg-yellow-200 text-sm sm:text-base py-2 sm:py-2.5"
              >
                View Details
              </Button>
            </div>
          </div>

          {/* Image */}
          <div
            className="order-1 lg:order-2 reveal-on-scroll"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="rounded-xl relative w-full">
              <img
                src="https://images.unsplash.com/photo-1642956369651-ccc858c72de7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Deal of the Day"
                className="w-full h-auto object-cover aspect-[9/4] sm:aspect-[4/3] rounded-xl"
              />
              <div className="absolute top-2 right-5 sm:top-4 sm:right-4 bg-rose-800 text-white font-bold text-xs sm:text-lg rounded-full h-10 w-10 sm:h-16 sm:w-16 flex items-center justify-center">
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
