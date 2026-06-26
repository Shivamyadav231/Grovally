import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



const cards = [
  {
    
    description:"IT & Custom Software Services,AI & Automation Services ,360° Marketing/Branding Services ,LPO & KPO & BPO Services ,Business Support Services,Import / Export Services",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770387/Aaa_k7fq9t.png",
    link :"/it"
  },
  {
    description: "Bank Loan Services,Goverment Subsidy Services,Scheme Funding Services, Project Funding Services ,Investor Funding Services,Private Funding Services",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770410/Sss_sduj87.png",
    link:"/business"
  },
  {
    description:
      "Government Tender Assistance,Private Tender Consultancy,Tender Identification,GeM Portal Registration & Support,E-Tender Submission Services",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770387/BBB_ddpa51.png",
    link : "/tender"
  },
  {
    description: "Research,analytics,Startup Growth ,Scaling Strategies,AI & Business Automation Learning",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770395/KKK_ltrp7q.png",
    link:"/education"
  },
  
  
];

export default function Home() {
  const [search, setSearch] = useState("");
  

  const filteredCards = cards.filter((card) =>
    (card.description || "")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section className="relative  min-h-screen overflow-hidden bg-white text-black">
    
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-red-500/20 blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[150px] animate-pulse"></div>
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/10 blur-[120px]"></div>
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-14 sm:px-6 sm:py-20">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-6xl rounded-[32px] border border-white/20 bg-white/90 backdrop-blur-3xl p-6 sm:p-8 md:p-10 shadow-[0_20px_120px_rgba(255,0,0,0.20)]"
        >
          <div className="mb-6 inline-flex rounded-full border border-red-300 bg-red-100  -mt-40 px-5 py-2 text-xs sm:text-sm font-medium tracking-[0.2em] text-red-700">
            Building The Future Of Digital Business
          </div>

          <div className="flex flex-col items-center -mt-28 sm:items-start text-center sm:text-left gap-6">
            <img loading="lazy" src="https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_600/v1781770397/lolo_t6dwpa.png"   decoding="async" alt="logo" className="w-full max-w-[22rem] object-contain" />
            <h1 className="text-3xl sm:text-4xl -mt-36 md:text-5xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r  from-black via-red-700 to-gray-700 bg-clip-text text-transparent">
                Your "Best Friend" in Business
              </span>
            </h1>
          </div>

          <p className="mt-8 max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
            Grovally is your trusted partner for digital growth. We provide website development, software solutions, digital marketing, branding, AI services, business registration, trademark support, and business consulting under one roof. Our goal is to help startups, businesses, and organizations grow faster with reliable, affordable, and result-driven solutions.
          </p>

          <div className="mt-10 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-start">
            <Link
              to="/services"
              className="w-full rounded-full bg-gradient-to-r from-red-600 to-red-800 px-6 py-4 text-center text-base font-semibold text-white transition hover:scale-105 sm:w-auto"
            >
              Explore Services
            </Link>

            <Link
              to="/contact"
              className="w-full rounded-full border-2 border-red-600 px-6 py-4 text-center text-base font-semibold text-red-600 transition hover:bg-red-600 hover:text-white sm:w-auto"
            >
              Contact Sales
            </Link>
          </div>
        </motion.div>

        {/* Search */}
        <div className="w-full max-w-3xl mx-auto mt-10 px-2 sm:px-0">
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border-2 border-red-500 bg-white px-5 py-4 text-base text-black outline-none shadow-lg"
          />
        </div>

        {/* Cards */}
        <div className="mt-14 grid w-full max-w-7xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {filteredCards.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              No services found.
            </p>
          ) : (
            filteredCards.map((card, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-[24px] border border-white/20 bg-white/90 backdrop-blur-xl p-5 shadow-md transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-red-600/10 opacity-0 transition duration-300 group-hover:opacity-100"></div>

                <div className="relative z-20 text-center px-3 pt-3">
                  <img
                    loading="lazy"
                      decoding="async"
                    src={card.Image}
                    alt="service"
                    className="mx-auto mb-4 mt-0 lg:-mt-16 h-auto max-w-[12rem] object-contain"
                  />
                  <ul className="space-y-3 -mt-16 text-sm leading-6 text-black max-w-xs mx-auto">
                    {card.description.split(",").map((item, i) => (
  <li key={i} className="flex items-center gap-2">
    <span className="text-red-800 font-bold text-xl flex-shrink-0">
      •
    </span>

    <span
      className="
        text-left flex-1 cursor-pointer
        transition-all duration-300
        hover:font-bold
        hover:text-red-600
      "
    >
       <Link
        to={item.link}
        className="
          text-left flex-1
          transition-all duration-300
          hover:text-red-600
          hover:font-bold
        "
      >
        {item.text}
      </Link>
      {item.trim()}
    </span>
  </li>
))}
 

</ul>

                  

                  <div className="mt-6 flex justify-center">
                    <Link
                      to={card.link}
                      className="inline-flex rounded-full border border-red-500 px-5 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}