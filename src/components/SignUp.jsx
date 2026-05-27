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
      const res = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "Signup failed");
      }

      const user = await res.json();

      localStorage.setItem("user", JSON.stringify(user));

      navigate("/profile");
    } catch (error) {
      alert(error.message);
    }
  };

  // Social Auth
  const socialAuth = async (user, provider) => {
    if (!user?.email) {
      return alert("Unable to get social email");
    }

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

      if (!res.ok) {
        const err = await res.json();
        throw new Error(
          err.detail || "Social auth failed"
        );
      }

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
      console.log(error);

      alert(error.message || "Google login failed");
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
      console.log(error);

      alert(error.message || "Facebook login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-slate-900 p-8 rounded-2xl shadow-xl"
      >
        
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Sign Up
        </h1>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-slate-300 mb-2">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-slate-300 mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-slate-300 mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
        >
          Sign Up
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-[1px] bg-slate-700"></div>

          <span className="px-3 text-slate-400 text-sm">
            OR
          </span>

          <div className="flex-1 h-[1px] bg-slate-700"></div>
        </div>

        {/* Google Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-20  bg-white text-black font-semibold py-1 rounded-lg mb-2 gap-10 hover:bg-slate-200 transition"
        >
          <FontAwesomeIcon
            icon={faGoogle}
            className="mr-2 gap-10px"
          />

          
        </button>

        {/* Facebook Button */}
        <button
          type="button"
          onClick={handleFacebookLogin}
          className=" w-20 bg-blue-700 text-white font-semibold py-1 rounded-lg hover:bg-blue-800 transition"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            className="mr-2 gap-20"
          />

          
        </button>
      </form>
    </div>
  );
}

export default SignUp;