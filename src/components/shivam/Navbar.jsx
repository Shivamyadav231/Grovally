import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaRobot, FaTimes } from "react-icons/fa";


export default function Navbar() {
  
const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

const toggleServices = () => {
  setOpenMenu(openMenu === "services" ? null : "services");
};

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
    <li className="relative">
      <button
        onClick={toggleServices}
        className="hover:text-gray-200 transition font-semibold"
      >
        Services
      </button>
    </li>

    <li>
      <Link to="/ourservices" className="hover:text-gray-200 transition">
        Our Services
      </Link>
    </li>

    <li>
      <Link to="/tender" className="hover:text-gray-200 transition">
        Tender
      </Link>
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
    {openMenu && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.25 }}
        className="fixed left-0 top-[110px] w-full bg-white shadow-2xl z-50"
      >
        <div className="max-w-7xl mx-auto py-12 px-8 grid grid-cols-5 gap-10">
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
                <Link to="/app-development">App Development</Link>
              </li>
              <li>
                <Link to="/software-development">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/uiux">UI / UX Design</Link>
              </li>
            </ul>
          </div>

          {/* AI */}
          <div>
            <h3 className="text-red-600 font-bold mb-5">
              AI Solutions
            </h3>

            <ul className="space-y-3 text-gray-700 font-semibold">
              <li>AI Chatbot</li>
              <li>Automation</li>
              <li>Machine Learning</li>
              <li>Data Analytics</li>
            </ul>
          </div>

          {/* BPO */}
          <div>
            <h3 className="text-red-600 font-bold mb-5">
              BPO Services
            </h3>

            <ul className="space-y-3 text-gray-700 font-semibold">
              <li>Customer Support</li>
              <li>Call Center</li>
              <li>Back Office</li>
              <li>Email Support</li>
            </ul>
          </div>

          {/* Marketing */}
          <div>
            <h3 className="text-red-600 font-bold mb-5">
              Marketing
            </h3>

            <ul className="space-y-3 text-gray-700 font-semibold">
              <li>SEO</li>
              <li>Social Media</li>
              <li>Content Marketing</li>
              <li>PPC Ads</li>
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