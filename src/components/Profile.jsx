import React, {
  useState,
  useEffect,
  useRef,
} from "react";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "https://grovally-backend-14.onrender.com/";

const docRequirements = {
  "Loan Against Property": [
    "PAN Card",
    "Aadhar Card",
    "Property Papers",
    "3 Years ITR",
    "Bank Statements",
  ],

  "Business Loan": [
    "PAN Card",
    "Aadhar Card",
    "GST Return",
    "Bank Statements",
  ],

  "Home Loan": [
    "PAN Card",
    "Aadhar Card",
    "Income Proof",
    "Bank Statements",
  ],

  "Personal Loan": [
    "PAN Card",
    "Aadhar Card",
    "Salary Slip",
  ],
};

function Profile() {

  const navigate = useNavigate();

  const photoInputRef = useRef(null);

  const [profile, setProfile] = useState(null);

  const [photoFile, setPhotoFile] =
    useState(null);

  const [docFiles, setDocFiles] =
    useState([]);

  const [loanType, setLoanType] =
    useState("Home Loan");

  const [selectedDocType, setSelectedDocType] =
    useState("PAN Card");

  const [loanAmount, setLoanAmount] =
    useState("");

  const [cibilScore, setCibilScore] =
    useState("");

  // ================= FETCH PROFILE =================

  useEffect(() => {

    const raw =
      localStorage.getItem("user");

    if (!raw) {

      navigate("/login");

      return;
    }

    const parsed = JSON.parse(raw);

    fetch(
      `${BACKEND}/profile?email=${parsed.email}`
    )
      .then((res) => res.json())
      .then((data) => setProfile(data));

  }, [navigate]);

  // ================= AUTO DOC =================

  useEffect(() => {

    const docs =
      docRequirements[loanType] || [];

    setSelectedDocType(docs[0] || "");

  }, [loanType]);

  // ================= LOGOUT =================

  const logout = () => {

    localStorage.removeItem("user");

    navigate("/login");

  };

  // ================= CIBIL =================

  const getCibilStatus = () => {

    if (cibilScore >= 350 && cibilScore < 550)
      return {
        text: "Poor Score",
        color: "text-red-400",
        bar: "bg-red-500",
      };

    if (cibilScore >= 550 && cibilScore < 700)
      return {
        text: "Average Score",
        color: "text-yellow-400",
        bar: "bg-yellow-500",
      };

    if (cibilScore >= 700 && cibilScore < 800)
      return {
        text: "Good Score",
        color: "text-green-400",
        bar: "bg-green-500",
      };

    if (cibilScore >= 800)
      return {
        text: "Excellent Score",
        color: "text-emerald-400",
        bar: "bg-emerald-500",
      };

    return {
      text: "",
      color: "",
      bar: "bg-gray-500",
    };
  };

  const cibil = getCibilStatus();

  if (!profile) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-[#020617] text-4xl font-black text-cyan-400">

        Loading...

      </div>
    );
  }

  return (

    <section className="relative min-h-screen w-full overflow-hidden bg-[#020617] px-6 py-20 text-white">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px] animate-pulse"></div>

      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative z-10 w-full">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-5xl font-black">

              Welcome
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

                {profile?.name}

              </span>

            </h1>

            <p className="mt-3 text-slate-400">

              AI Powered Loan Dashboard

            </p>

          </div>

          <button
            onClick={logout}
            className="rounded-2xl bg-red-600 px-8 py-4 font-bold transition hover:bg-red-700"
          >
            Logout
          </button>

        </div>

        {/* Profile Card */}
        <motion.div

          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}

          className="mb-10 overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl shadow-[0_20px_120px_rgba(0,255,255,0.15)]"
        >

          <div className="grid gap-10 lg:grid-cols-2">

            {/* Left */}
            <div className="flex flex-col items-center">

              <input
                ref={photoInputRef}
                hidden
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setPhotoFile(
                    e.target.files[0]
                  )
                }
              />

              <div
                onClick={() =>
                  photoInputRef.current.click()
                }
                className="group relative cursor-pointer"
              >

                {profile?.photo ? (

                  <img
                    loading="lazy"
                    src={`${BACKEND}/uploads/${profile.photo}`}
                    alt="profile"
                    className="h-56 w-56 rounded-full border-4 border-cyan-400 object-cover"
                  />

                ) : (

                  <div className="flex h-56 w-56 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 text-7xl font-black">

                    {profile?.name?.charAt(0)}

                  </div>

                )}

                <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 transition group-hover:opacity-100"></div>

              </div>

              <button className="mt-6 rounded-2xl bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition hover:scale-105">
                Upload Photo
              </button>

            </div>

            {/* Right */}
            <div>

              <h2 className="text-4xl font-black">
                Profile Overview
              </h2>

              <p className="mt-3 text-slate-400">
                {profile?.email}
              </p>

              {/* CIBIL */}
              <div className="mt-10 rounded-[30px] border border-white/10 bg-white/5 p-8">

                <h2 className="mb-6 text-3xl font-bold">
                  CIBIL Score
                </h2>

                <input
                  type="number"
                  value={cibilScore}
                  onChange={(e) =>
                    setCibilScore(
                      Number(e.target.value)
                    )
                  }
                  placeholder="Enter CIBIL Score"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-cyan-400"
                />

                {cibilScore > 0 && (

                  <div className="mt-6">

                    <div className="h-4 w-full overflow-hidden rounded-full bg-slate-700">

                      <div
                        style={{
                          width: `${Math.min(
                            100,
                            (cibilScore / 900) * 100
                          )}%`,
                        }}
                        className={`${cibil.bar} h-4 rounded-full transition-all duration-500`}
                      />

                    </div>

                    <p className="mt-4 text-lg">
                      Score: {cibilScore}
                    </p>

                    <p
                      className={`mt-2 font-bold ${cibil.color}`}
                    >
                      {cibil.text}
                    </p>

                  </div>

                )}

              </div>

            </div>

          </div>

        </motion.div>

        {/* Upload Docs */}
        <div className="mb-10 rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">

          <h2 className="mb-8 text-4xl font-black">
            Upload Documents
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">

            <div>

              <h3 className="mb-5 text-xl font-bold">
                Required Documents
              </h3>

              <div className="flex flex-wrap gap-4">

                {(docRequirements[
                  loanType
                ] || []).map((doc) => (

                  <span
                    key={doc}
                    className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 text-cyan-300"
                  >
                    {doc}
                  </span>

                ))}

              </div>

            </div>

            <div>

              <select
                value={selectedDocType}
                onChange={(e) =>
                  setSelectedDocType(
                    e.target.value
                  )
                }
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
              >

                {(docRequirements[
                  loanType
                ] || []).map((doc) => (
                  <option key={doc}>
                    {doc}
                  </option>
                ))}

              </select>

            </div>

          </div>

          <div className="mt-8 flex flex-col gap-4 md:flex-row">

            <input
              type="file"
              multiple
              onChange={(e) =>
                setDocFiles(
                  Array.from(
                    e.target.files
                  )
                )
              }
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            />

            <button className="rounded-2xl bg-green-500 px-10 py-4 font-bold transition hover:bg-green-600">
              Upload Docs
            </button>

          </div>

        </div>

        {/* Apply Loan */}
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl">

          <h2 className="mb-8 text-4xl font-black">
            Apply Loan
          </h2>

          <form className="grid gap-5 lg:grid-cols-3">

            <select
              value={loanType}
              onChange={(e) =>
                setLoanType(
                  e.target.value
                )
              }
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
            >

              {Object.keys(
                docRequirements
              ).map((loan) => (
                <option key={loan}>
                  {loan}
                </option>
              ))}

            </select>

            <input
              type="number"
              placeholder="Loan Amount"
              value={loanAmount}
              onChange={(e) =>
                setLoanAmount(
                  e.target.value
                )
              }
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
            />

            <button className="rounded-2xl bg-cyan-400 px-8 py-4 font-bold text-slate-950 transition hover:scale-105">
              Apply Loan
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Profile;