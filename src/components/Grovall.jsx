import { useState, useRef, useEffect } from "react";
import {
  FaRobot,
  FaPaperPlane,
  FaUserCircle,
} from "react-icons/fa";
import logo from "../assets/logo.png"

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [chat, loading]);

  const sendMessage = async () => {
    if (!msg.trim()) return;

    const currentMsg = msg;

    setChat((prev) => [
      ...prev,
      {
        role: "user",
        text: currentMsg,
      },
    ]);

    setMsg("");
    setLoading(true);

    try {
      const res = await fetch(
        "http://127.0.0.1:8000/get",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            msg: currentMsg,
          }),
        }
      );

      const data = await res.json();

      setChat((prev) => [
        ...prev,
        {
          role: "bot",
          text: data.reply,
        },
      ]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        {
          role: "bot",
          text:
            "⚠️ Server error. Please try again.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="mt-20 h-[calc(100vh-80px)] flex flex-col bg-[#f7f7f8]">

      {/* Header */}
      <div className="bg-white border-b px-6 py-4 flex items-center gap-3 shadow-sm">
        <div className="w-11 h-11 rounded-full bg-red-600 flex items-center justify-center text-white">
          <FaRobot />
        </div>

        <div>
          <h1 className="font-bold text-lg">
            Grovally AI
          </h1>

          <p className="text-sm text-green-600">
            ● Online
          </p>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 md:px-10 py-8">

        <div className="max-w-5xl mx-auto space-y-6">

          {chat.length === 0 && (
            <div className="text-center mt-24">

              <div className="w-24 h-24 mx-auto rounded-full bg-red-600 flex items-center justify-center text-white text-4xl">
                <FaRobot />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-gray-800">
                Grovally AI Assistant
              </h2>

              <p className="text-gray-500 mt-3">
                Ask anything about IT Services,
                AI, BPO, KPO, Finance &
                Business Solutions.
              </p>
            </div>
          )}

          {chat.map((c, i) => (
            <div
              key={i}
              className={`flex ${
                c.role === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`flex gap-3 max-w-3xl ${
                  c.role === "user"
                    ? "flex-row-reverse"
                    : ""
                }`}
              >
                <div className="mt-1 text-2xl">
                  {c.role === "user" ? (
                    <FaUserCircle />
                  ) : (
                    <FaRobot className="text-red-600" />
                  )}
                </div>

                <div
                  className={`rounded-3xl px-5 py-4 shadow-sm ${
                    c.role === "user"
                      ? "bg-red-600 text-white"
                      : "bg-white text-gray-800 border"
                  }`}
                >
                  {c.text}
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex gap-3">
              <FaRobot className="text-red-600 text-2xl mt-1" />

              <div className="bg-white border rounded-3xl px-5 py-4">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}

          <div ref={chatEndRef}></div>
        </div>
      </div>

      {/* Bottom Input */}
      <div className="bg-white border-t p-4">

        <div className="max-w-5xl mx-auto flex gap-3">

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
            placeholder="Message Grovally AI..."
            className="flex-1 rounded-full border border-gray-300 px-6 py-4 outline-none focus:border-red-600"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition"
          >
            <FaPaperPlane />
          </button>

        </div>
      </div>

    </div>
  );
}