import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    title: " Product-Based Businesses",
    heading: "(E-commerce • D2C • FMCG • Manufacturing • Retail Brands)",
    text: "Launch, manage, and scale your product business with complete e-commerce, branding, marketing, inventory, logistics, and technology solutions.",
    Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532351/16_2_nkhb5p.jpg"
  },
  {
    title: " Service-Based Businesses",
    heading: "(Consultants • Agencies • Healthcare • Education • Professionals)",
    text: "Grow your service business through automation, CRM, lead generation, branding, websites, digital marketing, and client management solutions.",
     Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532351/15_1_rwbktj.jpg"
  },
  {
    title: " Real Estate Businesses",
    heading: "(Builders • Developers • Brokers • Property Consultants)",
    text: "Digitize your real estate business with property portals, CRM, ERP, lead management, marketing, and sales automation solutions.",
     Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532350/14_1_lrxzno.jpg",
     
  },
  {
    title: " Startups",
    heading: "(Idea Stage • MVP • Early Growth)",
    text: "Transform your business idea into a successful  startup with branding, MVP development, funding readiness, legal support, and go-to-market strategy.",
     Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532358/9_1_erc1ej.jpg"
  },
  {
    title: " MSMEs & Enterprises",
    heading: "(Small Businesses • Manufacturers • Large Organizations)",
    text: "Empower your business with ERP systems, automation, AI solutions, HR software, finance management, compliance, and digital transformation.",
     Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532351/10_1_p90r1k.jpg"
  },
  {
    title: " Franchise Businesses",
    heading: "(Food • Retail • Education • Healthcare)",
    text: "Expand your franchise with branding, franchise development, lead generation, CRM, marketing automation, and technology solutions.",
     Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784536282/11_1_lek7sz.jpg"
  },
  {
    title: " Export & Import Businesses",
    heading: "(International Trade • Exporters • Importers)",
    text: "Simplify global trade with export-import consulting, documentation, compliance, branding, websites, and digital marketing solutions.",
     Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784536281/12_1_lxofl6.jpg"
  },
  {
    title: " Local Businesses",
    heading: "(Restaurants • Salons • Gyms • Clinics • Shops)",
    text: "Grow your local business through Google Business optimization, websites, digital marketing, customer engagement, and automation.",
     Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532350/13_1_ewqqez.jpg"
  },
  {
    title: " Educational Institutions",
    heading: "(Schools • Colleges • Coaching • EdTech)",
    text: "Modernize education with ERP software, admission systems, learning management platforms, branding, websites, and digital transformation.",
      Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532350/13_1_ewqqez.jpg"
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

 useEffect(() => {

  const timer = setInterval(() => {

    setCurrent((prev)=> 
      prev + 3 >= testimonials.length ? 0 : prev + 3
    );

  },5000);


  return ()=>clearInterval(timer);

},[]);
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block bg-red-100 text-red-700 px-5 py-2 rounded-full text-sm font-semibold">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            Solutions for Every
            <span className="text-red-600"> Business</span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-8">
            We help businesses across industries with complete digital,
            branding, technology, automation, and growth solutions.
          </p>
        </div>

        {/* Card */}
       
        {/* Cards */}
<div className="grid md:grid-cols-3 gap-8">

  {testimonials.slice(current, current + 3).map((item,index)=>( 

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
    >

      <img
        src={item.Image}
        alt={item.title}
        className="w-full h-[350px] object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold text-gray-900">
          {item.title}
        </h3>

        <p className="mt-3 text-red-600 font-semibold">
          {item.heading}
        </p>

        <p className="mt-4 text-gray-600 leading-7">
          {item.text}
        </p>

      </div>

    </motion.div>

  ))}

</div>
  
  

{/* Progress Bar */}
<div >
 
</div>
       

        {/* Navigation */}
       {/* Navigation Arrows */}
<div className="flex justify-center gap-6 mt-12">

  <button
    onClick={() =>
      setCurrent((prev) =>
        prev === 0 ? testimonials.length - 3 : prev - 3
      )
    }
    className="
    w-12 h-12 rounded-full 
    bg-red-600 text-white 
    flex items-center justify-center
    text-2xl font-bold
    hover:bg-red-700 transition
    shadow-lg
    "
  >
    ←
  </button>


  <button
    onClick={() =>
      setCurrent((prev) =>
        prev + 3 >= testimonials.length ? 0 : prev + 3
      )
    }
    className="
    w-12 h-12 rounded-full 
    bg-red-600 text-white 
    flex items-center justify-center
    text-2xl font-bold
    hover:bg-red-700 transition
    shadow-lg
    "
  >
    →
  </button>

</div>
      </div>
    </section>
  );
}