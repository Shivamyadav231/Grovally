import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaArrowRight,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Footer() {
  const services = [
    "IT Solutions",
    "BPO Services",
    "KPO Services",
    "AI Automation",
    "Web Development",
    "App Development",
  ];

  return (
    <footer className="relative overflow-hidden border-t bg-black text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[120px]"></div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 w-full px-6 py-20">

        {/* TOP GRID */}
        <div className="grid gap-14 lg:grid-cols-4">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-black">Grovally</h2>

            <p className="mt-6 text-slate-400 leading-8">
              Modern IT, BPO, KPO & Finance solutions powered by AI automation.
            </p>

            {/* Social */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:text-cyan-400 hover:border-cyan-400">
                <FaPhone />
              </a>

              <a className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:text-green-400 hover:border-green-400">
                <FaWhatsapp />
              </a>

              <a className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:text-pink-500 hover:border-pink-500">
                <FaInstagram />
              </a>

              <a className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:text-blue-500 hover:border-blue-500">
                <FaFacebook />
              </a>

              <a className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:text-red-500 hover:border-red-500">
                <FaYoutube />
              </a>
            </div>
          </motion.div>

          {/* Explore */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold">Explore</h3>

            <div className="mt-6 h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />

            <ul className="mt-8 space-y-5">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="flex items-center gap-3 text-slate-400 hover:text-white"
                  >
                    <FaArrowRight className="text-cyan-400" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SERVICES (NEW) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold">Services</h3>

            <div className="mt-6 h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />

            <ul className="mt-8 space-y-5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-3 text-slate-400 hover:text-white"
                  >
                    <FaArrowRight className="text-purple-400" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold">Contact</h3>

            <div className="mt-6 h-1 w-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />

            <div className="mt-8 space-y-6 text-slate-400">
              <p>Email: info@grovally.com</p>
              <p>Phone: +91 8920817608</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-slate-500">
          © 2026 Grovally. All rights reserved.
        </div>

      </div>
    </footer>
  );
}