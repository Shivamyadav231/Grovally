import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaBars,  FaTimes } from "react-icons/fa";


export default function Navbar() {
  const navigate = useNavigate();

  

  
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  
  const [openMenu, setOpenMenu] = useState(null);
  const toggleMenu = (menu) => {
  setOpenMenu((prev) => (prev === menu ? null : menu));
};







  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target)
    ) {
      setOpenMenu(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }} 
        className="fixed top-0  w-full z-50"
      >
        <div
          className={`mx-auto flex items-center justify-between px-6 transition-all duration-500 ${
            scrolled
              ? "max-w-full bg-black/55 backdrop-blur-xl shadow-xl h-16"
              : "  max-w-9xl w-[95%] mt-4 bg-[#C90102] rounded-2xl h-20"
          }`}
          
        >
          {/* LOGO */}
          <Link to="/">
            <img
    loading="lazy"
    decoding="async"
    src="https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770425/logoo_u4zkyt.png"
    alt="Grovally Business Solutions Logo"
    className={`w-auto object-contain transition-all duration-500 hover:scale-150 ${
      scrolled
        ? "h-52 scale-125"
        : "h-48 md:h-48  scale-105"
    }`}
  />
          </Link>
 
  <div>
    <ul className="hidden lg:flex items-center gap-8 text-white font-medium">
  <li>
    <Link to="/" className="hover:text-gray-200 transition">
      Home
    </Link>
  </li>
  
  
<li className="relative group">
  {/* Button */}
  <button className="group flex items-center gap-1 py-7 text-white transition hover:text-red-400">
      Products

    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {/* Mega Menu */}
  <div
       className="
    fixed
    left-1/2
    top-[105px]
    -translate-x-1/2
    w-[1280px]
    max-w-[95vw]
    max-h-[80vh]
    overflow-y-auto
    rounded-2xl
    bg-white
    p-8
    shadow-2xl
    z-[9999]
    opacity-0
    invisible
    transition-all
    duration-300
    group-hover:opacity-100
    group-hover:visible
  "
  
  >
    <div className="grid grid-cols-4 gap-10">

      {/* ================= Business Solutions ================= */}
      <div>
        <h3 className="text-red-600 font-bold text-lg mb-8">
          AI Solutions
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-6">
          {[
          
            ["AIchatbot", "/ai-services"],
            ["AI Attendance System", "/ai-services"],
            ["AI ERP Assistant", "/ai-services"],
            ["AI Content Creator", "/ai-services"],
            ["AI Business Automation", "/ai-services"],
            ["AI Voice Assistant", "/ai-services"],
          ].map(([title, link], index, arr) => (
            <li
              key={title}
              className={`relative pl-6 ${
                index === arr.length - 1
                  ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
                  : ""
              }`}
            >
              {/* Horizontal Branch */}
              <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-gray-300"></span>

              {/* Dot */}
              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-red-600 border-2 border-white"></span>

              <Link
                to={link}
                className="block font-medium text-gray-700 transition-all duration-300 hover:text-red-600 hover:translate-x-2"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ================= Industry Solutions ================= */}
      <div>
        <h3 className="text-red-600 font-bold text-lg mb-6">
            Business Software
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">
          {[
             ["ERP Software", "/software"],
  ["CRM Software", "/software"],
  ["HRMS Software", "/software"],
  ["Accounting Software", "/software"],
  ["Inventory Management Software", "/software"],
  ["Payroll Software", "/software"],
  ["School Management Software", "/software"],
  ["Hospital Management Software", "/software"],
  ["Hotel Management Software", "/software"],
  ["Restaurant Software", "/software"],
  ["Real Estate Software", "/software"],
  ["Microfinance Software", "/software"],
  ["NGO Management Software", "/software"],
  ["Logistics Software", "/software"],
  ["Manufacturing Software", "/software"],

           
          ].map(([title, link], index, arr) => (
            <li
              key={title}
              className={`relative pl-6 ${
                index === arr.length - 1
                  ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
                  : ""
              }`}
            >
              {/* Horizontal Branch */}
              <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-gray-300"></span>

              {/* Dot */}
              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-red-600 border-2 border-white"></span>

              <Link
                to={link}
                className="block font-medium text-gray-700 transition-all duration-300 hover:text-red-600 hover:translate-x-2"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
       <div>
        <h3 className="text-red-600 font-bold text-lg mb-6">
           Mobile Apps
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">
          {[
             ["E-Commerce App", "/app-services"],
  ["Food Delivery App", "/app-services"],
  ["Hotel Booking App", "/app-services"],
  ["Education App", "/app-services"],
  ["Healthcare App", "/app-services"],
  ["Real Estate App", "/app-services"],
  ["Grocery Delivery App", "/app-services"],
  ["Quick Commerce App", "/app-services"],
  ["Bike Taxi App", "/app-services"],
  ["Cab Booking App", "/app-services"],
  ["Travel App", "/app-services"],
  ["Doctor Appointment App", "/app-services"],
  ["NGO App", "/app-services"],
          ].map(([title, link], index, arr) => (
            <li
              key={title}
              className={`relative pl-6 ${
                index === arr.length - 1
                  ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
                  : ""
              }`}
            >
              {/* Horizontal Branch */}
              <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-gray-300"></span>

              {/* Dot */}
              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-red-600 border-2 border-white"></span>

              <Link
                to={link}
                className="block font-medium text-gray-700 transition-all duration-300 hover:text-red-600 hover:translate-x-2"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-red-600 font-bold text-lg mb-6">
          Websites & Portals
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">
          {[
              ["Corporate Website", "/website"],
  ["Business Website", "/website"],
  ["E-Commerce Website", "/website"],
  ["School Portal", "/website"],
  ["Hospital Portal", "/website"],
  ["College Portal", "/website"],
  ["Customer Portal", "/website"],
  ["Vendor Portal", "/website"],
  ["Employee Portal", "/website"],
  ["Franchise Portal", "/website"],
  ["NGO Portal", "/website"],
  ["B2B Marketplace", "/website"],
  ["Job Portal", "/website"],
  ["Government Portal", "/website"],
          ].map(([title, link], index, arr) => (
            <li
              key={title}
              className={`relative pl-6 ${
                index === arr.length - 1
                  ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
                  : ""
              }`}
            >
              {/* Horizontal Branch */}
              <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-gray-300"></span>

              {/* Dot */}
              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-red-600 border-2 border-white"></span>

              <Link
                to={link}
                className="block font-medium text-gray-700 transition-all duration-300 hover:text-red-600 hover:translate-x-2"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</li>


  
  
<li className="relative group">
  {/* Services Button */}
  <button className="flex items-center gap-1 py-7 text-white transition hover:text-red-400">
    Services

    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {/* Mega Menu */}
  <div
    className="
      fixed
      left-1/2
      top-[105px]
      -translate-x-1/2
      w-[1300px]
      max-w-[96vw]
      max-h-[82vh]
      overflow-y-auto
      rounded-2xl
      bg-white
      shadow-2xl
      opacity-0
      invisible
      transition-all
      duration-300
      group-hover:opacity-100
      group-hover:visible
      z-[9999]
    "
  >
    <div className="p-10">

      <div className="grid grid-cols-4 gap-10">

        {/* ================= WEBSITE DEVELOPMENT ================= */}

        <div>

          <h3 className="text-red-600 font-bold text-lg border-b pb-3 mb-5">
            Website Development
          </h3>

          <ul className="space-y-4 text-gray-700">

            <li>
              <Link to="/website" className="font-semibold hover:text-red-600">
                Website Development
              </Link>

              <ul className="ml-5 mt-2 border-l border-gray-300 pl-4 space-y-2 text-sm">

                <li><Link to="/website" className="hover:text-red-600">├── Static Website</Link></li>
                <li><Link to="/website" className="hover:text-red-600">├── Dynamic Website</Link></li>
                <li><Link to="/website" className="hover:text-red-600">├── Business Website</Link></li>
                <li><Link to="/website" className="hover:text-red-600">├── Corporate Website</Link></li>
                <li><Link to="/website" className="hover:text-red-600">├── Ecommerce Website</Link></li>
                <li><Link to="/website" className="hover:text-red-600">├── School Website</Link></li>
                <li><Link to="/website" className="hover:text-red-600">├── Hospital Website</Link></li>
                <li><Link to="/website" className="hover:text-red-600">├── Landing Pages</Link></li>
                <li><Link to="/website" className="hover:text-red-600">├── Web Portals</Link></li>
                <li><Link to="/website" className="hover:text-red-600">└── CMS Website</Link></li>

              </ul>
            </li>

          </ul>

        </div>

        {/* ================= SOFTWARE DEVELOPMENT ================= */}

        <div>

          <h3 className="text-red-600 font-bold text-lg border-b pb-3 mb-5">
            Software Development
          </h3>

          <ul className="space-y-4 text-gray-700">

            <li>

              <Link
                to="/software"
                className="font-semibold hover:text-red-600"
              >
                Software Development
              </Link>

              <ul className="ml-5 mt-2 border-l border-gray-300 pl-4 space-y-2 text-sm">

                <li><Link to="/software" className="hover:text-red-600">├── ERP Software</Link></li>
                <li><Link to="/software" className="hover:text-red-600">├── CRM Software</Link></li>
                <li><Link to="/software" className="hover:text-red-600">├── HRMS Software</Link></li>
                <li><Link to="/software" className="hover:text-red-600">├── Accounting Software</Link></li>
                <li><Link to="/software" className="hover:text-red-600">├── Inventory Software</Link></li>
                <li><Link to="/software-management" className="hover:text-red-600">├── Hospital Management</Link></li>
                <li><Link to="/software" className="hover:text-red-600">├── School Management</Link></li>
                <li><Link to="/software" className="hover:text-red-600">├── Hotel Management</Link></li>
                <li><Link to="/software" className="hover:text-red-600">├── Manufacturing ERP</Link></li>
                <li><Link to="/software" className="hover:text-red-600">└── Custom Software</Link></li>

              </ul>

            </li>

          </ul>

        </div>

        {/* ================= MOBILE APPS ================= */}

        <div>

          <h3 className="text-red-600 font-bold text-lg border-b pb-3 mb-5">
            Mobile App Development
          </h3>

          <ul className="space-y-4 text-gray-700">

            <li>

              <Link
                to="/app-services"
                className="font-semibold hover:text-red-600"
              >
                Mobile Applications
              </Link>

              <ul className="ml-5 mt-2 border-l border-gray-300 pl-4 space-y-2 text-sm">

                <li><Link to="/android-app" className="hover:text-red-600">├── Android Apps</Link></li>
                <li><Link to="/ios-app" className="hover:text-red-600">├── iOS Apps</Link></li>
                <li><Link to="/flutter-app" className="hover:text-red-600">├── Flutter Apps</Link></li>
                <li><Link to="/react-native-app" className="hover:text-red-600">├── React Native Apps</Link></li>
                <li><Link to="/food-delivery-app" className="hover:text-red-600">├── Food Delivery</Link></li>
                <li><Link to="/cab-booking-app" className="hover:text-red-600">├── Cab Booking</Link></li>
                <li><Link to="/doctor-app" className="hover:text-red-600">├── Doctor App</Link></li>
                <li><Link to="/education-app" className="hover:text-red-600">├── Education App</Link></li>
                <li><Link to="/ecommerce-app" className="hover:text-red-600">├── Ecommerce App</Link></li>
                <li><Link to="/custom-app" className="hover:text-red-600">└── Custom Mobile Apps</Link></li>

              </ul>

            </li>

          </ul>

        </div>

        {/* ================= UI UX ================= */}

        <div>

          <h3 className="text-red-600 font-bold text-lg border-b pb-3 mb-5">
            UI / UX Design
          </h3>

          <ul className="space-y-4 text-gray-700">

            <li>

              <Link
                to="/ui-ux-design"
                className="font-semibold hover:text-red-600"
              >
                UI / UX Services
              </Link>

              <ul className="ml-5 mt-2 border-l border-gray-300 pl-4 space-y-2 text-sm">

                <li><Link to="/wireframe" className="hover:text-red-600">├── Wireframing</Link></li>
                <li><Link to="/prototype" className="hover:text-red-600">├── Interactive Prototype</Link></li>
                <li><Link to="/dashboard-design" className="hover:text-red-600">├── Dashboard Design</Link></li>
                <li><Link to="/mobile-ui" className="hover:text-red-600">├── Mobile UI</Link></li>
                <li><Link to="/web-ui" className="hover:text-red-600">├── Web UI</Link></li>
                <li><Link to="/branding-design" className="hover:text-red-600">├── Branding Design</Link></li>
                <li><Link to="/figma-design" className="hover:text-red-600">├── Figma Design</Link></li>
                <li><Link to="/adobe-xd" className="hover:text-red-600">└── Adobe XD Design</Link></li>

              </ul>

            </li>

          </ul>

        </div>

      </div>
            {/* ================= SECOND ROW ================= */}

      <div className="grid grid-cols-4 gap-10 mt-14">

        {/* ================= AI SERVICES ================= */}

        <div>

          <h3 className="text-red-600 font-bold text-lg border-b pb-3 mb-5">
            AI Services
          </h3>

          <ul className="space-y-4 text-gray-700">

            <li>

              <Link
                to="/ai-services"
                className="font-semibold hover:text-red-600"
              >
                AI Solutions
              </Link>

              <ul className="ml-5 mt-2 border-l border-gray-300 pl-4 space-y-2 text-sm">

                <li><Link to="/app-services" className="hover:text-red-600">├── AI Chatbot</Link></li>
                <li><Link to="/app-services" className="hover:text-red-600">├── AI Agent Development</Link></li>
                <li><Link to="/app-services" className="hover:text-red-600">├── AI Automation</Link></li>
                <li><Link to="/app-services" className="hover:text-red-600">├── AI Attendance System</Link></li>
                <li><Link to="/app-services" className="hover:text-red-600">├── AI CRM</Link></li>
                <li><Link to="/app-services" className="hover:text-red-600">├── AI ERP Assistant</Link></li>
                <li><Link to="/app-services" className="hover:text-red-600">├── AI Content Creator</Link></li>
                <li><Link to="/app-services" className="hover:text-red-600">├── AI Voice Assistant</Link></li>
                <li><Link to="/app-services" className="hover:text-red-600">├── AI Call Center</Link></li>
                <li><Link to="/app-services" className="hover:text-red-600">└── AI Consulting</Link></li>

              </ul>

            </li>

          </ul>

        </div>

        {/* ================= DIGITAL MARKETING ================= */}

        <div>

          <h3 className="text-red-600 font-bold text-lg border-b pb-3 mb-5">
            Digital Marketing
          </h3>

          <ul className="space-y-4 text-gray-700">

            <li>

              <Link
                to="/digital-marketing"
                className="font-semibold hover:text-red-600"
              >
                Marketing Services
              </Link>

              <ul className="ml-5 mt-2 border-l border-gray-300 pl-4 space-y-2 text-sm">

                <li><Link to="/seo" className="hover:text-red-600">├── SEO</Link></li>
                <li><Link to="/local-seo" className="hover:text-red-600">├── Local SEO</Link></li>
                <li><Link to="/technical-seo" className="hover:text-red-600">├── Technical SEO</Link></li>
                <li><Link to="/google-ads" className="hover:text-red-600">├── Google Ads</Link></li>
                <li><Link to="/meta-ads" className="hover:text-red-600">├── Meta Ads</Link></li>
                <li><Link to="/youtube-marketing" className="hover:text-red-600">├── YouTube Marketing</Link></li>
                <li><Link to="/email-marketing" className="hover:text-red-600">├── Email Marketing</Link></li>
                <li><Link to="/content-marketing" className="hover:text-red-600">├── Content Marketing</Link></li>
                <li><Link to="/social-media" className="hover:text-red-600">├── Social Media Marketing</Link></li>
                <li><Link to="/branding" className="hover:text-red-600">└── Branding</Link></li>

              </ul>

            </li>

          </ul>

        </div>

        {/* ================= CLOUD SERVICES ================= */}

        <div>

          <h3 className="text-red-600 font-bold text-lg border-b pb-3 mb-5">
            Cloud Services
          </h3>

          <ul className="space-y-4 text-gray-700">

            <li>

              <Link
                to="/cloude"
                className="font-semibold hover:text-red-600"
              >
                Cloud Solutions
              </Link>

              <ul className="ml-5 mt-2 border-l border-gray-300 pl-4 space-y-2 text-sm">

                <li><Link to="/cloude" className="hover:text-red-600">├── AWS</Link></li>
                <li><Link to="/cloude" className="hover:text-red-600">├── Microsoft Azure</Link></li>
                <li><Link to="/cloude" className="hover:text-red-600">├── Google Cloud</Link></li>
                <li><Link to="/cloude" className="hover:text-red-600">├── Cloud Hosting</Link></li>
                <li><Link to="/cloude" className="hover:text-red-600">├── Server Management</Link></li>
                <li><Link to="/cloude" className="hover:text-red-600">├── DevOps</Link></li>
                <li><Link to="/cloude" className="hover:text-red-600">├── Docker</Link></li>
                <li><Link to="/cloude" className="hover:text-red-600">├── Kubernetes</Link></li>
                <li><Link to="/cloude" className="hover:text-red-600">├── Cloud Migration</Link></li>
                <li><Link to="/cloude" className="hover:text-red-600">└── Backup & Disaster Recovery</Link></li>

              </ul>

            </li>

          </ul>

        </div>

        {/* ================= CYBER SECURITY ================= */}

        <div>

          <h3 className="text-red-600 font-bold text-lg border-b pb-3 mb-5">
            Cyber Security
          </h3>

          <ul className="space-y-4 text-gray-700">

            <li>

              <Link
                to="/cyber"
                className="font-semibold hover:text-red-600"
              >
                Security Services
              </Link>

              <ul className="ml-5 mt-2 border-l border-gray-300 pl-4 space-y-2 text-sm">

                <li><Link to="/cyber" className="hover:text-red-600">├── Penetration Testing</Link></li>
                <li><Link to="/cyber" className="hover:text-red-600">├── VAPT</Link></li>
                <li><Link to="/cyber" className="hover:text-red-600">├── Network Security</Link></li>
                <li><Link to="/cyber" className="hover:text-red-600">├── Endpoint Security</Link></li>
                <li><Link to="/cyber" className="hover:text-red-600">├── Cloud Security</Link></li>
                <li><Link to="/cyber" className="hover:text-red-600">├── SOC Services</Link></li>
                <li><Link to="/cyber" className="hover:text-red-600">├── Firewall Management</Link></li>
                <li><Link to="/cyber" className="hover:text-red-600">├── Security Audit</Link></li>
                <li><Link to="/cyber" className="hover:text-red-600">├── ISO 27001 Consulting</Link></li>
                <li><Link to="/cyber" className="hover:text-red-600">└── Cyber Security Training</Link></li>

              </ul>

            </li>

          </ul>

        </div>

      </div>
            {/* ================= THIRD ROW ================= */}

      <div className="grid grid-cols-4 gap-10 mt-14">

        {/* ================= BPO & KPO ================= */}

        <div>

          <h3 className="text-red-600 font-bold text-lg border-b pb-3 mb-5">
            BPO & KPO Services
          </h3>

          <ul className="space-y-4 text-gray-700">

            <li>

              <Link
                to="/bpo"
                className="font-semibold hover:text-red-600"
              >
                Outsourcing Services
              </Link>

              <ul className="ml-5 mt-2 border-l border-gray-300 pl-4 space-y-2 text-sm">

                <li><Link to="/bpo" className="hover:text-red-600">├── Call Center</Link></li>
                <li><Link to="/bpo" className="hover:text-red-600">├── Voice Support</Link></li>
                <li><Link to="/bpo" className="hover:text-red-600">├── Email Support</Link></li>
                <li><Link to="/bpo" className="hover:text-red-600">├── Chat Support</Link></li>
                <li><Link to="/bpo" className="hover:text-red-600">├── Technical Support</Link></li>
                <li><Link to="/bpo" className="hover:text-red-600">├── Lead Generation</Link></li>
                <li><Link to="/bpo" className="hover:text-red-600">├── Back Office Support</Link></li>
                <li><Link to="/bpo" className="hover:text-red-600">├── Data Entry</Link></li>
                <li><Link to="/bpo" className="hover:text-red-600">├── Research Services</Link></li>
                <li><Link to="/kpo" className="hover:text-red-600">└── KPO Services</Link></li>

              </ul>

            </li>

          </ul>

        </div>

        {/* ================= BUSINESS CONSULTING ================= */}

        <div>

          <h3 className="text-red-600 font-bold text-lg border-b pb-3 mb-5">
            Business Consulting
          </h3>

          <ul className="space-y-4 text-gray-700">

            <li>

              <Link
                to="/business-consulting"
                className="font-semibold hover:text-red-600"
              >
                Consultancy Services
              </Link>

              <ul className="ml-5 mt-2 border-l border-gray-300 pl-4 space-y-2 text-sm">

                <li><Link to="/businesssolution" className="hover:text-red-600">├── Startup Consulting</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">├── MSME Consulting</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">├── Business Registration</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">├── Company Formation</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">├── Project Report</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">├── Market Research</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">├── Business Plan</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">├── Franchise Consulting</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">├── Strategy Consulting</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">└── Growth Consulting</Link></li>

              </ul>

            </li>

          </ul>

        </div>

        {/* ================= IMPORT EXPORT ================= */}

        <div>

          <h3 className="text-red-600 font-bold text-lg border-b pb-3 mb-5">
            Import Export
          </h3>

          <ul className="space-y-4 text-gray-700">

            <li>

              <Link
                to="/import-export"
                className="font-semibold hover:text-red-600"
              >
                Trade Services
              </Link>

              <ul className="ml-5 mt-2 border-l border-gray-300 pl-4 space-y-2 text-sm">

                <li><Link to="/businesssolution" className="hover:text-red-600">├── IEC Registration</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">├── DGFT License</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">├── Custom Clearance</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">├── International Shipping</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">├── Export Documentation</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">├── International Buyers</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">├── Supplier Sourcing</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">├── Trade Finance</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">├── Export Consulting</Link></li>
                <li><Link to="/businesssolution" className="hover:text-red-600">└── Global Business Expansion</Link></li>

              </ul>

            </li>

          </ul>

        </div>

        {/* ================= LEGAL & COMPLIANCE ================= */}

        <div>

          <h3 className="text-red-600 font-bold text-lg border-b pb-3 mb-5">
            Legal & Compliance
          </h3>

          <ul className="space-y-4 text-gray-700">

            <li>

              <Link
                to="/legal-compliance"
                className="font-semibold hover:text-red-600"
              >
                Compliance Services
              </Link>

              <ul className="ml-5 mt-2 border-l border-gray-300 pl-4 space-y-2 text-sm">

                <li><Link to="/ourservices" className="hover:text-red-600">├── GST Registration</Link></li>
                <li><Link to="/ourservices" className="hover:text-red-600">├── Company Registration</Link></li>
                <li><Link to="/ourservices" className="hover:text-red-600">├── LLP Registration</Link></li>
                <li><Link to="/ourservices" className="hover:text-red-600">├── Trademark Registration</Link></li>
                <li><Link to="/ourservices" className="hover:text-red-600">├── Copyright</Link></li>
                <li><Link to="/ourservices" className="hover:text-red-600">├── Patent Registration</Link></li>
                <li><Link to="/ourservices" className="hover:text-red-600">├── ISO Certification</Link></li>
                <li><Link to="/ourservices" className="hover:text-red-600">├── FSSAI License</Link></li>
                <li><Link to="/ourservices" className="hover:text-red-600">├── Legal Documentation</Link></li>
                <li><Link to="/ourservices" className="hover:text-red-600">└── Annual Compliance</Link></li>

              </ul>

            </li>

          </ul>

        </div>

      </div>

    </div>
  </div>
</li>
<li className="relative group">
  {/* Button */}
  <button className="group flex items-center gap-1 py-7 text-white transition hover:text-red-400">
    Solutions

    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {/* Mega Menu */}
  <div
    className="
      absolute left-1/2 -translate-x-1/2 top-full mt-2
      w-[900px] bg-white rounded-2xl shadow-2xl
      p-8 z-50
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300
    "
  >
    <div className="grid grid-cols-2 gap-5">

      {/* ================= Business Solutions ================= */}
      <div>
        <h3 className="text-red-600 font-bold text-lg mb-6">
          Business Solutions
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">
          {[
            ["Startup Solutions", "/business"],
            ["Launch", "/business"],
            ["Growth", "/business"],
            ["Scale", "/business"],
            ["MSME Solutions", "/business"],
            ["Enterprise Solutions", "/business"],
            ["Custom Business Solution", "/business"],
          ].map(([title, link], index, arr) => (
            <li
              key={title}
              className={`relative pl-6 ${
                index === arr.length - 1
                  ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
                  : ""
              }`}
            >
              {/* Horizontal Branch */}
              <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-gray-300"></span>

              {/* Dot */}
              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-red-600 border-2 border-white"></span>

              <Link
                to={link}
                className="block font-medium text-gray-700 transition-all duration-300 hover:text-red-600 hover:translate-x-2"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ================= Industry Solutions ================= */}
      <div>
        <h3 className="text-red-600 font-bold text-lg mb-6">
          Industry Solutions
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">
          {[
            ["Healthcare Solutions", "/business"],
            ["Education Solutions", "/business"],
            ["Real Estate Solutions", "/business"],
            ["Hospitality Solutions", "/business"],
            ["Restaurant Solutions", "/business"],
            ["Retail & E-Commerce Solutions", "/business"],
            ["Manufacturing Solutions", "/business"],
            ["Logistics Solutions", "/business"],
            ["NGO Solutions", "/business"],
            ["Finance Solutions", "/business"],
            ["Travel Solutions", "/business"],
            ["Government Solutions", "/business"],
            ["Import Export Solutions", "/business"],
           
          ].map(([title, link], index, arr) => (
            <li
              key={title}
              className={`relative pl-6 ${
                index === arr.length - 1
                  ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
                  : ""
              }`}
            >
              {/* Horizontal Branch */}
              <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-gray-300"></span>

              {/* Dot */}
              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-red-600 border-2 border-white"></span>

              <Link
                to={link}
                className="block font-medium text-gray-700 transition-all duration-300 hover:text-red-600 hover:translate-x-2"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</li>




<li className="relative group">
  {/* Button */}
  <button className="group flex items-center gap-1 py-7 text-white transition hover:text-red-400">
      Fundings

    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {/* Mega Menu */}
  <div
       className="
    fixed
    left-1/2
    top-[100px]
    -translate-x-1/2
    w-[1280px]
    max-w-[95vw]
    max-h-[80vh]
    overflow-y-auto
    rounded-2xl
    bg-white
    p-8
    shadow-2xl
    z-[9999]
    opacity-0
    invisible
    transition-all
    duration-300
    group-hover:opacity-100
    group-hover:visible
  "
  
  >
    <div className="grid grid-cols-4 gap-10">

      
      <div>
        <h3 className="text-red-600 font-bold text-lg mb-8">
          Business Finance Solutions
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-6">
          {[
          
           ["Business Loans", "/business"],
    ["MSME Loan", "/business"],
    ["Working Capital Loan", "/business"],
    ["Loan Against Property", "/business"],
    ["Machinery Loan", "/business"],
    ["OD / CC", "/business"],
    ["Project Finance", "/business"],
    ["Business Expansion Finance", "/business"],
    ["Financial Advisory", "/business"],
    ["Private Investors", "/business"],
          ].map(([title, link], index, arr) => (
            <li
              key={title}
              className={`relative pl-6 ${
                index === arr.length - 1
                  ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
                  : ""
              }`}
            >
              {/* Horizontal Branch */}
              <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-gray-300"></span>

              {/* Dot */}
              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-red-600 border-2 border-white"></span>

              <Link
                to={link}
                className="block font-medium text-gray-700 transition-all duration-300 hover:text-red-600 hover:translate-x-2"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ================= Industry Solutions ================= */}
      <div>
        <h3 className="text-red-600 font-bold text-lg mb-6">
            International Trade & Cross-Border Finance
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">
          {[
               ["Export Finance", "/portal"],
    ["Import Finance", "/portal"],
    ["Trade Finance", "/portal"],
    ["Letter of Credit (LC)", "/portal"],
    ["Bank Guarantee (BG)", "/portal"],
    ["Overseas Business Funding", "/portal"],
    ["Foreign Investment", "/portal"],
    ["Cross Border Funding", "/portal"],
    ["Supply Chain Finance", "/portal"],
    ["Invoice Discounting", "/portal"],
      

           
          ].map(([title, link], index, arr) => (
            <li
              key={title}
              className={`relative pl-6 ${
                index === arr.length - 1
                  ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
                  : ""
              }`}
            >
              {/* Horizontal Branch */}
              <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-gray-300"></span>

              {/* Dot */}
              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-red-600 border-2 border-white"></span>

              <Link
                to={link}
                className="block font-medium text-gray-700 transition-all duration-300 hover:text-red-600 hover:translate-x-2"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
       <div>
  <h3 className="mb-6 text-lg font-bold text-red-600">
    Business Investors
  </h3>

  <ul className="relative ml-4 space-y-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-red-200">
    {[
      ["Business Valuation", "/portal"],
      ["Investor Connect", "/portal"],
      ["Angel Investors", "/portal"],
      ["Venture Capital", "/portal"],
      ["Private Equity", "/portal"],
      ["Financial Planning", "/portal"],
      ["Fund Raising", "/portal"],
      ["Mergers & Acquisitions", "/portal"],
      ["Due Diligence", "/portal"],
      ["IPO Advisory", "/portal"],
    ].map(([title, link], index, arr) => (
      <li
        key={title}
        className={`relative pl-6 ${
          index === arr.length - 1
            ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
            : ""
        }`}
      >
        {/* Horizontal Branch */}
        <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-red-200" />

        {/* Dot */}
        <span className="absolute -left-[5px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-white bg-red-600 transition-transform duration-300 hover:scale-125" />

        {/* Link */}
        <Link
          to={link}
          className="block font-medium text-gray-700 transition-all duration-300 hover:translate-x-2 hover:text-red-600"
        >
          {title}
        </Link>
      </li>
    ))}
  </ul>
</div>
      <div>
        <h3 className="text-red-600 font-bold text-lg mb-6">
          Business Portals Solutions
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">
          {[
              ["Corporate Website", "/website"],
  ["Business Website", "/website"],
  ["E-Commerce Website", "/website"],
  ["School Portal", "/website"],
  ["Hospital Portal", "/website"],
  ["College Portal", "/website"],
  ["Customer Portal", "/website"],
  ["Vendor Portal", "/website"],
  ["Employee Portal", "/website"],
  ["Franchise Portal", "/website"],
  ["NGO Portal", "/website"],
  ["B2B Marketplace", "website"],
  ["Job Portal", "/website"],
  ["Government Portal", "/website"],
          ].map(([title, link], index, arr) => (
            <li
              key={title}
              className={`relative pl-6 ${
                index === arr.length - 1
                  ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
                  : ""
              }`}
            >
              {/* Horizontal Branch */}
              <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-gray-300"></span>

              {/* Dot */}
              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-red-600 border-2 border-white"></span>

              <Link
                to={link}
                className="block font-medium text-gray-700 transition-all duration-300 hover:text-red-600 hover:translate-x-2"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
</li>

<li className="relative group">
  {/* Button */}
  <button className="group flex items-center gap-1 py-7 text-white transition hover:text-red-400">
    Tenders

    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {/* Mega Menu */}
  <div
    className="
      absolute left-1/2 -translate-x-1/2 top-full mt-4
      w-[1280px]
      max-h-[80vh]
      overflow-y-auto
      rounded-2xl
      bg-white
      p-8
      shadow-2xl
      z-50
      opacity-0 invisible
      group-hover:opacity-100
      group-hover:visible
      transition-all duration-300
    "
  >
    <div className="grid grid-cols-4 gap-10">

  

      <div>
        <h3 className="text-red-600 font-bold text-lg mb-6">
          Types of Tenders
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">

          {[
            ["Government Tenders","/tender"],
            ["PSU Tenders","/tender"],
            ["Private Tenders","/tender"],
            ["International Tenders","/tender"],
            ["Live Tenders","/tender"],
            ["GeM Bids","/tender"],
            ["E-Tenders","/tender"],
            ["Reverse Auctions","/tenser"],
            ["Tender Results","/tenser"],
            ["Smart Tender Search","/tender"],
          ].map(([title,link],index,arr)=>(

            <li
              key={title}
              className={`relative pl-6 ${
                index===arr.length-1
                ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
                :""
              }`}
            >

              {/* Branch */}
              <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-gray-300"></span>

              {/* Dot */}
              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-600"></span>

              <Link
                to={link}
                className="block font-medium text-gray-700 transition-all duration-300 hover:text-red-600 hover:translate-x-2"
              >
                {title}
              </Link>

            </li>

          ))}

        </ul>

      </div>

      

      <div>

        <h3 className="text-red-600 font-bold text-lg mb-6">
          Find Tenders
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">

          {[
            ["Product Name","/tenders"],
            ["Service Category","/tenders"],
            ["Department","/tenders"],
            ["State","/tenders"],
            ["City","/tenders"],
            ["Organization","/tenders"],
            ["Tender ID","/tenders"],
            ["Keywords","/tenders"],
            ["CPV Code","/tenders"],
            ["Closing Date","/tenders"],
          ].map(([title,link],index,arr)=>(

            <li
              key={title}
              className={`relative pl-6 ${
                index===arr.length-1
                ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
                :""
              }`}
            >

              <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-gray-300"></span>

              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-600"></span>

              <Link
                to={link}
                className="block font-medium text-gray-700 transition-all duration-300 hover:text-red-600 hover:translate-x-2"
              >
                {title}
              </Link>

            </li>

          ))}

        </ul>

      </div>
            {/* ================= Tender Documentation ================= */}

      <div>

        <h3 className="text-red-600 font-bold text-lg mb-6">
          Tender Documentation
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">

          {[
            ["Technical Bid","/tenders"],
            ["Financial Bid","/tenders"],
            ["BOQ Preparation","/tenders"],
            ["Compliance Documents","/tenders"],
            ["Affidavits","/tenders"],
            ["Declarations","/tenders"],
            ["Experience Certificates","/tenders"],
            ["OEM Authorization","/tenders"],
            ["EMD Documentation","/tenders"],
            ["Bank Guarantee","/tenders"],
          ].map(([title,link],index,arr)=>(

            <li
              key={title}
              className={`relative pl-6 ${
                index===arr.length-1
                  ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
                  : ""
              }`}
            >

              <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-gray-300"></span>

              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-600"></span>

              <Link
                to={link}
                className="block font-medium text-gray-700 transition-all duration-300 hover:text-red-600 hover:translate-x-2"
              >
                {title}
              </Link>

            </li>

          ))}

        </ul>

      </div>

      {/* ================= Business & Industry ================= */}

      <div>

        <h3 className="text-red-600 font-bold text-lg mb-6">
          Business & Industry
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">

          {[
            ["MSMEs","/business"],
            ["Startups","/startups"],
            ["Manufacturers","/manufacturers"],
            ["Contractors","/contractors"],
            ["Suppliers","/suppliers"],
            ["Service Providers","/service-providers"],
            ["EPC Companies","/epc-companies"],
            ["IT Companies","/it-companies"],
            ["Consultants","/consultants"],
            ["Exporters","/exporters"],
            ["Importers","/importers"],
            ["Healthcare Companies","/healthcare-companies"],
            ["Educational Institutions","/educational-institutions"],
          ].map(([title,link],index,arr)=>(

            <li
              key={title}
              className={`relative pl-6 ${
                index===arr.length-1
                  ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
                  : ""
              }`}
            >

              <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-gray-300"></span>

              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-600"></span>

              <Link
                to={link}
                className="block font-medium text-gray-700 transition-all duration-300 hover:text-red-600 hover:translate-x-2"
              >
                {title}
              </Link>

            </li>

          ))}

        </ul>

      </div>
            {/* ================= Tender Management ================= */}
      <div>
        <h3 className="text-red-600 font-bold text-lg mb-6">
          Tender Management
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">
          {[
            ["Daily Tender Alerts", "/tenders"],
            ["Email Alerts", "/tenders"],
            ["WhatsApp Notifications", "/tenders"],
            ["Deadline Reminders", "/tenders"],
            ["Bid Tracking Dashboard", "/tenders"],
            ["Tender Status Monitoring", "/tenders"],
            ["Document Management", "/tenders"],
            ["Tender Calendar", "/tenders"],
            ["Award Tracking", "/tenders"],
            ["Team Collaboration", "/tenders"],
            ["Multi User Access", "/tenders"],
            ["Reports & Analytics", "/tenders"],
          ].map(([title, link], index, arr) => (
            <li
              key={title}
              className={`relative pl-6 ${
                index === arr.length - 1
                  ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
                  : ""
              }`}
            >
              {/* Branch */}
              <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-gray-300"></span>

              {/* Dot */}
              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-600"></span>

              <Link
                to={link}
                className="block font-medium text-gray-700 transition-all duration-300 hover:text-red-600 hover:translate-x-2"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* ================= Sectors ================= */}
<div>
  <h3 className="text-red-600 font-bold text-lg mb-6">
    Sectors
  </h3>

  <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">
    {[
      ["Construction", "/tenders"],
      ["Civil Engineering", "/tenders"],
      ["Electrical", "/tenders"],
      ["Mechanical", "/tenders"],
      ["Information Technology", "/tenders"],
      ["Healthcare", "/tenders"],
      ["Pharmaceuticals", "/tenders"],
      ["Railways", "/tenders"],
      ["Defence", "/tenders"],
      ["Smart City Projects", "/tenders"],
      ["Energy", "/tenders"],
      ["Solar", "/tenders"],
      ["Telecom", "/tenders"],
      ["Manufacturing", "/tenders"],
      ["Water Supply", "/tenders"],
      ["Mining", "/tenders"],
      ["Education", "/tenders"],
      ["Food & Catering", "/tenders"],
      ["Security Services", "/tenders"],
      ["Facility Management", "/tenders"],
    ].map(([title, link], index, arr) => (
      <li
        key={title}
        className={`relative pl-6 ${
          index === arr.length - 1
            ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
            : ""
        }`}
      >
        {/* Horizontal Branch */}
        <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-gray-300"></span>

        {/* Dot */}
        <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-red-600 border-2 border-white"></span>

        <Link
          to={link}
          className="block font-medium text-gray-700 transition-all duration-300 hover:text-red-600 hover:translate-x-2"
        >
          {title}
        </Link>
      </li>
    ))}
  </ul>
</div>

{/* ================= Bid Services ================= */}
<div>
  <h3 className="text-red-600 font-bold text-lg mb-6">
    Bid Services
  </h3>

  <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">
    {[
      ["Bid Consultancy", "/tenders"],
      ["Tender Eligibility Analysis", "/tenders"],
      ["Bid Strategy & Planning", "/tenders"],
      ["Document Verification", "/tenders"],
      ["Technical Compliance", "/tenders"],
      ["Financial Bid Review", "/tenders"],
      ["Bid Submission Assistance", "/tenders"],
      ["Post-Bid Support", "/tenders"],
      ["Tender Clarification Assistance", "/tenders"],
    ].map(([title, link], index, arr) => (
      <li
        key={title}
        className={`relative pl-6 ${
          index === arr.length - 1
            ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
            : ""
        }`}
      >
        {/* Horizontal Branch */}
        <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-gray-300"></span>

        {/* Dot */}
        <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-red-600 border-2 border-white"></span>

        <Link
          to={link}
          className="block font-medium text-gray-700 transition-all duration-300 hover:text-red-600 hover:translate-x-2"
        >
          {title}
        </Link>
      </li>
    ))}
  </ul>
</div>

      {/* ================= GeM & Procurement ================= */}
      <div>
        <h3 className="text-red-600 font-bold text-lg mb-6">
          GeM & Procurement
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">
          {[
            ["GeM Registration", "/tenders"],
            ["Vendor Registration", "/tenders"],
            ["Product Listing", "/tenders"],
            ["Catalogue Creation", "/tenders"],
            ["Profile Management", "/tenders"],
            ["Bid Participation", "/tenders"],
            ["Order Management", "/tenders"],
            ["Vendor Empanelment", "/tenders"],
            ["Procurement Consultancy", "/tenders"],
            ["OEM Registration", "/tenders"],
            ["Government Procurement", "/tenders"],
            ["Supply Chain Support", "/tenders"],
          ].map(([title, link], index, arr) => (
            <li
              key={title}
              className={`relative pl-6 ${
                index === arr.length - 1
                  ? "after:absolute after:left-0 after:top-1/2 after:bottom-0 after:w-[2px] after:bg-white"
                  : ""
              }`}
            >
              {/* Branch */}
              <span className="absolute left-0 top-1/2 h-[2px] w-4 bg-gray-300"></span>

              {/* Dot */}
              <span className="absolute -left-[5px] top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-600"></span>

              <Link
                to={link}
                className="block font-medium text-gray-700 transition-all duration-300 hover:text-red-600 hover:translate-x-2"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>


</li>
<li className="relative group">
  <span className="flex cursor-pointer items-center gap-1 py-7 text-white transition hover:text-red-400">
    Academy

    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </span>

  <div
    className="
      absolute left-1/2 top-full z-50
      w-72 -translate-x-1/2
      rounded-2xl border border-white/10
      bg-white backdrop-blur-2xl
      shadow-2xl overflow-hidden
      opacity-0 invisible translate-y-5
      transition-all duration-300
      group-hover:opacity-100
      group-hover:visible
      group-hover:translate-y-0
    "
  >
    <Link to="/entrepreneurship" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-400">Entrepreneurship</Link>
    <Link to="/ai-for-business" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-400">AI for Business</Link>
    <Link to="/digital-marketing" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-400">Digital Marketing</Link>
    <Link to="/sales" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-400">Sales</Link>
    <Link to="/finance" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-400">Finance</Link>
    <Link to="/business-operations" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-400">Business Operations</Link>
    <Link to="/startup-masterclass" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-400">Startup Masterclass</Link>
    <Link to="/live-workshops" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-400">Live Workshops</Link>
    <Link to="/mentorship-programs" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-400">Mentorship Programs</Link>
    <Link to="/certifications" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-400">Certifications</Link>
    <Link to="/internship" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-400">Internship</Link>
  </div>
</li>
<li className="relative group">
  <span className="flex cursor-pointer items-center gap-1 py-7 text-white transition hover:text-red-400">
    Resources

    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </span>

  <div
    className="
      absolute left-1/2 top-full z-50
      w-72 -translate-x-1/2
      rounded-2xl border border-white/10
      bg-white backdrop-blur-2xl
      shadow-2xl overflow-hidden
      opacity-0 invisible translate-y-5
      transition-all duration-300
      group-hover:opacity-100
      group-hover:visible
      group-hover:translate-y-0
    "
  >
    <Link to="/blog" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">Blogs</Link>
    <Link to="/business-news" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">Business News</Link>
    <Link to="/ai-news" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">AI News</Link>
    <Link to="/startup-stories" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">Startup Stories</Link>
    <Link to="/case-studies" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">Case Studies</Link>
    <Link to="/business-templates" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">Business Templates</Link>
    
    <Link to="/webinars" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">Webinars</Link>
    <Link to="/podcasts" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">Podcasts</Link>
    <Link to="/industry-reports" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">Industry Reports</Link>
  </div>
</li>

  

  

 
  
 

<li className="relative group">
  {/* Menu Button */}
  <span className="flex cursor-pointer items-center gap-1 py-7 text-white transition hover:text-red-400">
    About

    <svg
      className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </span>

  {/* Dropdown */}
  <div
    className="
      absolute left-1/2 top-full z-50
      w-64 -translate-x-1/2
      rounded-2xl border border-white/10
      bg-white
      backdrop-blur-2xl
      shadow-2xl
      opacity-0 invisible
      translate-y-5
      transition-all duration-300
      group-hover:opacity-100
      group-hover:visible
      group-hover:translate-y-0
      overflow-hidden
    "
  >
    <Link to="/about" className="block px-5 py-3 text-sm text-black transition hover:bg-red-600/10 hover:text-red-600">
      Company Overview
    </Link>

    <Link to="/vision" className="block px-5 py-3 text-sm text-black transition hover:bg-red-600/10 hover:text-red-600">
      Our Vision
    </Link>

    <Link to="/mission" className="block px-5 py-3 text-sm text-black transition hover:bg-red-600/10 hover:text-red-600">
      Our Mission
    </Link>

    <Link to="/why-grovally" className="block px-5 py-3 text-sm text-black transition hover:bg-red-600/10 hover:text-red-600">
      Why GROVALLY
    </Link>

   

    <Link to="/our-journey" className="block px-5 py-3 text-sm text-black transition hover:bg-red-600/10 hover:text-red-600">
      Our Journey
    </Link>

    <Link to="/careers" className="block px-5 py-3 text-sm text-black transition hover:bg-red-600/10 hover:text-red-600">
      Careers
    </Link>

   

    <Link to="/media" className="block px-5 py-3 text-sm text-black transition hover:bg-red-600/10 hover:text-red-600">
      Media
    </Link>

    <Link to="/contact" className="block px-5 py-3 text-sm text-black transition hover:bg-red-600/10 hover:text-red-600">
      Contact Us
    </Link>
  </div>
</li>

  

  <li>
    <Link
      to="/grovallyAI"
      className="flex items-center  bg-white text-red-600 px-4 py-2 rounded-full font-bold hover:scale-105 transition"
    >
      
      Grovally AI
    </Link>
  </li>
</ul>
  

 

   
</div>






         

          {/* LOGIN / SIGNUP */}
          

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white text-xl sm:text-2xl"
          >
            <FaBars />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
     className="
  fixed
  
  right-0
  z-[9999]
  h-[calc(100dvh-20px)]
  w-full
  sm:w-[420px]
  md:w-[500px]
  lg:hidden
  bg-black/95
  backdrop-blur-2xl
  p-5
  sm:p-7
  overflow-y-auto
  rounded-l-2xl
"
      
    >
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8 sm:mb-10">
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770397/lolo_t6dwpa.png"
          alt="Logo"
          className="
            h-14
            sm:h-16
            w-auto
            bg-slate-100
            rounded-full
            object-contain
          "
        />

        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="p-2"
          aria-label="Close menu"
        >
          <FaTimes className="text-white text-3xl sm:text-4xl" />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex flex-col gap-4 sm:gap-5 text-white text-lg sm:text-xl">

        <Link
          onClick={() => setMenuOpen(false)}
          to="/"
          className="py-2 hover:text-red-500 transition"
        >
          Home
        </Link>
         <Link
          onClick={() => setMenuOpen(false)}
          to="/website"
          className="py-2 hover:text-red-500 transition"
        >
          Product
        </Link>

        <Link
          onClick={() => setMenuOpen(false)}
          to="/services"
          className="py-2 hover:text-red-500 transition"
        >
          Services
        </Link>

        <Link
          onClick={() => setMenuOpen(false)}
          to="/ourservices"
          className="py-2 hover:text-red-500 transition"
        >
          Our Services
        </Link>

        <Link
          onClick={() => setMenuOpen(false)}
          to="/tenders"
          className="py-2 hover:text-red-500 transition"
        >
          Tender
        </Link>

        <Link
          onClick={() => setMenuOpen(false)}
          to="/blog"
          className="py-2 hover:text-red-500 transition"
        >
          Blog
        </Link>
        

        <Link
          onClick={() => setMenuOpen(false)}
          to="/about"
          className="py-2 hover:text-red-500 transition"
        >
          About
        </Link>

        <Link
          onClick={() => setMenuOpen(false)}
          to="/contact"
          className="py-2 hover:text-red-500 transition"
        >
          Contact
        </Link>

        {/* GROVALLY AI */}
        <Link
          to="/grovallyAI"
          onClick={() => setMenuOpen(false)}
          className="
            mt-3
            bg-red-600
            text-white
            font-bold
            py-3
            rounded-xl
            text-center
            hover:bg-red-700
            transition
          "
        >
          Grovally AI
        </Link>

        {/* AUTH BUTTONS */}
        <div className="mt-6 grid grid-cols-2 gap-3">

          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="
              border border-white/30
              text-white
              px-4
              py-3
              rounded-xl
              font-bold
              text-center
              hover:bg-white
              hover:text-black
              transition
            "
          >
            Signup
          </Link>

          <Link
            to="/Login"
            onClick={() => setMenuOpen(false)}
            className="
              border border-white/30
              text-white
              px-4
              py-3
              rounded-xl
              font-bold
              text-center
              hover:bg-white
              hover:text-black
              transition
            "
          >
            Login
          </Link>

        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}