import React from 'react'

import { useNavigate } from "react-router-dom";


function Bank() {
   const navigate = useNavigate();
     const bank=[
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781933564/Untitled_design_41_en6sdq.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860833/lt-finance_jvxa0a.avif",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860833/images_4_oufd5r.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860833/Piramal_Finance_logo.svg_lxl5da.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860833/InCred-Group-Logo-01_briayp.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860832/privo_logo_new.d94c33a_lerfrt.gif",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860832/1572My-project-2024-03-13T170119.618_hvlhjy.webp",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860832/Fatak-pay-1000x650_la4ygm.webp",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860832/Bhanix_Finance_and_Investment_Limited_ksi9lk.webp",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860832/images_5_xjbyiu.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860832/images_6_crewyr.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860832/a51c5e2deec1f6af447e0f7416bdd53e_dq8it2.jpg",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860831/punjab-national-bank-logo-png_seeklogo-257756_uepphv.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860831/Bank_of_Maharashtra_logo.svg_cvrcop.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860831/PSB_logo_23_Nov.svg_nyowfc.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860831/Bank-of-India-logo_cbgdkw.jpg",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860831/Indian_Bank_logo_2023_nwy8uu.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860828/images_8_zr6kvb.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860828/images_7_dthxhj.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860829/LIC_Housing_Finance_logo_hm0okk.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860828/1631376452638_aej429.jpg",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860829/LIC_Housing_Finance_logo_hm0okk.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860829/Citi_logo_March_2023.svg_o8qqlw.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860829/HSBC_logo__2018.svg_iab7iy.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860829/IDBI-Bank-logo_tutvoc.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860829/DHFL_Brand_Logo_cc98nd.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860829/images_2_wu3odk.jpg",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860829/0.jpg_1577698116_ludihz.jpg",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860829/Karnataka_Bank_svg_Logo.svg_n6mmbd.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860830/Yes_Bank_Logo_zwg3wv.jpg",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860830/ICICIBANK-THESTATESMAN_fw1ati.webp",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860830/unnamed_1_pgd35q.jpg",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860830/Kotak_Mahindra_Group_logo.svg_jl9p8x.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860830/unnamed_vnfzd3.jpg",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860830/Reliance_Capital.svg_hgporl.png",
    "https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781860831/96283eb5-5920-40d2-80d8-6030646d19a4_hnzon1.jpg"

  ]
  return (
    <div>
         <section className="w-full py-24 px-6 lg:px-16 bg-gray-50 overflow-hidden">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

   {/* Left Side Content */}
<div className="max-w-xl">
  <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 font-semibold text-sm">
    🏦 Trusted Financial Network
  </span>

  <h2 className="mt-5 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
    Our <span className="text-red-600">100+ Banking</span>
    <br />
    Partners Across India
  </h2>

  <p className="mt-6 text-gray-600 text-lg leading-8">
    Partnered with India's leading banks and financial institutions to provide
    fast, secure, and hassle-free loan solutions for every financial need.
  </p>

  <div className="flex flex-wrap gap-4 mt-8">
    <button
      onClick={() => navigate("/bank")}
      className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold shadow-lg hover:shadow-red-200 hover:scale-105 transition-all duration-300"
    >
      View All Banks →
    </button>

    <div className="flex items-center text-gray-500 font-medium">
      <span className="text-red-600 text-xl mr-2">★</span>
      Trusted by 10,000+ Customers
    </div>
  </div>
</div>

    {/* Right Side Logos */}
    <div className="overflow-hidden">
  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
    {bank.slice(0, 30).map((logo, index) => (
      <div
        key={index}
        className="group flex items-center justify-center h-24 bg-white rounded-2xl border border-gray-200 p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      >
        <img
          src={logo}
          alt={`Bank ${index + 1}`}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    ))}
  </div>
</div>
   
    

  </div>
</section>
    </div>
  )
}

export default Bank