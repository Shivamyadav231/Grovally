import React from "react";
import { motion } from "framer-motion";

function Bt() {
  
  const privateBanks = [
    "Axis Bank",
    "IndusInd Bank",
    "Kotak Bank",
    "DCB Bank",
    "IDFC FIRST Bank",
    "ICICI Bank",
    "HDFC Bank",
    "Yes Bank",
    "CITI Bank",
    "RBL Bank",
    "Federal Bank",
    "Karnataka Bank",
    "Karur Vysya Bank",
    "HSBC",
    "IDBI",
    "Saraswat Bank",
    "Unity Small Finance",
    "AU Small Finance",
  ];

  const NBFC = [
    "Reliance",
    "HDFC Sales",
    "HDFC Home Loan",
    "UGRO Capital",
    "LIC",
    "DHFL",
    "SMFG India Credit",
    "L&T",
    "Tata Capital",
    "Bajaj Finserv",
    "Cholamandalam",
    "Hero Housing Finance",
    "Shriram Finance",
    "Godrej",
    "Aditya Birla",
    "IIFL",
    "Edelweiss",
    "Piramal Finance",
    "Vastu Housing Finance",
    "Clix Capital",
    "InCred",
    "Capri Global",
    "NeoGrowth",
    "Capital First Ltd.",
    "Hero FinCorp",
    "Aadhar Housing Finance",
    "Lendingkart",
    "FT Cash",
    "LoanTap",
    "Indifi Technologies",
    "PaySense",
    "Home First Finance",
    "Digikredit",
    "INTELLEGROW",
    "PNB Housing Finance",
    "Poonawalla Fincorp",
    "Muthoot Finance",
    "Prefr",
    "Credila",
    "FatakPay",
    "Aavas Financiers",
    "Auxilo",
    "Privo",
    "MoneyWide",
    "Zype",
    "Avanse",
    "IndiaBulls",
    "Art Housing Finance Ltd",
    "Arka Fincap",
    "Epifi",
    "Propelld",
    "Bhanix Finance",
    "State Bank of India",
    "Bank of Baroda",
    "Canara Bank",
    "Punjab National Bank",
    "Bank of Maharashtra",
    "Punjab & Sind Bank",
    "Union Bank of India",
    "Indian Bank",
    "Bank of India",
  ];

  return (
    <div className="space-y-12 bg-white top-10">
     <div className="max-w-6xl mx-auto text-center py-12 px-6">
  <span className="inline-block px-4 py-2 mt-24 rounded-full bg-red-100 text-red-600 font-semibold text-sm mb-4">
    🏦 Banking Partners
  </span>

  <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
    Banks and <span className="text-red-600">Financial Institutions</span> in India
  </h1>

  <p className="mt-6 text-lg text-gray-600 leading-8 max-w-4xl mx-auto">
    Grovally Money has partnered with various banks and financial institutions to
    provide hassle-free loan solutions to customers across the country. Loans
    are essential financial tools that help individuals meet a wide range of
    requirements. Through our extensive network and industry experience, we
    bring you the most suitable loan products with the shortest turnaround
    time. We offer personal loans, home loans, loans against property, and
    many other financial products from leading banks and institutions across
    India, making it easier for you to find the perfect solution for your
    needs.
  </p>
</div>
     
      <div>
        <h2 className="text-2xl font-bold  text-red-600 text-center mb-6">
          Private Banks
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {privateBanks.map((bank, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 text-center text-gray-700 hover:border-red-500 hover:text-red-600 transition cursor-pointer"
            >
              {bank}
            </motion.div>
          ))}
        </div>
      </div>

      
      <div>
        <h2 className="text-2xl font-bold text-red-600 text-center mb-6">
          NBFC & Public Sector Banks
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {NBFC.map((bank, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 text-center text-gray-700 hover:border-red-500 hover:text-red-600 transition cursor-pointer"
            >
              {bank}
            </motion.div>
          ))}
        </div>

      </div>
      <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
  <h1 className="text-3xl font-bold text-gray-900">
    How Does the Indian Banking Sector Work?
  </h1>

  <p className="text-gray-600 leading-8">
    The banking sector is the backbone of the Indian economy...
  </p>

  <h2 className="text-2xl font-semibold text-gray-900">
    Organised Banking Sector
  </h2>

  <ul className="list-disc pl-6 text-gray-600 space-y-2">
    <li>National Housing Bank</li>
    <li>Export-Import Bank of India</li>
    <li>National Bank for Agriculture and Rural Development</li>
    <li>Small Industries Development Bank of India</li>
  </ul>

  <h2 className="text-2xl font-semibold text-gray-900">
    Unorganised Banking Sector
  </h2>

  <p className="text-gray-600 leading-8">
    The Indian unorganised banking sector is composed of many indigenous banks
    that do not fall under the scope of central banking authorities.
  </p>
</div>
     
    </div>
  );
}

export default Bt;