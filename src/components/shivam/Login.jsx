import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "https://grovally-backend-14.onrender.com";

function Login() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Login Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    // Basic client-side validation
    const newErrors = {};
    if (!form.email || !/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!form.password || form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {

      const res = await fetch(`${BACKEND}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {

        const err = await res.json();

        throw new Error(
          err.detail || "Login failed"
        );
      }

      const user = await res.json();

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      navigate("/profile");

    } catch (error) {

      alert(error.message);

    } finally {

      setLoading(false);

    }
  };

  return (

    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-white px-6 py-20 text-slate-900">

      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white to-slate-50"></div>

      {/* Login Card */}
      <motion.div

        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}

        className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg"
      >
        {/* Header */}
        <div className="relative z-10 mb-6 text-center">

          <div className="mb-3 inline-flex items-center gap-3 rounded-full border border-slate-100 bg-slate-50 px-4 py-2 text-sm font-semibold text-red-600 tracking-wide">
            <span>WELCOME</span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <h1 className="text-3xl font-extrabold text-red-600">Login in to</h1>
            
          </div>
          <div className="flex items-center -mt-12 justify-center ">
            <img loading="lazy" src="https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770397/lolo_t6dwpa.png" alt="logo" className="h-48 w-auto object-contain" />
          </div>

          <p className=" text-sm -mt-12 text-black">Access your dashboard and manage your account</p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative z-10 mt-6">

          {/* Email */}
          <div className="mb-4">

            <label className="mb-2 block text-sm text-slate-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => { handleChange(e); setErrors({ ...errors, email: null }); }}
              placeholder="you@company.com"
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-600 focus:ring-1 focus:ring-cyan-100"
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-600">{errors.email}</p>
            )}

          </div>

          {/* Password */}
          <div className="mb-4">

            <label className="mb-2 block text-sm text-slate-700">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={(e) => { handleChange(e); setErrors({ ...errors, password: null }); }}
                placeholder="••••••••"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-600 focus:ring-1 focus:ring-cyan-100"
              />

              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-500 hover:text-slate-700" aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.958 9.958 0 012.07-5.706M3 3l18 18"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                )}
              </button>

            </div>

            {errors.password && (
              <p className="mt-2 text-sm text-red-600">{errors.password}</p>
            )}

          </div>

          <div className="mb-6 flex items-center justify-between">
            <label className="inline-flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-200 bg-white text-red-600" />
              Remember me
            </label>

            <button type="button" onClick={() => navigate('/forgot')} className="text-sm text-red-600 hover:underline">Forgot?</button>
          </div>

          {/* Button */}
          <button type="submit" disabled={loading} className="mb-6 h-12 w-full rounded-2xl  bg-red-600 font-semibold text-white shadow-md hover:scale-[1.01] disabled:opacity-50">
            {loading ? "Signing in..." : "Sign in"}
          </button>

          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-100"></div>
            <div className="text-sm text-slate-400">or continue with</div>
            <div className="h-px flex-1 bg-slate-100"></div>
          </div>

          <div className="mb-6 flex gap-3">
            <button type="button" className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Google</button>
            <button type="button" className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">GitHub</button>
          </div>

          {/* Signup */}
          <p className="mt-6 text-center text-sm text-slate-600">
            Don’t have an account?{' '}
            <span onClick={() => navigate('/signup')} className="cursor-pointer text-red-600 ">Sign Up</span>
          </p>

        </form>

      </motion.div>

    </section>
  );
}

export default Login;