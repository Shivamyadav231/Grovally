"use client";
import { useEffect, useRef, useState } from "react";

const conditions = [
  {
    title: "Business Registration",
    description:
      "From registering your business the right way to scaling it further — we guide you through registration, planning, and strategy at every step.",
    services: [
      "Startup Consulting",
      "MSME Consulting",
      "Company Formation",
      "Project Report",
      "Market Research",
      "Business Plan",
      "Franchise Consulting",
      "Strategy Consulting",
      "Growth Consulting",
    ],
  },
  {
    title: "Export & Import Consulting",
    description:
      "We simplify international trade — from documentation and licensing to global sourcing, helping your business reach markets worldwide.",
    services: [
      "EC Registration",
      "DGFT License",
      "Custom Clearance",
      "International Shipping",
      "Export Documentation",
      "International Buyers",
      "Supplier Sourcing",
      "Trade Finance",
      "Export Consulting",
      "Global Business Expansion",
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

function ConditionCard({ item, index }) {
  const [ref, inView] = useInView(0.15);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: inView ? `${index * 140}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-700 hover:-translate-y-2 hover:border-red-200 hover:shadow-2xl hover:shadow-red-200/50 ${
        inView ? "translate-y-0 scale-100 opacity-100" : "translate-y-14 scale-[0.97] opacity-0"
      }`}
    >
      {/* ambient gradient glow, drifts slightly on hover */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-red-400 to-orange-400 opacity-0 blur-3xl transition-all duration-700 ease-out group-hover:translate-x-2 group-hover:translate-y-2 group-hover:opacity-20" />

      <div className="relative">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-lg font-bold text-red-600 transition-all duration-500 ease-out group-hover:rotate-6 group-hover:bg-red-600 group-hover:text-white">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2 className="text-2xl font-semibold text-black">{item.title}</h2>
        </div>

        <p className="mb-6 text-sm leading-relaxed text-gray-700">
          {item.description}
        </p>

        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {item.services.map((service, i) => (
            <li
              key={service}
              style={{
                transitionDelay: inView ? `${index * 140 + i * 45 + 200}ms` : "0ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className={`flex items-center gap-2 text-sm text-black transition-all duration-500 ${
                inView ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
            >
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500 transition-transform duration-300 group-hover:scale-150" />
              {service}
            </li>
          ))}
        </ul>

        <button className="group/btn relative mt-6 inline-flex items-center gap-1 overflow-hidden rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-red-700 active:scale-95">
          <span className="relative z-10">Learn more</span>
          <span className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1">
            →
          </span>
          {/* shine sweep on hover */}
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full" />
        </button>
      </div>
    </div>
  );
}

export default function Shivam() {
  const [headerRef, headerInView] = useInView(0.4);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div
          ref={headerRef}
          className={`mb-14 text-center transition-all duration-700 ease-out ${
            headerInView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <span className="mb-3 inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-medium text-red-600">
            Our Services
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Business Consulting Services
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-black">
            End-to-end consulting to help you start, run, and expand your
            business — across both Indian and international markets.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {conditions.map((item, index) => (
            <ConditionCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}