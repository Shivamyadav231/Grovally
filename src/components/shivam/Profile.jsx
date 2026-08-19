import React, {
  useState,
  useEffect,
  useRef,
} from "react";

import { useNavigate, useLocation } from "react-router-dom";

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

// CIBIL band definitions drive both the label/color logic and the
// segmented range meter below, so the two never fall out of sync.
const CIBIL_MIN = 300;
const CIBIL_MAX = 900;
const cibilBands = [
  { key: "poor", from: 300, to: 549, label: "Poor", text: "text-rose-600", dot: "bg-rose-500", track: "bg-rose-400" },
  { key: "average", from: 550, to: 699, label: "Average", text: "text-amber-600", dot: "bg-amber-500", track: "bg-amber-400" },
  { key: "good", from: 700, to: 799, label: "Good", text: "text-blue-600", dot: "bg-blue-500", track: "bg-blue-400" },
  { key: "excellent", from: 800, to: 900, label: "Excellent", text: "text-emerald-600", dot: "bg-emerald-500", track: "bg-emerald-400" },
];

function Profile() {

  const navigate = useNavigate();

  const photoInputRef = useRef(null);

  const [profile, setProfile] = useState(null);

  const [photoFile, setPhotoFile] =
    useState(null);

  const [docFiles, setDocFiles] =
    useState([]);

  const location = useLocation();
  const selectedCourseId = new URLSearchParams(location.search).get("course") || "";
  const redirect = new URLSearchParams(location.search).get("redirect") || "";
  const courseNames = {
    "ai-product": "AI Product Development",
    "digital-marketing": "Digital Marketing & Growth",
    "startup-ops": "Startup Operations & Strategy",
  };
  const selectedCourseName = courseNames[selectedCourseId];

  const [loanType, setLoanType] =
    useState("Home Loan");

  const [selectedDocType, setSelectedDocType] =
    useState("PAN Card");

  const [loanAmount, setLoanAmount] =
    useState("");

  const [cibilScore, setCibilScore] =
    useState("");

  const [application, setApplication] = useState({
    course: selectedCourseName || "AI Product Development",
    phone: "",
    motivation: "",
    resume: null,
  });
  const [applicationStatus, setApplicationStatus] =
    useState("");

  const handleApplicationChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setApplication({
        ...application,
        resume: files?.[0] || null,
      });
      return;
    }

    setApplication({
      ...application,
      [name]: value,
    });
  };

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    setApplicationStatus(
      "Your internship application has been submitted. We’ll review it and get back to you soon."
    );
  };

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

  const getCibilBand = () => {
    const score = Number(cibilScore);
    if (!score) return null;
    return cibilBands.find((b) => score >= b.from && score <= b.to) || null;
  };

  const cibilBand = getCibilBand();
  const cibilPercent = cibilScore
    ? Math.min(
        100,
        Math.max(
          0,
          ((Number(cibilScore) - CIBIL_MIN) / (CIBIL_MAX - CIBIL_MIN)) * 100
        )
      )
    : 0;

  if (!profile) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-slate-50 text-lg font-semibold text-slate-400">

        Loading your dashboard…

      </div>
    );
  }

  return (

    <section className="relative  min-h-screen w-full bg-slate-50 px-6 py-16 text-slate-900 antialiased">

      <div className="mx-auto w-full max-w-6xl">

        {/* Header */}
        <div className="mb-8 flex flex-col mt-11 gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-medium text-red-600">Welcome back</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {profile?.name}
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Track your loan eligibility, documents, and applications in one place.
            </p>
          </div>

          <button
            onClick={logout}
            className="inline-flex items-center justify-center self-start rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 sm:self-auto"
          >
            Log out
          </button>

        </div>

        {selectedCourseName && (
          <div className="mb-6 flex items-start gap-4 rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
              ✓
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
                Selected course
              </p>
              <h2 className="mt-0.5 text-lg font-semibold text-slate-900">
                {selectedCourseName}
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Continue here to manage attendance, session access, and profile details.
              </p>
            </div>
          </div>
        )}

        {redirect === "apply" && (
          <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
                  Internship application
                </p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  Submit your application
                </h2>
                <p className="mt-1 max-w-xl text-sm text-slate-500">
                  Fill out the details below to start your journey.
                </p>
              </div>
              <span className="inline-flex w-fit items-center rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600">
                Application mode enabled
              </span>
            </div>

            <form onSubmit={handleApplicationSubmit} className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Selected course
                  </label>
                  <input
                    type="text"
                    name="course"
                    value={application.course}
                    readOnly
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600 outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={application.phone}
                    onChange={handleApplicationChange}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Resume
                  </label>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleApplicationChange}
                    className="w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-500 outline-none file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-indigo-700"
                  />
                  {application.resume && (
                    <p className="mt-1.5 text-xs text-slate-500">
                      Uploaded: {application.resume.name}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex-1">
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Motivation
                  </label>
                  <textarea
                    name="motivation"
                    value={application.motivation}
                    onChange={handleApplicationChange}
                    placeholder="Tell us why you want this internship"
                    rows="6"
                    className="h-full w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
                >
                  Submit application
                </button>

                {applicationStatus && (
                  <p className="text-sm font-medium text-emerald-600">
                    {applicationStatus}
                  </p>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <div className="grid gap-10 lg:grid-cols-[auto_1fr]">

            {/* Left */}
            <div className="flex flex-col items-center gap-4">

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
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && photoInputRef.current.click()}
                className="group relative cursor-pointer focus:outline-none"
              >
                {profile?.photo ? (
                  <img
                    loading="lazy"
                    src={`${BACKEND}/uploads/${profile.photo}`}
                    alt="profile"
                    className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-md ring-1 ring-slate-200"
                  />
                ) : (
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-indigo-600 text-4xl font-bold text-white shadow-md">
                    {profile?.name?.charAt(0)}
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-slate-900/40 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                  Change
                </div>
              </div>

              <button className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-200">
                Upload photo
              </button>

            </div>

            {/* Right */}
            <div>

              <h2 className="text-xl font-bold text-red-600">
                Profile overview
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {profile?.email}
              </p>

              {/* CIBIL */}
              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-6">

                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-base font-semibold text-red-600">
                    CIBIL score
                  </h3>
                  {cibilBand && (
                    <span className={`text-sm font-semibold ${cibilBand.text}`}>
                      {cibilBand.label}
                    </span>
                  )}
                </div>

                <input
                  type="number"
                  value={cibilScore}
                  onChange={(e) =>
                    setCibilScore(
                      Number(e.target.value)
                    )
                  }
                  placeholder="Enter CIBIL score"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                />

                {cibilScore > 0 && (
                  <div className="mt-6">

                    {/* Segmented range meter with score marker */}
                    <div className="relative">
                      <div className="flex h-2.5 w-full overflow-hidden rounded-full">
                        {cibilBands.map((band) => (
                          <div
                            key={band.key}
                            className={`${band.track} h-full`}
                            style={{
                              width: `${((band.to - band.from + 1) / (CIBIL_MAX - CIBIL_MIN)) * 100}%`,
                            }}
                          />
                        ))}
                      </div>
                      <div
                        className="absolute -top-1 h-4.5 w-0.5 rounded-full bg-slate-900 transition-all duration-500"
                        style={{ left: `calc(${cibilPercent}% - 1px)` }}
                      />
                    </div>

                    <div className="mt-2 flex justify-between text-xs text-slate-400">
                      <span>300</span>
                      <span>900</span>
                    </div>

                    <p className="mt-4 text-sm text-slate-600">
                      Score: <span className="font-semibold text-slate-900">{cibilScore}</span>
                    </p>

                  </div>
                )}

              </div>

            </div>

          </div>

        </motion.div>

        {/* Upload Docs */}
        

        {/* Apply Loan */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-xl font-bold text-slate-900">
            Apply for a loan
          </h2>

          <form className="grid gap-4 lg:grid-cols-3">

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Loan type
              </label>
              <select
                value={loanType}
                onChange={(e) =>
                  setLoanType(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              >
                {Object.keys(docRequirements).map((loan) => (
                  <option key={loan}>{loan}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Loan amount
              </label>
              <input
                type="number"
                placeholder="₹ 0"
                value={loanAmount}
                onChange={(e) =>
                  setLoanAmount(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div className="flex items-end">
              <button className="w-full rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300">
                Apply loan
              </button>
            </div>

          </form>

        </div>
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-xl font-bold text-red-600">
            Upload documents
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">

            <div>
              <h3 className="mb-3 text-sm font-semibold text-slate-700">
                Required for {loanType}
              </h3>

              <div className="flex flex-wrap gap-2">
                {(docRequirements[loanType] || []).map((doc) => (
                  <span
                    key={doc}
                    className="rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600"
                  >
                    {doc}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-red-600">
                Document type
              </label>
              <select
                value={selectedDocType}
                onChange={(e) =>
                  setSelectedDocType(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              >
                {(docRequirements[loanType] || []).map((doc) => (
                  <option key={doc}>{doc}</option>
                ))}
              </select>
            </div>

          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">

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
              className="flex-1 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-2.5 text-sm text-slate-500 outline-none file:mr-4 file:rounded-lg file:border-0 file:bg-slate-200 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-slate-700 hover:file:bg-slate-300"
            />

            <button className="rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">
              Upload docs
            </button>

          </div>

          {docFiles.length > 0 && (
            <p className="mt-3 text-xs text-slate-500">
              {docFiles.length} file{docFiles.length > 1 ? "s" : ""} selected
            </p>
          )}

        </div>

      </div>

    </section>
  );
}

export default Profile;
