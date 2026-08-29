import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    title: "Product-Based Businesses",
    heading: "(E-commerce • D2C • FMCG • Manufacturing • Retail Brands)",
    text: "Launch, manage, and scale your product business with complete e-commerce, branding, marketing, inventory, logistics, and technology solutions.",
    Image:
      "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784532351/16_2_nkhb5p.jpg",
  },
  {
    title: "Service-Based Businesses",
    heading: "(Consultants • Agencies • Healthcare • Education • Professionals)",
    text: "Grow your service business through automation, CRM, lead generation, branding, websites, digital marketing, and client management solutions.",
    Image:
      "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784532351/15_1_rwbktj.jpg",
  },
  {
    title: "Real Estate Businesses",
    heading: "(Builders • Developers • Brokers • Property Consultants)",
    text: "Digitize your real estate business with property portals, CRM, ERP, lead management, marketing, and sales automation solutions.",
    Image:
      "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784532350/14_1_lrxzno.jpg",
  },
  {
    title: "Startups",
    heading: "(Idea Stage • MVP • Early Growth)",
    text: "Transform your business idea into a successful startup with branding, MVP development, funding readiness, legal support, and go-to-market strategy.",
    Image:
      "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784532358/9_1_erc1ej.jpg",
  },
  {
    title: "MSMEs & Enterprises",
    heading: "(Small Businesses • Manufacturers • Large Organizations)",
    text: "Empower your business with ERP systems, automation, AI solutions, HR software, finance management, compliance, and digital transformation.",
    Image:
      "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784532351/10_1_p90r1k.jpg",
  },
  {
    title: "Franchise Businesses",
    heading: "(Food • Retail • Education • Healthcare)",
    text: "Expand your franchise with branding, franchise development, lead generation, CRM, marketing automation, and technology solutions.",
    Image:
      "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784536282/11_1_lek7sz.jpg",
  },
  {
    title: "Export & Import Businesses",
    heading: "(International Trade • Exporters • Importers)",
    text: "Simplify global trade with export-import consulting, documentation, compliance, branding, websites, and digital marketing solutions.",
    Image:
      "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784536281/12_1_lxofl6.jpg",
  },
  {
    title: "Local Businesses",
    heading: "(Restaurants • Salons • Gyms • Clinics • Shops)",
    text: "Grow your local business through Google Business optimization, websites, digital marketing, customer engagement, and automation.",
    Image:
      "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784532350/13_1_ewqqez.jpg",
  },
  {
    title: "Educational Institutions",
    heading: "(Schools • Colleges • Coaching • EdTech)",
    text: "Modernize education with ERP software, admission systems, learning management platforms, branding, websites, and digital transformation.",
    Image:
      "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_1600/v1784532350/13_1_ewqqez.jpg",
  },
];

const GROUP_SIZE = 3;

/* =========================================================
   CARD
========================================================= */

function TestimonialCard({ item, compact = false }) {
  return (
    <div className="w-full min-w-0 bg-white">
      {/* IMAGE */}
      <div
        className={
          compact
            ? "relative w-full aspect-[16/10] overflow-hidden"
            : "relative w-full h-[350px] overflow-hidden"
        }
      >
        <img
          src={item.Image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none" />
      </div>

      {/* CONTENT */}
      <div className={compact ? "p-5 sm:p-6" : "p-6"}>
        <h3
          className={
            compact
              ? "text-lg sm:text-xl font-bold text-gray-900 leading-tight"
              : "text-2xl font-bold text-gray-900"
          }
        >
          {item.title}
        </h3>

        <p
          className={
            compact
              ? "mt-2 text-xs sm:text-sm text-red-600 font-semibold leading-5"
              : "mt-3 text-sm text-red-600 font-semibold"
          }
        >
          {item.heading}
        </p>

        <p
          className={
            compact
              ? "mt-3 text-sm sm:text-[15px] text-black/55 leading-6"
              : "mt-4 text-sm text-black/50 leading-7"
          }
        >
          {item.text}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Testimonial() {
  const total = testimonials.length;

  /* =======================================================
     DESKTOP
  ======================================================= */

  const [slots, setSlots] = useState([0, 1, 2]);
  const [rotSlot, setRotSlot] = useState(0);
  const [pointer, setPointer] = useState(GROUP_SIZE % total);

  const advance = (direction = 1) => {
    setSlots((prev) => {
      const next = [...prev];

      next[rotSlot] =
        direction > 0
          ? pointer
          : (pointer - 2 + total) % total;

      return next;
    });

    setPointer((p) => {
      if (direction > 0) {
        return (p + 1) % total;
      }

      return (p - 1 + total) % total;
    });

    setRotSlot((s) => {
      if (direction > 0) {
        return (s + 1) % GROUP_SIZE;
      }

      return (s - 1 + GROUP_SIZE) % GROUP_SIZE;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      advance(1);
    }, 3000);

    return () => clearInterval(timer);
  }, [rotSlot, pointer]);

  /* =======================================================
     MOBILE
  ======================================================= */

  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileDir, setMobileDir] = useState(1);

  const advanceMobile = (direction = 1) => {
    setMobileDir(direction);

    setMobileIndex((current) => {
      return (current + direction + total) % total;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      advanceMobile(1);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  /* =======================================================
     TOUCH / SWIPE
  ======================================================= */

  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e, isMobileView) => {
    if (touchStartX.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const delta = endX - touchStartX.current;

    if (Math.abs(delta) > 50) {
      if (delta > 0) {
        if (isMobileView) {
          advanceMobile(-1);
        } else {
          advance(-1);
        }
      } else {
        if (isMobileView) {
          advanceMobile(1);
        } else {
          advance(1);
        }
      }
    }

    touchStartX.current = null;
  };

  /* =======================================================
     MOBILE ANIMATION
  ======================================================= */

  const mobileVariants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.96,
    }),

    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },

    exit: (direction) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.96,
    }),
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 bg-gradient-to-br from-red-50 via-white to-red-100">
      {/* Background blur */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-52 h-52 bg-red-300/20 rounded-full blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 -right-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* =================================================
            HEADING
        ================================================= */}

        <div className="text-center mb-9 sm:mb-12">
          <span className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-xs font-semibold">
            Industries We Serve
          </span>

          <h2 className="mt-5 sm:mt-6 text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
            Our
            <span className="text-red-600"> Specialization</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-6 sm:leading-7 px-2">
            We help businesses across industries with complete digital,
            branding, technology, automation, and growth solutions.
          </p>
        </div>

        {/* =================================================
            MOBILE CARD
        ================================================= */}

        <div
          className="sm:hidden w-full flex justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={(e) => handleTouchEnd(e, true)}
        >
          <div
            className="relative w-full max-w-[390px]"
            style={{
              perspective: "1200px",
              touchAction: "pan-y",
            }}
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -inset-2 rounded-[28px] bg-gradient-to-br from-red-400 via-red-300 to-rose-400 blur-xl opacity-30" />

            {/* CARD */}
            <div className="relative w-full">
              <AnimatePresence
                mode="wait"
                initial={false}
                custom={mobileDir}
              >
                <motion.div
                  key={testimonials[mobileIndex].title}
                  custom={mobileDir}
                  variants={mobileVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-full overflow-hidden rounded-[24px] bg-white shadow-2xl ring-1 ring-red-100"
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    willChange: "transform, opacity",
                  }}
                >
                  <TestimonialCard
                    item={testimonials[mobileIndex]}
                    compact
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =================================================
            MOBILE DOTS
        ================================================= */}

        <div className="sm:hidden flex justify-center items-center gap-1.5 mt-5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => {
                const direction = index > mobileIndex ? 1 : -1;

                setMobileDir(direction);
                setMobileIndex(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === mobileIndex
                  ? "w-6 bg-red-600"
                  : "w-1.5 bg-red-200"
              }`}
            />
          ))}
        </div>

        {/* =================================================
            DESKTOP
        ================================================= */}

        <div
          className="hidden sm:grid relative grid-cols-3 gap-6 lg:gap-8 overflow-hidden"
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
                    initial={{
                      rotateY: 90,
                      opacity: 0,
                      scale: 0.95,
                    }}
                    animate={{
                      rotateY: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      rotateY: -90,
                      opacity: 0,
                      scale: 0.95,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-full overflow-hidden bg-white rounded-2xl shadow-xl"
                    style={{
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <TestimonialCard item={item} />
                  </motion.div>
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* =================================================
            NAVIGATION
        ================================================= */}

        <div className="flex justify-center items-center gap-4 sm:gap-5 mt-7 sm:mt-10">
          <button
            type="button"
            onClick={() => {
              advance(-1);
              advanceMobile(-1);
            }}
            aria-label="Previous"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-lg sm:text-xl font-bold hover:bg-red-700 active:scale-95 transition shadow-lg"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => {
              advance(1);
              advanceMobile(1);
            }}
            aria-label="Next"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-lg sm:text-xl font-bold hover:bg-red-700 active:scale-95 transition shadow-lg"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}