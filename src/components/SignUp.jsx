import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebaseConfig";
import lolo from "../assets/lolo.png";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
  event.preventDefault();
  setError("");
  setLoading(true);

  try {
    // 1. Firebase create user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      form.email,
      form.password
    );

    const user = userCredential.user;

    // 2. Name update
    if (form.name) {
      await updateProfile(user, {
        displayName: form.name,
      });
    }

    // 3. Token generate
    const token = await user.getIdToken();

    // 4. 🔥 API CALL (backend connect)
    await fetch("https://grovally-backend-14.onrender.com/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email: form.email,
        name: form.name,
      }),
    });

    // 5. redirect
    navigate("/login");

  } catch (err) {
    setError(err.message || "Signup failed");
  } finally {
    setLoading(false);
  }
};


  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-black">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-red-500/20 blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[150px] animate-pulse"></div>
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/10 blur-[120px]"></div>
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-14 sm:px-6 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl rounded-[32px] border border-white/20 bg-white/90 backdrop-blur-3xl p-6 sm:p-8 md:p-10 shadow-[0_20px_120px_rgba(255,0,0,0.20)]"
        >
          <div className="mb-8 flex flex-col gap-4 text-center">
            <div className="mx-auto inline-flex rounded-full border border-red-300 bg-red-100 px-5 py-2 text-xs sm:text-sm font-medium tracking-[0.2em] text-red-700">
              Create Account
            </div>

            <div className="flex flex-col -mt-10 items-center gap-6 text-center">
              <div className="mx-auto flex h-40 w-40 items-center justify-center  ">
                <img src={lolo} alt="Grovally" className="h-40 w-auto object-contain" />
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl -mt-14 font-extrabold leading-tight">
                  <span className="bg-gradient-to-r from-black via-red-700 to-gray-700 bg-clip-text text-transparent">
                    Create Your Account
                  </span>
                </h1>
                <p className="mx-auto max-w-3xl text-base leading-8 text-gray-700 sm:text-lg">
                  Get instant access to Grovally's service dashboard, chatbot and lead management.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">Full name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-full border-2 border-red-500 bg-white px-5 py-4 text-base text-black outline-none shadow-lg focus:border-red-600 focus:ring-1 focus:ring-red-500/20 placeholder:text-gray-400"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-full border-2 border-red-500 bg-white px-5 py-4 text-base text-black outline-none shadow-lg focus:border-red-600 focus:ring-1 focus:ring-red-500/20 placeholder:text-gray-400"
                placeholder="you@enterprise.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full rounded-full border-2 border-red-500 bg-white px-5 py-4 text-base text-black outline-none shadow-lg focus:border-red-600 focus:ring-1 focus:ring-red-500/20 placeholder:text-gray-400"
                placeholder="Create a secure password"
              />
            </div>

            {error && (
              <p className="rounded-full border border-red-500/20 bg-red-50 px-5 py-3 text-sm text-red-700 text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-gradient-to-r from-red-600 to-red-800 px-6 py-4 text-center text-base font-semibold text-white transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center text-sm">
              <button type="button" onClick={() => navigate("/login")} className="text-red-600 font-medium transition hover:text-red-800">
                Already have an account ?
              </button>
              <button type="button" onClick={() => navigate("/")} className="text-red-600 font-medium transition hover:text-red-800">
                Back to home
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
