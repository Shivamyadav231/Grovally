import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What services does Grovally provide?",
    answer:
      "Grovally provides IT Solutions, Website Development, Mobile App Development, AI Automation, Digital Marketing, BPO Services, KPO Services, Business Consulting, Funding Assistance, and Import-Export Solutions.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes. We work with startups, SMEs, and large enterprises, helping them scale through technology, automation, and business growth strategies.",
  },
  {
    question: "Can Grovally develop custom software solutions?",
    answer:
      "Absolutely. We build custom web applications, enterprise software, CRM systems, ERP solutions, and AI-powered platforms tailored to business needs.",
  },
  {
    question: "Do you provide digital marketing services?",
    answer:
      "Yes. We offer SEO, Social Media Marketing, Performance Marketing, Branding, Content Marketing, and Lead Generation services.",
  },
  {
    question: "How can I contact Grovally?",
    answer:
      "You can contact us through our website, email, WhatsApp, or directly call our team for a consultation.",
  },
  {
    question: "Do you provide funding and business consulting?",
    answer:
      "Yes. We assist businesses with funding solutions, project financing, business strategy, market expansion, and operational consulting.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-red-600 mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-black mb-10">
          Find answers to common questions about Grovally services.
        </p>

        <div className="space-y-4">
          {visibleFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-red-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-red-50"
              >
                <span className="font-semibold text-black">{faq.question}</span>

                {open === index ? (
                  <FaMinus className="text-red-600" />
                ) : (
                  <FaPlus className="text-red-600" />
                )}
              </button>

              {open === index && (
                <div className="px-5 pb-5 text-black">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
            >
              Learn More →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}