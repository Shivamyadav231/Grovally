import React from "react";


function WOf() {
  return (
    <div className="bg-black overflow-hidden pt-20 md:pt-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="block w-full h-[250px] sm:h-[400px] md:h-auto object-cover"
      >
        <source  decoding="async" src="https://res.cloudinary.com/dzu9qjxqa/video/upload/f_auto,q_auto,w_1600/v1781770425/ok_prnduy.webm" type="video/webm" />
      </video>
    </div>
  );
}

export default WOf;