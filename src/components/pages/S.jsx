
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    title: "Product-Based Businesses",
    heading: "(E-commerce • D2C • FMCG • Manufacturing • Retail Brands)",
    text: "Launch, manage, and scale your product business with complete e-commerce, branding, marketing, inventory, logistics, and technology solutions.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532351/16_2_nkhb5p.jpg",
  },
  {
    title: "Service-Based Businesses",
    heading: "(Consultants • Agencies • Healthcare • Education • Professionals)",
    text: "Grow your service business through automation, CRM, lead generation, branding, websites, digital marketing, and client management solutions.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532351/15_1_rwbktj.jpg",
  },
  {
    title: "Real Estate Businesses",
    heading: "(Builders • Developers • Brokers • Property Consultants)",
    text: "Digitize your real estate business with property portals, CRM, ERP, lead management, marketing, and sales automation solutions.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532350/14_1_lrxzno.jpg",
  },
  {
    title: "Startups",
    heading: "(Idea Stage • MVP • Early Growth)",
    text: "Transform your business idea into a successful startup with branding, MVP development, funding readiness, legal support, and go-to-market strategy.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532358/9_1_erc1ej.jpg",
  },
  {
    title: "MSMEs & Enterprises",
    heading: "(Small Businesses • Manufacturers • Large Organizations)",
    text: "Empower your business with ERP systems, automation, AI solutions, HR software, finance management, compliance, and digital transformation.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532351/10_1_p90r1k.jpg",
  },
  {
    title: "Franchise Businesses",
    heading: "(Food • Retail • Education • Healthcare)",
    text: "Expand your franchise with branding, franchise development, lead generation, CRM, marketing automation, and technology solutions.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784536282/11_1_lek7sz.jpg",
  },
  {
    title: "Export & Import Businesses",
    heading: "(International Trade • Exporters • Importers)",
    text: "Simplify global trade with export-import consulting, documentation, compliance, branding, websites, and digital marketing solutions.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784536281/12_1_lxofl6.jpg",
  },
  {
    title: "Local Businesses",
    heading: "(Restaurants • Salons • Gyms • Clinics • Shops)",
    text: "Grow your local business through Google Business optimization, websites, digital marketing, customer engagement, and automation.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532350/13_1_ewqqez.jpg",
  },
  {
    title: "Educational Institutions",
    heading: "(Schools • Colleges • Coaching • EdTech)",
    text: "Modernize education with ERP software, admission systems, learning management platforms, branding, websites, and digital transformation.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1784532350/13_1_ewqqez.jpg",
  },
];

// 3D rotation variants — each card flips in around the Y axis like a page/card turning
const rotateVariants = {
  enter: (dir) => ({
    rotateY: dir > 0 ? 90 : -90,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir) => ({
    rotateY: dir > 0 ? -90 : 90,
    opacity: 0,
    scale: 0.9,
  }),
};

const GROUP_SIZE = 3;

export default function Testimonial() {
  const total = testimonials.length;

  // three fixed slots on screen; only one slot changes at a time
  const [slots, setSlots] = useState([0, 1, 2]);
  const [rotSlot, setRotSlot] = useState(0); // which slot changes next
  const [pointer, setPointer] = useState(GROUP_SIZE % total); // next item to bring in

  const advance = (direction = 1) => {
    setSlots((prev) => {
      const next = [...prev];
      next[rotSlot] = pointer;
      return next;
    });
    setPointer((p) => (p + direction + total) % total);
    setRotSlot((s) => (s + 1) % GROUP_SIZE);
  };

  const touchStartX = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => advance(1), 2600);
    return () => clearInterval(timer);
  }, [rotSlot, pointer]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) advance(-1);
    else if (delta < -50) advance(1);
    touchStartX.current = null;
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-52 h-52 sm:w-72 sm:h-72 bg-red-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-red-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-red-100 text-red-700 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight">
            Our
            <span className="text-red-600"> Specialization</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-7 sm:leading-8">
            We help businesses across industries with complete digital,
            branding, technology, automation, and growth solutions.
          </p>
        </div>

        {/* 3 fixed slots — only one flips at a time, then pauses, then next flips */}
        <div
          className="relative grid sm:grid-cols-3 gap-6 sm:gap-8"
          style={{ perspective: "1400px" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {slots.map((itemIndex, slotPos) => {
            const item = testimonials[itemIndex];
            return (
              <div key={slotPos} style={{ perspective: "1400px" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={item.title}
                    initial={{ rotateY: 90, opacity: 0, scale: 0.9 }}
                    animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                    exit={{ rotateY: -90, opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden"
                  >
                     <img
          src={item.Image}
          alt={item.title}
          className="w-full h-[350px] object-cover"
        />
                
 

                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-red-600 font-semibold">
                        {item.heading}
                      </p>

                      <p className="mt-3 sm:mt-4 text-sm text-gray-600 leading-6 sm:leading-7">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-5 sm:gap-6 mt-10">
          <button
            onClick={() => advance(-1)}
            aria-label="Previous"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-xl sm:text-2xl font-bold hover:bg-red-700 active:scale-95 transition shadow-lg"
          >
            ←
          </button>

          <button
            onClick={() => advance(1)}
            aria-label="Next"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-xl sm:text-2xl font-bold hover:bg-red-700 active:scale-95 transition shadow-lg"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
