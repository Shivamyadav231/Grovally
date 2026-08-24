"use client";
import { useEffect, useRef, useState } from "react";

const policies = [
  {
    title: "Terms of Service",
    summary:
      "The rules that govern how you use our consulting services, from engagement to delivery.",
    points: [
      "Services are engaged on a project or retainer basis as agreed in writing.",
      "Advice provided is based on information you share with us — accuracy of that information is your responsibility.",
      "We reserve the right to decline or discontinue an engagement that violates applicable law.",
      "Fees, timelines, and deliverables are set out in your service agreement, not on this page.",
    ],
  },
  {
    title: "Privacy Policy",
    summary:
      "How we collect, use, and protect the information you share with us during consulting.",
    points: [
      "We collect only the information needed to deliver the services you request.",
      "Your business and financial details are never sold or shared with third parties for marketing.",
      "Data is retained only as long as needed for the engagement or as required by law.",
      "You can request a copy or deletion of your data at any time by contacting us.",
    ],
  },
  {
    title: "Refund & Cancellation Policy",
    summary:
      "What happens if you need to cancel a consulting engagement or request a refund.",
    points: [
      "Cancellations made before work has started are eligible for a full refund.",
      "Partial refunds may apply if work is cancelled mid-engagement, based on work completed.",
      "Statutory filing fees, government charges, and third-party costs are non-refundable.",
      "Refund requests are processed within 7–10 business days of approval.",
    ],
  },
  {
    title: "Export & Compliance Disclaimer",
    summary:
      "Our role in export, import, and trade documentation, and where responsibility sits.",
    points: [
      "We assist with documentation and process — final compliance responsibility rests with your business.",
      "Regulations vary by country and change over time; we advise based on current information at the time of engagement.",
      "We are not liable for delays or penalties caused by third parties, carriers, or customs authorities.",
      "Licensing and DGFT approvals are subject to government processing timelines outside our control.",
    ],
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

function PolicyItem({ item, index, isOpen, onToggle }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: inView ? `${index * 90}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${isOpen ? "shadow-md" : "shadow-sm"}`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <div className="flex items-center gap-3">
          <span
            className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors duration-300 ${
              isOpen ? "bg-red-600 text-white" : "bg-red-50 text-red-600"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-lg font-semibold text-black">{item.title}</h3>
            {!isOpen && (
              <p className="mt-0.5 text-sm text-gray-600">{item.summary}</p>
            )}
          </div>
        </div>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-transform duration-400 ease-out ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-2 px-6 pb-6 pl-[3.75rem]">
            {item.points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm leading-relaxed text-gray-700"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function TermsAndPolicy() {
  const [headerRef, headerInView] = useInView(0.4);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <div
          ref={headerRef}
          className={`mb-14 text-center transition-all duration-700 ease-out ${
            headerInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="mb-3 inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-600">
            Legal
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Terms &amp; Policy
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-black">
            The terms, privacy, and compliance details that govern how we
            work together.
          </p>
        </div>

        <div className="space-y-4">
          {policies.map((item, index) => (
            <PolicyItem
              key={item.title}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((prev) => (prev === index ? -1 : index))
              }
            />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-gray-500">
          Last updated August 2026. For questions about these terms, contact
          us directly — this page is a summary, not a substitute for your
          signed service agreement.
        </p>
      </div>
    </section>
  );
}
