import React from "react";




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
];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-red-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center -mt-10 mb-16">
          <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-600 font-semibold text-sm tracking-wider">
            TRUSTED WORLDWIDE
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl text-red-500 font-extrabold ">
            Brands That Trust
            
          </h2>
          <div className=" flex justify-center -mt-10 items-center">
            <img loading="lazy" src="https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770397/lolo_t6dwpa.png" alt="logo" className="w-48 md:w-56 object-contain"/>
            </div>
          

          <div className=" -mt-10">
            <p className="max-w-3xl mx-auto  text-lg text-gray-600 leading-8">
            From startups to established enterprises, businesses trust
            Grovally for innovative IT solutions, AI automation,
            BPO, KPO, financial services, and digital transformation.
          </p>
          </div>
        </div>

        {/* Logo Slider */}
        <div className="relative overflow-hidden">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent"></div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent"></div>

          <div className="flex animate-scroll  gap-8 w-max">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="group flex items-center  justify-center min-w-[220px] h-32 bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  src={logo}
                  alt={`Logo ${index}`}
                  className="max-h-64 w-auto object-cover   transition duration-300"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Wow;