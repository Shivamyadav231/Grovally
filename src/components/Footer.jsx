import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/95 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Grovally</h2>
          <p className="mt-3 max-w-xl text-slate-400 leading-7">
            Modern business services for IT, BPO, KPO, and finance teams seeking clarity, speed, and strong digital delivery.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-white">Explore</h3>
            <ul className="mt-4 space-y-3 text-slate-400">
              <li><a href="/" className="hover:text-white">
                Home
              </a></li>
              <li><a href="/services" className="hover:text-white">
                Services
              </a></li>
              <li><a href="/about" className="hover:text-white">
                About
              </a></li>
              <li><a href="/contact" className="hover:text-white">
                Contact
              </a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="mt-4 leading-7 text-slate-400">
              info@grovally.com
              <br />
              
              
              
            </p>
            <div className="mt-4 flex gap-4 text-2xl">
              <a href="tel:+91 8920817608" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FaPhone /> 
                
              </a>
              <a href="https://wa.me/91 8920817608" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                <FaWhatsapp /> 
              </a>
              <a href="https://www.instagram.com/grovallygroup/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 hover:scale-110 transition">
                <FaInstagram />
              </a>
              
              <a href="https://www.facebook.com/profile.php?id=61580907737242" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:scale-110 transition">
                <FaFacebook />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 hover:scale-110 transition">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Office</h3>
            <p className="mt-4 leading-7 text-slate-400">
              TF-03, 3RD FLOOR, SUN TWINLIGHT METRO STREET, GREATER NOIDA,UTTAR PREDESH-201310,INDIA
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        © 2026 Grovally. All rights reserved.
      </div>
    </footer>
  );
}
