import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import RO from "../assets/RO.png";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 500);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-slate-950 px-4 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.16),_transparent_25%)]" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-xl overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-panel backdrop-blur-2xl"
      >
        <div className="mb-8 flex flex-col gap-3 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500 text-slate-950">
            <img src={RO} alt="Grovally" className="h-10 w-auto object-contain" />
          </div>
          <h1 className="text-3xl font-black">Create Enterprise Account</h1>
          <p className="text-slate-400">Get instant access to Grovally's service dashboard, chatbot and lead management.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300">Full name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-4 text-white outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-4 text-white outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20"
              placeholder="you@enterprise.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-4 text-white outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20"
              placeholder="Create a secure password"
            />
          </div>

          {error && <p className="rounded-3xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-base font-semibold text-slate-950 transition hover:brightness-110 disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>

          <div className="flex items-center justify-between text-sm text-slate-400">
            <button type="button" onClick={() => navigate("/login")} className="hover:text-white">
              Already have an account?
            </button>
            <button type="button" onClick={() => navigate("/")} className="hover:text-white">
              Back to home
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
