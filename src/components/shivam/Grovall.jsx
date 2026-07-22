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
  const [voiceMode, setVoiceMode] = useState(false);

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

 
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading]);

  useEffect(() => {
  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition is not supported.");
    return;
  }

  const recognition = new SpeechRecognition();

  
  recognition.lang= "hi-IN"
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.onresult = (event) => {
  // Sunte hi mic stop
  recognition.stop();

  const text = event.results[0][0].transcript;

  sendMessage(text);
};
  recognition.onstart = () => setRecording(true);

  recognition.onend = () => setRecording(false);

  recognition.onerror = () => setRecording(false);

  recognitionRef.current = recognition;
}, []);
  // Voice Button
 const handleVoice = () => {
  if (!recognitionRef.current) return;

  if (voiceMode) {
    setVoiceMode(false);
    recognitionRef.current.stop();
    window.speechSynthesis.cancel();
    setRecording(false);
  } else {
    setVoiceMode(true);

    try {
      recognitionRef.current.start();
    } catch (e) {}
  }
};


  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedFile(file);
  };
  const speak = (text) => {
  if (!voiceMode) return;

  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  const voices = speechSynthesis.getVoices();

  // Hindi voice ढूंढो
  let voice = voices.find(v => v.lang.startsWith("hi"));

  // अगर Hindi voice नहीं मिली तो Indian English voice
  if (!voice) {
    voice = voices.find(v => v.lang === "en-IN");
  }

  if (voice) {
    utterance.voice = voice;
  }

  utterance.lang = voice ? voice.lang : "hi-IN";
  utterance.rate = 1;
  utterance.pitch = 1;

  speechSynthesis.speak(utterance);
};

// Voice list लोड होने दो
speechSynthesis.onvoiceschanged = () => {
  console.log(speechSynthesis.getVoices());
};
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
     const res = await fetch(`${BACKEND}/get`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    msg: userText,
  }),
});
const command = userText.toLowerCase().trim();


if (command.startsWith("open youtube")) {
  const search = command.replace("open youtube", "").trim();

  if (search) {
    window.open(
      `https://www.youtube.com/results?search_query=${encodeURIComponent(search)}`,
      "_blank"
    );
    speak(`Opening YouTube and searching ${search}`);
  } else {
    window.open("https://www.youtube.com", "_blank");
    speak("Opening YouTube");
  }
  return;
}

// Google
if (command.startsWith("search")) {
  const search = command.replace("search", "").trim();

  window.open(
    `https://www.google.com/search?q=${encodeURIComponent(search)}`,
    "_blank"
  );

  speak(`Searching ${search} on Google`);
  return;
}

// Facebook
if (command === "open facebook") {
  window.open("https://www.facebook.com", "_blank");
  speak("Opening Facebook");
  return;
}

// Instagram
if (command === "open instagram") {
  window.open("https://www.instagram.com", "_blank");
  speak("Opening Instagram");
  return;
}

// WhatsApp
if (command === "open whatsapp") {
  window.open("https://web.whatsapp.com", "_blank");
  speak("Opening WhatsApp");
  
  return;
}

// Gmail
if (command === "open gmail") {
  window.open("https://mail.google.com", "_blank");
  speak("Opening Gmail");
  return;
}

// Google Maps
if (command.startsWith("open maps")) {
  const place = command.replace("open maps", "").trim();

  if (place) {
    window.open(
      `https://www.google.com/maps/search/${encodeURIComponent(place)}`,
      "_blank"
    );
    speak(`Opening maps for ${place}`);
  } else {
    window.open("https://maps.google.com", "_blank");
    speak("Opening Google Maps");
  }

  return;
}

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

      
    if (voiceMode) {
  try {
    recognitionRef.current?.stop();
  } catch (e) {}

  speak(botReply);
}
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

  return (<div className="h-dvh flex flex-col bg-[#f5f5f5] pt-16 sm:pt-20">

 
  <div className="bg-gradient-to-r from-red-600 to-red-500 text-white p-4 mt-8 shadow-xl">
    <h3 className="font-bold text-lg">
       Grovally AI Assistant
    </h3>

   
  </div>

 
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
  <div className="sticky bottom-0 border-t border-gray-200 bg-white/95 backdrop-blur-md px-3 py-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">

  {/* Selected File */}
  {selectedFile && (
    <div className="mb-3 flex items-center gap-2 rounded-xl bg-red-50 border border-red-100 px-3 py-2 text-sm text-gray-700">
      <Paperclip size={16} className="text-red-600 flex-shrink-0" />

      <span className="flex-1 truncate">
        {selectedFile.name}
      </span>

      <button
        onClick={() => setSelectedFile(null)}
        className="text-red-600 hover:text-red-700 font-bold"
      >
        ✕
      </button>
    </div>
  )}

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
      className="flex h-11 w-11 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-900 text-white transition hover:bg-red-500"
    >
      <Paperclip size={18} />
    </label>

    {/* Input */}
    <input
      type="text"
      value={message}
      placeholder="Ask Grovally AI..."
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") sendMessage();
      }}
      disabled={loading}
      className="flex-1 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-red-500"
    />

    {/* Mic */}
    <button
      onClick={handleVoice}
      disabled={loading}
      className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full transition ${
        recording
          ? "bg-red-600 text-white animate-pulse"
          : "bg-gray-900 text-white hover:bg-red-500"
      }`}
    >
      {recording ? (
         <Mic size={18} />
        
      ) : (
        <MicOff size={18} />
      )}
    </button>

    {/* Send */}
    <button
      onClick={() => sendMessage()}
      disabled={loading || (!message.trim() && !selectedFile)}
      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Send size={18} />
    </button>

  </div>

</div>

</div>
  );
}