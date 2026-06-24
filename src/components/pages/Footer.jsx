import {
  FaInstagram,
  FaFacebook,
  
  FaWhatsapp,
  FaPhone,
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";



export default function Footer() {
  const navigate = useNavigate();

  const services = [
    "IT Solutions",
    "BPO Services",
    "KPO Services",
    "AI Automation",
    "Web Development",
    "App Development",
  ];

  return (
    <footer className="relative overflow-hidden text-white">
      {/* Background Video */}
      
      

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Red Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-black/40 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[25px] md:rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-xl p-5 sm:p-8 md:p-14 text-center shadow-2xl"
          >
            <h2 className="text-2xl sm:text-4xl md:text-6xl text-red-600 font-black leading-tight">
              Ready To Grow Your Business?
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
              Transform your business with AI, IT Solutions, Digital Marketing,
              BPO, KPO, Funding & Business Consulting Services.
            </p>
            

<button
  onClick={() => navigate("/contact")}
  className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-bold text-red-600"
>
  Get Started
</button>

            
          </motion.div>
        </div>

        {/* Footer Main */}
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4 items-start">
            {/* Brand */}
            {/* Brand */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <Link to="/"  className="inline-block ">
    <img
      loading="lazy"
      src="https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770397/lolo_t6dwpa.png"
      alt="Grovally Logo"
      className="w-32 sm:w-40 md:w-48 object-contain mt-0 md:-mt-16"
    />
  </Link>

  <p className="leading-7 md:leading-8 text-gray-300 mt-2 md:-mt-14">
    Empowering businesses with innovative IT solutions, AI automation,
    BPO, KPO, digital marketing, funding, and global business services.
  </p>

  <div className="mt-6 flex flex-wrap gap-2">
    <a
      href="tel:+918920817608"
      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:text-cyan-400"
    >
      <FaPhone />
    </a>

    <a
      href="https://wa.me/918920817608"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:text-green-400"
    >
      <FaWhatsapp />
    </a>

    <a
      href="https://www.instagram.com/grovallygroup?igsh=ZDVqa2ZxNG9wdHJh/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:text-pink-500"
    >
      <FaInstagram />
    </a>

    <a
      href="https://www.facebook.com/profile.php?id=61580907737242"
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:text-blue-500"
    >
      <FaFacebook />
    </a>
  </div>
</motion.div>

            {/* Explore */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold">Quick Links</h3>

              <div className="mt-4 h-1 w-20 rounded-full bg-red-600"></div>

              <ul className="mt-8 space-y-4">
                {["Home", "About", "Services", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="group flex items-center gap-3 text-gray-300 transition-all duration-300 hover:text-white"
                    >
                      <FaArrowRight className="text-red-500 transition-transform duration-300 group-hover:translate-x-2" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold">Services</h3>

              <div className="mt-4 h-1 w-20 rounded-full bg-red-600"></div>

              <ul className="mt-8 space-y-4">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="/"
                      className="group flex items-center gap-3 text-gray-300 transition-all duration-300 hover:text-white"
                    >
                      <FaArrowRight className="text-red-500 transition-transform duration-300 group-hover:translate-x-2" />
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
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold">Contact Us</h3>

              <div className="mt-4 h-1 w-20 rounded-full bg-red-600"></div>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-red-500 text-xl" />
                  <span className="text-gray-300">
                    info@grovally.com
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <FaPhone className="text-red-500   rotate-180 text-xl" />
                  <span className="text-gray-300">
                    +91 8920817608
                  </span>
                </div>

                <div className="flex items-start gap-4">
                   <FaMapMarkerAlt className="text-red-500 text-xl sm:text-4xl flex-shrink-0 mt-1" /> 
                 <span className="text-gray-300 break-words text-sm sm:text-base">
  TF-03 3RD FLOOR, SUN TWILIGHT METRO STREET,
  GREATER NOIDA, UTTAR PRADESH - 201310, INDIA
</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-gray-400 text-center md:text-left">
                © 2026 Grovally. All Rights Reserved.
              </p>

              <div className="flex gap-6 text-gray-400">
                <a href="/" className="hover:text-white">
                  Privacy Policy
                </a>
                <a href="/" className="hover:text-white">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}