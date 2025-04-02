
import { useEffect, useRef } from "react";
import { Search, CreditCard, PackageOpen } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-12 h-12 text-stone-500" />,
    title: "Browse & Reserve",
    description: "Browse our extensive collection and select the perfect items for your occasion"
  },
  {
    icon: <CreditCard className="w-12 h-12 text-stone-500" />,
    title: "Pay & Schedule Delivery",
    description: "Choose your rental period and delivery date that suits your needs"
  },
  {
    icon: <PackageOpen className="w-12 h-12 text-stone-500" />,
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
    <section className="py-16 px-6 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-rose-900 mb-4">How Lent-It Works</h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Renting premium fashion has never been easier. Our simple three-step process ensures a seamless experience.
          </p>
        </div>
        
        <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="step-item reveal-on-scroll flex flex-col items-center text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-pink-100 p-6 rounded-full mb-6 relative">
                <div className="absolute inset-0 bg-pink-200/50 rounded-full transform scale-110 animate-pulse-subtle" />
                {step.icon}
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md flex-1 w-full">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/3">
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

// This component doesn't exist in the file, let's create an ArrowRight component to use
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
