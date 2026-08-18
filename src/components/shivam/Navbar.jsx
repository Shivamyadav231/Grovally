import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaBars, FaRobot, FaTimes } from "react-icons/fa";


export default function Navbar() {
  const navigate = useNavigate();

  
const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
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
              : "  left-0 max-w-9xl w-[95%] mt-7 bg-[#C90102] rounded-2xl h-20"
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
             ["ERP Software", "/erp-software"],
  ["CRM Software", "/crm-software"],
  ["HRMS Software", "/hrms-software"],
  ["Accounting Software", "/accounting-software"],
  ["Inventory Management Software", "/inventory-management-software"],
  ["Payroll Software", "/payroll-software"],
  ["School Management Software", "/school-management-software"],
  ["Hospital Management Software", "/hospital-management-software"],
  ["Hotel Management Software", "/hotel-management-software"],
  ["Restaurant Software", "/restaurant-software"],
  ["Real Estate Software", "/real-estate-software"],
  ["Microfinance Software", "/microfinance-software"],
  ["NGO Management Software", "/ngo-management-software"],
  ["Logistics Software", "/logistics-software"],
  ["Manufacturing Software", "/manufacturing-software"],

           
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
             ["E-Commerce App", "/ecommerce-app"],
  ["Food Delivery App", "/food-delivery-app"],
  ["Hotel Booking App", "/hotel-booking-app"],
  ["Education App", "/education-app"],
  ["Healthcare App", "/healthcare-app"],
  ["Real Estate App", "/real-estate-app"],
  ["Grocery Delivery App", "/grocery-delivery-app"],
  ["Quick Commerce App", "/quick-commerce-app"],
  ["Bike Taxi App", "/bike-taxi-app"],
  ["Cab Booking App", "/cab-booking-app"],
  ["Travel App", "/travel-app"],
  ["Doctor Appointment App", "/doctor-appointment-app"],
  ["NGO App", "/ngo-app"],
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
              ["Corporate Website", "/corporate-website"],
  ["Business Website", "/business-website"],
  ["E-Commerce Website", "/ecommerce-website"],
  ["School Portal", "/school-portal"],
  ["Hospital Portal", "/hospital-portal"],
  ["College Portal", "/college-portal"],
  ["Customer Portal", "/customer-portal"],
  ["Vendor Portal", "/vendor-portal"],
  ["Employee Portal", "/employee-portal"],
  ["Franchise Portal", "/franchise-portal"],
  ["NGO Portal", "/ngo-portal"],
  ["B2B Marketplace", "/b2b-marketplace"],
  ["Job Portal", "/job-portal"],
  ["Government Portal", "/government-portal"],
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
              <Link to="/website-development" className="font-semibold hover:text-red-600">
                Website Development
              </Link>

              <ul className="ml-5 mt-2 border-l border-gray-300 pl-4 space-y-2 text-sm">

                <li><Link to="/static-website" className="hover:text-red-600">├── Static Website</Link></li>
                <li><Link to="/dynamic-website" className="hover:text-red-600">├── Dynamic Website</Link></li>
                <li><Link to="/business-website" className="hover:text-red-600">├── Business Website</Link></li>
                <li><Link to="/corporate-website" className="hover:text-red-600">├── Corporate Website</Link></li>
                <li><Link to="/ecommerce-website" className="hover:text-red-600">├── Ecommerce Website</Link></li>
                <li><Link to="/school-website" className="hover:text-red-600">├── School Website</Link></li>
                <li><Link to="/hospital-website" className="hover:text-red-600">├── Hospital Website</Link></li>
                <li><Link to="/landing-page" className="hover:text-red-600">├── Landing Pages</Link></li>
                <li><Link to="/portal-development" className="hover:text-red-600">├── Web Portals</Link></li>
                <li><Link to="/cms-development" className="hover:text-red-600">└── CMS Website</Link></li>

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
                to="/software-development"
                className="font-semibold hover:text-red-600"
              >
                Software Development
              </Link>

              <ul className="ml-5 mt-2 border-l border-gray-300 pl-4 space-y-2 text-sm">

                <li><Link to="/erp" className="hover:text-red-600">├── ERP Software</Link></li>
                <li><Link to="/crm" className="hover:text-red-600">├── CRM Software</Link></li>
                <li><Link to="/hrms" className="hover:text-red-600">├── HRMS Software</Link></li>
                <li><Link to="/accounting" className="hover:text-red-600">├── Accounting Software</Link></li>
                <li><Link to="/inventory" className="hover:text-red-600">├── Inventory Software</Link></li>
                <li><Link to="/hospital-management" className="hover:text-red-600">├── Hospital Management</Link></li>
                <li><Link to="/school-management" className="hover:text-red-600">├── School Management</Link></li>
                <li><Link to="/hotel-management" className="hover:text-red-600">├── Hotel Management</Link></li>
                <li><Link to="/manufacturing-software" className="hover:text-red-600">├── Manufacturing ERP</Link></li>
                <li><Link to="/custom-software" className="hover:text-red-600">└── Custom Software</Link></li>

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
                to="/mobile-app-development"
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

                <li><Link to="/ai-chatbot" className="hover:text-red-600">├── AI Chatbot</Link></li>
                <li><Link to="/ai-agent" className="hover:text-red-600">├── AI Agent Development</Link></li>
                <li><Link to="/ai-automation" className="hover:text-red-600">├── AI Automation</Link></li>
                <li><Link to="/ai-attendance" className="hover:text-red-600">├── AI Attendance System</Link></li>
                <li><Link to="/ai-crm" className="hover:text-red-600">├── AI CRM</Link></li>
                <li><Link to="/ai-erp" className="hover:text-red-600">├── AI ERP Assistant</Link></li>
                <li><Link to="/ai-content" className="hover:text-red-600">├── AI Content Creator</Link></li>
                <li><Link to="/ai-voice" className="hover:text-red-600">├── AI Voice Assistant</Link></li>
                <li><Link to="/ai-call-center" className="hover:text-red-600">├── AI Call Center</Link></li>
                <li><Link to="/ai-consulting" className="hover:text-red-600">└── AI Consulting</Link></li>

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
                to="/cloud-services"
                className="font-semibold hover:text-red-600"
              >
                Cloud Solutions
              </Link>

              <ul className="ml-5 mt-2 border-l border-gray-300 pl-4 space-y-2 text-sm">

                <li><Link to="/aws" className="hover:text-red-600">├── AWS</Link></li>
                <li><Link to="/azure" className="hover:text-red-600">├── Microsoft Azure</Link></li>
                <li><Link to="/google-cloud" className="hover:text-red-600">├── Google Cloud</Link></li>
                <li><Link to="/cloud-hosting" className="hover:text-red-600">├── Cloud Hosting</Link></li>
                <li><Link to="/server-management" className="hover:text-red-600">├── Server Management</Link></li>
                <li><Link to="/devops" className="hover:text-red-600">├── DevOps</Link></li>
                <li><Link to="/docker" className="hover:text-red-600">├── Docker</Link></li>
                <li><Link to="/kubernetes" className="hover:text-red-600">├── Kubernetes</Link></li>
                <li><Link to="/cloud-migration" className="hover:text-red-600">├── Cloud Migration</Link></li>
                <li><Link to="/backup-disaster" className="hover:text-red-600">└── Backup & Disaster Recovery</Link></li>

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
                to="/cyber-security"
                className="font-semibold hover:text-red-600"
              >
                Security Services
              </Link>

              <ul className="ml-5 mt-2 border-l border-gray-300 pl-4 space-y-2 text-sm">

                <li><Link to="/penetration-testing" className="hover:text-red-600">├── Penetration Testing</Link></li>
                <li><Link to="/vapt" className="hover:text-red-600">├── VAPT</Link></li>
                <li><Link to="/network-security" className="hover:text-red-600">├── Network Security</Link></li>
                <li><Link to="/endpoint-security" className="hover:text-red-600">├── Endpoint Security</Link></li>
                <li><Link to="/cloud-security" className="hover:text-red-600">├── Cloud Security</Link></li>
                <li><Link to="/soc-services" className="hover:text-red-600">├── SOC Services</Link></li>
                <li><Link to="/firewall" className="hover:text-red-600">├── Firewall Management</Link></li>
                <li><Link to="/security-audit" className="hover:text-red-600">├── Security Audit</Link></li>
                <li><Link to="/iso-27001" className="hover:text-red-600">├── ISO 27001 Consulting</Link></li>
                <li><Link to="/cyber-training" className="hover:text-red-600">└── Cyber Security Training</Link></li>

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
                to="/bpo-services"
                className="font-semibold hover:text-red-600"
              >
                Outsourcing Services
              </Link>

              <ul className="ml-5 mt-2 border-l border-gray-300 pl-4 space-y-2 text-sm">

                <li><Link to="/call-center" className="hover:text-red-600">├── Call Center</Link></li>
                <li><Link to="/voice-support" className="hover:text-red-600">├── Voice Support</Link></li>
                <li><Link to="/email-support" className="hover:text-red-600">├── Email Support</Link></li>
                <li><Link to="/chat-support" className="hover:text-red-600">├── Chat Support</Link></li>
                <li><Link to="/technical-support" className="hover:text-red-600">├── Technical Support</Link></li>
                <li><Link to="/lead-generation" className="hover:text-red-600">├── Lead Generation</Link></li>
                <li><Link to="/back-office" className="hover:text-red-600">├── Back Office Support</Link></li>
                <li><Link to="/data-entry" className="hover:text-red-600">├── Data Entry</Link></li>
                <li><Link to="/research-services" className="hover:text-red-600">├── Research Services</Link></li>
                <li><Link to="/kpo-services" className="hover:text-red-600">└── KPO Services</Link></li>

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

                <li><Link to="/startup-consulting" className="hover:text-red-600">├── Startup Consulting</Link></li>
                <li><Link to="/msme-consulting" className="hover:text-red-600">├── MSME Consulting</Link></li>
                <li><Link to="/business-registration" className="hover:text-red-600">├── Business Registration</Link></li>
                <li><Link to="/company-formation" className="hover:text-red-600">├── Company Formation</Link></li>
                <li><Link to="/project-report" className="hover:text-red-600">├── Project Report</Link></li>
                <li><Link to="/market-research" className="hover:text-red-600">├── Market Research</Link></li>
                <li><Link to="/business-plan" className="hover:text-red-600">├── Business Plan</Link></li>
                <li><Link to="/franchise-consulting" className="hover:text-red-600">├── Franchise Consulting</Link></li>
                <li><Link to="/strategy-consulting" className="hover:text-red-600">├── Strategy Consulting</Link></li>
                <li><Link to="/growth-consulting" className="hover:text-red-600">└── Growth Consulting</Link></li>

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

                <li><Link to="/iec-registration" className="hover:text-red-600">├── IEC Registration</Link></li>
                <li><Link to="/dgft-license" className="hover:text-red-600">├── DGFT License</Link></li>
                <li><Link to="/custom-clearance" className="hover:text-red-600">├── Custom Clearance</Link></li>
                <li><Link to="/international-shipping" className="hover:text-red-600">├── International Shipping</Link></li>
                <li><Link to="/export-documentation" className="hover:text-red-600">├── Export Documentation</Link></li>
                <li><Link to="/buyer-search" className="hover:text-red-600">├── International Buyers</Link></li>
                <li><Link to="/supplier-search" className="hover:text-red-600">├── Supplier Sourcing</Link></li>
                <li><Link to="/trade-finance" className="hover:text-red-600">├── Trade Finance</Link></li>
                <li><Link to="/export-consulting" className="hover:text-red-600">├── Export Consulting</Link></li>
                <li><Link to="/global-business" className="hover:text-red-600">└── Global Business Expansion</Link></li>

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

                <li><Link to="/gst-registration" className="hover:text-red-600">├── GST Registration</Link></li>
                <li><Link to="/company-registration" className="hover:text-red-600">├── Company Registration</Link></li>
                <li><Link to="/llp-registration" className="hover:text-red-600">├── LLP Registration</Link></li>
                <li><Link to="/trademark" className="hover:text-red-600">├── Trademark Registration</Link></li>
                <li><Link to="/copyright" className="hover:text-red-600">├── Copyright</Link></li>
                <li><Link to="/patent" className="hover:text-red-600">├── Patent Registration</Link></li>
                <li><Link to="/iso-certification" className="hover:text-red-600">├── ISO Certification</Link></li>
                <li><Link to="/fssai" className="hover:text-red-600">├── FSSAI License</Link></li>
                <li><Link to="/legal-documentation" className="hover:text-red-600">├── Legal Documentation</Link></li>
                <li><Link to="/annual-compliance" className="hover:text-red-600">└── Annual Compliance</Link></li>

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
            ["Startup Solutions", "/startup-solutions"],
            ["Launch", "/launch"],
            ["Growth", "/growth"],
            ["Scale", "/scale"],
            ["MSME Solutions", "/msme-solutions"],
            ["Enterprise Solutions", "/enterprise-solutions"],
            ["Custom Business Solution", "/custom-business-solution"],
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
            ["Healthcare Solutions", "/healthcare-solutions"],
            ["Education Solutions", "/education-solutions"],
            ["Real Estate Solutions", "/real-estate-solutions"],
            ["Hospitality Solutions", "/hospitality-solutions"],
            ["Restaurant Solutions", "/restaurant-solutions"],
            ["Retail & E-Commerce Solutions", "/retail-ecommerce-solutions"],
            ["Manufacturing Solutions", "/manufacturing-solutions"],
            ["Logistics Solutions", "/logistics-solutions"],
            ["NGO Solutions", "/ngo-solutions"],
            ["Finance Solutions", "/finance-solutions"],
            ["Travel Solutions", "/travel-solutions"],
            ["Government Solutions", "/government-solutions"],
            ["Import Export Solutions", "/import-export-solutions"],
           
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

      {/* ================= Business Solutions ================= */}
      <div>
        <h3 className="text-red-600 font-bold text-lg mb-8">
          Business Finance Solutions
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-6">
          {[
          
           ["Business Loans", "/business-loans"],
    ["MSME Loan", "/msme-loan"],
    ["Working Capital Loan", "/working-capital-loan"],
    ["Loan Against Property", "/lap"],
    ["Machinery Loan", "/machinery-loan"],
    ["OD / CC", "/od-cc"],
    ["Project Finance", "/project-finance"],
    ["Business Expansion Finance", "/business-expansion-finance"],
    ["Financial Advisory", "/financial-advisory"],
    ["Private Investors", "/private-investors"],
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
            Business Solutions
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">
          {[
               ["Export Finance", "/export-finance"],
    ["Import Finance", "/import-finance"],
    ["Trade Finance", "/trade-finance"],
    ["Letter of Credit (LC)", "/letter-of-credit"],
    ["Bank Guarantee (BG)", "/bank-guarantee"],
    ["Overseas Business Funding", "/overseas-business-funding"],
    ["Foreign Investment", "/foreign-investment"],
    ["Cross Border Funding", "/cross-border-funding"],
    ["Supply Chain Finance", "/supply-chain-finance"],
    ["Invoice Discounting", "/invoice-discounting"],
      

           
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
           Business Inverstors 
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">
          {[
              ["Business Valuation", "/business-valuation"],
    ["Investor Connect", "/investor-connect"],
    ["Angel Investors", "/angel-investors"],
    ["Venture Capital", "/venture-capital"],
    ["Private Equity", "/private-equity"],
    ["Financial Planning", "/financial-planning"],
    ["Fund Raising", "/fund-raising"],
    ["Mergers & Acquisitions", "/mergers-acquisitions"],
    ["Due Diligence", "/due-diligence"],
    ["IPO Advisory", "/ipo-advisory"],
  
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
          Business Portals Solutions
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">
          {[
              ["Corporate Website", "/corporate-website"],
  ["Business Website", "/business-website"],
  ["E-Commerce Website", "/ecommerce-website"],
  ["School Portal", "/school-portal"],
  ["Hospital Portal", "/hospital-portal"],
  ["College Portal", "/college-portal"],
  ["Customer Portal", "/customer-portal"],
  ["Vendor Portal", "/vendor-portal"],
  ["Employee Portal", "/employee-portal"],
  ["Franchise Portal", "/franchise-portal"],
  ["NGO Portal", "/ngo-portal"],
  ["B2B Marketplace", "/b2b-marketplace"],
  ["Job Portal", "/job-portal"],
  ["Government Portal", "/government-portal"],
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

      {/* ================= Types of Tenders ================= */}

      <div>
        <h3 className="text-red-600 font-bold text-lg mb-6">
          Types of Tenders
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">

          {[
            ["Government Tenders","/government-tenders"],
            ["PSU Tenders","/psu-tenders"],
            ["Private Tenders","/private-tenders"],
            ["International Tenders","/international-tenders"],
            ["Live Tenders","/live-tenders"],
            ["GeM Bids","/gem-bids"],
            ["E-Tenders","/e-tenders"],
            ["Reverse Auctions","/reverse-auctions"],
            ["Tender Results","/tender-results"],
            ["Smart Tender Search","/smart-search"],
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

      {/* ================= Find Tenders ================= */}

      <div>

        <h3 className="text-red-600 font-bold text-lg mb-6">
          Find Tenders
        </h3>

        <ul className="relative ml-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 space-y-4">

          {[
            ["Product Name","/product-name"],
            ["Service Category","/service-category"],
            ["Department","/department"],
            ["State","/state"],
            ["City","/city"],
            ["Organization","/organization"],
            ["Tender ID","/tender-id"],
            ["Keywords","/keywords"],
            ["CPV Code","/cpv-code"],
            ["Closing Date","/closing-date"],
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
            ["Technical Bid","/technical-bid"],
            ["Financial Bid","/financial-bid"],
            ["BOQ Preparation","/boq-preparation"],
            ["Compliance Documents","/compliance-documents"],
            ["Affidavits","/affidavits"],
            ["Declarations","/declarations"],
            ["Experience Certificates","/experience-certificates"],
            ["OEM Authorization","/oem-authorization"],
            ["EMD Documentation","/emd-documentation"],
            ["Bank Guarantee","/bank-guarantee"],
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
            ["MSMEs","/msmes"],
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
            ["Daily Tender Alerts", "/daily-tender-alerts"],
            ["Email Alerts", "/email-alerts"],
            ["WhatsApp Notifications", "/whatsapp-alerts"],
            ["Deadline Reminders", "/deadline-reminders"],
            ["Bid Tracking Dashboard", "/bid-tracking"],
            ["Tender Status Monitoring", "/tender-status"],
            ["Document Management", "/document-management"],
            ["Tender Calendar", "/tender-calendar"],
            ["Award Tracking", "/award-tracking"],
            ["Team Collaboration", "/team-collaboration"],
            ["Multi User Access", "/multi-user"],
            ["Reports & Analytics", "/tender-reports"],
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
      ["Construction", "/construction-tenders"],
      ["Civil Engineering", "/civil-engineering-tenders"],
      ["Electrical", "/electrical-tenders"],
      ["Mechanical", "/mechanical-tenders"],
      ["Information Technology", "/it-tenders"],
      ["Healthcare", "/healthcare-tenders"],
      ["Pharmaceuticals", "/pharma-tenders"],
      ["Railways", "/railway-tenders"],
      ["Defence", "/defence-tenders"],
      ["Smart City Projects", "/smart-city-tenders"],
      ["Energy", "/energy-tenders"],
      ["Solar", "/solar-tenders"],
      ["Telecom", "/telecom-tenders"],
      ["Manufacturing", "/manufacturing-tenders"],
      ["Water Supply", "/water-supply-tenders"],
      ["Mining", "/mining-tenders"],
      ["Education", "/education-tenders"],
      ["Food & Catering", "/food-catering-tenders"],
      ["Security Services", "/security-tenders"],
      ["Facility Management", "/facility-management-tenders"],
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
      ["Bid Consultancy", "/bid-consultancy"],
      ["Tender Eligibility Analysis", "/tender-eligibility-analysis"],
      ["Bid Strategy & Planning", "/bid-strategy-planning"],
      ["Document Verification", "/document-verification"],
      ["Technical Compliance", "/technical-compliance"],
      ["Financial Bid Review", "/financial-bid-review"],
      ["Bid Submission Assistance", "/bid-submission-assistance"],
      ["Post-Bid Support", "/post-bid-support"],
      ["Tender Clarification Assistance", "/tender-clarification"],
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
            ["GeM Registration", "/gem-registration"],
            ["Vendor Registration", "/vendor-registration"],
            ["Product Listing", "/product-listing"],
            ["Catalogue Creation", "/catalogue-creation"],
            ["Profile Management", "/profile-management"],
            ["Bid Participation", "/bid-participation"],
            ["Order Management", "/order-management"],
            ["Vendor Empanelment", "/vendor-empanelment"],
            ["Procurement Consultancy", "/procurement-consultancy"],
            ["OEM Registration", "/oem-registration"],
            ["Government Procurement", "/government-procurement"],
            ["Supply Chain Support", "/supply-chain"],
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
          <div className="hidden lg:flex items-center gap-4">
            

           
          </div>

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
            transition={{ duration: 0.35 }}
            className="fixed top-0 right-0 w-full h-screen bg-black/95 backdrop-blur-2xl z-50 p-6 overflow-y-auto"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-10">
              <img loading="lazy" src="https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770397/lolo_t6dwpa.png" className="h-12 bg-red-600 object-contain" />
              <button onClick={() => setMenuOpen(false)}>
                <FaTimes className="text-white text-3xl" />
              </button>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-5 text-white text-lg">
              <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
             
              <Link onClick={() => setMenuOpen(false)} to="/services">Services</Link>
              <Link onClick={()=>setMenuOpen(false)} to="/ourservices">Our Services</Link>
                <Link onClick={() => setMenuOpen(false)} to="/tender">Tender</Link>
              <Link onClick={()=>setMenuOpen(false)} to="/blog" >Blog</Link>
               <Link onClick={() => setMenuOpen(false)} to="/about">About</Link>
              <Link onClick={() => setMenuOpen(false)} to="/contact">Contact</Link>
            


              <Link
  to="/grovallyAI"
  onClick={() => setMenuOpen(false)}
  className="mt-4 bg-cyan-400 text-black font-bold py-3 rounded-xl text-center"
>
  Grovally AI
</Link>

              <div className="mt-10 grid grid-cols-2 gap-4">
                
                <Link
              to="/signup"
              className=" text-white px-4 py-2 rounded-full font-bold hover:scale-105 transition"
            >
              Signup
            </Link>

                
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}