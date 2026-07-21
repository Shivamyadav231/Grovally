import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Send,
  Paperclip,
  Mic,
  MicOff,
} from "lucide-react";

export default function ChatBot() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [recording, setRecording] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 Welcome to Grovally. How can I help you?",
    },
  ]);

  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);

  const BACKEND =
    import.meta.env.VITE_BACKEND_URL ||
    "https://grovally-backend-14.onrender.com";

  // Auto Scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading]);

  // Speech Recognition
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US"; // Hindi: hi-IN
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      sendMessage(text);
    };

    recognition.onstart = () => {
      setRecording(true);
    };

    recognition.onend = () => {
      setRecording(false);
    };

    recognition.onerror = () => {
      setRecording(false);
    };

    recognitionRef.current = recognition;
  }, []);

  // Voice Button
  const handleVoice = () => {
    if (!recognitionRef.current) return;

    if (recording) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  // File Upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedFile(file);
  };

  // Text To Speech
  const speak = (text) => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = "en-US"; // Hindi = hi-IN
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  };

  // Send Message
  const sendMessage = async (voiceText = null) => {
    const userText = voiceText || message.trim();

    if (!userText || loading) return;

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
      const formData = new FormData();

      formData.append("msg", userText);

      if (selectedFile) {
        formData.append("file", selectedFile);
      }

      const res = await fetch(`${BACKEND}/get`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.detail || "Server Error");
      }

      const botReply =
        data.response ||
        data.reply ||
        "No response received.";

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botReply,
        },
      ]);

      // AI Voice Reply
      speak(botReply);

      // Clear Uploaded File
      setSelectedFile(null);
    } catch (error) {
      console.error("Chat Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "❌ Server is waking up. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return ( <div className="h-screen bg-gray-50 flex flex-col pt-20">

  {/* Header */}
  <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-4 mt-8 shadow-xl">
    <h3 className="font-bold text-lg">
      🤖 Grovally AI Assistant
    </h3>

    <p className="text-xs text-green-100">
      🟢 Online Now
    </p>
  </div>

  {/* Messages */}
  <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">

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
          className={`max-w-[80%] rounded-2xl px-4 py-3 shadow break-words ${
            msg.sender === "user"
              ? "bg-red-600 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {msg.text}
          </ReactMarkdown>
        </div>
      </div>
    ))}

    {/* Typing Animation */}
    {loading && (
      <div className="flex justify-start">
        <div className="bg-white rounded-2xl shadow px-4 py-3">
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></span>
            <span
              className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></span>
            <span
              className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></span>
          </div>
        </div>
      </div>
    )}

    <div ref={messagesEndRef} />

  </div>
    {/* Input Area */}
  <div className="border-t bg-white p-4">

    <div className="flex items-center gap-2">

      {/* File Upload */}
      <input
        type="file"
        id="file"
        hidden
        onChange={handleFileChange}
      />

      <label
        htmlFor="file"
        className="cursor-pointer rounded-xl bg-black p-3 transition hover:bg-red-400"
      >
        <Paperclip size={20} />
      </label>

      {/* Message Input */}
      <input
        type="text"
        value={message}
        placeholder="Type your message..."
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
        disabled={loading}
        className="flex-1 rounded-xl border px-4 py-3 text-black outline-none focus:border-red-500 disabled:bg-black"
      />

      {/* Voice Button */}
      <button
        onClick={handleVoice}
        disabled={loading}
        className={`rounded-xl p-3 transition ${
          recording
            ? "bg-red-600 text-white animate-pulse"
            : "bg-black hover:bg-red-200"
        }`}
      >
        {recording ? <MicOff size={20} /> : <Mic size={20} />}
      </button>

      {/* Send Button */}
      <button
        onClick={() => sendMessage()}
        disabled={loading || (!message.trim() && !selectedFile)}
        className="rounded-xl bg-red-600 px-5 py-3 text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Send size={20} />
      </button>

    </div>

    {/* Selected File */}
    {selectedFile && (
      <div className="mt-3 flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-700">
        <Paperclip size={16} />
        <span className="truncate">{selectedFile.name}</span>

        <button
          onClick={() => setSelectedFile(null)}
          className="ml-auto text-red-600 hover:text-red-700"
        >
          ✕
        </button>
      </div>
    )}

  </div>

</div>
  );
}