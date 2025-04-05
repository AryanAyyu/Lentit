import React from 'react';

const TopImage: React.FC = () => {
  return (
    <section 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/src/components/Video/Video.mp4" type="video/mp4" />
        <source src="/src/components/Video/Video.mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay - Stronger on mobile for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 md:bg-opacity-40"></div>

      {/* Content Container - Adjusted for mobile */}
      <div className="relative w-full px-4 md:w-3/4 h-3/4 flex items-center justify-center text-center">
        
      </div>

      {/* Mobile-specific optimizations */}
      <style jsx>{`
        @media (max-width: 768px) {
          video {
            object-position: 50% 50%; /* Center video on mobile */
          }
          .relative {
            padding: 0 1rem; /* Add side padding on mobile */
          }
        }
      `}</style>
    </section>
  );
};

export default TopImage;