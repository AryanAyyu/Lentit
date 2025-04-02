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
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content Container */}
      <div className="relative w-3/4 h-3/4 flex items-center justify-center">
        {/* Add any content (like text or logo) here */}
      </div>
    </section>
  );
};

export default TopImage;
