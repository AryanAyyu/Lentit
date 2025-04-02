
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";



// Mock product data for categories
const categoryProducts = {
  men: [
    {
      id: 101,
      name: "Sherwani",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1534217466718-ef4950786e24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hlcndhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://images.unsplash.com/photo-1681717055630-c62333c22fec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2hlcndhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 102,
      name: "Kurta & Pajama",
      price: 79.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1691030255948-0276ee6f711e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1691030256214-dc57034ec935?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S3VydGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 103,
      name: "Ethnic Wear",
      price: 99.99,
      imageUrl: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1682090781379-4d177df45267?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFBhdGhhbmklMjBzdWl0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 104,
      name: "Ethnic Footwear",
      price: 49.99,
      imageUrl: "https://plus.unsplash.com/premium_photo-1670983855679-05158dc6fb6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEZvb3R3ZWFyfGVufDB8fDB8fHww%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://plus.unsplash.com/premium_photo-1673627556491-2114d2480d1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 105,
      name: "Suits & Blazers",
      price: 69.99,
      imageUrl: "https://images.unsplash.com/photo-1679412330191-6b2faa2f476c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFN1aXRzJTIwJTI2JTIwQmxhemVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      hoverImageUrl: "https://images.unsplash.com/photo-1679412330075-ef0c1c79f8a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN1aXRzJTIwJTI2JTIwQmxhemVyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 106,
        name: "Jackets",
        price: 59.99,
        imageUrl: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEphY2tldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        hoverImageUrl: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEphY2tldHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
      }
  ],
  women: [
    {
      id: 201,
      name: "Lehengas",
      price: 129.99,
      imageUrl: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=735&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-4.0.3&auto=format&fit=crop&w=765&q=80"
    },
    {
      id: 202,
      name: "Sarees",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1502727135886-df285cc8379f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 203,
      name: "Gowns",
      price: 119.99,
      imageUrl: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=873&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 204,
      name: "Jackets",
      price: 99.99,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id: 205,
      name: "Heels",
      price: 69.99,
      imageUrl: "https://images.unsplash.com/photo-1518482207194-1e379dffe574?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1559309123-86f0a7e3183a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 206,
      name: "Kurtis & Suit Sets",
      price: 79.99,
      imageUrl: "https://images.unsplash.com/photo-1581101767113-899c31f65b71?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80"
    }
  ],
  costumes: [
    {
      id: 301,
      name: "Indian Ethnic Costumes",
      price: 79.99,
      imageUrl: "https://images.unsplash.com/photo-1608889476518-53d57fa37859?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1608889476518-53d57fa37859?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
    },
    {
      id: 302,
      name: "Japanese Kimono & Yukata",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=686&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=686&q=80"
    },
    {
      id: 303,
      name: "Superhero Costumes",
      price: 69.99,
      imageUrl: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=736&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=736&q=80"
    },
    {
      id: 304,
      name: "Doctor, Nurse & Lab Coat Costumes",
      price: 74.99,
      imageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1022&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1022&q=80"
    },
    {
      id: 305,
      name: "Police, Army & Firefighter Costumes",
      price: 64.99,
      imageUrl: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-4.0.3&auto=format&fit=crop&w=765&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-4.0.3&auto=format&fit=crop&w=765&q=80"
    },
    {
      id: 306,
      name: "Halloween Costumes",
      price: 59.99,
      imageUrl: "https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
    }
  ],
  accessories: [
    {
      id: 401,
      name: "Jewelry",
      price: 89.99,
      imageUrl: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=880&q=80"
    },
    {
      id: 402,
      name: "Watches",
      price: 149.99,
      imageUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 403,
      name: "Sunglasses",
      price: 59.99,
      imageUrl: "https://images.unsplash.com/photo-1608505362930-d3aabcee5d25?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 404,
      name: "Belts & Scarves",
      price: 99.99,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80"
    },
    {
      id: 405,
      name: "Bags",
      price: 69.99,
      imageUrl: "https://images.unsplash.com/photo-1638290109243-597e5b8c838a?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1601370552761-6eb9c9928f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 406,
      name: "Bridal & Ethnic Accessories",
      price: 79.99,
      imageUrl: "https://images.unsplash.com/photo-1629219793431-cad84116b32c?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
      hoverImageUrl: "https://images.unsplash.com/photo-1628947733273-fb0ff2348497?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80"
    }
  ],
};


const Special = () => {
  const { category } = useParams<{ category: string }>();
  const productsRef = useRef<HTMLDivElement>(null);  
  const validCategory = category as keyof typeof categoryProducts;  
  const products = categoryProducts[validCategory] || [];

  useEffect(() => {
    // Scroll to top when category changes
    window.scrollTo(0, 0);
    
    // Animation for products
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

    const productsElements = document.querySelectorAll(".reveal-on-scroll");

    productsElements.forEach((el) => observer.observe(el));

    return () => {
      productsElements.forEach((el) => observer.unobserve(el));
    };
  }, [category]);

    

  return (
    <div className="min-h-screen">

        <div className="py-6 text-center">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text uppercase tracking-wide drop-shadow-lg">
            Special Categories
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-2 rounded-full"></div>
        </div>



      
      {/* Products Grid */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="container mx-auto">
            {products.length > 0 ? (
                <div
                ref={productsRef}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8"
                >
                {products.map((product, index) => (
                    <div key={product.id} className="group">
                    <ProductCard
                        {...product}
                        index={index}
                        className="transform transition duration-300 group-hover:scale-105"
                    />
                </div>
                ))}
        </div>
    ) : (
      <div className="text-center py-16">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          No products found
        </h3>
        <p className="text-gray-600 mb-8">
          We couldn't find any products in this category. Please check back later.
        </p>
        <Link to="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300">
            Return to Home
          </Button>
        </Link>
      </div>
    )}
  </div>
</section>

    </div>
  );
};

export default Special;
