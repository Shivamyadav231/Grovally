import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";

import {
  auth,
  googleProvider,
  facebookProvider,
} from "../firebaseConfig";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";

import { motion } from "framer-motion";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Normal Signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:8000/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "Signup failed");
      }

      const user = await res.json();

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      navigate("/profile");
    } catch (error) {
      alert(error.message);
    }
  };

  // Social Auth
  const socialAuth = async (user, provider) => {
    try {
      const res = await fetch(
        "http://localhost:8000/social-auth",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user.email,
            name:
              user.displayName ||
              user.email.split("@")[0],
            provider,
            photo: user.photoURL || null,
          }),
        }
      );

      const socialUser = await res.json();

      localStorage.setItem(
        "user",
        JSON.stringify(socialUser)
      );

      navigate("/profile");
    } catch (error) {
      alert(error.message);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(
        auth,
        googleProvider
      );

      await socialAuth(result.user, "google");
    } catch (error) {
      alert(error.message);
    }
  };

  // Facebook Login
  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(
        auth,
        facebookProvider
      );

      await socialAuth(result.user, "facebook");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#020617] px-6 py-20 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px] animate-pulse"></div>

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[120px]"></div>

      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Signup Box */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl shadow-[0_20px_120px_rgba(0,255,255,0.15)]"
      >

        {/* Glow Border */}
        <div className="absolute inset-0 rounded-[35px] border border-cyan-500/20"></div>

        {/* Title */}
        <div className="relative z-10 text-center">

          <div className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm tracking-[0.2em] text-cyan-300">
            CREATE ACCOUNT
          </div>

          <h1 className="text-4xl font-black">
            Join
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Grovally
            </span>
          </h1>

          <p className="mt-3 text-slate-400">
            Build your future with AI-powered services.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 mt-10"
        >

          {/* Name */}
          <div className="mb-5">
            <label className="mb-2 block text-sm text-slate-300">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl transition focus:border-cyan-400"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="mb-2 block text-sm text-slate-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
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
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl transition focus:border-cyan-400"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="group relative w-full overflow-hidden rounded-2xl bg-cyan-400 py-4 font-bold text-slate-950 transition hover:scale-[1.02]"
          >
            <span className="relative z-10">
              Create Account
            </span>

            <div className="absolute inset-0 translate-y-full bg-white/20 transition duration-500 group-hover:translate-y-0"></div>
          </button>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="h-[1px] flex-1 bg-white/10"></div>

            <span className="px-4 text-sm text-slate-400">
              OR CONTINUE WITH
            </span>

            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">

            {/* Google */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-4 text-white backdrop-blur-xl transition hover:border-cyan-400 hover:bg-cyan-500/10"
            >
              <FontAwesomeIcon
                icon={faGoogle}
                className="text-lg"
              />

              Google
            </button>

            {/* Facebook */}
            <button
              type="button"
              onClick={handleFacebookLogin}
              className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-4 text-white backdrop-blur-xl transition hover:border-blue-400 hover:bg-blue-500/10"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-lg"
              />

              Facebook
            </button>

          </div>
        </form>
      </motion.div>
    </section>
  );
}

export default SignUp;