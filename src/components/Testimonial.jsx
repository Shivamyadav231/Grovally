import React from "react";
import shivam from "../assets/shivam.mp4";
import logo from "../assets/logo.png";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaJava,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiLaravel,
  SiJavascript,
  SiShopify,
  SiWordpress,
} from "react-icons/si";

function Testimonial() {
  const techs = [
    { icon: <FaHtml5 size={40} color="#e34c26" />, name: "HTML" },
    { icon: <FaCss3Alt size={40} color="#264de4" />, name: "CSS" },
    { icon: <SiJavascript size={40} color="#f7df1e" />, name: "JavaScript" },
    { icon: <FaReact size={40} color="#61DBFB" />, name: "React" },
    { icon: <FaNodeJs size={40} color="#3C873A" />, name: "Node.js" },
    { icon: <SiMongodb size={40} color="#4DB33D" />, name: "MongoDB" },
    { icon: <SiMysql size={40} color="#00758F" />, name: "MySQL" },
    { icon: <FaAws size={40} color="#FF9900" />, name: "AWS" },
    { icon: <SiLaravel size={40} color="#FF2D20" />, name: "Laravel" },
    { icon: <FaPhp size={40} color="#777BB4" />, name: "PHP" },
    { icon: <FaJava size={40} color="#f89820" />, name: "Java" },
    { icon: <SiShopify size={40} color="#96bf48" />, name: "Shopify" },
    { icon: <SiWordpress size={40} color="#21759b" />, name: "WordPress" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-red-900 via-red-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm tracking-widest">
            OUR EXPERTISE
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold">
            Technologies & Innovation
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-gray-300 text-lg leading-8">
            We leverage cutting-edge technologies, cloud platforms,
            AI solutions, and modern frameworks to build scalable,
            high-performance digital products.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* VIDEO */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 h-[550px]"
          >
            <div className="relative h-full">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10"
              >
                <source src={shivam} type="video/mp4" />
              </video>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>

          {/* TECH PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 h-[550px] bg-gradient-to-br from-white to-red-50 rounded-3xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-red-100 flex flex-col"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-red-600 to-cyan-500 bg-clip-text text-transparent">
              Technologies We Master
            </h2>

            <p className="text-center text-gray-600 mt-3 mb-8">
              Modern technologies powering world-class digital products,
              AI systems, cloud solutions, and enterprise applications.
            </p>

            {/* CENTER AREA */}
            <div className="relative flex justify-center items-center flex-1">

              {/* ROTATING TEXT */}
              <svg
                className="absolute w-52 h-52 animate-[spin_20s_linear_infinite]"
                viewBox="0 0 200 200"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
                  />
                </defs>

                <text fill="#06b6d4" fontSize="12" fontWeight="bold">
                  <textPath href="#circlePath">
                    • AI • DEVELOPMENT • CLOUD • BPO • KPO • FINANCE • INNOVATION •
                  </textPath>
                </text>
              </svg>

              {/* ICONS */}
              <div className="absolute flex flex-wrap justify-center items-center gap-5 max-w-md">
                {techs.map((tech, index) => (
                  <div
                    key={index}
                    title={tech.name}
                    className="group w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                  >
                    {tech.icon}
                  </div>
                ))}
              </div>

              {/* CENTER LOGO */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="w-28 h-28 rounded-3xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-[0_0_40px_rgba(255,0,0,0.4)] z-10"
              >
                <img
                  src={logo}
                  alt="Grovally Logo"
                  className="w-20 object-contain"
                />
              </motion.div>

            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <a
                href="tel:+918920817608"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
              >
                🚀 Let's Discuss Your Project
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Testimonial;