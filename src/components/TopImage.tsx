import React from 'react';
import desktopVideo from '../assets/Video/Video.mp4';

const TopImage: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={desktopVideo} type="video/mp4" />
        <source src={desktopVideo} type="video/mp4" media="(max-width: 768px)" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 md:bg-opacity-40"></div>

      {/* Content Placeholder */}
      <div className="relative w-full px-4 md:w-3/4 h-3/4 flex items-center justify-center text-center">
        {/* Add text/content here if needed */}
      </div>
    </section>
  );
};

export default TopImage;
