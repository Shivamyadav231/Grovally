import { useState, useRef, useEffect } from "react";
import chat from "../../assets/chat.avif";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 Welcome to Grovally. How can I help you?",
    },
  ]);

  const messagesEndRef = useRef(null);

  const BACKEND =
    import.meta.env.VITE_BACKEND_URL ||
    "https://grovally-backend-14.onrender.com";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!message.trim() || loading) return;

    const userText = message.trim();
    setMessage("");

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userText,
      },
    ]);

    setLoading(true);

    try {
      const res = await fetch(`${BACKEND}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userText,
        }),
      });

      if (!res.ok) {
        throw new Error("Server Error");
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply || "No response received.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "❌ Server is waking up. Please try again in a few seconds.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50"
      >
        <img
          src={chat}
          alt="Chat"
          className="w-20 h-20 object-contain animate-bounce hover:scale-110 transition-all duration-300"
        />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[350px] h-[550px] bg-white rounded-3xl shadow-2xl overflow-hidden border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-red-600 text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold">Grovally AI Assistant</h3>
              <p className="text-xs text-red-100">Online Now</p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-2xl"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-red-600 text-white"
                      : "bg-white text-gray-800 shadow"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="bg-white shadow px-4 py-2 rounded-2xl w-fit">
                Typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-white flex gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              className="flex-1 border rounded-xl px-4 py-3 outline-none focus:border-red-500"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-red-600 text-white px-5 rounded-xl hover:bg-red-700 disabled:opacity-50"
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}