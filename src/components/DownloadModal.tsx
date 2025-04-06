import { useState, useEffect } from 'react';
import { FaMobileAlt, FaMagic, FaSmile } from 'react-icons/fa';

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000); // Modal appears after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  // Freeze background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showModal]);

  const handleClose = () => setShowModal(false);

  const handleDownload = () => {
    // Redirect to your app download page; update the URL as needed
    window.location.href = 'https://example.com/app';
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-white">
      {/* Other homepage content goes here */}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Dark overlay to freeze background */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-[#F4E3B2] rounded-lg shadow-xl w-11/12 max-w-lg p-8 transform transition-all">
            {/* Cross button for closing */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-2xl text-[#74070E] hover:text-gray-700 focus:outline-none"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-[#74070E] text-center mt-8 md:mt-0">
              Get the App
            </h2>
            <p className="text-[#74070E] mt-4 text-center">
              Download our app for a better experience with virtual try-ons.
            </p>
            {/* Icons representing app features */}
            <div className="flex justify-around mt-6">
              <div className="flex flex-col items-center">
                <FaMagic className="text-4xl text-[#74070E]" />
                <span className="mt-2 text-[#74070E] text-sm text-center">
                  Virtual Try-On
                </span>
              </div>
              <div className="flex flex-col items-center">
                <FaMobileAlt className="text-4xl text-[#74070E]" />
                <span className="mt-2 text-[#74070E] text-sm text-center">
                  Seamless Experience
                </span>
              </div>
              <div className="flex flex-col items-center">
                <FaSmile className="text-4xl text-[#74070E]" />
                <span className="mt-2 text-[#74070E] text-sm text-center">
                  Exclusive Offers
                </span>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleDownload}
                className="py-3 px-6 bg-[#74070E] text-[#F4E3B2] rounded-lg hover:bg-[#64060E] transition duration-300 mb-8 md:mb-0"
              >
                Download App
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
