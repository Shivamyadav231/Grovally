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

  return (

    <footer className="relative overflow-hidden border-t border-white/10 bg-[#020617] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]"></div>

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[120px]"></div>

      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <div className="relative z-10 w-full px-6 py-20">

        {/* TOP */}
        <div className="grid gap-14 lg:grid-cols-4">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm tracking-[0.2em] text-cyan-300">
              FUTURE BUSINESS
            </div>

            <h2 className="mt-6 text-5xl font-black">

              Grovally

            </h2>

            <p className="mt-6 max-w-md leading-8 text-slate-400">

              Modern IT, BPO, KPO & Finance solutions
              powered by AI automation, intelligent
              workflows, and futuristic technology.

            </p>

            {/* Social */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="tel:+918920817608"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl backdrop-blur-xl transition hover:scale-110 hover:border-cyan-400 hover:text-cyan-400"
              >
                <FaPhone />
              </a>

              <a
                href="https://wa.me/918920817608"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl backdrop-blur-xl transition hover:scale-110 hover:border-green-400 hover:text-green-400"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.instagram.com/grovallygroup/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl backdrop-blur-xl transition hover:scale-110 hover:border-pink-500 hover:text-pink-500"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61580907737242"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl backdrop-blur-xl transition hover:scale-110 hover:border-blue-500 hover:text-blue-500"
              >
                <FaFacebook />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl backdrop-blur-xl transition hover:scale-110 hover:border-red-500 hover:text-red-500"
              >
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

            <h3 className="text-2xl font-bold">
              Explore
            </h3>

            <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>

            <ul className="mt-8 space-y-5">

              {[
                "Home",
                "Services",
                "About",
                "Contact",
              ].map((item) => (

                <li key={item}>

                  <a
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase()}`
                    }
                    className="group flex items-center gap-3 text-slate-400 transition hover:text-white"
                  >

                    <FaArrowRight className="text-cyan-400 transition group-hover:translate-x-2" />

                    {item}

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

            <h3 className="text-2xl font-bold">
              Contact
            </h3>

            <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>

            <div className="mt-8 space-y-6 text-slate-400">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <p className="text-sm uppercase tracking-widest text-cyan-400">
                  Email
                </p>

                <p className="mt-2 break-all text-lg">
                  info@grovally.com
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <p className="text-sm uppercase tracking-widest text-cyan-400">
                  Phone
                </p>

                <p className="mt-2 text-lg">
                  +91 8920817608
                </p>

              </div>

            </div>

          </motion.div>

          {/* Office */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >

            <h3 className="text-2xl font-bold">
              Office
            </h3>

            <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>

            <div className="mt-8 rounded-[30px] border border-white/10 bg-white/5 p-6 leading-8 text-slate-400 backdrop-blur-xl">

              TF-03, 3RD FLOOR,
              <br />

              SUN TWINLIGHT METRO STREET,
              <br />

              GREATER NOIDA,
              <br />

              UTTAR PRADESH - 201310,
              <br />

              INDIA

            </div>

          </motion.div>

        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row">

            <p className="text-slate-500">
              © 2026 Grovally. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-slate-500">

              <a
                href="/privacy"
                className="hover:text-cyan-400"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="hover:text-cyan-400"
              >
                Terms & Conditions
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}