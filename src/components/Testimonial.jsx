import React from "react";


import shivam from "../assets/shivam.mp4";

import { FaReact, FaNodeJs, FaAws, FaHtml5, FaCss3Alt, FaPhp, FaJava, } from "react-icons/fa";
import { SiMongodb, SiMysql, SiLaravel, SiJavascript, SiShopify, SiWordpress,  } from "react-icons/si";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";
function Testimonial() {
  

  return (
    <div className="py-16 bg-[#c90100]">
      <h1 className="text-4xl text-center font-bold text-black mb-10">
        What Our Clients Say
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-6">
        <div className="px-6">
  <video
    autoPlay
    muted
    loop
    playsInline
    controls
    className="max-h-screen  md:h-96 rounded-2xl shadow-lg"
  >
    <source src={shivam} type="video/mp4" />
  </video>
</div>
<div className=" w-full md:w-1/2  bg-white h-64 border-spacing-5 grid-flow-cols md:h-96 rounded-2xl shadow-lg">
<FaHtml5 size={45} className=" items-center" />
<FaJava size={45 }/>
<FaNodeJs size={45}/>

  
</div>
 
        
       

        

      </div>
    </div>
  );
}

export default Testimonial;