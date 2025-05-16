import { FaGooglePlay, FaApple } from "react-icons/fa";

const DownloadButtons = ({ className = "", ...props }) => {
  return (
    <div className="flex flex-row gap-4 justify-center mt-6 mb-10 md:m-5">
      {/* Google Play Button */}
      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 px-5 py-3 bg-rose-900 text-white rounded-lg hover:bg-gray-800 transition ${className}`}
        {...props}
      >
        <FaGooglePlay className="text-xl" />
        <div className="flex flex-col items-start text-sm leading-tight">
          <span className="text-xs">GET IT ON</span>
          <span className="font-semibold text-base">Google Play</span>
        </div>
      </a>

      {/* App Store Button */}
      <a
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 px-5 py-3 bg-rose-900 text-white rounded-lg hover:bg-gray-800 transition ${className}`}
        {...props}
      >
        <FaApple className="text-xl" />
        <div className="flex flex-col items-start text-sm leading-tight">
          <span className="text-xs">Download on the</span>
          <span className="font-semibold text-base">App Store</span>
        </div>
      </a>
    </div>
  );
};

export default DownloadButtons;
