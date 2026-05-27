import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const BACKEND = "http://localhost:8000";

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

  const [user, setUser] = useState(null);

  const [profile, setProfile] = useState(null);

  const [photoFile, setPhotoFile] = useState(null);

  const [docFiles, setDocFiles] = useState([]);

  const [loanType, setLoanType] = useState("Home Loan");

  const [selectedDocType, setSelectedDocType] =
    useState("PAN Card");

  const [loanAmount, setLoanAmount] = useState("");

  const [payAmount, setPayAmount] = useState("");

  const [loading, setLoading] = useState(true);

  const [cibilScore, setCibilScore] = useState("");

  // ================= FETCH PROFILE =================

  const fetchProfile = async (email) => {

    try {

      setLoading(true);

      const res = await fetch(
        `${BACKEND}/profile?email=${encodeURIComponent(email)}`
      );

      const text = await res.text();

      if (!res.ok) {
        throw new Error(text || "Profile fetch failed");
      }

      const data = JSON.parse(text);

      setProfile(data);

    } catch (error) {

      console.error(error);

      alert(error.message);

    } finally {

      setLoading(false);
    }
  };

  // ================= CHECK LOGIN =================

  useEffect(() => {

    const raw = localStorage.getItem("user");

    if (!raw) {

      navigate("/login");

      return;
    }

    try {

      const parsedUser = JSON.parse(raw);

      setUser(parsedUser);

      fetchProfile(parsedUser.email);

    } catch (err) {

      console.error(err);

      navigate("/login");
    }

  }, [navigate]);

  // ================= AUTO DOC =================

  useEffect(() => {

    const docs = docRequirements[loanType] || [];

    setSelectedDocType(docs[0] || "");

  }, [loanType]);

  // ================= PHOTO UPLOAD =================

  const handlePhotoUpload = async () => {

    if (!photoFile || !user) {
      return alert("Select photo first");
    }

    try {

      setLoading(true);

      const fd = new FormData();

      fd.append("email", user.email);

      fd.append("file", photoFile);

      const res = await fetch(
        `${BACKEND}/upload-photo`,
        {
          method: "POST",
          body: fd,
        }
      );

      if (!res.ok) {

        const errorText = await res.text();

        throw new Error(errorText);
      }

      await fetchProfile(user.email);

      alert("Photo uploaded successfully");

    } catch (error) {

      console.error(error);

      alert(error.message);

    } finally {

      setLoading(false);
    }
  };

  // ================= DOCS UPLOAD =================

  const handleDocsUpload = async () => {

    if (!docFiles.length || !user) {
      return alert("Choose documents");
    }

    try {

      setLoading(true);

      const fd = new FormData();

      fd.append("email", user.email);

      fd.append("doc_type", selectedDocType);

      docFiles.forEach((file) => {
        fd.append("files", file);
      });

      const res = await fetch(
        `${BACKEND}/upload-docs`,
        {
          method: "POST",
          body: fd,
        }
      );

      if (!res.ok) {

        const errorText = await res.text();

        throw new Error(errorText);
      }

      await fetchProfile(user.email);

      alert("Documents uploaded");

    } catch (error) {

      console.error(error);

      alert(error.message);

    } finally {

      setLoading(false);
    }
  };

  // ================= APPLY LOAN =================

  const handleLoanApply = async (e) => {

    e.preventDefault();

    if (!loanAmount) {
      return alert("Enter loan amount");
    }

    if (!cibilScore) {
      return alert("Enter CIBIL score");
    }

    try {

      setLoading(true);

      const res = await fetch(
        `${BACKEND}/apply-loan`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({

            email: profile.email,

            name: profile.name,

            loan_type: loanType,

            amount: loanAmount,

            cibil_score: cibilScore,

            docs: profile.docs || [],
          }),
        }
      );

      const data = await res.json();

      alert(data.message);

      setLoanAmount("");

    } catch (error) {

      console.error(error);

      alert("Loan apply failed");

    } finally {

      setLoading(false);
    }
  };

  // ================= PAYMENT =================

  const handlePayment = async (e) => {

    e.preventDefault();

    if (!payAmount) {
      return alert("Enter payment amount");
    }

    try {

      setLoading(true);

      const res = await fetch(
        `${BACKEND}/loan/pay?email=${encodeURIComponent(
          user.email
        )}&amount=${payAmount}`,
        {
          method: "POST",
        }
      );

      if (!res.ok) {

        const errorText = await res.text();

        throw new Error(errorText);
      }

      const data = await res.json();

      alert(
        `Paid ₹${data.paid}\nRemaining ₹${data.remaining}`
      );

      setPayAmount("");

    } catch (error) {

      console.error(error);

      alert(error.message);

    } finally {

      setLoading(false);
    }
  };

  // ================= LOGOUT =================

  const logout = () => {

    localStorage.removeItem("user");

    navigate("/login");
  };

  // ================= LOADING =================

  if (loading) {

    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white text-4xl font-bold">
        Loading...
      </div>
    );
  }

  if (!profile) {

    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-red-500 text-3xl font-bold">
        Profile Not Found
      </div>
    );
  }

  const getCibilStatus = () => {

    if (cibilScore >= 350 && cibilScore < 550)
      return {
        text: "Poor Score 😟",
        color: "text-red-400",
        bar: "bg-red-500",
      };

    if (cibilScore >= 550 && cibilScore < 700)
      return {
        text: "Average Score 🙂",
        color: "text-yellow-400",
        bar: "bg-yellow-500",
      };

    if (cibilScore >= 700 && cibilScore < 800)
      return {
        text: "Good Score ✅",
        color: "text-green-400",
        bar: "bg-green-500",
      };

    if (cibilScore >= 800)
      return {
        text: "Excellent Score 🚀",
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

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-6">

      <div className="max-w-7xl mx-auto space-y-8">

        {/* HEADER */}

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-5xl font-extrabold">
              Welcome {profile?.name}
            </h1>

            <p className="text-slate-400 mt-2">
              Loan Dashboard
            </p>

          </div>

          <button
            onClick={logout}
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-2xl shadow-lg"
          >
            Logout
          </button>

        </div>

        {/* PROFILE */}

        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl">

          <div className="flex flex-col lg:flex-row gap-10">

            {/* LEFT */}

            <div className="flex flex-col items-center">

              <input
                ref={photoInputRef}
                type="file"
                hidden
                accept="image/*"
                onChange={(e) =>
                  setPhotoFile(e.target.files[0])
                }
              />

              <div
                onClick={() =>
                  photoInputRef.current.click()
                }
                className="cursor-pointer"
              >

                {profile?.photo ? (

                  <img
                    src={`${BACKEND}/uploads/${profile.photo}`}
                    alt="profile"
                    className="w-44 h-44 rounded-full object-cover border-4 border-blue-500"
                  />

                ) : (

                  <div className="w-44 h-44 rounded-full bg-blue-600 flex items-center justify-center text-6xl font-bold">

                    {profile?.name?.charAt(0)}

                  </div>

                )}

              </div>

              <button
                onClick={handlePhotoUpload}
                className="mt-5 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl"
              >
                Upload Photo
              </button>

            </div>

            {/* RIGHT */}

            <div className="flex-1 space-y-8">

              <div>

                <h2 className="text-4xl font-bold">
                  {profile?.name}
                </h2>

                <p className="text-slate-400 mt-2">
                  {profile?.email}
                </p>

              </div>

              {/* CIBIL */}

              <div className="bg-slate-800/50 rounded-3xl p-6 border border-slate-700">

                <h2 className="text-3xl font-bold mb-5">
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
                  className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4"
                />

                {cibilScore > 0 && (

                  <div className="mt-5">

                    <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">

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

                    <p className="mt-3 text-lg">
                      Score: {cibilScore}
                    </p>

                    <p className={`mt-2 font-bold ${cibil.color}`}>
                      {cibil.text}
                    </p>

                  </div>

                )}

              </div>

            </div>

          </div>

        </div>

        {/* DOCUMENTS */}

        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl">

          <h2 className="text-3xl font-bold mb-8">
            Upload Documents
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="block mb-3 text-slate-400">
                Required Documents
              </label>

              <div className="flex flex-wrap gap-3">

                {(docRequirements[loanType] || []).map(
                  (doc) => (
                    <span
                      key={doc}
                      className="bg-blue-600/20 border border-blue-500 px-4 py-2 rounded-full"
                    >
                      {doc}
                    </span>
                  )
                )}

              </div>

            </div>

            <div>

              <label className="block mb-3 text-slate-400">
                Select Document Type
              </label>

              <select
                value={selectedDocType}
                onChange={(e) =>
                  setSelectedDocType(e.target.value)
                }
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-4 py-4"
              >

                {(docRequirements[loanType] || []).map(
                  (doc) => (
                    <option key={doc}>
                      {doc}
                    </option>
                  )
                )}

              </select>

            </div>

          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-4">

            <input
              type="file"
              multiple
              onChange={(e) =>
                setDocFiles(
                  Array.from(e.target.files)
                )
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-2xl p-4"
            />

            <button
              onClick={handleDocsUpload}
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl"
            >
              Upload Docs
            </button>

          </div>

        </div>

        {/* APPLY LOAN */}

        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl">

          <h2 className="text-3xl font-bold mb-8">
            Apply Loan
          </h2>

          <form
            onSubmit={handleLoanApply}
            className="grid md:grid-cols-3 gap-5"
          >

            <select
              value={loanType}
              onChange={(e) =>
                setLoanType(e.target.value)
              }
              className="bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4"
            >

              {Object.keys(docRequirements).map(
                (loan) => (
                  <option key={loan}>
                    {loan}
                  </option>
                )
              )}

            </select>

            <input
              type="number"
              value={loanAmount}
              onChange={(e) =>
                setLoanAmount(e.target.value)
              }
              placeholder="Enter Loan Amount"
              className="bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 rounded-2xl px-6 py-4"
            >
              Apply Loan
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Profile;