import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

const BACKEND = "http://localhost:8000";

function Login() {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

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

    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#020617] px-6 py-20 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px] animate-pulse"></div>

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]"></div>

      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Login Card */}
      <motion.div

        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}

        className="relative z-10 w-full max-w-md overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_20px_120px_rgba(0,255,255,0.15)]"
      >

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-[35px] border border-cyan-500/20"></div>

        {/* Header */}
        <div className="relative z-10 text-center">

          <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm tracking-[0.2em] text-cyan-300">
            WELCOME BACK
          </div>

          <h1 className="text-4xl font-black">
            Login To
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Grovally
            </span>
          </h1>

          <p className="mt-3 text-slate-400">
            Access your futuristic dashboard.
          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 mt-10"
        >

          {/* Email */}
          <div className="mb-5">

            <label className="mb-2 block text-sm text-slate-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl transition focus:border-cyan-400"
            />

          </div>

          {/* Password */}
          <div className="mb-6">

            <label className="mb-2 block text-sm text-slate-300">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl transition focus:border-cyan-400"
            />

          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full overflow-hidden rounded-2xl bg-cyan-400 py-4 font-bold text-slate-950 transition hover:scale-[1.02] disabled:opacity-50"
          >

            <span className="relative z-10">

              {loading
                ? "Logging in..."
                : "Login"}

            </span>

            <div className="absolute inset-0 translate-y-full bg-white/20 transition duration-500 group-hover:translate-y-0"></div>

          </button>

          {/* Signup */}
          <p className="mt-8 text-center text-sm text-slate-400">

            Don’t have an account?{" "}

            <span
              onClick={() => navigate("/signup")}
              className="cursor-pointer text-cyan-400 hover:underline"
            >
              Sign Up
            </span>

          </p>

        </form>

      </motion.div>

    </section>
  );
}

export default Login;