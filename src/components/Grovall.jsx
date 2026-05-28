import { useState } from "react";

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!msg.trim()) return;

    // user message add
    const userMessage = { role: "user", text: msg };

    setChat((prev) => [...prev, userMessage]);

    const currentMsg = msg;
    setMsg("");
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ msg: currentMsg }),
      });

      const data = await res.json();

      // bot response add
      setChat((prev) => [
        ...prev,
        { role: "bot", text: data.reply },
      ]);
    } catch (error) {
      setChat((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Server error 😢",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="h-screen w-full bg-slate-950 text-white flex flex-col">
      
      {/* Header */}
      <div className="border-b border-slate-800 p-4 text-xl font-bold">
        Grovally AI
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-28">
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

        {loading && (
          <div className="bg-slate-800 px-4 py-3 rounded-2xl w-fit">
            Typing...
          </div>
        )}
      </div>

      {/* Input Box */}
      <div className="border-t border-slate-800 bg-slate-900 p-4 flex gap-3">
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask Grovally AI..."
          className="flex-1 rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-cyan-500"
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