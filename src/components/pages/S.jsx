import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    title: "1. Product-Based Businesses",
    heading: "(E-commerce • D2C • FMCG • Manufacturing • Retail Brands)",
    text: "Launch, manage, and scale your product business with complete e-commerce, branding, marketing, inventory, logistics, and technology solutions.",
    Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532351/16_2_nkhb5p.jpg"
  },
  {
    title: "2. Service-Based Businesses",
    heading: "(Consultants • Agencies • Healthcare • Education • Professionals)",
    text: "Grow your service business through automation, CRM, lead generation, branding, websites, digital marketing, and client management solutions.",
     Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532351/15_1_rwbktj.jpg"
  },
  {
    title: "3. Real Estate Businesses",
    heading: "(Builders • Developers • Brokers • Property Consultants)",
    text: "Digitize your real estate business with property portals, CRM, ERP, lead management, marketing, and sales automation solutions.",
     Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532350/14_1_lrxzno.jpg"
  },
  {
    title: "4. Startups",
    heading: "(Idea Stage • MVP • Early Growth)",
    text: "Transform your business idea into a successful startup with branding, MVP development, funding readiness, legal support, and go-to-market strategy.",
     Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532358/9_1_erc1ej.jpg"
  },
  {
    title: "5. MSMEs & Enterprises",
    heading: "(Small Businesses • Manufacturers • Large Organizations)",
    text: "Empower your business with ERP systems, automation, AI solutions, HR software, finance management, compliance, and digital transformation.",
     Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532351/10_1_p90r1k.jpg"
  },
  {
    title: "6. Franchise Businesses",
    heading: "(Food • Retail • Education • Healthcare)",
    text: "Expand your franchise with branding, franchise development, lead generation, CRM, marketing automation, and technology solutions.",
     Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784536282/11_1_lek7sz.jpg"
  },
  {
    title: "7. Export & Import Businesses",
    heading: "(International Trade • Exporters • Importers)",
    text: "Simplify global trade with export-import consulting, documentation, compliance, branding, websites, and digital marketing solutions.",
     Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784536281/12_1_lxofl6.jpg"
  },
  {
    title: "8. Local Businesses",
    heading: "(Restaurants • Salons • Gyms • Clinics • Shops)",
    text: "Grow your local business through Google Business optimization, websites, digital marketing, customer engagement, and automation.",
     Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532350/13_1_ewqqez.jpg"
  },
  {
    title: "9. Educational Institutions",
    heading: "(Schools • Colleges • Coaching • EdTech)",
    text: "Modernize education with ERP software, admission systems, learning management platforms, branding, websites, and digital transformation.",
      Image:"https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532350/13_1_ewqqez.jpg"
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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
        <AnimatePresence mode="wait">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

  {/* Left */}
  <div>
    <div className="inline-flex items-center bg-red-100 text-red-700 px-5 py-2 rounded-full font-semibold text-sm mb-6">
      Business Category
    </div>

    <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
      {testimonials[current].title}
    </h3>

    <p className="mt-4 text-red-600 font-semibold text-lg md:text-xl">
      {testimonials[current].heading}
    </p>

    <p className="mt-8 text-gray-600 text-lg leading-9">
      {testimonials[current].text}
    </p>
  </div>

  {/* Right */}
  <div>
    {testimonials[current].Image ? (
      
      <img
  src={testimonials[current].Image}
  alt={testimonials[current].title}
  className="w-auto h-[500px] object-contain rounded-3xl bg-gray-100"
/>
      
    ) : (
      <div className="w-full h-[450px] rounded-3xl bg-gray-100 flex items-center justify-center">
        <span className="text-gray-500 text-lg font-medium">
          Image Coming Soon
        </span>
      </div>
    )}
  </div>

</div>

{/* Progress Bar */}
<div className="mt-10 h-2 bg-red-100 rounded-full overflow-hidden">
  <motion.div
    key={current}
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 5, ease: "linear" }}
    className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full"
  />
</div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mt-12 flex-wrap">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-500 ${
                current === index
                  ? "w-12 h-3 bg-red-600 rounded-full"
                  : "w-3 h-3 bg-gray-300 hover:bg-red-400 rounded-full"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}