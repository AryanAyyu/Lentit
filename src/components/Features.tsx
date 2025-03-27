
import { useEffect, useRef } from "react";
import { Truck, DollarSign, Eye, RotateCcw, Ship, ShieldCheck } from "lucide-react";

// Reordered features to bring Virtual Try On to the front
const features = [
  {
    icon: <Eye className="w-8 h-8 text-pink-500" />,
    title: "Virtual Try On",
    description: "Try before you buy"
  },
  {
    icon: <Truck className="w-8 h-8 text-pink-500" />,
    title: "Pan India Delivery",
    description: "Fast shipping across India"
  },
  {
    icon: <DollarSign className="w-8 h-8 text-pink-500" />,
    title: "COD",
    description: "Cash on delivery available"
  },
  {
    icon: <RotateCcw className="w-8 h-8 text-pink-500" />,
    title: "Easy Returns",
    description: "30-day hassle-free returns"
  },
  {
    icon: <Ship className="w-8 h-8 text-pink-500" />,
    title: "We Ship Both Ways",
    description: "Free shipping on returns"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-pink-500" />,
    title: "Quality & Hygiene Check",
    description: "100% quality assurance"
  }
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

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

    const featureElements = document.querySelectorAll(".reveal-on-scroll");
    featureElements.forEach((el) => observer.observe(el));

    return () => {
      featureElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={featuresRef} className="py-16 px-6 bg-gradient-to-r from-pink-50 to-rose-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12 text-rose-600">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="reveal-on-scroll feature-icon-wrapper"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="feature-icon">
                <div className="absolute inset-0 bg-pink-100 rounded-full transform scale-110 animate-pulse-subtle" />
                {feature.icon}
              </div>
              <h3 className="font-medium text-rose-600">{feature.title}</h3>
              <p className="text-sm text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
