import { useState, useRef, useEffect } from "react";
import {
  FaRobot,
  FaPaperPlane,
  FaUserCircle,
} from "react-icons/fa";

const serviceResponses = [
  {
    title: "Website & E-commerce Development",
    keywords: ["website", "web", "ecommerce", "e-commerce", "online store"],
    reply:
      "Grovally delivers powerful website and e-commerce solutions with responsive design, fast performance, SEO-ready structure, secure checkout, and conversion-focused features.",
  },
  {
    title: "AI & Automation",
    keywords: ["ai", "automation", "machine learning", "chatbot", "intelligence"],
    reply:
      "We build intelligent systems, automation workflows, chatbots, and analytics solutions that reduce manual work, boost response speed, and improve customer experience.",
  },
  {
    title: "Digital Marketing & SEO",
    keywords: ["digital marketing", "marketing", "seo", "social media", "branding"],
    reply:
      "Our digital marketing services include SEO, PPC ads, social campaigns, brand strategy, and performance tracking to drive traffic, leads, and measurable growth.",
  },
  {
    title: "Tender & GeM Support",
    keywords: ["tender", "gem", "e-tender", "tender assistance", "government tender"],
    reply:
      "Grovally supports tender consulting, GeM registration, bid preparation, and submission so your business can win government and private contracts.",
  },
  {
    title: "Finance & Loan Assistance",
    keywords: ["finance", "loan", "funding", "msme", "working capital", "lap"],
    reply:
      "We provide finance advisory, loan documentation, MSME funding guidance, working capital planning, and tailored finance support for growth.",
  },
  {
    title: "BPO & KPO Services",
    keywords: ["bpo", "kpo", "process outsourcing", "outsourcing", "call center"],
    reply:
      "Our BPO/KPO teams deliver back-office operations, customer service, data processing and business process outsourcing for higher efficiency.",
  },
  {
    title: "Business Registration & Legal",
    keywords: ["business registration", "trademark", "company registration", "legal", "gst"],
    reply:
      "Grovally helps with company registration, GST filing, trademark registration, compliance, and legal documentation for startups and companies.",
  },
  {
    title: "Consulting & Strategy",
    keywords: ["consulting", "business consulting", "strategy", "startup", "advisory"],
    reply:
      "We offer business consulting, growth strategy, technology roadmaps, market planning, and advisory support to help your business scale effectively.",
  },
];

const getAllServicesReply = () => {
  return (
    "Grovally provides these services:\n\n" +
    serviceResponses
      .map((service, i) => `${i + 1}. ${service.title} - ${service.reply}`)
      .join("\n\n") +
    "\n\nClick one of the service buttons below or type a service name to learn more."
  );
};

const getRuleResponse = (message) => {
  const text = message.toLowerCase();

  if (/all services|list services|show services|services list|what services|sab services|sari services|puri services/i.test(text)) {
    return getAllServicesReply();
  }

  const rule = serviceResponses.find((item) =>
    item.keywords.some((keyword) => text.includes(keyword)) ||
    item.title.toLowerCase() === text ||
    item.title.toLowerCase().includes(text)
  );

  if (rule) return rule.reply;

  if (text.includes("service") || text.includes("services")) {
    return (
      "Grovally offers enterprise web, AI, marketing, tender, finance, BPO/KPO, registration, and consulting services. Please ask about one service or click a button below."
    );
  }

  return (
    "I can explain Grovally services in detail. Ask about a service like Website, AI, Digital Marketing, Tender, Finance, BPO, Registration, or Consulting."
  );
};

export default function Chat() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [chat, loading]);

  const appendMessage = (text, role) => {
    setChat((prev) => [
      ...prev,
      {
        role,
        text,
      },
    ]);
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

  const handleServiceClick = async (serviceTitle) => {
    if (loading) return;
    appendMessage(serviceTitle, "user");
    setLoading(true);
    await respondToMessage(serviceTitle);
  };

  return (
    <div className="mt-16 min-h-screen flex flex-col bg-[#f7f7f8]">

      {/* Header */}
      <div className="sticky top-0 z-20 bg-white border-b px-4 py-4 shadow-sm sm:px-6">
        <div className="flex items-center gap-3 max-w-6xl mx-auto">
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
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-6 pb-28">

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

          <div className="flex flex-wrap gap-2">
            {serviceResponses.map((service) => (
              <button
                key={service.title}
                type="button"
                onClick={() => handleServiceClick(service.title)}
                className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition hover:border-red-600 hover:bg-red-50"
              >
                {service.title}
              </button>
            ))}
          </div>

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
                className={`flex gap-3 max-w-full sm:max-w-3xl ${
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
                  } max-w-[85%] break-words text-sm sm:text-base`}
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
      <div className="sticky bottom-0 z-20 bg-white border-t p-4 shadow-sm">
        <div className="max-w-4xl mx-auto flex flex-col gap-3 md:flex-row">
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
            className="flex-1 rounded-full border text-black border-gray-300 px-5 py-4 outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="inline-flex h-14 w-full items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-300 md:w-14"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>

    </div>
  );
}