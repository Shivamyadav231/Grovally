
import { FaReact, FaNodeJs, FaAws, FaHtml5, FaCss3Alt, FaPhp, FaJava, } from "react-icons/fa";
import { SiMongodb, SiMysql, SiLaravel, SiJavascript, SiShopify, SiWordpress,  } from "react-icons/si";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";
import a from "../assets/a.png";



export default function TechSection() {
  const techs = [
    { icon: <FaHtml5 size={40} />, name: "HTML" },
    { icon: <FaCss3Alt size={40} />, name: "CSS" },
    { icon: <SiJavascript size={40} />, name: "JavaScript" },
    { icon: <FaReact size={40} />, name: "React" },
    { icon: <FaNodeJs size={40} />, name: "Node.js" },
    { icon: <SiMongodb size={40} />, name: "MongoDB" },
    { icon: <SiMysql size={40} />, name: "MySQL" },
    { icon: <FaAws size={40} />, name: "AWS" },
    { icon: <SiLaravel size={40} />, name: "Laravel" },
    { icon: <FaPhp size={40} />, name: "PHP" },
    { icon: <FaJava size={40} />, name: "Java" },
    { icon: <SiShopify size={40} />, name: "Shopify" },
    { icon: <SiWordpress size={40} />, name: "WordPress" },

  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl text-red-800 font-bold text-center mb-16">
          Technologies We Master To build Your Future-Ready Solutions
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {techs.slice(0, 4).map((tech, index) => (
            <div
              key={index}
              className="w-24 h-24 bg-black rounded-2xl shadow-lg flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {tech.icon}
            </div>
          ))}

          {/* Center Logo */}
          <div className="relative w-52 h-52 flex items-center justify-center">

  {/* Rotating Circular Text */}
  <svg
    className="absolute w-52 h-52 slow-spin"
    viewBox="0 0 200 200"
  >
    <defs>
      <path
        id="circlePath"
        d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
      />
    </defs>

    <text
      fill="#ef4444"
      fontSize="14"
      fontWeight="bold"
      letterSpacing="2"
    >
      <textPath href="#circlePath" startOffset="0%">
        • 10+ YEARS EXPERIENCE • 10+ YEARS EXPERIENCE •
      </textPath>
    </text>
  </svg>

  {/* Center Static G */}
  <div className="w-36 h-36 rounded-full bg-red-600 flex items-center justify-center shadow-xl z-10">
    
    <img src={a} alt="" className="text-6xl " />
    
  </div>

</div>

          {techs.slice(4).map((tech, index) => (
            <div
              key={index}
              className="w-24 h-24 bg-black rounded-2xl shadow-lg flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {tech.icon}
            </div>
            
          ))}
        </div>
       <span href="tel:+918920817608"  className="flex items-center justify-center mt-10 text-lg text-neutral-100">Let's Discuss Your Project</span>
      </div>
    </section>
  );
}