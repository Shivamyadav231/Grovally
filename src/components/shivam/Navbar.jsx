import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaRobot, FaTimes } from "react-icons/fa";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        className="fixed top-0 left-0 w-full z-50"
      >
        <div
          className={`mx-auto flex items-center justify-between px-6 transition-all duration-500 ${
            scrolled
              ? "max-w-full bg-black/55 backdrop-blur-xl shadow-xl h-16"
              : "max-w-7xl mt-4 bg-[#C90102] rounded-2xl h-20"
          }`}
        >
          {/* LOGO */}
          <Link to="/" className="flex items-center h-full overflow-visible">
            <img
              loading="lazy"
                decoding="async"
              src="https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770425/logoo_u4zkyt.png"
              alt="logo"
              className={`w-auto object-contain transition-all duration-500 hover:scale-100 ${
                scrolled
                  ? "h-52 scale-105"
                  : "h-52 md:h-52 scale-125"
              }`}
            ></img>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 text-white font-medium">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/ourservices"> Our Services</Link></li>
            
            <li><Link to="/tender">Tender</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          
            <li><Link to="/about">About</Link></li>
            <li><Link to ="/blog">Blog</Link></li>

           <li>
  <Link
    to="/grovallyAI"
    className="flex items-center gap-2 px-4 py-2 rounded-full font-bold hover:scale-105 transition"
  >
    <FaRobot />
    Grovally AI
  </Link>
</li>
          </ul>

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