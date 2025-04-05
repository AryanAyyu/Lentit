import { Truck, Eye, IndianRupee, Ship, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Eye className="w-5 h-5 text-stone-900" />,
    title: "Virtual Try On",
    description: "Try before you buy"
  },
  {
    icon: <Truck className="w-5 h-5 text-stone-900" />,
    title: "Pan India Delivery",
    description: "Fast shipping across India"
  },
  {
    icon: <IndianRupee className="w-6 h-6 text-stone-900" />,
    title: "COD",
    description: "Cash on delivery available"
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-stone-900" />,
    title: "Quality & Hygiene Check",
    description: "100% quality assurance"
  }
];

const Features = () => {
  return (
    <div className="py-8 px-4 bg-gradient-to-r from-zinc-900 to-zinc-600">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-3"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-2">
                {feature.icon}
              </div>
              <h3 className="font-medium text-white text-sm">
                {feature.title}
              </h3>
              <p className="text-xs text-white mt-1">
                {feature.description}
              </p>
            </div>
          ))}
          {/* Add empty div if odd number of features to maintain grid */}
          {features.length % 2 !== 0 && (
            <div className="flex flex-col items-center text-center p-3 opacity-0">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-2">
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;