import React from "react";
import { motion } from "framer-motion";

function Wow() {
  const logos = [
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770400/N_vxdsax.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770401/NN_ckjhny.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770401/MM_vfnwfn.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770401/P_rjtqlz.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770405/S_jowhyx.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770405/PP_uuonbr.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770403/Q_o8ek2g.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770423/V_do0jxd.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770419/W_wkpnpn.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770421/X_bparwg.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770398/ll_kfuwb5.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770397/M_j81xlb.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770396/II_voaruk.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770395/KK_r2fllv.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770394/B_oayrxp.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770394/I_syzp47.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770393/JJ_gxwt15.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770393/F_vchylj.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1781770388/CC_yysiej.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1782277901/41_mjo3ce.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1782277900/37_dyxse6.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1782277899/40_dqaphv.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1782277895/39_us2v0u.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1782277895/34_jpqcwl.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1782277894/33_bhkxbs.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1782277892/36_v09isk.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1782277890/35_usdhg4.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_300/v1782277890/38_ov4z6j.png",
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-red-50 overflow-hidden">
      {/* self-contained marquee animation so it works even without a global CSS file,
          and a mobile-tuned speed/width so it never feels janky on small screens */}
      <style>{`
        @keyframes wow-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .wow-marquee {
          animation: wow-scroll 28s linear infinite;
        }
        @media (max-width: 640px) {
          .wow-marquee {
            animation-duration: 18s;
          }
        }
        .wow-marquee:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .wow-marquee {
            animation: none;
          }
        }
      `}</style>

      {/* ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] bg-red-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-9xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 sm:px-5 py-2 rounded-full bg-red-100 text-red-600 font-semibold text-xs sm:text-sm tracking-wider">
            TRUSTED WORLDWIDE
          </span>

          <h2 className="mt-5 sm:mt-6 text-3xl sm:text-5xl md:text-6xl text-red-500 font-extrabold leading-tight">
            Brands That Trust
          </h2>

          <div className="flex  -mt-6 justify-center items-center  sm:-mt-6">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770397/lolo_t6dwpa.png"
              alt="logo"
              className="w-32 sm:w-48 md:w-56 object-contain"
            />
          </div>

          <p className="max-w-3xl mx-auto  sm:mt-2 text-sm sm:text-lg text-gray-600 leading-6 sm:leading-8 px-2">
            From startups to established enterprises, businesses trust
            Grovally for innovative IT solutions, AI automation, BPO, KPO,
            financial services, and digital transformation.
          </p>
        </motion.div>

        {/* Logo Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-10 h-full w-12 sm:w-32 bg-gradient-to-r from-white to-transparent" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-10 h-full w-12 sm:w-32 bg-gradient-to-l from-white to-transparent" />

          <div className="wow-marquee flex gap-4 sm:gap-8 w-max">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="group flex items-center justify-center min-w-[120px] h-24 sm:min-w-[220px] sm:h-32 bg-white rounded-xl sm:rounded-3xl border border-gray-100 shadow-sm sm:shadow-md hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={logo}
                  alt={`Logo ${index}`}
                  className="max-h-40 sm:max-h-60 w-auto object-contain px-3 sm:px-6 grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Wow;
