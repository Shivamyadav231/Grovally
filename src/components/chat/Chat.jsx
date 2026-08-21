import { useState, useRef, useEffect } from "react";

import {
  FaRobot,
  FaPaperPlane,
  FaUserCircle,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

const serviceResponses = [
  {
    title: "Website & E-commerce Development",
    keywords: ["website", "web", "ecommerce", "e-commerce"],
    reply:
      "Grovally delivers powerful website and e-commerce solutions with responsive design, fast performance, SEO-ready structure, secure checkout, and conversion-focused features.",
  },
  {
    title: "AI & Automation",
    keywords: ["ai", "automation", "chatbot"],
    reply:
      "We build intelligent systems, automation workflows, chatbots, and analytics solutions.",
  },
  {
    title: "Digital Marketing & SEO",
    keywords: ["marketing", "seo", "social media"],
    reply:
      "Our digital marketing services include SEO, PPC ads, social campaigns, and brand strategy.",
  },
  {
    title: "Tender & GeM Support",
    keywords: ["tender", "gem", "e-tender"],
    reply:
      "Grovally supports tender consulting, GeM registration, bid preparation, and submission.",
  },
  {
    title: "Finance & Loan Assistance",
    keywords: ["finance", "loan", "funding"],
    reply:
      "We provide finance advisory, loan documentation, and MSME funding guidance.",
  },
  {
    title: "BPO & KPO Services",
    keywords: ["bpo", "kpo", "outsourcing"],
    reply:
      "Our BPO/KPO teams deliver customer support and business process outsourcing.",
  },
];

const getRuleResponse = (message) => {
  const text = message.toLowerCase();

  const rule = serviceResponses.find((item) =>
    item.keywords.some((keyword) => text.includes(keyword))
  );

  if (rule) return rule.reply;

  return "I can help you with Website Development, AI, Digital Marketing, Finance, Tender, and BPO services.";
};

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // lock background scroll on mobile while the chat sheet is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const appendMessage = (text, role) => {
    setMessages((prev) => [...prev, { text, role }]);
  };

  const respondToMessage = async (message) => {
    const reply = getRuleResponse(message);

    await new Promise((resolve) => setTimeout(resolve, 500));

    appendMessage(reply, "bot");
    setLoading(false);
  };

  const sendMessage = async () => {
    if (!msg.trim() || loading) return;

    const currentMsg = msg.trim();

    appendMessage(currentMsg, "user");
    setMsg("");
    setLoading(true);

    await respondToMessage(currentMsg);
  };

  const handleServiceClick = async (title) => {
    if (loading) return;

    appendMessage(title, "user");
    setLoading(true);

    await respondToMessage(title);
  };

  return (
    <>
      {/* Floating Buttons */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="
            fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 sm:right-5 z-50
            flex items-center gap-2 sm:gap-3
            bg-red-600 hover:bg-red-700
            text-white
            h-14 w-14 sm:w-auto sm:h-auto
            sm:px-5 sm:py-3
            rounded-full
            shadow-2xl
            transition-all duration-300
            hover:scale-110 active:scale-95
            justify-center
          "
          aria-label="Open Help Desk"
        >
          <FaRobot className="text-2xl sm:text-3xl" />
          <span className="font-semibold hidden sm:block">Help Desk</span>
        </button>
      )}

      {!open && (
        <a
          href="https://wa.me/918920817608"
          target="_blank"
          rel="noopener noreferrer"
          className="
            fixed bottom-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.5rem))] right-4 sm:right-5 z-50
            flex items-center gap-2 sm:gap-3
            bg-green-500 hover:bg-green-600
            text-white
            h-12 w-12 sm:h-auto sm:w-auto
            sm:px-4 sm:py-3
            rounded-full
            shadow-2xl
            transition-all duration-300
            hover:scale-110 active:scale-95
            justify-center
          "
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-xl sm:text-2xl" />
          <span className="font-semibold hidden sm:block">Chat with us</span>
        </a>
      )}

      {/* Chat Popup */}
      {open && (
        <div
          className="
            fixed inset-0 sm:inset-auto
            sm:bottom-24 sm:right-4
            z-50
            w-full sm:w-[420px]
            h-full sm:h-[80vh] sm:max-h-[640px]
            bg-white
            rounded-none sm:rounded-3xl
            shadow-2xl
            overflow-hidden
            flex flex-col
          "
        >
          {/* Header */}
          <div
            className="bg-red-600 text-white px-4 sm:px-5 py-4 flex justify-between items-center flex-shrink-0"
            style={{ paddingTop: "max(1rem, env(safe-area-inset-top))" }}
          >
            <div className="flex items-center gap-3">
              <FaRobot className="text-2xl" />
              <div>
                <h2 className="font-bold">Grovally Help</h2>
                <p className="text-xs">● Online</p>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 transition-colors active:scale-95"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center mt-6 sm:mt-10">
                <FaRobot className="text-5xl sm:text-6xl text-red-600 mx-auto" />

                <h2 className="font-bold text-red-600 text-lg sm:text-xl mt-4">
                  Grovally Help Desk
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  Ask anything about our services.
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {serviceResponses.map((service) => (
                <button
                  key={service.title}
                  onClick={() => handleServiceClick(service.title)}
                  className="text-xs border px-3 py-2 text-black rounded-full bg-white hover:bg-red-50 hover:border-red-600 active:scale-95 transition"
                >
                  {service.title}
                </button>
              ))}
            </div>

            {messages.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  item.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-2 max-w-[85%] sm:max-w-[80%] ${
                    item.role === "user" ? "flex-row-reverse" : "text-black"
                  }`}
                >
                  <div className="text-2xl flex-shrink-0">
                    {item.role === "user" ? (
                      <FaUserCircle />
                    ) : (
                      <FaRobot className="text-red-600" />
                    )}
                  </div>

                  <div
                    className={`px-4 py-3 rounded-3xl text-sm break-words ${
                      item.role === "user"
                        ? "bg-red-600 text-white"
                        : "bg-white border"
                    }`}
                  >
                    {item.text}
                  </div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-2">
                <FaRobot className="text-red-600 text-2xl flex-shrink-0" />

                <div className="bg-white border rounded-3xl px-4 py-3">
                  Thinking...
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div
            className="border-t p-3 flex gap-2 flex-shrink-0"
            style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
          >
            <input
              type="text"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Message Grovally AI..."
              className="flex-1 min-w-0 border rounded-full px-4 py-3 text-black text-sm outline-none focus:border-red-600"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="w-12 h-12 flex-shrink-0 rounded-full bg-red-600 text-white flex items-center justify-center disabled:opacity-50 active:scale-95 transition"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
