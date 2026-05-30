import { useState } from "react";

import {
  motion,
} from "framer-motion";

import {
  FaMoneyBillWave,
  FaChartLine,
  FaUniversity,
  FaArrowRight,
} from "react-icons/fa";

export default function Finance() {

  const [loanAmount, setLoanAmount] =
    useState("");

  const [interestRate, setInterestRate] =
    useState("");

  const [tenure, setTenure] =
    useState("");

  const [emi, setEmi] = useState(0);

  const [age, setAge] =
    useState("");

  const [income, setIncome] =
    useState("");

  const [creditHistory, setCreditHistory] =
    useState("");

  const [score, setScore] =
    useState(0);

  const calculateEMI = () => {

    const P =
      parseFloat(loanAmount);

    const R =
      parseFloat(interestRate) /
      100 /
      12;

    const N =
      parseFloat(tenure) * 12;

    if (P && R && N) {

      const emiValue =
        (P *
          R *
          Math.pow(
            1 + R,
            N
          )) /
        (Math.pow(
          1 + R,
          N
        ) -
          1);

      setEmi(
        emiValue.toFixed(2)
      );
    }
  };

  const calculateCreditScore =
    () => {

      const ageVal =
        parseInt(age);

      const incomeVal =
        parseInt(income);

      const historyVal =
        parseInt(
          creditHistory
        );

      if (
        ageVal &&
        incomeVal &&
        historyVal
      ) {

        const scoreValue =
          Math.min(
            900,
            300 +
              ageVal * 2 +
              incomeVal / 1000 +
              historyVal * 10
          );

        setScore(
          Math.max(
            300,
            scoreValue
          )
        );
      }
    };

  const loanTypes = [
    "Business Loan",
    "Personal Loan",
    "Home Loan",
    "Car Loan",
    "Education Loan",
    "Loan Against Property",
    "Trade Finance",
    "Invoice Financing",
    "Loan Consulting",
  ];

  return (

    <section className="relative min-h-screen overflow-hidden bg-white px-6 py-24 text-black">

      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-green-500/10 blur-[140px]"></div>

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]"></div>

      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HERO */}
        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          className="mb-20 text-center"
        >

          <div className="inline-flex rounded-full border border-green-500/30 bg-green-500/10 px-6 py-2 text-sm tracking-[0.3em] text-green-300">

            FINANCIAL SERVICES

          </div>

          <h1 className="mt-8 text-6xl font-black leading-tight lg:text-7xl">

            Smart Finance
            <br />

            Dashboard

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">

            Advanced loan solutions,
            EMI calculators, and
            intelligent financial tools
            designed for modern
            businesses and individuals.

          </p>

        </motion.div>

        {/* CARDS */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* EMI */}
          <motion.div

            whileHover={{
              y: -10,
            }}

            className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100"></div>

            <div className="relative z-10">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-green-400 to-emerald-500 text-3xl shadow-[0_10px_40px_rgba(0,255,150,0.35)]">

                <FaMoneyBillWave />

              </div>

              <h2 className="mt-8 text-3xl font-black">

                EMI Calculator

              </h2>

              <p className="mt-3 text-slate-400 leading-7">

                Calculate monthly loan
                installments instantly.

              </p>

              <div className="mt-8 space-y-4">

                <input
                  type="number"
                  placeholder="Loan Amount ₹"
                  value={loanAmount}
                  onChange={(e) =>
                    setLoanAmount(
                      e.target.value
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 bg-[#020617]/80 px-5 py-4 outline-none transition focus:border-green-400"
                />

                <input
                  type="number"
                  placeholder="Interest Rate %"
                  value={interestRate}
                  onChange={(e) =>
                    setInterestRate(
                      e.target.value
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 bg-[#020617]/80 px-5 py-4 outline-none transition focus:border-green-400"
                />

                <input
                  type="number"
                  placeholder="Tenure (Years)"
                  value={tenure}
                  onChange={(e) =>
                    setTenure(
                      e.target.value
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 bg-[#020617]/80 px-5 py-4 outline-none transition focus:border-green-400"
                />

                <button
                  onClick={
                    calculateEMI
                  }
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 px-5 py-4 font-bold text-slate-950 transition hover:scale-[1.02]"
                >

                  Calculate EMI

                  <FaArrowRight />

                </button>

                {emi > 0 && (

                  <div className="rounded-2xl border border-green-400/20 bg-green-500/10 p-5 text-center">

                    <p className="text-sm text-green-300">

                      Monthly EMI

                    </p>

                    <h3 className="mt-2 text-4xl font-black text-green-400">

                      ₹{emi}

                    </h3>

                  </div>

                )}

              </div>

            </div>

          </motion.div>

          {/* CREDIT */}
          <motion.div

            whileHover={{
              y: -10,
            }}

            className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100"></div>

            <div className="relative z-10">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500 text-3xl shadow-[0_10px_40px_rgba(0,255,255,0.35)]">

                <FaChartLine />

              </div>

              <h2 className="mt-8 text-3xl font-black">

                Credit Score

              </h2>

              <p className="mt-3 text-slate-400 leading-7">

                Analyze your financial
                profile and estimate
                credit eligibility.

              </p>

              <div className="mt-8 space-y-4">

                <input
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) =>
                    setAge(
                      e.target.value
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 bg-[#020617]/80 px-5 py-4 outline-none transition focus:border-cyan-400"
                />

                <input
                  type="number"
                  placeholder="Monthly Income ₹"
                  value={income}
                  onChange={(e) =>
                    setIncome(
                      e.target.value
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 bg-[#020617]/80 px-5 py-4 outline-none transition focus:border-cyan-400"
                />

                <input
                  type="number"
                  placeholder="Credit History"
                  value={
                    creditHistory
                  }
                  onChange={(e) =>
                    setCreditHistory(
                      e.target.value
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 bg-[#020617]/80 px-5 py-4 outline-none transition focus:border-cyan-400"
                />

                <button
                  onClick={
                    calculateCreditScore
                  }
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-4 font-bold text-slate-950 transition hover:scale-[1.02]"
                >

                  Calculate Score

                  <FaArrowRight />

                </button>

                {score > 0 && (

                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5 text-center">

                    <p className="text-sm text-cyan-300">

                      Estimated Score

                    </p>

                    <h3 className="mt-2 text-4xl font-black text-cyan-400">

                      {score}

                    </h3>

                  </div>

                )}

              </div>

            </div>

          </motion.div>

          {/* LOANS */}
          <motion.div

            whileHover={{
              y: -10,
            }}

            className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-500/20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100"></div>

            <div className="relative z-10">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-400 to-pink-500 text-3xl shadow-[0_10px_40px_rgba(255,0,255,0.35)]">

                <FaUniversity />

              </div>

              <h2 className="mt-8 text-3xl font-black">

                Loan Types

              </h2>

              <p className="mt-3 text-slate-400 leading-7">

                Explore our complete
                range of financing
                services.

              </p>

              <div className="mt-8 grid gap-4">

                {loanTypes.map(
                  (loan) => (

                    <div
                      key={loan}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl transition hover:border-purple-400/40 hover:bg-white/10"
                    >

                      <div className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>

                      <span className="font-medium text-slate-200">

                        {loan}

                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}