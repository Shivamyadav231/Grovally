import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    title: "Product-Based Businesses",
    heading: "(E-commerce • D2C • FMCG • Manufacturing • Retail Brands)",
    text: "Launch, manage, and scale your product business with complete e-commerce, branding, marketing, inventory, logistics, and technology solutions.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784532351/16_2_nkhb5p.jpg",
  },
  {
    title: "Service-Based Businesses",
    heading: "(Consultants • Agencies • Healthcare • Education • Professionals)",
    text: "Grow your service business through automation, CRM, lead generation, branding, websites, digital marketing, and client management solutions.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784532351/15_1_rwbktj.jpg",
  },
  {
    title: "Real Estate Businesses",
    heading: "(Builders • Developers • Brokers • Property Consultants)",
    text: "Digitize your real estate business with property portals, CRM, ERP, lead management, marketing, and sales automation solutions.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784532350/14_1_lrxzno.jpg",
  },
  {
    title: "Startups",
    heading: "(Idea Stage • MVP • Early Growth)",
    text: "Transform your business idea into a successful startup with branding, MVP development, funding readiness, legal support, and go-to-market strategy.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784532358/9_1_erc1ej.jpg",
  },
  {
    title: "MSMEs & Enterprises",
    heading: "(Small Businesses • Manufacturers • Large Organizations)",
    text: "Empower your business with ERP systems, automation, AI solutions, HR software, finance management, compliance, and digital transformation.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784532351/10_1_p90r1k.jpg",
  },
  {
    title: "Franchise Businesses",
    heading: "(Food • Retail • Education • Healthcare)",
    text: "Expand your franchise with branding, franchise development, lead generation, CRM, marketing automation, and technology solutions.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784536282/11_1_lek7sz.jpg",
  },
  {
    title: "Export & Import Businesses",
    heading: "(International Trade • Exporters • Importers)",
    text: "Simplify global trade with export-import consulting, documentation, compliance, branding, websites, and digital marketing solutions.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784536281/12_1_lxofl6.jpg",
  },
  {
    title: "Local Businesses",
    heading: "(Restaurants • Salons • Gyms • Clinics • Shops)",
    text: "Grow your local business through Google Business optimization, websites, digital marketing, customer engagement, and automation.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784532350/13_1_ewqqez.jpg",
  },
  {
    title: "Educational Institutions",
    heading: "(Schools • Colleges • Coaching • EdTech)",
    text: "Modernize education with ERP software, admission systems, learning management platforms, branding, websites, and digital transformation.",
    Image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784532350/13_1_ewqqez.jpg",
  },
];

const GROUP_SIZE = 3;

// Card face used by both the mobile single-card view and the desktop grid
function TestimonialCard({ item, compact }) {
  return (
    <>
      <div className="relative">
        <img
          src={item.Image}
          alt={item.title}
          className={
            compact
              ? "w-full aspect-[4/3] object-cover object-top"
              : "w-full aspect-[16/10] object-cover object-top"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
      </div>

      <div className={compact ? "p-5" : "p-6"}>
        <h3 className={compact ? "text-lg font-bold text-gray-900 leading-tight" : "text-2xl font-bold text-gray-900"}>
          {item.title}
        </h3>

        <p className={compact ? "mt-2 text-xs text-red-600 font-semibold" : "mt-3 text-sm text-red-600 font-semibold"}>
          {item.heading}
        </p>

        <p className={compact ? "mt-2 text-sm text-black/50 leading-6" : "mt-4 text-sm text-black/50 leading-7"}>
          {item.text}
        </p>
      </div>
    </>
  );
}

export default function Testimonial() {
  const total = testimonials.length;

  /* ---------- Desktop: 3 fixed slots, one flips at a time ---------- */
  const [slots, setSlots] = useState([0, 1, 2]);
  const [rotSlot, setRotSlot] = useState(0);
  const [pointer, setPointer] = useState(GROUP_SIZE % total);

  const advance = (direction = 1) => {
    setSlots((prev) => {
      const next = [...prev];
      next[rotSlot] = pointer;
      return next;
    });
    setPointer((p) => (p + direction + total) % total);
    setRotSlot((s) => (s + 1) % GROUP_SIZE);
  };

  useEffect(() => {
    const timer = setInterval(() => advance(1), 3000);
    return () => clearInterval(timer);
  }, [rotSlot, pointer]);

  /* ---------- Mobile: single card, auto-advances every 3s ---------- */
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileDir, setMobileDir] = useState(1);

  const advanceMobile = (direction = 1) => {
    setMobileDir(direction);
    setMobileIndex((i) => (i + direction + total) % total);
  };

  useEffect(() => {
    const timer = setInterval(() => advanceMobile(1), 3000);
    return () => clearInterval(timer);
  }, []);

  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e, isMobileView) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) isMobileView ? advanceMobile(-1) : advance(-1);
    else if (delta < -50) isMobileView ? advanceMobile(1) : advance(1);
    touchStartX.current = null;
  };

  // Full 360° spin: card rotates a complete turn and the new face fades in near the top of the turn
  const spinVariants = {
    enter: (dir) => ({
      rotateY: dir > 0 ? 180 : -180,
      opacity: 0,
      scale: 0.85,
    }),
    center: {
      rotateY: 360,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      rotateY: dir > 0 ? 540 : 180,
      opacity: 0,
      scale: 0.85,
    }),
  };

  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-52 h-52 bg-red-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-xs font-semibold">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-3xl font-black text-gray-900 leading-tight">
            Our
            <span className="text-red-600"> Specialization</span>
          </h2>

          <p className="mt-4 text-base text-gray-600 max-w-3xl mx-auto leading-7">
            We help businesses across industries with complete digital,
            branding, technology, automation, and growth solutions.
          </p>
        </div>

        {/* ---------- MOBILE: single card, full 360° flip every 3s ---------- */}
        <div
          className="sm:hidden relative flex justify-center"
          style={{ perspective: "1600px" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={(e) => handleTouchEnd(e, true)}
        >
          {/* ambient glow ring behind the active card */}
          <motion.div
            className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-red-400 via-red-300 to-rose-400 blur-xl opacity-40"
            animate={{ opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative w-full max-w-sm min-w-0 overflow-hidden">
            <AnimatePresence mode="wait" custom={mobileDir}>
              <motion.div
                key={testimonials[mobileIndex].title}
                custom={mobileDir}
                variants={spinVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
                className="relative bg-white rounded-3xl shadow-2xl ring-1 ring-red-100 overflow-hidden min-w-0 w-full"
              >
                <TestimonialCard item={testimonials[mobileIndex]} compact />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* dots for mobile */}
        <div className="sm:hidden flex justify-center gap-1.5 mt-6">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === mobileIndex ? "w-5 bg-red-600" : "w-1.5 bg-red-200"
              }`}
            />
          ))}
        </div>

        {/* ---------- DESKTOP: 3 fixed slots, one flips at a time ---------- */}
        <div
          className="hidden sm:grid relative grid-cols-3 gap-8 overflow-x-hidden"
          style={{ perspective: "1400px" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={(e) => handleTouchEnd(e, false)}
        >
          {slots.map((itemIndex, slotPos) => {
            const item = testimonials[itemIndex];
            return (
              <div
                key={slotPos}
                className="min-w-0 overflow-hidden"
                style={{ perspective: "1400px" }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={item.title}
                    initial={{ rotateY: 90, opacity: 0, scale: 0.9 }}
                    animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                    exit={{ rotateY: -90, opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                    }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden min-w-0 w-full"
                  >
                    <TestimonialCard item={item} />
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-5 mt-10">
          <button
            onClick={() => {
              advance(-1);
              advanceMobile(-1);
            }}
            aria-label="Previous"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold hover:bg-red-700 active:scale-95 transition shadow-lg"
          >
            ←
          </button>

          <button
            onClick={() => {
              advance(1);
              advanceMobile(1);
            }}
            aria-label="Next"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold hover:bg-red-700 active:scale-95 transition shadow-lg"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
