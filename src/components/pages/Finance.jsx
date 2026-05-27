import { useState } from "react";

export default function Finance() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(0);

  const [age, setAge] = useState('');
  const [income, setIncome] = useState('');
  const [creditHistory, setCreditHistory] = useState('');
  const [score, setScore] = useState(0);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 100 / 12;
    const N = parseFloat(tenure) * 12;
    if (P && R && N) {
      const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      setEmi(emiValue.toFixed(2));
    }
  };

  const calculateCreditScore = () => {
    const ageVal = parseInt(age);
    const incomeVal = parseInt(income);
    const historyVal = parseInt(creditHistory);
    if (ageVal && incomeVal && historyVal) {
      // Simple mock calculation
      const scoreValue = Math.min(900, 300 + (ageVal * 2) + (incomeVal / 1000) + (historyVal * 10));
      setScore(Math.max(300, scoreValue));
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
    <section className="space-y-10">
      <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-green-500/10">
        <h1 className="text-4xl font-extrabold text-white">Finance Services</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Comprehensive financial solutions including loan management, credit assessment, and financial planning.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-6 shadow-xl">
          <div className="text-2xl mb-3">💰</div>
          <h2 className="text-xl font-semibold text-white mb-4">EMI Calculator</h2>
          <div className="space-y-3">
            <input
              type="number"
              placeholder="Loan Amount (₹)"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none transition focus:border-green-400"
            />
            <input
              type="number"
              placeholder="Interest Rate (%)"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none transition focus:border-green-400"
            />
            <input
              type="number"
              placeholder="Tenure (years)"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none transition focus:border-green-400"
            />
            <button
              onClick={calculateEMI}
              className="w-full rounded-lg bg-green-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-green-300"
            >
              Calculate EMI
            </button>
          </div>
          {emi > 0 && (
            <p className="mt-4 text-lg font-semibold text-green-400">EMI: ₹{emi}</p>
          )}
        </div>

        <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-6 shadow-xl">
          <div className="text-2xl mb-3">📊</div>
          <h2 className="text-xl font-semibold text-white mb-4">Credit Score Calculator</h2>
          <div className="space-y-3">
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none transition focus:border-green-400"
            />
            <input
              type="number"
              placeholder="Monthly Income (₹)"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none transition focus:border-green-400"
            />
            <input
              type="number"
              placeholder="Credit History (years)"
              value={creditHistory}
              onChange={(e) => setCreditHistory(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 outline-none transition focus:border-green-400"
            />
            <button
              onClick={calculateCreditScore}
              className="w-full rounded-lg bg-green-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-green-300"
            >
              Calculate Score
            </button>
          </div>
          {score > 0 && (
            <p className="mt-4 text-lg font-semibold text-green-400">Credit Score: {score}</p>
          )}
        </div>

        <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-6 shadow-xl">
          <div className="text-2xl mb-3">🏦</div>
          <h2 className="text-xl font-semibold text-white mb-4">Loan Types</h2>
          <ul className="space-y-2 text-slate-300">
            {loanTypes.map((loan) => (
              <li key={loan} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400"></span>
                {loan}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}