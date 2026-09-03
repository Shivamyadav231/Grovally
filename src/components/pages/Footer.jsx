import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Detects viewport below the `sm` breakpoint so the header text can slide
// in from the left on phone, and fade-up on larger screens.
function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    setIsMobile(mq.matches);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isMobile;
}

export default function Footer() {
  const [open, setOpen] = useState(null);
  const isMobile = useIsMobile();

  const toggle = (key) => {
    setOpen(open === key ? null : key);
  };

  const quickLinks = [
    {
      name: "Products",
      children: [
        { name: "Business Software", path: "/software" },
        { name: "AI Products", path: "ai" },
        { name: "Mobile Apps", path: "/products/apps" },
        { name: "Websites", path: "/websites" },
        { name: "IT Services", path: "/it" },
        { name: "Marketing", path: "/marketing" },
        { name: "Finance", path: "/finance" },
        { name: "Consulting", path: "/services/consulting" },
      ],
    },
  ];

  const businessSolutions = [
    {
      name: "Business Registration",
      children: [
        { name: "Company Registration", path: "/company-registration" },
        { name: "Trademark & IP", path: "/trademark-ip" },
        { name: "GST & Taxation", path: "/gst-taxation" },
        { name: "Startup Consulting", path: "/startup-consulting" },
        { name: "AI Solutions", path: "/ai-solutions" },
        { name: "Digital Marketing", path: "/digital-marketing" },
        { name: "Business Automation", path: "/business-automation" },
        { name: "Government Projects", path: "/government-projects" },
      ],
    },
  ];

  const industries = [
    {
      name: "Business",
      children: [
        { name: "Startups", path: "/industries/startups" },
        { name: "MSMEs", path: "/industries/msmes" },
        { name: "Enterprises", path: "/industries/enterprises" },
        { name: "Manufacturing", path: "/industries/manufacturing" },
        { name: "Retail & E-commerce", path: "/industries/retail-ecommerce" },
        { name: "Logistics", path: "/industries/logistics-supply-chain" },
        { name: "Healthcare", path: "/industries/healthcare" },
        { name: "Government", path: "/industries/government-public-sector" },
      ],
    },
  ];

  const resources = [
    {
      name: "Knowledge",
      children: [
        { name: "Business Guides", path: "/resources/guides" },
        { name: "Startup Knowledge", path: "/resources/knowledge" },
        { name: "Learning Center", path: "/resources/learning" },
        { name: "Funding Resources", path: "/resources/funding" },
        { name: "Tender Assistance", path: "/resources/tenders" },
        { name: "Industry Insights", path: "/resources/insights" },
        { name: "Case Studies", path: "/resources/case-studies" },
        { name: "Help Center", path: "/resources/help-center" },
      ],
    },
  ];

  const legal = [
    { name: "Privacy Policy", path: "/policy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
  ];

  const group = [
    { name: "Grovally Business Solutions", path: "/business" },
    { name: "Grovally Finance Solutions", path: "/finance" },
    { name: "Grovally Tender Solutions", path: "/tenders" },
    { name: "Grovally Pro Tools", path: "/tools" },
    { name: "Grovally Academy", path: "/academy" },
  ];

  const Quicks = [
    { name: "Funding", path: "/business" },
    { name: "Government Tenders", path: "/tender" },
    { name: "Academy", path: "/academy" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  // 🔥 SECTION COMPONENT (ACCORDION)
  const Section = ({ title, items, id, index = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-white/10 lg:border-none"
    >
      {/* Header */}
      <button
        onClick={() => toggle(id)}
        className="w-full flex justify-between items-center py-4 lg:cursor-default"
      >
        <h3 className="text-white font-bold text-base">{title}</h3>

        <span className="lg:hidden text-red-500 text-xl transition-transform duration-300" style={{ transform: open === id ? "rotate(180deg)" : "rotate(0deg)" }}>
          {open === id ? "−" : "+"}
        </span>
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open === id ? "max-h-[900px] pb-4" : "max-h-0 lg:max-h-full"
        }`}
      >
        {items.map((item, idx) => (
          <div key={idx} className="mb-5">
            {item.children ? (
              <>
                {/* Parent */}
                <div className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                  <span className="text-red-500">●</span>
                  {item.name}
                </div>

                {/* Branch */}
                <div className="ml-3 border-l border-white/20 pl-4">
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      to={child.path}
                      className="flex items-center gap-2 py-1.5 text-gray-400 hover:text-red-400 hover:translate-x-1 transition-all duration-300"
                    >
                      <span className="text-red-500">├─</span>
                      {child.name}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                to={item.path}
                className="group flex items-center gap-2 py-1.5 text-gray-300 hover:text-red-400 transition-all duration-300"
              >
                <FaArrowRight className="text-red-500 text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* ============ ANIMATED BACKGROUND ============ */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* moving grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        {/* drifting glow blobs */}
        <motion.div
          className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-red-600/20 blur-[130px]"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-24 h-[380px] w-[380px] rounded-full bg-red-500/15 blur-[120px]"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-red-700/15 blur-[130px]"
          animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

        {/* slow rotating ring accent */}
        <motion.div
          className="absolute top-10 right-10 h-64 w-64 rounded-full border border-red-500/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* floating particles */}
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-red-400/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{
              duration: 5 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* HEADER TEXT */}
      <div className="relative z-10 overflow-hidden border-b border-white/10">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-transparent to-transparent" />

        <motion.div
          initial={
            isMobile
              ? { opacity: 0, x: -60, y: 0 }
              : { opacity: 0, x: 0, y: 30 }
          }
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-6xl mx-auto px-6 py-20 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            GROVALLY BUSINESS ECOSYSTEM
          </motion.span>

          <h2 className="mt-6 text-2xl md:text-6xl font-extrabold leading-tight">
            <span className="text-white">Empowering India's</span>
            <br />
            <span className="text-red-500">Next Generation of Businesses</span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 h-1 w-28 origin-center rounded-full bg-red-600"
          />

          <p className="mx-auto mt-8 max-w-4xl text-gray-300 text-base md:text-lg leading-9">
            GROVALLY is building one of India's most comprehensive business growth
            ecosystems bringing together technology business solutions funding
            government opportunities education and strategic resources on a single
            platform.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-gray-400 text-base leading-9">
            Our mission is to simplify entrepreneurship and empower startups
            MSMEs enterprises and innovators with everything they need to build
            grow, and scale successfully—from digital transformation and business
            consulting to tender assistance investment support AI-powered
            solutions and industry-specific services.
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-gray-300 text-base leading-9">
            <span className="font-bold text-white">GROVALLY</span> is committed to
            becoming the trusted growth partner for millions of businesses across
            India and beyond.
          </p>

          <div className="mt-10 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-full border border-red-500/30 bg-red-500/10 px-8 py-4"
            >
              <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-red-400">
                Building Businesses • Creating Opportunities • Transforming India's Future
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10">
        <Section title="Quick Links" items={quickLinks} id="q" index={0} />
        <Section title="Business Solutions" items={businessSolutions} id="b" index={1} />
        <Section title="Industries" items={industries} id="i" index={2} />
        <Section title="Resources" items={resources} id="r" index={3} />
        <Section title="Legal" items={legal} id="l" index={4} />
        <Section title="Grovally Group" items={group} id="g" index={5} />
        <Section title="Quick" items={Quicks} id="s" index={6} />

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="py-4"
        >
          <h3 className="text-sm font-bold mb-4 text-white">Contact</h3>

          <div className="space-y-4 text-sm text-gray-300 leading-6">
            <div className="flex gap-2 items-start">
              <FaEnvelope className="text-red-500 mt-1" />
              <span>support@grovally.com</span>
            </div>

            <div className="flex gap-2 items-start">
              <FaPhone className="text-red-500 rotate-180 mt-1" />
              <span>+91 8920817608</span>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-3xl text-red-500" />

              <a
                href="https://maps.google.com/?q=TF-03+Suntwinlight+Delta-1+Greater+Noida+UP+201310"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition hover:text-red-500"
              >
                TF-03, Suntwinlight, Delta-1, Greater Noida,
                Uttar Pradesh - 201310
              </a>
            </div>

            <div className="text-gray-400 text-3xl font-bold pt-2 border-t border-white/10">
              Business Growth Ecosystem for Modern India
            </div>
          </div>
        </motion.div>
      </div>

      {/* SECOND ROW */}
      <div className="relative z-10 border-y border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 md:px-7 py-16 sm:py-20 md:py-24 text-center"
        >
          {/* HEADING */}
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Building the Future of
            <span className="block text-red-500 mt-2">
              Indian Entrepreneurship
            </span>
          </h3>

          {/* LINE */}
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-red-600" />

          {/* TEXT */}
          <p className="mt-8 max-w-5xl mx-auto text-gray-300 text-base sm:text-lg leading-7 sm:leading-9">
            Every year, thousands of entrepreneurs begin their journey with
            extraordinary dreams. Many never reach their true potential—not because
            they lack ambition, but because they lack timely guidance, the right
            resources, trusted support, and access to life-changing opportunities.
          </p>

          <p className="mt-8 max-w-5xl mx-auto text-gray-400 text-base sm:text-lg leading-7 sm:leading-9">
            At{" "}
            <span className="font-bold text-red-600">GROVALLY</span>, we believe no
            great dream should end because help was too difficult to find. Our vision
            is to build India's most trusted and comprehensive business growth
            ecosystem, where every entrepreneur, startup, MSME, and enterprise can
            access world-class technology, expert knowledge, funding, government
            opportunities, and business solutions through one unified platform.
          </p>

          <p className="mt-8 max-w-4xl mx-auto text-base sm:text-lg md:text-xl font-medium text-white leading-8 sm:leading-10">
            Together, we are empowering millions of businesses to{" "}
            <span className="text-red-500">
              build, grow, scale,
            </span>{" "}
            and create a stronger future for India.
          </p>

          {/* ================= STATS ================= */}
          <div className="mt-12 w-full grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-8">
            {/* 1 */}
            <div className="flex flex-col items-center justify-center min-w-0">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 whitespace-nowrap">
                1.5 K
              </div>

              <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-400 leading-5">
                Businesses to Empower
              </p>
            </div>

            {/* 2 */}
            <div className="flex flex-col items-center justify-center min-w-0">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 whitespace-nowrap">
                360°
              </div>

              <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-400 leading-5">
                Business Solutions
              </p>
            </div>

            {/* 3 */}
            <div className="flex flex-col items-center justify-center min-w-0">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 whitespace-nowrap">
                AI
              </div>

              <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-400 leading-5">
                Powered Innovation
              </p>
            </div>

            {/* 4 */}
            <div className="flex flex-col items-center justify-center min-w-0">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-500 whitespace-nowrap">
                24x7
              </div>

              <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-400 leading-5">
                Business Support
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SOCIAL ICONS */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mt-8 flex justify-center gap-4"
      >
        <a
          href="https://wa.me/919217753755"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Social icon={<FaWhatsapp />} />
        </a>

        <a
          href="https://www.instagram.com/grovallygroup"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Social icon={<FaInstagram />} />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61580907737242"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Social icon={<FaFacebook />} />
        </a>

        <a href="tel:+919217753755" className="rotate-180">
          <Social icon={<FaPhone />} />
        </a>
      </motion.div>

      {/* COPYRIGHT */}
      <div className="relative z-10 border-t border-white/10 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center lg:text-left">
            <p className="text-sm text-gray-400 leading-7">
              <span className="font-bold text-red-500">
                © 2026 GROVALLY.
              </span>{" "}
              All Rights Reserved.
            </p>

            <p className="mt-2 text-xs md:text-sm text-gray-500 leading-6 max-w-2xl">
              Proudly built in India through innovation, integrity, collaboration,
              and an unwavering commitment to empowering entrepreneurs, startups,
              MSMEs, and enterprises.
            </p>
          </div>

          {/* Center */}
          <div className="hidden lg:block h-12 w-px bg-white/10" />

          {/* Right */}
          <div className="text-center lg:text-right">
            <h3 className="text-red-500 font-bold tracking-wider uppercase">
              Building India's Largest
            </h3>

            <p className="text-white text-sm mt-1">
              Business Growth Ecosystem
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* SOCIAL */
function Social({ icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.15, rotate: 8 }}
      whileTap={{ scale: 0.92 }}
      className="h-11 w-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 transition-colors hover:border-red-500/40 hover:bg-red-500/10"
    >
      {icon}
    </motion.div>
  );
}
