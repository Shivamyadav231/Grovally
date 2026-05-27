import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const [showTracker, setShowTracker] =
  useState(false);

function ProgressTracker() {

  const navigate = useNavigate();

  const steps = [
    "Document Uploaded",
    "Verification",
    "Processing",
    "Approved",
    "Payment Disbursed",
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const [profile, setProfile] = useState(null);

  // ================= CHECK LOGIN =================

  useEffect(() => {

    const rawUser = localStorage.getItem("user");

    if (!rawUser) {

      navigate("/login");

      return;
    }

    try {

      const parsedUser = JSON.parse(rawUser);

      setProfile(parsedUser);

    } catch (error) {

      console.error("Profile Parse Error:", error);

      navigate("/login");
    }

  }, [navigate]);

  // ================= AUTO STEP DEMO =================

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentStep((prev) => {

        if (prev < steps.length - 1) {
          return prev + 1;
        }

        return prev;
      });

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  // ================= UI =================

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">

      <div className="w-full max-w-6xl bg-slate-900 border border-slate-800 rounded-3xl p-10 text-white shadow-2xl">

        {/* HEADER */}

        <div className="text-center mb-14">

          <h1 className="text-4xl font-bold">
            Loan Progress Tracker
          </h1>

          <p className="text-slate-400 mt-3">
            Track your loan approval journey
          </p>

        </div>

        {/* USER */}

        <div className="mb-12 text-center">

          <h2 className="text-2xl font-semibold">
            {profile?.name || "User"}
          </h2>

          <p className="text-slate-400 mt-1">
            {profile?.email}
          </p>

        </div>

        {/* STEPS */}

        <div className="flex items-center justify-between gap-4 flex-wrap">

          {steps.map((step, index) => (

            <React.Fragment key={index}>

              {/* STEP */}

              <div className="flex flex-col items-center flex-1 min-w-[120px]">

                <div
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center
                    text-xl font-bold border-4 transition-all duration-500

                    ${
                      index < currentStep
                        ? "bg-green-500 border-green-500 shadow-lg shadow-green-500/40"
                        : index === currentStep
                        ? "bg-yellow-500 border-yellow-500 animate-pulse shadow-lg shadow-yellow-500/40"
                        : "bg-slate-800 border-slate-600"
                    }
                  `}
                >

                  {index < currentStep
                    ? "✓"
                    : index + 1}

                </div>

                <p className="mt-4 text-center text-sm font-medium">
                  {step}
                </p>

              </div>

              {/* LINE */}

              {index !== steps.length - 1 && (

                <div
                  className={`
                    flex-1 h-1 rounded transition-all duration-500

                    ${
                      index < currentStep
                        ? "bg-green-500"
                        : "bg-slate-700"
                    }
                  `}
                />

              )}

            </React.Fragment>

          ))}

        </div>

        {/* BUTTONS */}

       

      </div>

    </div>
  );
}

export default ProgressTracker;