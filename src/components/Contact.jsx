import { useState } from "react";

import {
  motion,
} from "framer-motion";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] =
    useState(false);

  const [isSent, setIsSent] =
    useState(false);

  const handleSubmit = async () => {

    setIsSending(true);

    setTimeout(() => {

      console.log(form);

      setIsSending(false);

      setIsSent(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });

    }, 2000);
  };

  return (

    <section className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-24 text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]"></div>

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[130px]"></div>

      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <motion.div

          initial={{
            opacity: 0,
            y: 50,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          className="mb-20 text-center"
        >

          <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-2 text-sm tracking-[0.3em] text-cyan-300">

            CONTACT GROVALLY

          </div>

          <h1 className="mt-8 text-6xl font-black leading-tight lg:text-7xl">

            Let's Build
            <br />

            Something Amazing

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-400">

            Connect with Grovally for futuristic IT,
            BPO, KPO & Finance solutions powered
            by AI automation and modern technology.

          </p>

        </motion.div>

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT INFO */}
          <motion.div

            initial={{
              opacity: 0,
              x: -50,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.8,
            }}

            className="space-y-8"
          >

            {[
              {
                icon: <FaEnvelope />,
                title: "Email",
                value:
                  "grovallybusinesssolutions@gmail.com",
                link:
                  "mailto:grovallybusinesssolutions@gmail.com",
                color:
                  "from-cyan-400 to-blue-500",
              },

              {
                icon: <FaPhoneAlt />,
                title: "Phone",
                value: "+91 9217753755",
                link: "tel:+919217753755",
                color:
                  "from-green-400 to-emerald-500",
              },

              {
                icon: <FaMapMarkerAlt />,
                title: "Office",
                value:
                  "TF-03, 3RD FLOOR, SUN TWINLIGHT METRO STREET, GREATER NOIDA, INDIA",
                link:
                  "https://maps.google.com/?q=Greater+Noida+India",
                color:
                  "from-pink-400 to-purple-500",
              },
            ].map((item, index) => (

              <motion.a

                key={index}

                href={item.link}

                target="_blank"

                rel="noreferrer"

                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}

                className="group relative block overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
              >

                {/* Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-20`}></div>

                <div className="relative z-10 flex items-start gap-6">

                  <div className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${item.color} text-3xl shadow-2xl`}>

                    {item.icon}

                  </div>

                  <div>

                    <h2 className="text-3xl font-black">

                      {item.title}

                    </h2>

                    <p className="mt-4 leading-8 text-slate-400">

                      {item.value}

                    </p>

                  </div>

                </div>

              </motion.a>

            ))}

          </motion.div>

          {/* RIGHT FORM */}
          <motion.div

            initial={{
              opacity: 0,
              x: 50,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.8,
            }}

            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 shadow-[0_20px_100px_rgba(0,255,255,0.1)] backdrop-blur-2xl"
          >

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>

            <div className="relative z-10">

              <h2 className="text-4xl font-black">

                Send Message

              </h2>

              <p className="mt-4 text-slate-400">

                We usually reply within 24 hours.

              </p>

              <div className="mt-10 space-y-6">

                {/* Name */}
                <div>

                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">

                    Your Name

                  </label>

                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                    placeholder="Enter your name"
                    className="w-full rounded-3xl border border-white/10 bg-[#020617]/70 px-6 py-5 text-white outline-none backdrop-blur-xl transition focus:border-cyan-400"
                  />

                </div>

                {/* Email */}
                <div>

                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">

                    Email Address

                  </label>

                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email: e.target.value,
                      })
                    }
                    placeholder="Enter your email"
                    className="w-full rounded-3xl border border-white/10 bg-[#020617]/70 px-6 py-5 text-white outline-none backdrop-blur-xl transition focus:border-cyan-400"
                  />

                </div>

                {/* Message */}
                <div>

                  <label className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">

                    Message

                  </label>

                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    placeholder="Tell us about your project..."
                    className="h-40 w-full rounded-3xl border border-white/10 bg-[#020617]/70 px-6 py-5 text-white outline-none backdrop-blur-xl transition focus:border-cyan-400"
                  />

                </div>

                {/* Button */}
                <motion.button

                  whileHover={{
                    scale: 1.03,
                  }}

                  whileTap={{
                    scale: 0.97,
                  }}

                  type="button"

                  onClick={handleSubmit}

                  disabled={
                    isSending || isSent
                  }

                  className="flex w-full items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-5 text-lg font-black text-slate-950 shadow-[0_10px_40px_rgba(0,255,255,0.4)] transition disabled:opacity-50"
                >

                  <FaPaperPlane />

                  {isSending
                    ? "Sending..."
                    : isSent
                    ? "Message Sent"
                    : "Send Message"}

                </motion.button>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}