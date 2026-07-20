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
              : "  left-0 max-w-9xl w-[95%] mt-6 bg-[#C90102] rounded-2xl h-20"
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
 <button className="group flex items-center gap-1 py-7 text-white transition hover:text-red-400">
  Services

  <svg
    className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>

  {/* Mega Menu */}
  <div
    className="
      fixed
      left-0
      right-0
      top-[95px]
      z-50

      opacity-0
      invisible
      group-hover:opacity-100
      group-hover:visible

      transition-all
      duration-300
    "
  >
    <div
      className="
        max-w-9xl
        mx-auto
        bg-white
        rounded-2xl
        shadow-2xl
        p-10
      "
    >
      <div className="grid grid-cols-8 gap-10">

        {/* IT Services */}
        <div>
          <h3 className="text-red-600 font-bold mb-5 border-b pb-2">
            IT Services
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li><Link to="/website-development" className="hover:text-red-600">Website Development</Link></li>
            <li><Link to="/software-development" className="hover:text-red-600">Software Development</Link></li>
            <li><Link to="/mobile-app-development" className="hover:text-red-600">Mobile App Development</Link></li>
            <li><Link to="/ui-ux-design" className="hover:text-red-600">UI / UX Design</Link></li>
            <li><Link to="/cloud-services" className="hover:text-red-600">Cloud Services</Link></li>
            <li><Link to="/api-integration" className="hover:text-red-600">API Integration</Link></li>
            <li><Link to="/cyber-security" className="hover:text-red-600">Cyber Security</Link></li>
            <li><Link to="/software-maintenance" className="hover:text-red-600">Software Maintenance</Link></li>
          </ul>
        </div>

        {/* AI Services */}
        <div>
          <h3 className="text-red-600 font-bold mb-5 border-b pb-2">
            AI Services
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li><Link to="/ai-automation" className="hover:text-red-600">AI Automation</Link></li>
            <li><Link to="/ai-integration" className="hover:text-red-600">AI Integration</Link></li>
            <li><Link to="/ai-consulting" className="hover:text-red-600">AI Consulting</Link></li>
            <li><Link to="/ai-agent-development" className="hover:text-red-600">AI Agent Development</Link></li>
            <li><Link to="/chatbot-development" className="hover:text-red-600">Chatbot Development</Link></li>
          </ul>
        </div>

        {/* Marketing */}
        <div>
          <h3 className="text-red-600 font-bold mb-5 border-b pb-2">
            Marketing Services
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li><Link to="/seo" className="hover:text-red-600">SEO</Link></li>
            <li><Link to="/google-ads" className="hover:text-red-600">Google Ads</Link></li>
            <li><Link to="/meta-ads" className="hover:text-red-600">Meta Ads</Link></li>
            
            <li><Link to="/social-media-marketing" className="hover:text-red-600">Social Media Marketing</Link></li>
            <li><Link to="/content-marketing" className="hover:text-red-600">Content Marketing</Link></li>
            <li><Link to="/influencer-marketing" className="hover:text-red-600">Influencer Marketing</Link></li>
            <li><Link to="/affiliate-marketing" className="hover:text-red-600">Affiliate Marketing</Link></li>
            <li><Link to="/podcast-marketing" className="hover:text-red-600">Podcast Marketing</Link></li>
            <li><Link to="/branding" className="hover:text-red-600">Branding</Link></li>
            <li><Link to="/pr-services" className="hover:text-red-600">PR Services</Link></li>

            <li><Link className="hover:text-red-600"> Email Marketing</Link></li>
            <li> <Link className="hover:text-red-600">WhatsApp MarKeting</Link></li>
            <li><Link className="hover:text-red-600">Podacst Marketing</Link></li>
            <li><Link className="hover:text-red-600"> Video Marketing</Link></li>
            <li><Link className="hover:text-red-600">Performance Marketing</Link></li>
            <li><Link className="hover:text-red-600">Branding</Link></li>
            <li><Link className="hover:text-red-600">Online Reputation Management</Link></li>


          </ul>
        </div>

        {/* BPO */}
        <div>
          <h3 className="text-red-600 font-bold mb-5 border-b pb-2">
            BPO & KPO
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li><Link to="/customer-support" className="hover:text-red-600">Customer Support</Link></li>
            <li><Link to="/call-center" className="hover:text-red-600">Call Center</Link></li>
            <li><Link to="/technical-support" className="hover:text-red-600">Technical Support</Link></li>
            <li><Link to="/lead-generation" className="hover:text-red-600">Lead Generation</Link></li>
            <li><Link to="/market-research" className="hover:text-red-600">Market Research</Link></li>
            <li><Link to="/data-analysis" className="hover:text-red-600">Data Analysis</Link></li>
            <li><Link to="/business-intelligence" className="hover:text-red-600">Business Intelligence</Link></li>
          </ul>
        </div>

        {/* Business Support */}
        <div>
          <h3 className="text-red-600 font-bold mb-5 border-b pb-2">
            Business Support
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li><Link to="/company-registration" className="hover:text-red-600">Company Registration</Link></li>
            <li><Link to="/trademark" className="hover:text-red-600">Trademark</Link></li>
            <li><Link to="/copyright" className="hover:text-red-600">Copyright</Link></li>
            <li><Link to="/patent" className="hover:text-red-600">Patent</Link></li>
            <li><Link to="/iso-certification" className="hover:text-red-600">ISO Certification</Link></li>
            <li><Link to="/gst-registration" className="hover:text-red-600">GST Registration</Link></li>
            <li><Link to="/iec-registration" className="hover:text-red-600">IEC Registration</Link></li>
            <li><Link to="/compliance-services" className="hover:text-red-600">Compliance Services</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-red-600 font-bold mb-5 border-b pb-2"> Tender Services

          </h3>Government Tenders

          <ul className="space-y-3 text-gray-700">
            <li> <Link className="hover:text-red-600">Goverment Tender</Link></li>
            <li> <Link className="hover:text-red-600">private Tender</Link> </li>
            <li> <Link className="hover:text-red-600">GEM Registration</Link> </li>
            <li>  <Link className="hover:text-red-600">Bid management</Link></li>
            <li> <Link className="hover:text-red-600">Tender Documentation</Link> </li>
            <li> <Link className="hover:text-red-600">Tender Consultancy</Link> </li>
            <li> <Link className="hover:text-red-600">Tender Filing </Link> </li>
            

          </ul>
 
        </div>
        <div>
          <h3 className="text-red-600 font-bold mb-5 border-b pb-2"> Import Export Services

          </h3>IEC Registration

          <ul className="space-y-3 text-gray-700" >
            <li> <Link className="hover:text-red-600" >IEC Registration</Link></li>
            <li> <Link className="hover:text-red-600">DGFT Consultancy</Link></li>
            <li> <Link className="hover:text-red-600">Customs Documentation </Link></li>
            <li> <Link className="hover:text-red-600">Export Consultation</Link></li>
            <li> <Link className="hover:text-red-600">Import Consultation</Link></li>
            <li> <Link className="hover:text-red-600">Logistics Assistance</Link></li>
           

          </ul>
 
        </div>
        <div>
          <h3 className="text-red-600 font-bold mb-5 border-b pb-2">Business Consultancy

          </h3>
          

          <ul className="space-y-3 text-gray-700">
            <li> <Link className="hover:text-red-600">Startup Consultancy</Link></li>
            <li > <Link className="hover:text-red-600">Business Strategy</Link></li>
            <li> <Link className="hover:text-red-600">Process Optimization</Link></li>
            <li> <Link className="hover:text-red-600">Franchise Consultancy</Link></li>
            <li> <Link className="hover:text-red-600"> Growth Consultancy</Link></li>
            <li> <Link className="hover:text-red-600">Market Expansion</Link></li>
            <li> <Link className="hover:text-red-600">Digital Transformation</Link></li>
             
  
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
          AI Solutions
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
            Business Software
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
           Mobile Apps
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

  <button className="group flex items-center gap-1 py-7 text-white transition hover:text-red-400">
  Tenders

  <svg
    className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</button>

  {/* Dropdown */}
  <div   
      className="
    absolute left-1/2 -translate-x-1/2 top-full mt-2
    w-[1280px]
    max-h-[80vh]
    overflow-y-auto
    rounded-2xl
    bg-white
    p-8
    shadow-2xl
    z-50
    opacity-0 invisible
    group-hover:opacity-100 group-hover:visible
    transition-all duration-300
  ">

    <div className="grid grid-cols-4 gap-6 text-sm">

      {/* 1 TYPES */}
      <div>
        <h3 className="font-bold text-red-600 mb-2">Types of Tenders</h3>
        <ul className="space-y-1">
          {[
            "Government Tenders",
            "PSU Tenders",
            "Private Tenders",
            "International Tenders",
            "Live Tenders",
            "GeM Bids",
            "E-Tenders",
            "Reverse Auctions",
            "Corrigendum & Amendments",
            "Tender Results & Awarded Contracts",
            "Smart Tender Search"
          ].map((item, i) => (
            <li key={i}>
              <a className=" text-black hover:text-red-600 transition" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 2 SEARCH */}
      <div>
        <h3 className="font-bold text-red-600 mb-2">Find Tenders</h3>
        <ul className="space-y-1">
          {[
            "Product Name",
            "Service Category",
            "Department",
            "State",
            "City",
            "Organization",
            "Tender ID",
            "Keywords",
            "CPV Code",
            "Ministry",
            "Closing Date"
          ].map((item, i) => (
            <li key={i}>
              <a className=" text-black hover:text-red-600 transition" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 3 DOCUMENTATION */}
      <div>
        <h3 className="font-bold text-red-600 mb-2">Tender Documentation</h3>
        <ul className="space-y-1">
          {[
            "Technical Bid",
            "Financial Bid",
            "BOQ Preparation",
            "Compliance Documents",
            "Affidavits",
            "Declarations",
            "Experience Certificates",
            "OEM Authorization",
            "EMD Documentation",
            "Bank Guarantee Documentation"
          ].map((item, i) => (
            <li key={i}>
              <a className=" text-black hover:text-red-600 transition" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 4 INDUSTRY */}
      <div>
        <h3 className="font-bold text-red-600 mb-2">Business & Industry</h3>
        <ul className="space-y-1">
          {[
            "MSMEs",
            "Startups",
            "Manufacturers",
            "Contractors",
            "Suppliers",
            "Service Providers",
            "EPC Companies",
            "IT Companies",
            "Consultants",
            "Exporters",
            "Importers",
            "Healthcare Companies",
            "Educational Institutions"
          ].map((item, i) => (
            <li key={i}>
              <a className=" text-black hover:text-red-600 transition" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 5 SECTORS */}
      <div>
        <h3 className="font-bold text-red-600 mb-2">Sectors</h3>
        <ul className="space-y-1">
          {[
            "Construction",
            "Civil Engineering",
            "Electrical",
            "Mechanical",
            "Information Technology",
            "Healthcare",
            "Pharmaceuticals",
            "Railways",
            "Defence",
            "Smart City Projects",
            "Energy",
            "Solar",
            "Telecom",
            "Manufacturing",
            "Water Supply",
            "Mining",
            "Education",
            "Food & Catering",
            "Security Services",
            "Facility Management"
          ].map((item, i) => (
            <li key={i}>
              <a className=" text-black hover:text-red-600 transition" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 6 BID SERVICES */}
      <div>
        <h3 className="font-bold text-red-600 mb-2">Bid Services</h3>
        <ul className="space-y-1">
          {[
            "Bid Consultancy",
            "Tender Eligibility Analysis",
            "Bid Strategy & Planning",
            "Document Verification",
            "Technical Compliance",
            "Financial Bid Review",
            "Bid Submission Assistance",
            "Post-Bid Support",
            "Tender Clarification Assistance"
          ].map((item, i) => (
            <li key={i}>
              <a className=" text-black hover:text-red-600 transition" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 7 TENDER MANAGEMENT */}
      <div>
        <h3 className="font-bold text-red-600 mb-2">Tender Management</h3>
        <ul className="space-y-1">
          {[
            "Daily Tender Alerts",
            "Email & WhatsApp Notifications",
            "Deadline Reminders",
            "Bid Tracking Dashboard",
            "Tender Status Monitoring",
            "Team Collaboration",
            "Multi-User Access",
            "Document Management",
            "Tender Calendar",
            "Award Tracking"
          ].map((item, i) => (
            <li key={i}>
              <a className=" text-black hover:text-red-600 transition" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* 8 GEM & PROCUREMENT */}
      <div>
        <h3 className="font-bold text-red-600 mb-2">GeM & Procurement</h3>
        <ul className="space-y-1">
          {[
            "GeM Registration",
            "Product Listing",
            "Vendor Registration",
            "Organization Registration",
            "Profile Management",
            "Catalogue Creation",
            "Bid Participation Support",
            "Order Management",
            "Vendor Empanelment",
            "Procurement Consultancy"
          ].map((item, i) => (
            <li key={i}>
              <a className= " text-black hover:text-red-600 transition" href="#">
                {item}
              </a>
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
    <Link to="/blogs" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">Blogs</Link>
    <Link to="/business-news" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">Business News</Link>
    <Link to="/ai-news" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">AI News</Link>
    <Link to="/startup-stories" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">Startup Stories</Link>
    <Link to="/case-studies" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">Case Studies</Link>
    <Link to="/business-templates" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">Business Templates</Link>
    <Link to="/calculators" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">Calculators</Link>
    <Link to="/quotes" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">Quotes</Link>
    <Link to="/downloads" className="block px-5 py-3 text-sm text-black hover:bg-red-600/10 hover:text-red-600">Downloads</Link>
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

    <Link to="/leadership-team" className="block px-5 py-3 text-sm text-black transition hover:bg-red-600/10 hover:text-red-600">
      Leadership Team
    </Link>

    <Link to="/our-journey" className="block px-5 py-3 text-sm text-black transition hover:bg-red-600/10 hover:text-red-600">
      Our Journey
    </Link>

    <Link to="/careers" className="block px-5 py-3 text-sm text-black transition hover:bg-red-600/10 hover:text-red-600">
      Careers
    </Link>

    <Link to="/partners" className="block px-5 py-3 text-sm text-black transition hover:bg-red-600/10 hover:text-red-600">
      Partners
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