import React from "react";

function Testimonial() {
  return (
    <div className="py-16 bg-black">
      <h1 className="text-4xl text-center font-bold text-red-800 mb-10">
        What Our Clients Say
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6">
        
        <iframe
          className="w-full md:w-1/2 h-64 md:h-96 rounded-2xl shadow-lg"
          src="https://www.youtube.com/embed/kKNoBH0iE1k"
          title="Client Testimonial 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <iframe
          className="w-full md:w-1/2 h-64 md:h-96 rounded-2xl shadow-lg"
          src="https://www.youtube.com/embed/Hkj7Z8Uizcs"
          title="Client Testimonial 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

      </div>
    </div>
  );
}

export default Testimonial;