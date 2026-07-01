import React from "react";

function WOf() {
  return (
    <div className="bg-black overflow-hidden pt-10 md:pt-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls={true}
        preload="metadata"
        className="block w-full h-[250px] sm:h-[400px] md:h-auto object-contain"
   
      >
        <source
          src="https://res.cloudinary.com/dzu9qjxqa/video/upload/f_auto,q_auto,w_1600/v1782889648/India_s_comprehensive_business_powerhouse_10_il7t3o.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default WOf;
