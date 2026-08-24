"use client";
import { useEffect, useRef, useState } from "react";

const sections = [
  {
    title: "Information we collect",
    points: [
      "Contact details you provide — name, email, phone number, and company name — when you reach out or sign up for services.",
      "Business information needed to deliver consulting — registration documents, financial summaries, trade or shipment details.",
      "Basic usage data from our website, such as pages visited and browser type, collected automatically for analytics.",
      "We do not knowingly collect information from anyone under the age of 18.",
    ],
  },
  {
    title: "How we use your information",
    points: [
      "To deliver the consulting, registration, or trade services you've engaged us for.",
      "To communicate with you about your engagement — updates, documents, and scheduling.",
      "To improve our website and services based on aggregated, non-identifying usage patterns.",
      "To meet legal, regulatory, or tax obligations that apply to our business.",
    ],
  },
  {
    title: "How we share your information",
    points: [
      "With government bodies or authorities where required for filings, licensing, or customs clearance.",
      "With trusted partners (e.g. shipping or legal partners) only as needed to complete a specific engagement, and only with your knowledge.",
      "We never sell your personal or business information to third parties for marketing.",
      "We may disclose information if required by law, court order, or to protect our legal rights.",
    ],
  },
  {
    title: "Data retention",
    points: [
      "We retain your information only as long as needed to deliver services or as required by law.",
      "Financial and compliance records may be retained longer to meet statutory recordkeeping requirements.",
      "You can request deletion of your data at any time, subject to those legal retention obligations.",
    ],
  },
  {
    title: "Data security",
    points: [
      "We use reasonable technical and organizational measures to protect your information from unauthorized access.",
      "Access to your business and financial data is limited to team members directly involved in your engagement.",
      "No method of transmission or storage is 100% secure, and we can't guarantee absolute security.",
    ],
  },
  {
    title: "Your rights",
    points: [
      "You can request access to, correction of, or deletion of your personal information.",
      "You can opt out of non-essential communications at any time.",
      "To exercise any of these rights, contact us directly using the details on our contact page.",
    ],
  },
  {
    title: "Cookies",
    points: [
      "Our website may use cookies or similar technology to remember preferences and understand site usage.",
      "You can disable cookies in your browser settings; some site features may not work as intended without them.",
    ],
  },
  {
    title: "Changes to this policy",
    points: [
      "We may update this policy from time to time to reflect changes in our practices or legal requirements.",
      "The 'last updated' date at the bottom of this page reflects the most recent revision.",
    ],
  },
];

function useInView(threshold = 0.15) {
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

function PolicySection({ section, index }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      id={`section-${index}`}
      style={{
        transitionDelay: inView ? `${Math.min(index, 4) * 80}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-700 sm:p-8 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-50 text-sm font-bold text-red-600">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="text-xl font-semibold text-black">{section.title}</h2>
      </div>
      <ul className="space-y-2 pl-11">
        {section.points.map((point, i) => (
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
  );
}

export default function PrivacyPolicy() {
  const [headerRef, headerInView] = useInView(0.4);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div
          ref={headerRef}
          className={`mb-12 text-center transition-all duration-700 ease-out ${
            headerInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="mb-3 inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-600">
            Legal
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-black">
            How we collect, use, and protect your information when you work
            with us.
          </p>
        </div>

        {/* quick jump nav */}
        <nav className="mb-10 flex flex-wrap justify-center gap-2">
          {sections.map((s, i) => (
            <a
              key={s.title}
              href={`#section-${i}`}
              className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            >
              {s.title}
            </a>
          ))}
        </nav>

        <div className="space-y-5">
          {sections.map((section, index) => (
            <PolicySection key={section.title} section={section} index={index} />
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-gray-500">
          Last updated August 2026. This policy is a general summary and
          doesn't cover every detail of a specific engagement — where
          applicable, terms in your signed service agreement take
          precedence.
        </p>
      </div>
    </section>
  );
}
