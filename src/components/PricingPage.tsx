import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Variants } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const PricingPage = () => {
  // Animation variants
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    }
  };
  
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const plans = [
    {
      title: "Basic",
      price: "Free",
      period: "always",
      tag: "STARTER",
      tagColor: "bg-accent1-DEFAULT",
      description: "Perfect for casual sellers looking to declutter their closet",
      features: [
        "Up to 10 active listings",
        "Basic analytics",
        "Standard commission (15%)",
        "Community support"
      ],
      buttonText: "Get Started",
      buttonVariant: "bg-thrift-600 hover:bg-thrift-700"
    },
    {
      title: "Pro",
      price: "₹299",
      period: "month",
      tag: "POPULAR",
      tagColor: "bg-thrift-600",
      description: "For regular sellers who want to grow their thrifting business",
      features: [
        "Up to 50 active listings",
        "Advanced analytics",
        "Reduced commission (10%)",
        "Priority support",
        "Listing promotion"
      ],
      buttonText: "Subscribe Now",
      buttonVariant: "bg-primary"
    },
    {
      title: "Business",
      price: "₹999",
      period: "month",
      tag: "UNLIMITED",
      tagColor: "bg-accent2-DEFAULT",
      description: "For power sellers and small thrift businesses",
      features: [
        "Unlimited active listings",
        "Business analytics dashboard",
        "Lowest commission (7%)",
        "Dedicated account manager",
        "Featured store placement",
        "Bulk listing tools"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "bg-accent2-DEFAULT hover:bg-accent2-dark"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar/>
      <div className="pt-10 lg:pt-[100px] pb-8 px-6 bg-muted ">
        <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-thrift-800">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that works best for your selling needs with no hidden fees
        </p>
      </div>

      {/* Pricing Plans */}
      <div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {plans.map((plan, index) => (
          <div
            key={plan.title}
            variants={fadeIn}
            className={`border rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300 ${
              index === 1 
                ? "bg-rose-50 border-thrift-300 shadow-md hover:shadow-lg hover:-translate-y-2" 
                : "bg-white hover:-translate-y-1"
            } flex flex-col relative`}
          >
            {/* Plan Tag */}
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <span className={`${plan.tagColor} text-rose-900 text-sm font-large px-4 py-1 rounded-full`}>
                {plan.tag}
              </span>
            </div>

            {/* Plan Title */}
            <h3 className="text-2xl font-bold mb-2 mt-4 text-thrift-700">{plan.title}</h3>

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-muted-foreground"> / {plan.period}</span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6">{plan.description}</p>

            {/* Features List */}
            <ul className="mb-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button className={`w-full ${plan.buttonVariant}`}>
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>

      {/* Custom Solution Section */}
      <div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-20 text-center bg-thrift-100 py-12 px-4 rounded-lg max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4 text-thrift-800">
          Need a custom solution?
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          We offer tailored plans for larger thrift stores and enterprise customers.
          Contact our team to learn more.
        </p>
        <Button variant="outline" className="border-thrift-600 text-thrift-700 hover:bg-thrift-50">
          Get in Touch
        </Button>
      </div>
        </div>
      </div>
      <Footer/>
    </div>
        
  );
};

export default PricingPage;