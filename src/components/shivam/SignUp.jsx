import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";




import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGoogle } from "@fortawesome/free-brands-svg-icons/faGoogle";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";

import { motion } from "framer-motion";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "https://grovally-backend-14.onrender.com";

function SignUp() {
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = new URLSearchParams(location.search).get("redirect");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

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
    // Basic client-side validation
    const newErrors = {};
    if (!formData.name || formData.name.length < 2) newErrors.name = "Enter your full name.";
    if (!formData.email || !/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(formData.email)) newErrors.email = "Enter a valid email.";
    if (!formData.password || formData.password.length < 6) newErrors.password = "Password should be at least 6 characters.";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await fetch(
        `${BACKEND}/signup`,
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

      navigate(redirect || "/profile");
    } catch (error) {
      alert(error.message);
    }
  };

  // Social Auth
  const socialAuth = async (user, provider) => {
    try {
      const res = await fetch(
        `${BACKEND}/social-auth`,
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

      navigate(redirect || "/profile");
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
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-white px-6 py-20 text-slate-900">

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white to-slate-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-lg"
      >

        {/* Title */}
        <div className="relative z-10 mb-6 text-center">

          <div className="mb-3 inline-flex items-center gap-3 rounded-full border border-slate-100 bg-slate-50 px-4 py-2 text-sm font-semibold text-red-600 tracking-wide">
            CREATE ACCOUNT
          </div>

          <div className="flex items-center  justify-center gap-4">
            <h1 className="text-5xl font-extrabold text-red-700">Join to</h1>
           
          </div>
          <div className="flex items-center -my-12 justify-center ">
            <img loading="lazy" src="https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770397/lolo_t6dwpa.png" alt="logo" className="  h-48 w-auto object-contain" />

          </div>
           
          <p className="-mt-2 text-sm text-black">Build your future with AI-powered services.</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative z-10 mt-4">

          {/* Name */}
          <div className="mb-4">
            <label className="mb-2 block text-sm text-slate-700">Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => { handleChange(e); setErrors({ ...errors, name: null }); }}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-1 focus:ring-cyan-100"
            />

            {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="mb-2 block text-sm text-slate-700">Email</label>

            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => { handleChange(e); setErrors({ ...errors, email: null }); }}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-100"
            />

            {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="mb-2 block text-sm text-slate-700">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => { handleChange(e); setErrors({ ...errors, password: null }); }}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-100"
              />

              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-500 hover:text-slate-700" aria-label={showPassword ? "Hide password" : "Show password"}>
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.958 9.958 0 012.07-5.706M3 3l18 18"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                )}
              </button>
            </div>

            {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
          </div>

          {/* Signup Button */}
          <button type="submit" className="mb-4 w-full rounded-2xl  bg-red-600 py-3 font-semibold text-white shadow-md hover:scale-[1.01]">
            Create account
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="h-px flex-1 bg-slate-100"></div>
            <div className="px-4 text-sm text-slate-400">or continue with</div>
            <div className="h-px flex-1 bg-slate-100"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-3">
            <button type="button" onClick={handleGoogleLogin} className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
              <FontAwesomeIcon icon={faGoogle} className="mr-2 text-lg text-red-500" /> Google
            </button>

            <button type="button" onClick={handleFacebookLogin} className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
              <FontAwesomeIcon icon={faFacebook} className="mr-2 text-lg text-blue-600" /> Facebook
            </button>
          </div>
          <p className="mt-6 text-center text-sm text-slate-600">Already have an account?{' '}<span onClick={() => navigate(`/login${redirect ? `?redirect=${redirect}` : ""}`)} className="cursor-pointer text-red-600 font-medium hover:underline">Login in</span></p>
        </form>
      </motion.div>
    </section>
  );
}

export default SignUp;