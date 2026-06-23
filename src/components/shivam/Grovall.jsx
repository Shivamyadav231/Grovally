import { useState, useRef, useEffect } from "react";


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


  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
       block: "end",
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

      const res = await fetch(`${BACKEND}/get`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          msg: userText,
        }),
      });


      const data = await res.json();


      if (!res.ok) {
        throw new Error(
          data.detail || "Server Error"
        );
      }


      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            data.response ||
            data.reply ||
            "No response received.",
        },
      ]);


    } catch (error) {

      console.error(
        "Chat Error:",
        error
      );


      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            "❌ Server is waking up. Please try again.",
        },
      ]);


    } finally {

      setLoading(false);

    }
  };
  return (
  <div className="h-screen max-w-8xl bg-gray-50 flex flex-col pt-20">
    {/* Header */}
    <div className="bg-red-600  text-white p-3 text-center mt-8 shadow-2xl rounded-sm">
      <h3 className="font-bold text-lg">
        Grovally AI Assistant
      </h3>

      <p className="text-xs text-green-100">
        ● Online Now
      </p>
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
            className={`max-w-[80%] px-4 py-3 rounded-2xl break-words ${
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
        <div className="flex justify-start">
          <div className="bg-white shadow px-4 py-2 rounded-2xl">
            Typing...
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>

    {/* Input */}
    <div className="border-t bg-white p-4 flex gap-2">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) =>
          e.key === "Enter" && sendMessage()
        }
        className="
          flex-1
          border
          rounded-xl
          text-black
          px-4
          py-3
          outline-none
          focus:border-red-500
        "
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        className="
          bg-red-600
          text-white
          px-6
          rounded-xl
          hover:bg-red-700
          disabled:opacity-50
          transition
        "
      >
        {loading ? "..." : "Send"}
      </button>
    </div>
  </div>
);



  
}