import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#F4E3B2] px-6">
        <Navbar />
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">🚫</div>

          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">404</h1>
          <p className="text-lg text-gray-600 mb-6">
            Oops! The page you were looking for doesn’t exist.
          </p>

          <a
            href="/"
            className="inline-block bg-rose-900 text-[#F4E3B2] px-6 py-2 rounded-lg hover:bg-rose-800 transition"
          >
            Return to Home
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NotFound;
