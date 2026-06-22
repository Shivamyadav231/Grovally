import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function IndiaMap() {
  const locations = [
    // India States
    { name: "Delhi", top: "26%", left: "17%" },
    { name: "Uttar Pradesh", top: "30%", left: "20%" },
    { name: "Maharashtra", top: "26%", left: "15%" },
    { name: "Gujarat", top: "42%", left: "8%" },
    { name: "Rajasthan", top: "33%", left: "10%" },
    { name: "Punjab", top: "33%", left: "15%" },
    { name: "Haryana", top: "36%", left: "15%" },
    { name: "Bihar", top: "42%", left: "25%" },
    
    
    { name: "Kerala", top: "85%", left: "15%" },
   

    // International Locations
    { name: "China", top: "40%", left: "70%" },
    { name: "Saudi Arabia", top: "49%", left: "53%" },
    { name: "Russia", top: "20%", left: "69%" },
  ];

  return (
    <>
     
      

      {/* Desktop View */}
      <section className="hidden lg:block w-full py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-5xl font-bold text-red-600 mb-16">
            Trusted By 100+ Clients Worldwide
          </h2>
          <p className="mt-5 text-black text-center text-lg">
          Serving clients across 15+ Indian States along with China,
          Saudi Arabia and Russia.
        </p>

          <div className="relative w-full">
            {/* World Map */}
            <img
              src="https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770397/Komo_mobaci.png"
              alt="World Map"
              className="w-full h-auto object-contain"
              loading="lazy"
            />

            {/* Location Pins */}
            {locations.map((loc, index) => (
              <div
                key={index}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: loc.top,
                  left: loc.left,
                }}
              >
                <div className="flex flex-col items-center">
                  {/* Location Name */}
                  <div className="mb-2 px-3 py-1 bg-white rounded-full shadow-lg text-red-600 text-xs font-semibold whitespace-nowrap">
                    {loc.name}
                  </div>

                  {/* Animated Pin */}
                  <div className="relative">
                    <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-40"></span>

                    <FaMapMarkerAlt className="relative text-red-600 text-4xl drop-shadow-lg animate-bounce" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-4 gap-6 mt-16 text-center">
            <div className="bg-red-50 rounded-2xl p-6 shadow-md">
              <h3 className="text-4xl font-bold text-red-600">100+</h3>
              <p className="text-gray-600 mt-2">Happy Clients</p>
            </div>

            <div className="bg-red-50 rounded-2xl p-6 shadow-md">
              <h3 className="text-4xl font-bold text-red-600">15+</h3>
              <p className="text-gray-600 mt-2">Indian States</p>
            </div>

            <div className="bg-red-50 rounded-2xl p-6 shadow-md">
              <h3 className="text-4xl font-bold text-red-600">4</h3>
              <p className="text-gray-600 mt-2">Countries Served</p>
            </div>

            <div className="bg-red-50 rounded-2xl p-6 shadow-md">
              <h3 className="text-4xl font-bold text-red-600">24/7</h3>
              <p className="text-gray-600 mt-2">Customer Support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}