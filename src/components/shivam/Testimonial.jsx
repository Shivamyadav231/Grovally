import { useEffect, useState } from "react";



import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaAws,
  FaLinux,
  FaVuejs,
} from "react-icons/fa";

import {
  SiFlutter,
  SiGooglecloud,
  SiDjango,
  SiFirebase,
  SiRedis,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiGraphql,
  SiKubernetes,
  SiNginx,
  SiTailwindcss,
  SiFigma,
  SiGit,
} from "react-icons/si";

const outerTechs = [
  { Icon: FaVuejs, color: "#42b883" },
  { Icon: SiFlutter, color: "#02569B" },
  { Icon: SiGooglecloud, color: "#4285F4" },
  { Icon: SiDjango, color: "#092E20" },
  { Icon: FaJava, color: "#f89820" },
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: SiFigma, color: "#F24E1E" },
  { Icon: SiFirebase, color: "#FFCA28" },
  { Icon: FaNodeJs, color: "#68A063" },
  { Icon: SiGraphql, color: "#E10098" },
];

const innerTechs = [
  { Icon: SiMysql, color: "#00758F" },
  { Icon: SiRedis, color: "#DC382D" },
  { Icon: FaPython, color: "#3776AB" },
  { Icon: FaLinux, color: "#FCC624" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: SiGit, color: "#F05032" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiKubernetes, color: "#326CE5" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiNginx, color: "#009639" },
];

export default function TechStack() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768);
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  const outerRadius = isMobile ? 140 : 200;
const innerRadius = isMobile ? 90 : 125;

  return (
    
  <section className="min-h-screen bg-[#404042] px-4 sm:px-6 lg:px-10 py-10 overflow-hidden">

    {/* HEADING */}
    <div className="text-center mb-12">
      <h1
  className="text-3xl sm:text-5xl font-serif text-red-600"
  style={{ WebkitTextStroke: "2px white" }}
>
  We Are Masters of Modern Technology Stacks
</h1>
    
      <p className="mt-4 text-white text-base sm:text-lg">
        We build modern applications using latest technologies.
      </p>
    </div>

    {/* VIDEO + ORBIT */}
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10">

      {/* VIDEO */}
      <div className="flex justify-center w-full lg:w-1/2">
  <video
    autoPlay
    muted
    loop
    controls={true}
    playsInline
    preload="metadata"
    className="
      w-full 
      max-w-[420px] 
      sm:max-w-[550px] 
      object-contain
      rounded-xl
      outline
      outline-2
      outline-white
      shadow-full
    "
  >
    <source   decoding="async" src="https://res.cloudinary.com/dzu9qjxqa/video/upload/f_auto,q_auto,w_800/v1781770426/shivam_tednht.webm?_s=public-apps" type="video/webm" />
  </video>
</div>
      

      {/* ORBIT */}
      <div className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] flex items-center justify-center">

        {/* OUTER ORBIT */}
        <div className="absolute inset-0 animate-spin-slow">
          {outerTechs.map(({ Icon, color }, index) => {
            const angle = (360 / outerTechs.length) * index;

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `
                    translate(-50%, -50%)
                    rotate(${angle}deg)
                    translate(${outerRadius}px)
                    rotate(-${angle}deg)
                  `,
                }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full shadow-lg border flex items-center justify-center">
                  <Icon size={30} color={color} />
                </div>
              </div>
            );
          })}
        </div>

        {/* INNER ORBIT */}
        <div className="absolute inset-0 animate-spin-reverse">
          {innerTechs.map(({ Icon, color }, index) => {
            const angle = (360 / innerTechs.length) * index;

            return (
              <div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `
                    translate(-50%, -50%)
                    rotate(${angle}deg)
                    translate(${innerRadius}px)
                    rotate(-${angle}deg)
                  `,
                }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border flex items-center justify-center">
                  <Icon size={24} color={color} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CENTER LOGO */}
        <div className="absolute z-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-red-600 border-4 border-white flex items-center justify-center shadow-xl">
          <img
            src="https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781778101/logo_yt1y29.webp"
            alt="logo"
            loading="lazy"
            decoding="async"
            className="w-16 sm:w-24 md:w-28 object-contain"
          />
        </div>
      </div>
    </div>
  </section>
);
    
  
}