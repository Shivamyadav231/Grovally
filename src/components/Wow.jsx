import React from "react";
import E from "../assets/E.png";
import F from "../assets/F.png";
import G from "../assets/G.png";
import H from "../assets/H.png";
import I from "../assets/I.png";
import J from "../assets/J.png";
import M from "../assets/M.png";
import N from "../assets/N.png";
import P from "../assets/P.png";
import Q from "../assets/Q.png";
import V from "../assets/V.png";
import W from "../assets/W.png";
import X from "../assets/X.png";

function Wow() {
  const logos = [E, F, G, H, I, J, M, N, P, Q, V, W, X];

  return (
    <section className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
          <h2 className="text-4xl font-bold text-red-600">
            120+ Featured Clients from 12 Different Countries
          </h2>

          <p className="text-black text-lg">
            We proudly serve businesses worldwide and help them achieve
            measurable digital success through innovative solutions.
          </p>
        </div>

        <div className="relative">
          <div className="flex animate-scroll gap-10 w-max">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[180px] h-36 bg-white border border-gray-200 rounded-2xl shadow-sm "
              >
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className="h-64 object-contain  "
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