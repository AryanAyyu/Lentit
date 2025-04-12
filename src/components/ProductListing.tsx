import { useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Extended mock product data structure
const productData = {
  men: {
    sherwani: [
      {
        id: "sherwani-001",
        name: "Royal Blue Sherwani",
        price: 129.99,
        imageUrl: "https://images.unsplash.com/photo-1534217466718-ef4950786e24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hlcndhbml8ZW58MHx8MHx8fDA%3D",
        hoverImageUrl: "https://images.unsplash.com/photo-1681717055630-c62333c22fec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2hlcndhbml8ZW58MHx8MHx8fDA%3D",
        description: "Premium embroidered sherwani with intricate detailing",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Blue", "Navy"],
        rating: 4.8,
        reviews: 42
      },
      {
        id: "sherwani-002",
        name: "Maroon Embroidered Sherwani",
        price: 149.99,
        imageUrl: "https://images.unsplash.com/photo-1595341595379-cf0f907a0a11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2hlcndhbml8ZW58MHx8MHx8fDA%3D",
        hoverImageUrl: "https://images.unsplash.com/photo-1595341595375-3a684a3b5e4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2hlcndhbml8ZW58MHx8MHx8fDA%3D",
        description: "Traditional maroon sherwani with gold embroidery",
        sizes: ["M", "L", "XL"],
        colors: ["Maroon"],
        rating: 4.9,
        reviews: 56
      }
    ],
    "kurta-pajama": [
      {
        id: "kurta-001",
        name: "White Cotton Kurta",
        price: 59.99,
        imageUrl: "https://plus.unsplash.com/premium_photo-1691030255948-0276ee6f711e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hoverImageUrl: "https://plus.unsplash.com/premium_photo-1691030256214-dc57034ec935?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S3VydGF8ZW58MHx8MHx8fDA%3D",
        description: "Comfortable white cotton kurta for daily wear",
        sizes: ["S", "M", "L"],
        colors: ["White", "Off-White"],
        rating: 4.5,
        reviews: 38
      }
    ]
  },
  women: {
    // Similar structure for women's products
  }
};

const ProductListing = () => {
  const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
  const productsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  // Get products for the current subcategory
  const products = productData[category as keyof typeof productData]?.[subcategory as keyof typeof productData[string]] || [];

  useEffect(() => {
    window.scrollTo(0, 0);
    
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

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [category, subcategory]);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${category}/${subcategory}/${productId}`);
  };

  return (
    <div className="min-h-screen">
      <Navbar/>
      <div className="pt-10 lg:pt-[100px] pb-8 px-1 bg-muted ">
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-50 py-10 px-6 bg-white">
          <div className=" mx-auto ">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <Link to={`/category/${category}`} className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 capitalize">
                      {category}
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 capitalize">
                      {subcategory?.replace(/-/g, ' ')}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Page Header */}
        <div className="py-8 text-center bg-white">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 capitalize">
            {subcategory?.replace(/-/g, ' ')}
          </h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Premium collection of {subcategory?.replace(/-/g, ' ')} for your special occasions
          </p>
        </div>

        {/* Products Grid */}
        <section className="py-12 px-1 bg-gray-50">
          <div className=" mx-auto">
            {products.length > 0 ? (
              <div
                ref={productsRef}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
              >
                {products.map((product, index) => (
                  <div 
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className="cursor-pointer"
                  >
                    <ProductCard
                      {...product}
                      index={index}
                      category={category} // Add this
                      subcategory={subcategory} // Add this
                      className="reveal-on-scroll transform transition duration-300 hover:scale-105"
                      />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                  No products found in this category
                </h3>
                <p className="text-gray-600 mb-8">
                  We couldn't find any products matching your selection. Please check back later.
                </p>
                <Link to={`/category/${category}`}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300">
                    Back to Categories
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductListing;