import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Percent, IndianRupee, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { featuredProducts } from '@/data/mockData';

const DealOfTheDayThrift = () => {
  const dealProduct = featuredProducts[0];
  const discountPrice = dealProduct.price * 0.7; // 30% off

  const [timeLeft, setTimeLeft] = React.useState({
    hours: 23,
    minutes: 54,
    seconds: 58
  });

  function formatTime(time: number): string {
    return time.toString().padStart(2, '0');
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-2 sm:py-12 bg-gradient-to-r from-accent1-light to-accent1">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative aspect-[4/3] md:aspect-[5/3]">
              <img 
                src={dealProduct.image} 
                alt={dealProduct.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
              <Badge className="absolute top-2 right-4 bg-red-500 text-white">
                <Percent className="h-4 w-4 mr-1" /> 30% OFF
              </Badge>
            </div>

            {/* Content Section */}
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div className="mb-2 md:mb-0">
                  <h2 className="text-xl md:text-2xl font-bold text-rose-800">Deal of the Day</h2>
                  <p className="text-sm md:text-base text-teal-600">Limited time offer - Don't miss out!</p>
                </div>
                
                {/* Timer */}
                <div className="flex items-center gap-2 ml-12">
                  <Timer className="h-4 w-4 md:h-5 md:w-5 text-thrift-600" />
                  <div className="flex gap-1  md:gap-2">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                      <div key={unit} className="flex flex-col items-center">
                        <div className="bg-muted w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-stone-900 text-lg md:text-xl font-bold">
                          {formatTime(value)}
                        </div>
                        <span className="text-xs text-foreground/70 mt-1 capitalize">{unit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3 mt-4 lg:mt-12">{dealProduct.name}</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">
                Exclusive daily deal on this premium thrifted item. 
                Grab it before it's gone!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 md:gap-4 lg:mt-10">
                  <span className="text-2xl md:text-3xl font-bold text-thrift-700 flex items-center">
                    <IndianRupee className="h-5 w-5 md:h-6 md:w-6 mr-1" />
                    {discountPrice.toFixed(2)}
                  </span>
                  <span className="text-lg md:text-xl text-gray-500 line-through flex items-center">
                    <IndianRupee className="h-4 w-4 md:h-5 md:w-5 mr-1" />
                    {dealProduct.price.toFixed(2)}
                  </span>
                </div>
                <Link to={`/thrift/productthrift/${dealProduct.id}`}>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 md:py-2.5 lg:mt-10">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default DealOfTheDayThrift;