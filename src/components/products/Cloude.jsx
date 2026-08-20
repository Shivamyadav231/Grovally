import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Workflow,
  Box,
  Boxes,
  ArrowRightLeft,
  Database,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const platforms = ["AWS", "Microsoft Azure", "Google Cloud"];

const services = [
  {
    title: "Cloud Hosting",
    desc: "Production-grade hosting with autoscaling, load balancing, and zero-downtime deploys.",
    icon: Cloud,
  },
  {
    title: "Server Management",
    desc: "Patching, monitoring, and uptime ownership for every server in your fleet.",
    icon: Server,
  },
  {
    title: "DevOps",
    desc: "CI/CD pipelines that turn a merged pull request into a live release.",
    icon: Workflow,
  },
  {
    title: "Docker",
    desc: "Containerized services that run the same way in dev, staging, and production.",
    icon: Box,
  },
  {
    title: "Kubernetes",
    desc: "Cluster design, scaling policies, and orchestration for containerized workloads.",
    icon: Boxes,
  },
  {
    title: "Cloud Migration",
    desc: "Moving workloads off legacy infrastructure with a plan and a rollback path.",
    icon: ArrowRightLeft,
  },
  {
    title: "Backup & Disaster Recovery",
    desc: "Automated backups and tested recovery plans so outages stay short.",
    icon: Database,
  },
];

const stats = [
  { label: "Uptime SLA", value: "99.99%" },
  { label: "Monitoring", value: "24/7" },
  { label: "Cloud native", value: "Multi-cloud" },
];

export default function Cloude() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-black">
      {/* blueprint grid */}
      <div
  className="pointer-events-none absolute inset-0 opacity-[0.06]"
  style={{
    backgroundImage:
      "linear-gradient(#B91C1C 1px, transparent 1px), linear-gradient(90deg, #B91C1C 1px, transparent 1px)",
    backgroundSize: "40px 40px",
  }}
/>

      {/* ============ HERO ============ */}
      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">

        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border  bg-white px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-[rgb(237,47,47)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[rgb(246,52,9)]" />
            Infrastructure &amp; DevOps
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Your cloud, running{" "}
            <span className="text-[rgb(254,78,58)]">the way it should.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-6 max-w-lg text-base leading-relaxed text-[#4C5A6B]"
          >
            We design, migrate, and run infrastructure across AWS, Azure,
            and Google Cloud — so deploys stay boring and outages stay rare.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button className="group inline-flex items-center gap-2 rounded-lg bg-[#ea0505] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#123159] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6FED]/40">
              Talk to an engineer
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-black/50 bg-white px-6 py-3 text-sm font-semibold text-[#0B2545] transition hover:border-[#0B2545]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545]/20">
              See what we run
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-8 border-t border-[#0B2545]/10 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-mono text-xl font-bold text-red-500">
                  {s.value}
                </p>
                <p className="mt-0.5 text-xs uppercase tracking-wide text-[#090a0d]">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

       
       <motion.div
  initial={{ opacity: 0, scale: 0.94 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="relative mx-auto h-80 w-full max-w-md"
>
  <svg viewBox="0 0 400 320" className="h-full w-full">

    {/* connecting lines */}
    {[
      "M70,50 C120,120 160,140 200,180",
      "M200,40 C200,100 200,140 200,180",
      "M330,50 C280,120 240,140 200,180",
    ].map((d, i) => (
      <motion.path
        key={i}
        d={d}
        fill="none"
        stroke="#B91C1C"
        strokeWidth="2"
        strokeDasharray="6 6"
        strokeOpacity="0.55"
        animate={{ strokeDashoffset: [0, -24] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}

    {/* provider nodes */}
    {[
      { x: 70, y: 50, label: "AWS" },
      { x: 200, y: 40, label: "Azure" },
      { x: 330, y: 50, label: "GCP" },
    ].map((n) => (
      <g key={n.label}>

        <circle
          cx={n.x}
          cy={n.y}
          r="26"
          fill="#FFFFFF"
          stroke="#B91C1C"
          strokeWidth="1.5"
          strokeOpacity="0.35"
        />

        <text
          x={n.x}
          y={n.y + 4}
          textAnchor="middle"
          className="font-mono"
          fontSize="10"
          fontWeight="600"
          fill="#7F1D1D"
        >
          {n.label}
        </text>

      </g>
    ))}

    {/* central hub */}
    <motion.circle
      cx="200"
      cy="200"
      r="38"
      fill="#B91C1C"
      animate={{ r: [38, 42, 38] }}
      transition={{
        duration: 2.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* center glow */}
    <motion.circle
      cx="200"
      cy="200"
      r="46"
      fill="none"
      stroke="#B91C1C"
      strokeWidth="1"
      strokeOpacity="0.2"
      animate={{
        r: [46, 52, 46],
        opacity: [0.2, 0, 0.2],
      }}
      transition={{
        duration: 2.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    <text
      x="200"
      y="196"
      textAnchor="middle"
      className="font-mono"
      fontSize="9"
      fontWeight="600"
      fill="#FFFFFF"
    >
      YOUR
    </text>

    <text
      x="200"
      y="209"
      textAnchor="middle"
      className="font-mono"
      fontSize="9"
      fontWeight="600"
      fill="#FFFFFF"
    >
      STACK
    </text>

  </svg>
</motion.div>
      </div>

      {/* ============ PLATFORMS ============ */}
     
       

      {/* ============ SERVICES ============ */}
      <div className="relative mx-auto -mt-28 w-full max-w-7xl">

        <div className="mb-14 flex flex-col gap-3">
         
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Infrastructure, <span className=" text-red-600"> handled end to end</span> 
          </h2>
          <p className="max-w-xl text-sm text-[#4C5A6B]">
            From first deploy to disaster recovery, one team owns the stack.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="group relative flex flex-col gap-4 rounded-lg border border-dashed border-[#0B2545]/20 bg-white p-6 transition  hover:shadow-[0_8px_24px_rgba(11,37,69,0.08)]"
            >
              {/* blueprint corner ticks */}
              <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-[#ed322f] opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-[#e71e1e] opacity-0 transition group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#EEF1F6]">
                  <Icon className="h-5 w-5 text-[#f41212]" />
                </div>
                <span className="font-mono text-[10px] text-[#e3280b]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-base font-semibold text-[#0B2545]">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-[#5C6B7A]">
                {desc}
              </p>

              <div className="mt-auto flex items-center gap-1 pt-1 text-xs font-semibold text-[rgb(237,50,47)] opacity-0 transition group-hover:opacity-100">
                Learn more
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ============ CTA BAND ============ */}
     
    </section>
  );
}
