import { useEffect, useRef } from "react";
import { Search, CreditCard, PackageOpen } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-8 h-8 sm:w-12 sm:h-12 text-white" />,
    title: "Browse & Reserve",
    description: "Browse our extensive collection and select the perfect items for your occasion"
  },
  {
    icon: <CreditCard className="w-8 h-8 sm:w-12 sm:h-12 text-white" />,
    title: "Pay & Schedule Delivery",
    description: "Choose your rental period and delivery date that suits your needs"
  },
  {
    icon: <PackageOpen className="w-8 h-8 sm:w-12 sm:h-12 text-white" />,
    title: "Wear & Return",
    description: "Enjoy your premium items and return them using our prepaid packaging when you're done"
  }
];

const HowItWorks = () => {
  const stepsRef = useRef<HTMLDivElement>(null);

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

    const elements = document.querySelectorAll(".step-item");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-2 md:py-4 lg:py-5 px-4 sm:px-6 bg-[#F4E3B2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4 md:mb-12 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-rose-900 mb-3 sm:mb-4">How Lent-It Works</h2>
          <p className="text-foreground/70 max-w-xl mx-auto text-sm sm:text-base">
            Renting premium fashion has never been easier. Our simple three-step process ensures a seamless experience.
          </p>
        </div>
        
        <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="step-item reveal-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Mobile layout - side by side */}
              <div className=" md:hidden lg:hidden flex items-start gap-4 mb-4">
                <div className="bg-rose-900 p-3 rounded-full relative shrink-0">
                  <div className="absolute inset-0 bg-pink-200/50 rounded-full transform scale-110 animate-pulse-subtle" />
                  {step.icon}
                </div>
                <h3 className="text-sm font-semibold text-slate-800 mt-1">{step.title}</h3>
              </div>

              {/* Desktop layout - stacked */}
              <div className="hidden sm:flex flex-col items-center text-center">
                <div className="bg-rose-900 p-6 rounded-full mb-6 relative">
                  <div className="absolute inset-0 bg-pink-200/50 rounded-full transform scale-110 animate-pulse-subtle" />
                  {step.icon}
                </div>
                <h3 className="md:text-lg lg:text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
              </div>

              {/* Description (same for both) */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <p className="text-foreground/70 text-sm sm:text-base md:h-[110px] lg:h-auto">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block lg:block absolute right-0 md:top-1/2 lg:top-3/4 transform translate-x-1/2 -translate-y-1/3">
                  <ArrowRight className="w-8 h-8 text-rose-900" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowRight = ({ className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default HowItWorks;