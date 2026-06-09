import React from "react";

import F from "../assets/F.png";
import I from "../assets/I.png";
import J from "../assets/J.png";
import M from "../assets/M.png";
import N from "../assets/N.png";
import P from "../assets/P.png";
import Q from "../assets/Q.png";
import V from "../assets/V.png";
import W from "../assets/W.png";
import X from "../assets/X.png";

import CC from "../assets/CC.png";
import DD from "../assets/DD.png";

import GG from "../assets/GG.png";
import HH from "../assets/HH.png";
import II from "../assets/II.png";
import JJ from "../assets/JJ.png";
import KK from "../assets/KK.png";

import MM from "../assets/MM.png";
import NN from "../assets/NN.png";
import RO from "../assets/RO.png"

function Wow() {
  const logos = [
    F,
    I,
    J,
    M,
    N,
    P,
    Q,
    V,
    W,
    X,
    DD,
    GG,
    HH,
    II,
    JJ,
    KK,
    CC,
    MM,
    NN,
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-red-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-600 font-semibold text-sm tracking-wider">
            TRUSTED WORLDWIDE
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-extrabold text-gray-900">
            Brands That Trust
            <img
  src={RO}
  alt="logo"
  className="w-40 md:w-48 bg-red-100 object-contain"
/>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-8">
            From startups to established enterprises, businesses trust
            Grovally for innovative IT solutions, AI automation,
            BPO, KPO, financial services, and digital transformation.
          </p>
        </div>

        {/* Logo Slider */}
        <div className="relative overflow-hidden">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent"></div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent"></div>

          <div className="flex animate-scroll gap-8 w-max">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="group flex items-center justify-center min-w-[220px] h-32 bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className="max-h-64 w-auto object-contain   transition duration-300"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Wow;