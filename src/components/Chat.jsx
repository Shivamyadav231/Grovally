import { useState } from "react";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if (!msg) return;

    setChat((prev) => [
      ...prev,
      { role: "user", text: msg },
      { role: "bot", text: "Hello 👋 I am Grovally AI" },
    ]);

    setMsg("");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
     

      {/* Chat Area */}
      <div className=" overflow-y-auto p-4 space-y-4">
        {chat.map((c, i) => (
          <div
            key={i}
            className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm shadow ${
              c.role === "user"
                ? "ml-auto bg-cyan-600"
                : "bg-slate-800"
            }`}
          >
            {c.text}
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="border-t border-slate-800 bg-slate-900 p-4 flex gap-3">
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask Grovally AI..."
          className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-500"
        />

        <button
          onClick={sendMessage}
          className="rounded-xl bg-cyan-600 px-6 py-3 font-semibold transition hover:bg-cyan-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}