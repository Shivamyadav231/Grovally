import { Link } from "react-router-dom";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  FaBars,
  FaTimes,
  FaRobot,
} from "react-icons/fa";

import { useState } from "react";

import ss from "../assets/ss.png";

export default function Navbar() {

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (

    <nav className="sticky top-0 z-50 w-full border-b bg-[#C90102] text-white backdrop-blur-2xl">

      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[120px]"></div>

        <div className="absolute right-0 top-0 h-[250px] w-[250px] rounded-full bg-purple-500/10 blur-[120px]"></div>

      </div>

      {/* Main */}
      <div className="relative z-10 flex w-full items-center justify-between px-6 py-4 lg:px-12">

        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-4"
        >

          <div className="relative">

            <img
              src={ss}
              alt="Grovally Logo"
              className="h-14 w-14 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl transition duration-500 group-hover:rotate-6 group-hover:scale-110"
            />

            <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100"></div>

          </div>

          <div>

            <h1 className="text-2xl  text-blackfont-black tracking-wide">

              Grovally

            </h1>

            <p className="text-xs tracking-[0.2em] text-cyan-300">

              FUTURE BUSINESS

            </p>

          </div>

        </Link>

        {/* Desktop Menu */}
        <ul className="hidden text-black items-center gap-10 lg:flex">

          {[
            {
              name: "Home",
              path: "/",
            },
            {
              name: "About",
              path: "/about",
            },
            {
              name: "Contact",
              path: "/contact",
            },
          ].map((item) => (

            <li key={item.name}>

              <Link
                to={item.path}
                className="relative text-sm font-semibold text-slate-300 transition hover:text-cyan-300"
              >

                {item.name}

              </Link>

            </li>

          ))}

          {/* Mega Menu */}
          <Link to="/services" className="group relative">

            <button className="flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-cyan-300">

              Services

             

            </button>

            
                  
                  

                 
                

          </Link>

          {/* AI */}
          <li>

            <Link
              to="/grovallyAI"
              className="flex items-center gap-2 rounded-full border bg-black px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:scale-105"
            >

              <FaRobot />

              Grovally AI

            </Link>

          </li>

        </ul>

        {/* Buttons */}
        <div className="hidden items-center gap-4 lg:flex">

          <Link
            to="/login"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur-xl transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:scale-105"
          >
            Signup
          </Link>

        </div>

        {/* Mobile */}
        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl backdrop-blur-xl lg:hidden"
        >

          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}

        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div

            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -20,
            }}

            className="border-t border-white/10 bg-[#020617]/95 px-6 py-8 backdrop-blur-2xl lg:hidden"
          >

            <div className="flex flex-col gap-6">

              {[
                {
                  name: "Home",
                  path: "/",
                },
                {
                  name: "About",
                  path: "/about",
                },
                {
                  name: "Contact",
                  path: "/contact",
                },
                {
                  name: "IT",
                  path: "/it",
                },
                {
                  name: "BPO",
                  path: "/bpo",
                },
                {
                  name: "KPO",
                  path: "/kpo",
                },
                {
                  name: "Finance",
                  path: "/finance",
                },
              ].map((item) => (

                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="text-lg font-semibold text-slate-300 transition hover:text-cyan-300"
                >
                  {item.name}
                </Link>

              ))}

              <Link
                to="/grovallyAI"
                className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-4 text-center font-semibold text-cyan-300"
              >
                Grovally AI
              </Link>

              <div className="flex gap-4 pt-4">

                <Link
                  to="/login"
                  className="flex-1 rounded-2xl border border-white/10 bg-white/5 py-4 text-center font-semibold"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="flex-1 rounded-2xl bg-cyan-400 py-4 text-center font-bold text-slate-950"
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