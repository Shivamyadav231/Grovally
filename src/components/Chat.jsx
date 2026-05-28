import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  FaRobot,
  FaPaperPlane,
  FaUserAstronaut,
} from "react-icons/fa";

export default function Chat() {

  const [msg, setMsg] = useState("");

  const [chat, setChat] = useState([
    {
      role: "bot",
      text: "👋 Hello! I am Grovally AI. How can I help you today?",
    },
  ]);

  const sendMessage = () => {

    if (!msg.trim()) return;

    const userMessage = {
      role: "user",
      text: msg,
    };

    const botMessage = {
      role: "bot",
      text:
        "🚀 Grovally AI is processing your request...",
    };

    setChat((prev) => [
      ...prev,
      userMessage,
      botMessage,
    ]);

    setMsg("");
  };

  return (

    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#020617] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]"></div>

        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[130px]"></div>

      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      {/* HEADER */}
      <div className="relative z-10 border-b border-white/10 bg-white/5 backdrop-blur-2xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="flex items-center gap-4">

            <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500 text-3xl shadow-[0_10px_40px_rgba(0,255,255,0.5)]">

              <FaRobot />

              <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-2xl"></div>

            </div>

            <div>

              <h1 className="text-3xl font-black">

                Grovally AI

              </h1>

              <p className="text-sm tracking-[0.3em] text-cyan-300">

                FUTURE ASSISTANT

              </p>

            </div>

          </div>

          <div className="hidden rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300 lg:flex">

            ONLINE

          </div>

        </div>

      </div>

      {/* CHAT AREA */}
      <div className="relative z-10 flex-1 overflow-y-auto px-4 py-10">

        <div className="mx-auto flex max-w-5xl flex-col gap-8">

          <AnimatePresence>

            {chat.map((c, i) => (

              <motion.div

                key={i}

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.4,
                }}

                className={`flex ${
                  c.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`group relative max-w-[85%] overflow-hidden rounded-[30px] border px-6 py-5 shadow-2xl backdrop-blur-2xl lg:max-w-[65%]
                  
                  ${
                    c.role === "user"
                      ? "border-cyan-400/30 bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
                      : "border-white/10 bg-white/5"
                  }`}
                >

                  {/* Glow */}
                  <div className={`absolute inset-0 opacity-0 blur-3xl transition duration-500 group-hover:opacity-20 ${
                    c.role === "user"
                      ? "bg-cyan-400"
                      : "bg-purple-400"
                  }`}></div>

                  <div className="relative z-10 flex items-start gap-4">

                    {/* Icon */}
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl text-lg
                      
                      ${
                        c.role === "user"
                          ? "bg-cyan-400 text-slate-950"
                          : "bg-gradient-to-br from-purple-500 to-pink-500"
                      }`}
                    >

                      {c.role === "user" ? (
                        <FaUserAstronaut />
                      ) : (
                        <FaRobot />
                      )}

                    </div>

                    {/* Text */}
                    <div>

                      <h3 className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">

                        {c.role === "user"
                          ? "You"
                          : "Grovally AI"}

                      </h3>

                      <p className="leading-8 text-slate-200">

                        {c.text}

                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </AnimatePresence>

        </div>

      </div>

      {/* INPUT */}
      <div className="relative z-10 border-t border-white/10 bg-white/5 p-5 backdrop-blur-2xl">

        <div className="mx-auto flex max-w-5xl items-center gap-4">

          <div className="relative flex-1">

            <input
              type="text"
              value={msg}
              onChange={(e) =>
                setMsg(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" &&
                sendMessage()
              }
              placeholder="Ask Grovally AI anything..."
              className="w-full rounded-[30px] border border-white/10 bg-[#020617]/70 px-6 py-5 pr-16 text-white outline-none backdrop-blur-xl transition focus:border-cyan-400"
            />

            <div className="absolute right-5 top-1/2 -translate-y-1/2 text-cyan-400">

              ✨

            </div>

          </div>

          {/* Send */}
          <motion.button

            whileHover={{
              scale: 1.05,
            }}

            whileTap={{
              scale: 0.95,
            }}

            onClick={sendMessage}

            className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500 text-2xl text-slate-950 shadow-[0_10px_40px_rgba(0,255,255,0.4)]"
          >

            <FaPaperPlane />

          </motion.button>

        </div>

      </div>

    </div>
  );
}