
import React from 'react';
import { cn } from '@/lib/utils';

const ThriftingQuote = () => {
  return (
    <section className="py-3 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <h2 className="text-xl lg:text-3xl font-bold text-thrift-800">
              Sustainable Fashion Through Thrifting
            </h2>
            <blockquote className="text-sm italic text-thrift-600 border-l-4 border-thrift-500 pl-4">
              "Thrifting isn't just shopping; it's treasure hunting with a purpose. 
              Every pre-loved item has a story, and by choosing second-hand, 
              we're writing a new chapter in sustainable fashion."
            </blockquote>
            <p className="text-yellow-700">
              Join us in making fashion more sustainable, one thrifted item at a time.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2xvdGglMjBTdG9yZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Thrift Store Collection"
              className={cn(
                "w-full h-64 object-cover rounded-lg shadow-md",
                "transform hover:scale-105 transition-transform duration-300"
              )}
            />
            <img
              src="https://images.unsplash.com/photo-1477901492169-d59e6428fc90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2xvdGglMjBTdG9yZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Sustainable Fashion"
              className={cn(
                "w-full h-64 object-cover rounded-lg shadow-md",
                "transform hover:scale-105 transition-transform duration-300"
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThriftingQuote;
