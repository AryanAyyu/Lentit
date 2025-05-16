import { useState, useEffect } from "react";
import { FaMobileAlt, FaMagic, FaSmile } from "react-icons/fa";
import DownloadButtons from "./DownloadButtons";

export default function HomePage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);

  const handleClose = () => setShowModal(false);

  const handleDownload = () => {
    window.location.href = "https://example.com/app";
  };

  return (
    <div>
      <div className="relative md:flex md:flex-col items-center justify-center bg-white hidden">
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative bg-white rounded-lg shadow-xl w-11/12 max-w-4xl flex overflow-hidden transform transition-all">
              {/* Left Side - Image */}
              <div className="w-1/2 hidden md:block">
                <img
                  src="https://media.istockphoto.com/id/1336136316/photo/woman-online-shopping-on-smart-phone-fashion-clothes-at-home.jpg?s=2048x2048&w=is&k=20&c=wD49oFxE8n1T7PeMoO5vcHrIFZZMCkpV1-mGeQski7k="
                  alt="App Preview"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Right Side - Content */}
              <div className="w-full md:w-1/2 bg-[#F4E3B2] p-8 relative flex flex-col justify-center">
                <button
                  onClick={handleClose}
                  className="absolute top-3 right-3 text-2xl text-[#74070E] hover:text-gray-700 focus:outline-none"
                >
                  &times;
                </button>

                <h2 className="text-4xl font-bold text-[#74070E] text-center mt-6 md:mt-0">
                  Get the App
                </h2>
                <p className="text-black bold mt-4 text-center bg-white rounded-lg p-3 shadow-md">
                  Unlock a seamless experience designed just for you. From
                  personalized recommendations to faster access and exclusive
                  rewards — everything is just a tap away.
                </p>

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
                  {/* <button
                  onClick={handleDownload}
                  className="py-3 px-6 bg-[#74070E] text-[#F4E3B2] rounded-lg hover:bg-[#64060E] transition duration-300"
                >
                  Download App
                </button> */}
                  <DownloadButtons />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="relative flex flex-col items-center justify-center bg-white md:hidden">
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative bg-[#F4E3B2] rounded-lg shadow-xl w-11/12 max-w-lg p-8 transform transition-all">
              <button
                onClick={handleClose}
                className="absolute top-0 right-3 text-2xl text-[#74070E] hover:text-gray-700 focus:outline-none"
              >
                &times;
              </button>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#74070E] leading-tight text-center my-7 shadow-md bg-white p-2 rounded-lg tracking-tight drop-shadow-md">
                Try Before You Buy – On Our App
              </h2>

              <div className="flex flex-col">
                <div className="flex justify-center">
                  <img
                    className="w-44"
                    src="\src\components\images\download.svg"
                    alt=""
                  />
                </div>
                <div className="flex justify-around mt-6 flex-row">
                  <div className="flex flex-col items-center rounded-lg bg-white p-2">
                    <FaMagic className="text-xl text-[#74070E]" />
                    <span className="mt-2 text-[#74070E] text-xs text-center">
                      Virtual Try-On
                    </span>
                  </div>
                  <div className="flex flex-col items-center rounded-lg bg-white p-2">
                    <FaMobileAlt className="text-xl text-[#74070E]" />
                    <span className="mt-2 text-[#74070E] text-xs text-center">
                      Seamless Experience
                    </span>
                  </div>
                  <div className="flex flex-col items-center rounded-lg bg-white p-2">
                    <FaSmile className="text-xl text-[#74070E]" />
                    <span className="mt-2 text-[#74070E] text-xs text-center">
                      Exclusive Offers
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <DownloadButtons />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
