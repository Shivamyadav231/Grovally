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

  {/* SERVICES */}
  <li
  className="relative"
  onMouseEnter={() => setOpenMenu("services")}
>
  <button className="hover:text-gray-200 transition">
    Services
  </button>
</li>

<li
  className="relative"
  onMouseEnter={() => setOpenMenu("ourservices")}
>
  <button className="hover:text-gray-200 transition">
    Our Services
  </button>
</li>

  

  

  <li>
    <Link to="/blog" className="hover:text-gray-200 transition">
      Blog
    </Link>
  </li>

  <li>
    <Link to="/about" className="hover:text-gray-200 transition">
      About
    </Link>
  </li>

  <li>
    <Link to="/contact" className="hover:text-gray-200 transition">
      Contact
    </Link>
  </li>

  <li>
    <Link
      to="/grovallyAI"
      className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-full font-bold hover:scale-105 transition"
    >
      <FaRobot />
      Grovally AI
    </Link>
  </li>
</ul>
  

  {/* MEGA MENU */}
  <AnimatePresence>
     {openMenu === "services" && (
      <motion.div
       ref={menuRef}
        onMouseEnter={() => setOpenMenu("services")}
        onMouseLeave={() => setOpenMenu(null)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.25 }}
        className="fixed left-0 top-[110px] w-full bg-white shadow-2xl z-50"
      >
        <div className="max-w-7xl mx-auto py-12 px-8 grid grid-cols-6 gap-10">
          {/* IT Services */}
          <div>
            <h3 className="text-red-600 font-bold mb-5">
              IT Services
            </h3>

            <ul className="space-y-3 text-gray-700 font-semibold">
              <li>
                <Link to="/web-development">Web Development</Link>
              </li>
              <li>
                <Link to="/app-development">ERP software </Link>
              </li>
              <li>
                <Link to="/software-development">
                 Real Estate Software
                </Link>
              </li>
              <li>
                <Link to="/uiux">CRM Softwarw</Link>
              </li>
              <li>
                <Link >Accounting Software</Link>
              </li>
              <li>
                <Link >MicroFinance Software</Link>
              </li>
              <li>
                <Link >Nidhi Software</Link>
              </li>
            </ul>
             <button  onClick={() => navigate("/it")} className=" flex items-center gap-2 bg-black text-red-600 px-4 py-2 rounded-full font-bold hover:scale-105 transition  ">View More</button>
          </div>

          {/* AI */}
          <div>
            <h3 className="text-red-600 font-bold mb-5">
              App Development
            </h3>

            <ul className="space-y-3 text-gray-700 font-semibold">
              <li>Ngo App</li>
              <li>E-Commerce App</li>
              <li>Food Delivary App</li>
              <li>Hotel Booking App</li>
              <li>Real Estate App</li>
              <li> Education App</li>
              <li> Bike Taxi/Mobility</li>
              
            </ul>
             <button  onClick={() => navigate("/contact")} className="flex items-center gap-2 bg-black text-red-600 px-4 py-2 rounded-full font-bold hover:scale-105 transition">View More</button>
          </div>

          {/* BPO */}
          <div>
            <h3 className="text-red-600 font-bold mb-5">
              BPO Services
            </h3>

            <ul className="space-y-3 text-gray-700 font-semibold">
              <li>Customer Support Services</li>
              <li>Inbound Call Support</li>
              <li>Outbound Call Support</li>
              <li>Email & Chat Support</li>
              <li>Telemarketing & Lead Generation</li>
              <li>Market Research & Business Analysis</li>
              <li>Data Analytics & Business Intelligence</li>
              
            </ul>
             <button  onClick={() => navigate("/bpo")} className="flex items-center gap-2 bg-black text-red-600 px-4 py-2 rounded-full font-bold hover:scale-105 transition">View More</button>
          </div>

          {/* Marketing */}
          <div>
            <h3 className="text-red-600 font-bold mb-5">
              Marketing
            </h3>

            <ul className="space-y-3 text-gray-700 font-semibold">
              <li>SEO</li>
              <li>SMO</li>
              <li>PPC Ads</li>
              <li>Content Marketing</li>
              
              <li>Social Media Support</li>
              <li>Influencer Marketing</li>
              <li> Affiliate Marketing</li>
              <li></li>
               <button  onClick={() => navigate("/contact")} className=" flex items-center gap-2 bg-black text-red-600 px-4 py-2 rounded-full font-bold hover:scale-105 transition">View More</button>
            </ul>
          </div>

          {/* Finance */}
          <div>
            <h3 className="text-red-600 font-bold mb-5">
              Finance Services
            </h3>

            <ul className="space-y-3 text-gray-700 font-semibold">
              <li>Bank Loan Services</li>
              <li>Government Subsidy Services</li>
              <li>Scheme Funding Services</li>
              <li>Project Funding Services</li>
            </ul>
             <button  onClick={() => navigate("/finance")} className=" flex items-center gap-2 bg-black text-red-600 px-4 py-2 rounded-full font-bold hover:scale-105 transition">View More</button>
          </div>
          <div>
             <h3 className="text-red-600 font-bold mb-5">Graphics Design</h3>
            <ul className="space-y-3 text-gray-700 font-semibold">
             
              <li>Logo Design</li>
              <li> Letter Head Design</li>
              <li>Company Profile Design</li>
              <li> Branding Material</li>
              <li>Visiting Card </li>
              <li> Icon Design</li>
              <li> 2D Character Design</li>
            </ul>
            <button  onClick={() => navigate("/contact")} className="flex items-center gap-2 bg-black text-red-600 px-4 py-2 rounded-full font-bold hover:scale-105 transition">View More</button>
          </div>
        </div>

      </motion.div>
    )}
  </AnimatePresence>

   <AnimatePresence>
    {openMenu === "ourservices" &&  (
    <motion.div
     ref={menuRef}
      onMouseEnter={() => setOpenMenu("ourservices")}
      onMouseLeave={() => setOpenMenu(null)}
    
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.25 }}
      className="fixed left-0 top-[110px] w-full bg-white shadow-2xl z-50"
    >
      <div className="max-w-7xl mx-auto py-12 px-8 grid grid-cols-5 gap-10">

        <div>
          <h3 className="text-red-600 font-bold mb-5">
            Education & Health
          </h3>
          <ul className="space-y-3 text-gray-700 font-semibold">
            <li>School Management Software</li>
            <li>College Management Software</li>
            <li>Learning Management System</li>
            <li>Hospital Management Software</li>
            <li>Clinic Management Software</li>
          </ul>
           <button  onClick={() => navigate("/contact")} className=" flex items-center gap-2 bg-black text-red-600 px-4 py-2 rounded-full font-bold hover:scale-105 transition">View More</button>
        </div>

        <div>
          <h3 className="text-red-600 font-bold mb-5">
            Business Software
          </h3>
          <ul className="space-y-3 text-gray-700 font-semibold">
            <li>Real Estate Software</li>
            <li>HRMS Software</li>
            <li>NGO Portal Software</li>
            <li>Inventory Management Software</li>
            <li>E-Commerce Software</li>
            <li>Quick-Commerce Software</li>
          </ul>
           <button  onClick={() => navigate("/contact")} className=" flex items-center gap-2 bg-black text-red-600 px-4 py-2 rounded-full font-bold hover:scale-105 transition">View More</button>
        </div>

        <div>
          <h3 className="text-red-600 font-bold mb-5">
            AI Products
          </h3>
          <ul className="space-y-3 text-gray-700 font-semibold">
            <li>AI Attendance System</li>
            <li>AI Chatbot Software</li>
            <li>AI Content Creator</li>
            <li>AI Website Builder</li>
            <li>AI ERP Assistant</li>
          </ul>
           <button  onClick={() => navigate("/contact")} className=" flex items-center gap-2 bg-black text-red-600 px-4 py-2 rounded-full font-bold hover:scale-105 transition">View More</button>
        </div>

        <div>
          <h3 className="text-red-600 font-bold mb-5">
            Industry Solutions
          </h3>
          <ul className="space-y-3 text-gray-700 font-semibold">
            <li>Hotel Management Software</li>
            <li>Restaurant Software</li>
            <li>Food Delivery Software</li>
            <li>Tour & Travel Software</li>
            <li>Logistics Software</li>
          </ul>
           <button  onClick={() => navigate("/contact")} className=" flex items-center gap-2 bg-black text-red-600 px-4 py-2 rounded-full font-bold hover:scale-105 transition">View More</button>
        </div>

        <div>
          <h3 className="text-red-600 font-bold mb-5">
            Tendar Services
          </h3>
          <ul className="space-y-3 text-gray-700 font-semibold">
            <li>Land Auction Tender</li>
            <li>Commercial Plot Tender</li>
            <li>Industrial Plot Tender</li>
            <li>Government Land Lease Tender</li>
            <li>Agricultural Land Tender</li>
            <li>Residential Plot Tender</li>
            <li>Property Development Tender</li>
            <li>Land Acquisition Tender</li>
          </ul>
           <button  onClick={() => navigate("/tender")} className=" flex items-center gap-2 bg-black text-red-600 px-4 py-2 rounded-full font-bold hover:scale-105 transition">View More</button>
        </div>

      </div>
    </motion.div>
  )}
</AnimatePresence>
</div>






         

          {/* LOGIN / SIGNUP */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/login" className=" text-white px-4 py-2 rounded-full font-bold hover:scale-105 transition">
              Login
            </Link>

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
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="py-4 rounded-xl border border-white/20 text-center"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="py-4 rounded-xl bg-cyan-400 text-black font-bold text-center"
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