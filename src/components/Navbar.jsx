import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import logoo from "../assets/logoo.png"

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  FaBars,
  FaTimes,
  FaRobot,
} from "react-icons/fa";



import ss from "../assets/ss.png";

export default function Navbar() {
   const [menuOpen, setMenuOpen] = useState(false);
     const [scrolled, setScrolled] = useState(false);


  const services = [
    "IT Solution",
    "BPO",
    "KPO",
    "Tools",
    "Tender",
  ];
   useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`z-50 transition-all duration-500 ease-in-out
      ${
    scrolled
      ? "fixed top-0 left-0 w-full rounded-none"
      : "relative mx-auto mt-4 max-w-7xl "
  } border border-white/10 bg-[#C90102]/95 backdrop-blur-2xl shadow-2xl`}
>

      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div className="absolute left-0 top-0 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[250px] w-[250px] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-10">

        {/* Logo */}
        <Link to="/" className="group flex items-center gap-4">

          <div className="group relative [perspective:1200px]">

            <Link to="/" className="group">
            {/* <img src={logoo} alt=" logo" className="max"/> */}
            
              </Link>

          </div>

          

        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 lg:flex">

          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="font-semibold text-white transition hover:text-cyan-300"
              >
                {item.name}
              </Link>
            </li>
          ))}

          <li>
            <Link
              to="/tender"
              className="font-semibold text-white transition hover:text-cyan-300"
            >
              Tender
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className="group relative">

            <Link
              to="/services"
              className="font-semibold text-white transition hover:text-cyan-300"
            >
              Services
            </Link>

            <div className="absolute left-0 top-full mt-4 hidden w-72 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl group-hover:block">

              {services.map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="block rounded-xl px-4 py-3 text-white transition hover:bg-cyan-500/20"
                >
                  {service}
                </Link>
              ))}

            </div>

          </li>

          {/* AI Button */}
          <li>
            <Link
              to="/grovallyAI"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 font-bold text-black shadow-lg transition-all hover:scale-105"
            >
              <FaRobot />
              Grovally AI
            </Link>
          </li>

        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-4 lg:flex">

          <Link
            to="/login"
            className="rounded-full border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-full bg-cyan-400 px-6 py-3 font-bold text-black transition hover:scale-105"
          >
            Signup
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white backdrop-blur-xl lg:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="border-t border-white/10 bg-slate-950/95 px-6 py-8 backdrop-blur-2xl lg:hidden"
          >

            <div className="flex flex-col gap-5">

              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Services", path: "/services" },
                { name: "Tender", path: "/tender" },
              ].map((item) => (

                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-semibold text-white transition hover:text-cyan-300"
                >
                  {item.name}
                </Link>

              ))}

              <Link
                to="/grovallyAI"
                className="rounded-2xl bg-cyan-500/10 px-5 py-4 text-center font-semibold text-cyan-300"
              >
                Grovally AI
              </Link>

              <div className="flex gap-4 pt-4">

                <Link
                  to="/login"
                  className="flex-1 rounded-2xl border border-white/10 py-3 text-center font-semibold text-white"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="flex-1 rounded-2xl bg-cyan-400 py-3 text-center font-bold text-black"
                >
                  Signup
                </Link>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </nav>
  );
}