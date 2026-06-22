import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaReceipt,
} from "react-icons/fa";

export default function FinanceTools() {
   const services = [
    "EMI Calculator","Loan Eligibility Checker",
"GST Calculator",
"Income Tax Calculator",
"Resume Builder",
"Invoice Generator",
"Website Cost Calculator",
"SEO Score Checker",
"QR Code Generator",
"Image Compressor",
"PDF Tools",
"AI Blog Generator"
   
    
   
  ];
  const [emi, setEmi] = useState({});
  const [sip, setSip] = useState({});
  const [gst, setGst] = useState({});

  const calculateEMI = () => {
    const P = Number(emi.amount);
    const R = Number(emi.rate) / 100 / 12;
    const N = Number(emi.years) * 12;

    if (!P || !R || !N) return;

    const value =
      (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1);

    setEmi({
      ...emi,
      result: value.toFixed(2),
    });
  };

  const calculateSIP = () => {
    const P = Number(sip.amount);
    const i = Number(sip.rate) / 12 / 100;
    const n = Number(sip.years) * 12;

    if (!P || !i || !n) return;

    const maturity =
      P *
      (((Math.pow(1 + i, n) - 1) / i) *
        (1 + i));

    setSip({
      ...sip,
      result: maturity.toFixed(0),
    });
  };

  const calculateGST = () => {
    const amount = Number(gst.amount);
    const rate = Number(gst.rate);

    if (!amount || !rate) return;

    const gstValue =
      (amount * rate) / 100;

    setGst({
      ...gst,
      gstAmount: gstValue,
      total: amount + gstValue,
    });
  };

  const cardStyle =
    "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6";

  const inputStyle =
    "w-full rounded-xl bg-slate-900 border border-slate-700 p-3 text-white mb-3";

  return (
    <section className="min-h-screen  bg-white text-black p-6">
      <div className="max-w-7xl top-10 mx-auto">

        <h1 className="text-center mt-20 text-red-600 text-5xl font-black mb-12">
          Financial Tools
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* EMI */}
          <div className={cardStyle}>
            <FaMoneyBillWave className="text-4xl text-emerald-400 mb-4" />

            <h2 className="text-2xl font-bold mb-4">
              EMI Calculator
            </h2>

            <input
              className={inputStyle}
              placeholder="Loan Amount"
              onChange={(e) =>
                setEmi({
                  ...emi,
                  amount: e.target.value,
                })
              }
            />

            <input
              className={inputStyle}
              placeholder="Interest Rate %"
              onChange={(e) =>
                setEmi({
                  ...emi,
                  rate: e.target.value,
                })
              }
            />

            <input
              className={inputStyle}
              placeholder="Years"
              onChange={(e) =>
                setEmi({
                  ...emi,
                  years: e.target.value,
                })
              }
            />

            <button
              onClick={calculateEMI}
              className="w-full bg-red-500 text-white font-bold py-3 rounded-xl"
            >
              Calculate EMI
            </button>

            {emi.result && (
              <div className="mt-5 text-center">
                <p>Monthly EMI</p>
                <h3 className="text-3xl font-black">
                  ₹{Number(emi.result).toLocaleString()}
                </h3>
              </div>
            )}
          </div>

          {/* SIP */}
          <div className={cardStyle}>
            <FaChartLine className="text-4xl text-cyan-400 mb-4" />

            <h2 className="text-2xl  font-bold mb-4">
              SIP Calculator
            </h2>

            <input
              className={inputStyle}
              placeholder="Monthly Investment"
              onChange={(e) =>
                setSip({
                  ...sip,
                  amount: e.target.value,
                })
              }
            />

            <input
              className={inputStyle}
              placeholder="Expected Return %"
              onChange={(e) =>
                setSip({
                  ...sip,
                  rate: e.target.value,
                })
              }
            />

            <input
              className={inputStyle}
              placeholder="Years"
              onChange={(e) =>
                setSip({
                  ...sip,
                  years: e.target.value,
                })
              }
            />

            <button
              onClick={calculateSIP}
              className="w-full bg-red-500 text-white font-bold py-3 rounded-xl"
            >
              Calculate SIP
            </button>

            {sip.result && (
              <div className="mt-5 text-center">
                <p>Maturity Amount</p>
                <h3 className="text-3xl font-black">
                  ₹{Number(sip.result).toLocaleString()}
                </h3>
              </div>
            )}
          </div>

          {/* GST */}
          <div className={cardStyle}>
            <FaReceipt className="text-4xl text-purple-400 mb-4" />

            <h2 className="text-2xl font-bold mb-4">
              GST Calculator
            </h2>

            <input
              className={inputStyle}
              placeholder="Amount"
              onChange={(e) =>
                setGst({
                  ...gst,
                  amount: e.target.value,
                })
              }
            />

            <input
              className={inputStyle}
              placeholder="GST %"
              onChange={(e) =>
                setGst({
                  ...gst,
                  rate: e.target.value,
                })
              }
            />

            <button
              onClick={calculateGST}
              className="w-full bg-red-500 text-white font-bold py-3 rounded-xl"
            >
              Calculate GST
            </button>

            {gst.total && (
              <div className="mt-5 text-center">
                <p>
                  GST: ₹
                  {gst.gstAmount.toLocaleString()}
                </p>

                <h3 className="text-3xl font-black">
                  ₹{gst.total.toLocaleString()}
                </h3>
              </div>
            )}
          </div>

        </div>
      </div>
      <section>
        <p className="text-center justify-center flex text-3xl text-red-600"> All Tools</p>
        <div className="grid md:grid-cols-3  mt-10 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 text-center text-gray-700 hover:border-red-500 hover:text-red-600 cursor-pointer"
              >
                {service}
              </motion.div>
            ))}
          </div>
      </section>
    </section>
    
  );
}