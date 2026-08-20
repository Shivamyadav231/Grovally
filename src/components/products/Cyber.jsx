import { motion } from "framer-motion";
import {
  Bug,
  ShieldCheck,
  Network,
  MonitorSmartphone,
  Cloud,
  Radar as RadarIcon,
  Flame,
  ClipboardCheck,
  FileCheck2,
  GraduationCap,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Penetration Testing",
    desc: "Simulated attacks that expose exploitable weaknesses before real adversaries find them.",
    icon: Bug,
  },
  {
    title: "VAPT",
    desc: "Combined vulnerability scans and manual testing, mapped to a prioritized fix list.",
    icon: ShieldCheck,
  },
  {
    title: "Network Security",
    desc: "Segmentation, monitoring, and hardening across your internal and perimeter network.",
    icon: Network,
  },
  {
    title: "Endpoint Security",
    desc: "Detection and response on every laptop, server, and device your team uses.",
    icon: MonitorSmartphone,
  },
  {
    title: "Cloud Security",
    desc: "Configuration reviews and continuous monitoring across AWS, Azure, and GCP.",
    icon: Cloud,
  },
  {
    title: "SOC Services",
    desc: "24/7 threat detection and incident response from a dedicated security team.",
    icon: RadarIcon,
  },
  {
    title: "Firewall Management",
    desc: "Rule audits, tuning, and change control so your perimeter stays airtight.",
    icon: Flame,
  },
  {
    title: "Security Audit",
    desc: "A full review of controls, policies, and gaps against your risk profile.",
    icon: ClipboardCheck,
  },
  {
    title: "ISO 27001 Consulting",
    desc: "Certification-ready documentation and controls, built with your team.",
    icon: FileCheck2,
  },
  {
    title: "Cyber Security Training",
    desc: "Phishing simulations and workshops that turn staff into a first line of defense.",
    icon: GraduationCap,
  },
];

const radarBlips = [
  { angle: 20, radius: 78, delay: 0 },
  { angle: 140, radius: 55, delay: 0.6 },
  { angle: 250, radius: 92, delay: 1.2 },
  { angle: 310, radius: 40, delay: 1.8 },
];

export default function Cyber() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-black">
      {/* faint scanline texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 3px)",
        }}
      />

      {/* ============ HERO ============ */}
      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">

        <div>
          <div className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#e21010]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e21010] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e21010]" />
            </span>
            Live threat monitoring — 24/7 
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            We find the <span className="text-[#e21010]">gaps</span> before
            attackers do.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-6 max-w-lg text-base leading-relaxed text-[#8B93A1]"
          >
            End-to-end security testing, monitoring, and compliance —
            run by engineers who think like the people trying to break in.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button className="group inline-flex items-center gap-2 rounded-lg bg-[#e21010] px-6 py-3 text-sm font-semibold text-[#0B0E11] transition hover:bg-[#ffb849] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5A623]/50">
              Request a security audit
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-black px-6 py-3 text-sm font-semibold text-[#e21010] transition hover:border-white/25 hover:bg-white/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20">
              View services
            </button>
          </motion.div>
        </div>

        {/* Signature element — radar sweep */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80"
        >
          {[1, 0.72, 0.44].map((s, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-[#e21010]/15"
              style={{ width: `${s * 100}%`, height: `${s * 100}%` }}
            />
          ))}

          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{
              background:
                "conic-gradient(from 0deg, rgba(245,166,35,0.35), transparent 35%)",
              borderRadius: "9999px",
              maskImage: "radial-gradient(circle, black 60%, transparent 61%)",
              WebkitMaskImage:
                "radial-gradient(circle, black 60%, transparent 61%)",
            }}
          />

          {radarBlips.map((b, i) => {
            const x = 50 + b.radius / 2 * Math.cos((b.angle * Math.PI) / 180);
            const y = 50 + b.radius / 2 * Math.sin((b.angle * Math.PI) / 180);
            return (
              <motion.span
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-[#e21010]"
                style={{ left: `${x}%`, top: `${y}%` }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: b.delay,
                  ease: "easeInOut",
                }}
              />
            );
          })}

          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#e21010]/30 bg-[#e21010]">
            <ShieldCheck className="h-7 w-7 text-black" />
          </div>
        </motion.div>
      </div>

      {/* ============ SERVICES ============ */}
      <div className="relative mx-auto w-full -mt-40 max-w-7xl border-t border-white/[0.06] px-6 py-24">

        <div className="mb-14 flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#e21010]">
             Capabilities
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Full-stack protection, audited end to end
          </h2>
          <p className="max-w-xl text-sm text-[#6a6d73]">
            Ten services. One team. Everything logged, reported, and tied
            back to a fix.
          </p>
        </div>
         
         <div className="grid gap-px overflow-hidden rounded-2xl border border-red-600/30 bg-red-600 sm:grid-cols-2 lg:grid-cols-3">
  {services.map(({ title, desc, icon: Icon }, i) => (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
      className="group relative flex flex-col gap-4 bg-white p-7 transition-all duration-300 hover:bg-red-50"
    >
      {/* Red hover indicator */}
      <div
        className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-red-600 transition-transform duration-300 group-hover:scale-y-100"
      />

      {/* Number + Icon */}
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs font-semibold text-red-500">
          {String(i + 1).padStart(2, "0")}
        </span>

        <Icon className="h-5 w-5 text-gray-500 transition-colors duration-300 group-hover:text-red-600" />
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-gray-900 transition-colors duration-300 group-hover:text-red-700">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-gray-500">
        {desc}
      </p>

      {/* Learn More */}
      <div className="mt-auto flex items-center gap-1 pt-2 text-xs font-semibold text-red-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
        Learn more
        <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </motion.div>
  ))}
</div>

      </div>

      
    </section>
  );
}
