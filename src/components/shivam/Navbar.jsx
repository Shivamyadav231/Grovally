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
              : " max-w-7xl w-[95%] mt-6 bg-[#C90102] rounded-2xl h-20"
          }`}
          
        >
          {/* LOGO */}
          <Link to="/" className="flex items-center h-full overflow-visible"></Link>
  <img
    loading="lazy"
    decoding="async"
    src="https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770425/logoo_u4zkyt.png"
    alt="Grovally Business Solutions Logo"
    className={`w-auto object-contain transition-all duration-500 hover:scale-100 ${
      scrolled
        ? "h-52 scale-125"
        : "h-48 md:h-48  left-0 scale-105"
    }`}
  />
  <div>
    <ul className="hidden lg:flex items-center gap-8 text-white font-medium">
  <li>
    <Link to="/" className="hover:text-gray-200 transition">
      Home
    </Link>
  </li>
  
  <li className="relative group">
  {/* Menu Button */}
  <button className="py-7 text-white hover:text-gray-200 transition">
    Products
  </button>

  {/* Mega Menu */}
  <div
    className="
      fixed
      left-0
      right-0
      top-[105px]
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
        max-w-7xl
        mx-auto
        bg-white
        rounded-2xl
        shadow-2xl
        p-10
      "
    >
      <div className="grid grid-cols-4 gap-10">

        {/* AI Products */}
        <div>
          <h3 className="text-red-600 font-bold mb-5 border-b pb-2">
            AI Products
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li><Link to="/ai-services" className="hover:text-red-600">AI Chatbot</Link></li>
            <li><Link to="/ai-services" className="hover:text-red-600">AI Attendance System</Link></li>
            <li><Link to="/ai-services" className="hover:text-red-600">AI Website Builder</Link></li>
            <li><Link to="/ai-services" className="hover:text-red-600">AI ERP Assistant</Link></li>
            <li><Link to="/ai-services" className="hover:text-red-600">AI Content Creator</Link></li>
            <li><Link to="/ai-services" className="hover:text-red-600">AI Business Automation</Link></li>
            <li><Link to="/ai-services" className="hover:text-red-600">AI Voice Assistant</Link></li>
          </ul>
        </div>

        {/* Business Software */}
        <div>
          <h3 className="text-red-600 font-bold mb-5 border-b pb-2">
            Business Software
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li><Link to="/erp-software" className="hover:text-red-600">ERP Software</Link></li>
            <li><Link to="/crm-software" className="hover:text-red-600">CRM Software</Link></li>
            <li><Link to="/hrms-software" className="hover:text-red-600">HRMS Software</Link></li>
            <li><Link to="/accounting-software" className="hover:text-red-600">Accounting Software</Link></li>
            <li><Link to="/inventory-management-software" className="hover:text-red-600">Inventory Management Software</Link></li>
            <li><Link to="/hotel-management-software" className="hover:text-red-600">Hotel Management Software</Link></li>
            <li><Link to="/restaurant-software" className="hover:text-red-600">Restaurant Software</Link></li>
            <li><Link to="/logistics-software" className="hover:text-red-600">Logistics Software</Link></li>
            <li><Link to="/ngo-management-software" className="hover:text-red-600">NGO Management Software</Link></li>
            <li><Link to="/real-estate-software" className="hover:text-red-600">Real Estate Software</Link></li>
            <li><Link to="/microfinance-software" className="hover:text-red-600">Microfinance Software</Link></li>
            <li><Link to="/food-delivery-software" className="hover:text-red-600">Food Delivery Software</Link></li>
            <li><Link to="/quick-commerce-software" className="hover:text-red-600">Quick Commerce Software</Link></li>
          </ul>
        </div>

        {/* Apps */}
        <div>
          <h3 className="text-red-600 font-bold mb-5 border-b pb-2">
            Apps
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li><Link to="/app-services" className="hover:text-red-600">E-Commerce App</Link></li>
            <li><Link to="/app-services" className="hover:text-red-600">Food Delivery App</Link></li>
            <li><Link to="/app-services" className="hover:text-red-600">Hotel Booking App</Link></li>
            <li><Link to="/app-services" className="hover:text-red-600">Education App</Link></li>
            <li><Link to="/app-services" className="hover:text-red-600">Real Estate App</Link></li>
            <li><Link to="/app-services" className="hover:text-red-600">NGO App</Link></li>
            <li><Link to="/app-services" className="hover:text-red-600">Bike Taxi App</Link></li>
            <li><Link to="/app-services" className="hover:text-red-600">Healthcare App</Link></li>
          </ul>
        </div>

        {/* Websites */}
        <div>
          <h3 className="text-red-600 font-bold mb-5 border-b pb-2">
            Websites & Portals
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li><Link to="/corporate-website" className="hover:text-red-600">Corporate Website</Link></li>
            <li><Link to="/ecommerce-website" className="hover:text-red-600">E-Commerce Website</Link></li>
            <li><Link to="/school-portal" className="hover:text-red-600">School Portal</Link></li>
            <li><Link to="/hospital-portal" className="hover:text-red-600">Hospital Portal</Link></li>
            <li><Link to="/ngo-portal" className="hover:text-red-600">NGO Portal</Link></li>
            <li><Link to="/franchise-portal" className="hover:text-red-600">Franchise Portal</Link></li>
            <li><Link to="/customer-portal" className="hover:text-red-600">Customer Portal</Link></li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</li>
  
  
<li className="relative group">
  {/* Services Button */}
  <button className="relative py-7 text-white hover:text-gray-200 transition">
    Servicess

    <span
      className="
        absolute left-0 bottom-5
        h-[2px] w-0
        bg-white
        transition-all duration-300
        group-hover:w-full
      "
    ></span>
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
  <span className="cursor-pointer hover:text-gray-200 transition">
    Solutions
  </span>

  <div
    className="
      absolute left-1/2 -translate-x-1/2 top-full mt-4
      w-[900px] bg-white rounded-2xl shadow-2xl
      p-8 z-50
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300
    "
  >
    <div className="grid grid-cols-2 gap-10">

      {/* Column 1 */}
      <div>
        <h3 className="text-red-600 font-bold mb-5">
          Business Solutions
        </h3>

        <ul className="space-y-3 text-gray-700 font-semibold">
          <li><Link to="/startup-solutions" className="hover:text-red-600">Startup Solutions</Link></li>
          <li><Link to="/launch" className="hover:text-red-600">Launch</Link></li>
          <li><Link to="/growth" className="hover:text-red-600">Growth</Link></li>
          <li><Link to="/scale" className="hover:text-red-600">Scale</Link></li>
          <li><Link to="/msme-solutions" className="hover:text-red-600">MSME Solutions</Link></li>
          <li><Link to="/enterprise-solutions" className="hover:text-red-600">Enterprise Solutions</Link></li>
          <li><Link to="/custom-business-solution" className="hover:text-red-600">Custom Business Solution</Link></li>
        </ul>
      </div>

      {/* Column 2 */}
      <div>
        <h3 className="text-red-600 font-bold mb-5">
          Industry Solutions
        </h3>

        <ul className="space-y-3 text-gray-700 font-semibold">
          <li><Link to="/healthcare-solutions" className="hover:text-red-600">Healthcare Solutions</Link></li>
          <li><Link to="/education-solutions" className="hover:text-red-600">Education Solutions</Link></li>
          <li><Link to="/real-estate-solutions" className="hover:text-red-600">Real Estate Solutions</Link></li>
          <li><Link to="/hospitality-solutions" className="hover:text-red-600">Hospitality Solutions</Link></li>
          <li><Link to="/restaurant-solutions" className="hover:text-red-600">Restaurant Solutions</Link></li>
          <li><Link to="/retail-ecommerce-solutions" className="hover:text-red-600">Retail & E-Commerce Solutions</Link></li>
          <li><Link to="/manufacturing-solutions" className="hover:text-red-600">Manufacturing Solutions</Link></li>
          <li><Link to="/logistics-solutions" className="hover:text-red-600">Logistics Solutions</Link></li>
          <li><Link to="/ngo-solutions" className="hover:text-red-600">NGO Solutions</Link></li>
          <li><Link to="/finance-solutions" className="hover:text-red-600">Finance Solutions</Link></li>
          <li><Link to="/travel-solutions" className="hover:text-red-600">Travel Solutions</Link></li>
          <li><Link to="/government-solutions" className="hover:text-red-600">Government Solutions</Link></li>
          <li><Link to="/import-export-solutions" className="hover:text-red-600">Import Export Solutions</Link></li>
          <li><Link to="/franchise-solutions" className="hover:text-red-600">Franchise Solutions</Link></li>
        </ul>
      </div>

    </div>
  </div>
</li>
<li className="relative group">
  <span className="cursor-pointer py-7 block hover:text-gray-200 transition">
    Funding
  </span>

  <div
    className="
      absolute left-1/2 -translate-x-1/2 top-full
      pt-3
      opacity-0 invisible
      group-hover:opacity-100
      group-hover:visible
      transition-all duration-300
      z-50
    "
  >
    <div className="w-[1000px] bg-white rounded-xl shadow-2xl p-10">

      <div className="grid grid-cols-3 gap-8">

        {/* Column 1 */}
        <div>
          <h3 className="text-red-600 font-bold mb-4 border-b pb-2">
            Business Loans
          </h3>

          <ul className="space-y-3 text-gray-700 font-medium">
            <li><Link to="/business-loans" className="hover:text-red-600">Business Loans</Link></li>
            <li><Link to="/msme-loan" className="hover:text-red-600">MSME Loan</Link></li>
            <li><Link to="/working-capital-loan" className="hover:text-red-600">Working Capital Loan</Link></li>
            <li><Link to="/lap" className="hover:text-red-600">Loan Against Property</Link></li>
            <li><Link className="hover:text-red-600">Machinery Loan</Link></li>
             <li><Link className="hover:text-red-600"></Link>OD/CC</li>
              <li><Link className="hover:text-red-600"></Link>Project Finance</li>
               <li><Link className="hover:text-red-600"></Link>Business Expansion Finance</li>
               <li><Link className="hover:text-red-600">Financial Advisory</Link></li>
               <li><Link className="hover:text-red-600">Private Investors</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-red-600 font-bold mb-4 border-b pb-2">
            Startup Funding
          </h3>

          <ul className="space-y-3 text-gray-700 font-medium">
            <li><Link to="/startup-funding" className="hover:text-red-600">Startup Funding</Link></li>
            <li><Link to="/seed-funding" className="hover:text-red-600">Seed Funding</Link></li>
            <li><Link to="/angel-investors" className="hover:text-red-600">Angel Investors</Link></li>
            <li><Link to="/venture-capital" className="hover:text-red-600">Venture Capital</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-red-600 font-bold mb-4 border-b pb-2">
            Government & Support
          </h3>

          <ul className="space-y-3 text-gray-700 font-medium">
            <li><Link to="/government-funding" className="hover:text-red-600">Government Funding</Link></li>
            <li><Link to="/subsidies" className="hover:text-red-600">Subsidies</Link></li>
            <li><Link to="/government-schemes" className="hover:text-red-600">Government Schemes</Link></li>
            <li><Link to="/grants" className="hover:text-red-600">Grants</Link></li>
          </ul>
        </div>

      </div>

    </div>
  </div>
</li>
<li>
    <Link className="hover:text-red-500"> Tenders</Link>
  </li>

  

  

 
  
 <li className="relative group">
  <span className="cursor-pointer hover:text-gray-200">
    Academy
  </span>

  <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-lg shadow-lg py-2 min-w-[260px] z-50">
    <li>
      <Link to="/entrepreneurship" className="block px-4 py-2 hover:text-red-600">
        Entrepreneurship
      </Link>
    </li>

    <li>
      <Link to="/ai-for-business" className="block px-4 py-2 hover:text-red-600 ">
        AI for Business
      </Link>
    </li>

    <li>
      <Link to="/digital-marketing" className="block px-4 py-2 hover:text-red-600">
        Digital Marketing
      </Link>
    </li>

    <li>
      <Link to="/sales" className="block px-4 py-2 hover:text-red-600">
        Sales
      </Link>
    </li>

    <li>
      <Link to="/finance" className="block px-4 py-2 hover:text-red-600">
        Finance
      </Link>
    </li>

    <li>
      <Link to="/business-operations" className="block px-4 py-2 hover:text-red-600">
        Business Operations
      </Link>
    </li>

    <li>
      <Link to="/startup-masterclass" className="block px-4 py-2 hover:text-red-600">
        Startup Masterclass
      </Link>
    </li>

    <li>
      <Link to="/live-workshops" className="block px-4 py-2 hover:text-red-600">
        Live Workshops
      </Link>
    </li>

    <li>
      <Link to="/mentorship-programs" className="block px-4 py-2 hover:text-red-600">
        Mentorship Programs
      </Link>
    </li>

    <li>
      <Link to="/certifications" className="block px-4 py-2 hover:text-red-600">
        Certifications
      </Link>
    </li>

    <li>
      <Link to="/internship" className="block px-4 py-2 hover:text-red-600">
        Internship
      </Link>
    </li>
  </ul>
</li>


  
 <li className="relative group">
  <span className="cursor-pointer ">
    Resourcess
  </span>

  <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-lg shadow-lg py-2 min-w-[260px] z-50">
    <li>
      <Link to="/blogs" className="block px-4 py-2 hover:text-red-600">
        Blogs
      </Link>
    </li>

    <li>
      <Link to="/business-news" className="block px-4 py-2 hover:text-red-600">
        Business News
      </Link>
    </li>

    <li>
      <Link to="/ai-news" className="block px-4 py-2 hover:text-red-600">
        AI News
      </Link>
    </li>

    <li>
      <Link to="/startup-stories" className="block px-4 py-2 hover:text-red-600">
        Startup Stories
      </Link>
    </li>

    <li>
      <Link to="/case-studies" className="block px-4 py-2 hover:text-red-600">
        Case Studies
      </Link>
    </li>

    <li>
      <Link to="/business-templates" className="block px-4 py-2 hover:text-red-600">
        Business Templates
      </Link>
    </li>

    <li>
      <Link to="/calculators" className="block px-4 py-2 hover:text-red-600">
        Calculators
      </Link>
    </li>

    <li>
      <Link to="/quotes" className="block px-4 py-2 hover:text-red-600">
        Quotes
      </Link>
    </li>

    <li>
      <Link to="/downloads" className="block px-4 py-2 hover:text-red-600">
        Downloads
      </Link>
    </li>

    <li>
      <Link to="/webinars" className="block px-4 py-2 hover:text-red-600">
        Webinars
      </Link>
    </li>

    <li>
      <Link to="/podcasts" className="block px-4 py-2 hover:text-red-600">
        Podcasts
      </Link>
    </li>

    <li>
      <Link to="/industry-reports" className="block px-4 py-2 hover:text-red-600">
        Industry Reports
      </Link>
    </li>
  </ul>
</li>


<li className="relative group">
  <span className="cursor-pointer hover:text-gray-200">
    About
  </span>

  <ul className="absolute left-0 top-full hidden group-hover:block bg-white text-black rounded-lg shadow-lg py-2 min-w-[220px] z-50">
    <li>
      <Link to="/about" className="block px-4 py-2 hover:text-red-600">
        Company Overview
      </Link>
    </li>

    <li>
      <Link to="/vision" className="block px-4 py-2 hover:text-red-600">
        Our Vision
      </Link>
    </li>

    <li>
      <Link to="/mission" className="block px-4 py-2 hover:text-red-600">
        Our Mission
      </Link>
    </li>

    <li>
      <Link to="/why-grovally" className="block px-4 py-2 hover:text-red-600">
        Why GROVALLY
      </Link>
    </li>

    <li>
      <Link to="/leadership-team" className="block px-4 py-2 hover:text-red-600">
        Leadership Team
      </Link>
    </li>

    <li>
      <Link to="/our-journey" className="block px-4 py-2 hover:text-red-600">
        Our Journey
      </Link>
    </li>

    <li>
      <Link to="/careers" className="block px-4 py-2 hover:text-red-600">
        Careers
      </Link>
    </li>

    <li>
      <Link to="/partners" className="block px-4 py-2 hover:text-red-600">
        Partners
      </Link>
    </li>

    <li>
      <Link to="/media" className="block px-4 py-2 hover:text-red-600">
        Media
      </Link>
    </li>

    <li>
      <Link to="/contact" className="block px-4 py-2 hover:text-red-600 ">
        Contact Us
      </Link>
    </li>
  </ul>
</li>

  

  <li>
    <Link
      to="/grovallyAI"
      className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-full font-bold hover:scale-105 transition"
    >
      
      Grovally AI
    </Link>
  </li>
</ul>
  

 

   
</div>






         

          {/* LOGIN / SIGNUP */}
          <div className="hidden lg:flex items-center gap-4">
            

            <Link
              to="/signup"
              className=" text-white px-4 py-2 rounded-full font-bold hover:scale-105 transition"
            >
              Signup
            </Link>
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