
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { User, ShoppingBag, VenetianMask, Gem } from "lucide-react";

const categories = [
  {
    title: "Men",
    icon: <User className="w-8 h-8 text-coffee" />,
    link: "/category/men",
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    description: "Premium suits, shirts and accessories"
  },
  {
    title: "Women",
    icon: <User className="w-8 h-8 text-coffee" />,
    link: "/category/women",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=735&q=80",
    description: "Elegant dresses, gowns and more"
  },
  {
    title: "Costumes",
    icon: <VenetianMask className="w-8 h-8 text-coffee" />,
    link: "/category/costumes",
    image: "https://images.unsplash.com/photo-1742316963399-282d4685987c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Costumes for every occasion"
  },
  {
    title: "Accessories",
    icon: <Gem className="w-8 h-8 text-coffee" />,
    link: "/category/accessories",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
    description: "Complete your look with accessories"
  }
];

const Categories = () => {
  const categoriesRef = useRef<HTMLDivElement>(null);

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

    const categoryElements = document.querySelectorAll(".category-item");
    categoryElements.forEach((el) => observer.observe(el));

    return () => {
      categoryElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-4 text-stone-900">Shop By Category</h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Discover our premium collection of items available for rent in various categories
        </p>
        
        <div ref={categoriesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link 
              to={category.link} 
              key={index} 
              className="category-item reveal-on-scroll bg-white shadow-md hover:shadow-lg rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                    <p className="text-white/80 text-sm">{category.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
