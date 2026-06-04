import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Aaa from "../assets/Aaa.png";
import BBB from "../assets/BBB.png"
import KKK from "../assets/KKK.png"
import Sss from "../assets/Sss.png"



const cards = [
  {
    title: "Grovally Business Solution",
    description:
      "Custom applications, AI models, and cloud systems built for growth.",
    Image : Aaa
   
  },
  {
    title: "Grovally Finance Solution",
    description:
      "Smart support, automation, and multilingual customer care.",
    Image : BBB
   
    
  },
  {
    title: "Grovally Pro tools",
    description: "Research, analytics, and strategic intelligence.",
    Image: KKK
    
  },
  {
    title: "Grovally Business Education",
    description: "Loan support, credit insights, and finance automation.",
    Image: Sss
    
  },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-black">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-red-500/20 blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[150px] animate-pulse"></div>
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/10 blur-[120px]"></div>
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-7xl rounded-[40px] border border-white/20 bg-white/80 backdrop-blur-3xl p-10 md:p-20 shadow-[0_20px_120px_rgba(255,0,0,0.20)]"
        >
          <div className="mb-6 inline-flex rounded-full border border-red-300 bg-red-100 px-5 py-2 text-sm font-medium tracking-[0.2em] text-red-700">
            AI-POWERED BUSINESS SOLUTIONS
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Grovally
            </span>
            <span className="block mt-2 bg-gradient-to-r from-black via-gray-700 to-red-600 bg-clip-text text-transparent">
              Future Of Innovation
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-gray-700 md:text-xl">
            Smart IT, BPO, KPO & Finance services under one roof. Build your
            next-generation business with AI-powered automation, cloud systems,
            customer support, and financial intelligence.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row">
            <Link
              to="/services"
              className="rounded-full bg-gradient-to-r from-red-600 to-red-800 px-8 py-4 font-semibold text-white hover:scale-105 transition"
            >
              Explore Services
            </Link>

            <Link
              to="/contact"
              className="rounded-full border-2 border-red-600 px-8 py-4 font-semibold text-red-600 hover:bg-red-600 hover:text-white transition"
            >
              Contact Sales
            </Link>
          </div>
        </motion.div>

        {/* Search Box */}
        <div className="w-full max-w-3xl mx-auto mt-12 px-4">
          <input
            type="text"
            placeholder="Search Grovally Services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border-2 border-red-500 bg-white px-6 py-4 text-lg text-black outline-none shadow-lg"
          />
        </div>

        {/* Title */}
        <h2 className="mt-10 text-4xl font-bold text-red-600 text-center">
          Daughters of Grovally Group
        </h2>

        {/* Cards */}
        {filteredCards.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            No services found.
          </p>
        ) : (
          <div className="mt-16 grid w-full max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">
            {filteredCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                whileHover={{
                  rotateX: -8,
                  rotateY: 8,
                  scale: 1.05,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-white/20 bg-white/80 backdrop-blur-xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_60px_rgba(255,0,0,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-red-600/10 opacity-0 transition duration-500 group-hover:opacity-100"></div>

                <div className="relative z-10 text-center">
                  <img
                    src={card.Image}
                    alt={card.title}
                    className="w-44 h-44 mx-auto mb-4 rounded-full shadow-md"
                  />
                  <h2 className="text-2xl font-bold text-black">
                    {card.title}
                  </h2>
                  <div className="mt-4 h-1 w-20 mx-auto rounded-full bg-gradient-to-r from-red-500 to-orange-500"></div>
                  <p className="mt-6 leading-8 text-gray-600">
                    {card.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      to={`/business`}
                      className="rounded-full border border-red-500 px-5 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
