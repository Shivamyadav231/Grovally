import React from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "PRIVATE LIMITED COMPANY",
    description:
      "Full SPICe+ registration on MCA. PAN, TAN, DIN, DSC, MOA, AOA handled end-to-end. India's most common business structure.",
  },
  {
    title: "LLP REGISTRATION",
    description:
      "Limited Liability Partnership with LLP agreement drafted. Ideal for professionals and service firms.",
  },
  {
    title: "ONE PERSON COMPANY",
    description:
      "Single director, limited liability. No co-founder required. Nominee Director setup included.",
  },
  {
    title: "GST REGISTRATION",
    description:
      "GSTIN registration in 5-10 working days. Application, ARN tracking, and department queries handled.",
  },
  {
    title: "MSME / UDYAM",
    description:
      "Government benefits, subsidies, and priority-sector lending. Udyam certificate in 24 hours.",
  },
  {
    title: "STARTUP INDIA (DPIIT)",
    description:
      "DPIIT recognition, tax benefits, patent support, and government funding access.",
  },
  {
    title: "FSSAI LICENSE",
    description:
      "Basic, State, and Central FSSAI license for food businesses with full support.",
  },
  {
    title: "IMPORT EXPORT CODE",
    description:
      "IEC registration from DGFT for import/export businesses.",
  },
  {
    title: "ANNUAL COMPLIANCE",
    description:
      "ROC filings, annual returns, Director KYC, and auditor appointment.",
  },
  {
    title: "TAX FILING (ITR/TDS)",
    description:
      "Company ITR, Director ITR, and TDS returns handled by experts.",
  },
  {
    title: "ISO CERTIFICATION",
    description:
      "ISO 9001, 14001, 22000, 27001, and 45001 certification support.",
  },
  {
    title: "TRADEMARK REGISTRATION",
    description:
      "Protect your brand name and logo with trademark registration.",
  },
];

function Our() {
   const navigate = useNavigate();

  return (
    <div className="bg-slate-50  top-10 py-20 px-6 md:px-20">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        

        <h1 className="text-4xl md:text-5xl  text-red-600 font-bold mt-3">
          Register Your Company in 7 Days
        </h1>

        <p className="text-black mt-4">
          4,000+ founders registered. ₹0 hidden fees. A dedicated expert on
          your WhatsApp — not a chatbot, not a call centre.
        </p>

        <h4 className="text-green-600 font-bold mt-3">
          Miss a deadline? We absorb the penalty.
        </h4>

        <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
          REGISTER IN 7 DAYS
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-12">
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-2xl  text-black font-bold">4000+</h2>
          <p className="text-black">Founders Registered</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-2xl text-black font-bold">₹0</h2>
          <p className="text-black">Hidden Fees</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="text-2xl  text-black font-bold">5+</h2>
          <p className="text-black">Years in Business</p>
        </div>
      </div>

      {/* Services */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-black text-center mb-10">
          Our Services
        </h2> 

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl  text-red-600 font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Sections */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl text-red-700 font-bold">
          NOT SURE WHAT YOU NEED?
        </h2>

        <h5 className="text-gray-600 mt-3">
          Message us with a description of your business. We'll tell you
          exactly what you need, what it costs, and in what order.
        </h5>

        <button  className="mt-6 bg-black text-white px-6 py-3 rounded-lg">
          TELL US ABOUT YOUR BUSINESS
        </button>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl text-red-700 font-bold">
          EVERY PRICE. ONE MESSAGE.
        </h2>

        <h5 className="text-black mt-3">
          WhatsApp us and get the exact pricing for your service in one reply.
        </h5>

        <button onClick={() => navigate("/contact")} className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg">
          GET EXACT PRICING NOW
        </button>
      </div>
    </div>
  );
}

export default Our;