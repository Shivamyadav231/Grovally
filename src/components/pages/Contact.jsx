import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "shivam",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleSubmit = () => {
    setStatus("sending");

    setTimeout(() => {
      console.log(form);
      setStatus("sent");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 1600);
  };

  return (
    <section className="relative  min-h-screen overflow-hidden bg-white text-gray-900 py-24">

      {/* SOFT BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-red-100 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-gray-100 blur-[180px] rounded-full" />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative mt-12 z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="px-6 py-2  rounded-full bg-red-50 border border-red-100 text-red-600 text-sm tracking-[3px]">
            CONTACT GROVALLY
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            LET’S BUILD
            <span className="block text-red-600">
              THE FUTURE
            </span>
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8">
            IT Solutions • AI Automation • BPO • KPO • Finance • Business Growth
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <div className="space-y-6">

            {[
              {
                icon: <FaEnvelope />,
                title: "Email",
                value: "grovallybusinesssolutions@gmail.com",
              },
              {
                icon: <FaPhoneAlt />,
                title: "Phone",
                value: "+91 9217753755",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Location",
                value: "Greater Noida, India",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex items-center gap-5 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >

                <div className="text-2xl text-red-500">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.value}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-lg">

            <h2 className="text-3xl font-black">
              Send Message
            </h2>

            <p className="text-gray-500 mt-2">
              We usually respond within 24 hours
            </p>

            <div className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-red-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-red-400"
              />

              <textarea
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full h-40 p-4 rounded-xl border border-gray-200 outline-none focus:border-red-400"
              />

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                disabled={status !== "idle"}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition"
              >
                <FaPaperPlane />

                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "Message Sent ✓"
                  : "Send Message"}
              </motion.button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}