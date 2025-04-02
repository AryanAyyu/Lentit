import { Truck, Eye, IndianRupee, Ship, ShieldCheck } from "lucide-react";

// Reordered features to bring Virtual Try On to the front
const features = [
  {
    icon: <Eye className="w-8 h-8 text-stone-900 relative z-10" />,
    title: "Virtual Try On",
    description: "Try before you buy"
  },
  {
    icon: <Truck className="w-8 h-8 text-stone-900 relative z-10" />,
    title: "Pan India Delivery",
    description: "Fast shipping across India"
  },
  {
    icon: <IndianRupee className="w-10 h-10 text-stone-900 relative z-10" />,
    title: "COD",
    description: "Cash on delivery available"
  },
  {
    icon: <Ship className="w-8 h-8 text-stone-900 relative z-10" />,
    title: "We Ship Both Ways",
    description: "Free shipping on returns"
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-stone-900 relative z-10" />,
    title: "Quality & Hygiene Check",
    description: "100% quality assurance"
  }
];

const Features = () => {
  return (
    <div className="py-16 px-6 bg-gradient-to-r from-zinc-900 to-zinc-600">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12 text-white">Our Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 ml-40">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-icon-wrapper flex flex-col items-center text-center 
                         transition-transform duration-300 hover:-translate-y-2 hover:scale-105"
            >
              <div className="feature-icon relative flex items-center justify-center w-16 h-16 bg-white rounded-full">
                {feature.icon}
              </div>
              <h3 className="font-medium text-white mt-3">{feature.title}</h3>
              <p className="text-sm text-white">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
