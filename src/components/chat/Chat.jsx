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
    {/* Floating Button */}
<button
  onClick={() => setOpen(!open)}
  className="
    fixed bottom-8 right-5 z-50
    flex items-center gap-3
    bg-red-600 hover:bg-red-700
    text-white
    px-5 py-3
    rounded-full
    shadow-lg
    transition-all duration-300
    hover:scale-105
  "
>
  
  <span w-24 h-10  scale-150 object-cover> Help Desk</span>
   <FaRobot/>

  
</button>
<button className="fixed bottom-24 right-5 z-50
    flex items-center gap-3
    bg-green-600
    
    px-5 py-3
    rounded-full
    shadow-lg
    transition-all duration-300
    hover:scale-105">
   <a
        href="https://wa.me/918920817608"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-24 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:text-green-400"
      >
        <FaWhatsapp />
      </a>
</button>
      

      {/* Chat Popup */}
      {open && (
        <div className="fixed bottom-28 right-4 z-50 w-[95%] sm:w-[420px] h-[80vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">

          {/* Header */}
          <div className="bg-red-600 text-white px-5 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              
              <div>
                <h2 className="font-bold">
                  Grovally Help
                </h2>
                <p className="text-xs">
                  ● Online
                </p>
              </div>
            </div>
            

           
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-gray-50">
            {messages.length === 0 && (
              <div className="text-center mt-10">
                <FaRobot className="text-6xl text-red-600 mx-auto" />

                <h2 className="font-bold text-red-600 text-xl mt-4">
                  Grovally Help Desk
                </h2>

                <p className="text-gray-500 mt-2">
                  Ask anything about our services.
                </p>
              </div>
            )}

            <div className="flex flex-wrap te gap-2">
              {serviceResponses.map((service) => (
                <button
                  key={service.title}
                  onClick={() =>
                    handleServiceClick(service.title)
                  }
                  className="text-xs border px-3 py-2  text-black rounded-full bg-white hover:bg-red-50 hover:border-red-600"
                >
                  {service.title}
                </button>
              ))}
            </div>

            {messages.map((item, index) => (
              <div
                key={index}
                className={`flex ${
                  item.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`flex gap-2 ${
                    item.role === "user"
                      ? "flex-row-reverse"
                      : " text-black"
                  }`}
                >
                  <div className="text-2xl">
                    {item.role === "user" ? (
                      <FaUserCircle />
                    ) : (
                      <FaRobot className="text-red-600" />
                    )}
                  </div>

                  <div
                    className={`px-4 py-3 rounded-3xl max-w-[250px] text-sm ${
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
                <FaRobot className="text-red-600 text-2xl" />

                <div className="bg-white border rounded-3xl px-4 py-3">
                  Thinking...
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-3 flex gap-2">
            <input
              type="text"
              value={msg}
              onChange={(e) =>
                setMsg(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              placeholder="Message Grovally AI..."
              className="flex-1 border rounded-full px-4 py-3 text-black outline-none focus:border-red-600"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
}