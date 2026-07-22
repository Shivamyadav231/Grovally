import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



const cards = [
  {
    
    description:`* IT & Custom Software Development,

 AI & Business Automation Solutions ,

 Website App & ERP Development ,

 Branding, Marketing & Growth Solutions ,

 BPO KPO & LPO Services ,

 Business Consultancy & Strategy ,
 Business Support & Compliance 


`,
subheading:"Build. Automate. Scale. Grow.",
  buttonText: "Explore Business Solutions ",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770387/Aaa_k7fq9t.png",
    link :"/it"
  },
  {
    description: `* Business & MSME Loans ,

 Government Subsidies & Incentives ,

 Startup & Scheme Funding ,

 Project Finance Solutions ,

 Angel & Investor Funding ,

 Private Funding & Venture Capital ,

Financial Consultancy & Planning,

Business Valuation & Investment Advisory`,
subheading:" Funding Every Stage of Your Business Journey",
    buttonText: "Explore Finance Solutions ",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770410/Sss_sduj87.png",
    link:"/business"
  },
  {
    description:
      ` Government Tender Consultancy,

Private Tender Assistance,

 Tender Identification & Alerts,

 GeM Registration & Management ,

 E-Tender Submission Support ,

 Documentation & Bid Preparation ,

 Technical & Financial Bid Assistance ,

 Tender Compliance & Contract Support`,
  buttonText: "Explore Tender Solutions ",
 subheading:"Win More Government & Private Contracts",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770387/BBB_ddpa51.png",
    link : "/tender"
  },
  {
    description: ` Startup Masterclasses,

 Business Strategy & Scaling ,

  AI & Business Automation ,

 Sales & Marketing Training ,

Finance & Fundraising Programs ,

 Business Analytics & Research ,

 Leadership & Management Skills ,

Premium Courses, Workshops & Certifications
`,
subheading:"Learn. Build. Lead. Succeed.",
    buttonText: "Explore Learning Solutions ",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770395/KKK_ltrp7q.png",
    link:"/bank"
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
       
<motion.div
  initial={{ opacity: 0, y: -40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="w-full max-w-5xl mx-auto mt-10 px-2 sm:px-0"
>
  <motion.div
    animate={{
      boxShadow: [
        "0 0 0px rgba(239,68,68,.2)",
        "0 0 30px rgba(239,68,68,.35)",
        "0 0 0px rgba(239,68,68,.2)",
      ],
    }}
    transition={{
      repeat: Infinity,
      duration: 3,
    }}
    className="relative"
  >
    <input
      type="text"
      placeholder="🔍 Search services..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full rounded-full border-2 border-red-500 bg-white px-6 py-4 text-base text-black outline-none transition-all duration-300 focus:scale-[1.02] focus:border-red-600"
    />
  </motion.div>
</motion.div>

{/* Cards */}
<div className="mt-14 grid w-full max-w-9xl gap-6 sm:grid-cols-2 xl:grid-cols-4">
  {filteredCards.length === 0 ? (
    <p className="col-span-full text-center text-gray-500 mt-10">
      No services found.
    </p>
  ) : (
    filteredCards.map((card, index) => (
      <motion.article
      
        className="group relative overflow-hidden rounded-[28px] border border-white/20 bg-white/90 p-6 shadow-xl backdrop-blur-xl transition-all duration-500 hover:shadow-red-500/30"
      >
      

        <div className="relative object-cover z-20 text-center">

          
          <motion.img
  src={card.Image}
  alt={card.subheading}
  loading="lazy"
  decoding="async"
 
  className="mx-auto w-48 h-40 object-contain scale-150 -mt-10"
/>

          {/* Heading */}
         
            <motion.div
            className="text-red-500 font-bold"
  
>
  {card.subheading}
</motion.div>

          {/* Services */}
          <ul className="space-y-3 text-sm text-black">
            {card.description
              .split(",")
              .filter((item) => item.trim() !== "")
              .map((item, i) => (
                <motion.li
                  
                  className="flex items-start gap-2"
                >
                  <motion.span
                    
                    className="text-red-600"
                  >
                    ●
                  </motion.span>

                  <Link
                    to={card.link}
                    className="flex-1 text-left transition-all duration-300 hover:text-red-600 hover:font-semibold"
                  >
                    {item.replace("*", "").trim()}
                  </Link>
                </motion.li>
              ))}
          </ul>

          {/* Button */}
          <motion.div
      
            className="mt-8 flex justify-center"
          >
            <Link
              to={card.link}
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-700 px-6 py-3 text-sm font-semibold text-white shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                {card.buttonText}

                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                  }}
                >
                  →
                </motion.span>
              </span>

         
            </Link>
          </motion.div>

        </div>
      </motion.article>
    ))
  )}
</div>

        
        



                  

                 
           
          
        
      </div>
    </section>
  );
}