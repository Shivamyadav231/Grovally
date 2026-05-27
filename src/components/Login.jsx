import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        throw new Error(err.detail || "Login failed");
      }

      const user = await res.json();

      console.log("Login User:", user);

      // Save User
      localStorage.setItem("user", JSON.stringify(user));

      // Go Profile Page
      navigate("/profile");

    } catch (error) {

      console.log(error);

      alert(error.message);

    } finally {

      setLoading(false);

    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-slate-900 p-8 rounded-2xl shadow-xl"
      >

        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Login
        </h1>

        {/* Email */}
        <div className="mb-4">

          <label
            htmlFor="email"
            className="block text-slate-300 mb-2"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Password */}
        <div className="mb-6">

          <label
            htmlFor="password"
            className="block text-slate-300 mb-2"
          >
            Password
          </label>

          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200 disabled:opacity-50"
        >

          {loading ? "Logging in..." : "Login"}

        </button>

        {/* Signup Redirect */}
        <p className="text-slate-400 text-center mt-6 text-sm">

          Don’t have an account?{" "}

          <span
            onClick={() => navigate("/signup")}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Sign Up
          </span>

        </p>

      </form>

    </div>
  );
}

export default Login;