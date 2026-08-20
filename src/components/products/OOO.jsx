import { motion } from "framer-motion";
import {
  Ship,
  PackageSearch,
  Landmark,
  FileCheck2,
  ShieldCheck,
  Globe2,
  ArrowLeftRight,
  Boxes,
  Receipt,
  LineChart,
  Users,
  Rocket,
  Building2,
  ClipboardCheck,
  BadgeCheck,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const tradeFinance = [
  { title: "Export Finance", desc: "Working capital against confirmed export orders, released before the goods leave the port.", icon: Ship },
  { title: "Import Finance", desc: "Funding to pay overseas suppliers on time without straining your own cash cycle.", icon: PackageSearch },
  { title: "Letter of Credit (LC)", desc: "Bank-backed payment assurance that gets both sides of a trade to say yes.", icon: FileCheck2 },
  { title: "Bank Guarantee (BG)", desc: "Performance and financial guarantees that unlock bigger contracts and tenders.", icon: ShieldCheck },
  { title: "Cross Border Funding", desc: "Structured capital that moves cleanly across jurisdictions and currencies.", icon: Globe2 },
  { title: "Supply Chain Finance", desc: "Extend payables, accelerate receivables — liquidity for every link in the chain.", icon: ArrowLeftRight },
  { title: "Invoice Discounting", desc: "Turn unpaid invoices into cash today instead of waiting out the credit cycle.", icon: Receipt },
];

const advisory = [
  { title: "Business Valuation", desc: "A defensible number for your business, built for term sheets and boardrooms.", icon: LineChart },
  { title: "Investor Connect", desc: "Warm introductions to angels, VCs, and PE funds actually writing checks in your space.", icon: Users },
  { title: "Fund Raising", desc: "Round strategy, materials, and negotiation support from first call to close.", icon: Rocket },
  { title: "Mergers & Acquisitions", desc: "Deal sourcing, structuring, and execution for buy-side and sell-side mandates.", icon: Building2 },
  { title: "Due Diligence", desc: "Financial and operational diligence that holds up under investor scrutiny.", icon: ClipboardCheck },
  { title: "IPO Advisory", desc: "Listing readiness — governance, compliance, and positioning for public markets.", icon: BadgeCheck },
];

const stats = [
  { label: "Instruments arranged", value: "20+" },
  { label: "Desks", value: "Trade & Capital" },
  { label: "Reach", value: "Cross-border" },
];

export default function ShivamCapital() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-black">
      {/* ledger grid backdrop */}
     <div
  className="pointer-events-none absolute inset-0 opacity-[0.05]"
  style={{
    backgroundImage:
      "linear-gradient(#f87171 1px, transparent 1px), linear-gradient(90deg, #f87171 1px, transparent 1px)",
    backgroundSize: "40px 40px",
  }}
/>

      {/* ============ HERO ============ */}
      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-red-700">
            <span className="h-1.5 w-1.5 rounded-full bg-red-700" />
            Trade &amp; Growth Capital Desk
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Finance that moves goods,{" "}
            <span className="italic text-red-600">capital that moves ambition.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-6 max-w-lg text-base leading-relaxed text-black/60"
          >
            From an LC that clears customs on time to a valuation that clears
            a term sheet — we structure the paperwork of growth, for
            businesses trading across borders and raising their next round.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button className="group inline-flex items-center gap-2 rounded-sm bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400">
              Talk to an advisor
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-sm border border-red-400/20 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:border-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20">
              View our desks
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-8 border-t border-black/10 pt-8"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-mono text-xl font-bold text-red-600">
                  {s.value}
                </p>
                <p className="mt-4 text-bold text-lg uppercase tracking-wide text-black/80">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Signature element — trade & capital network diagram */}
        <motion.div
  initial={{ opacity: 0, scale: 0.94 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="relative mx-auto h-96 w-full max-w-lg"
>
  <svg viewBox="0 0 400 320" className="h-full w-full">

    {/* Connecting Lines */}
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
        strokeOpacity="0.5"
        animate={{ strokeDashoffset: [0, -24] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}

    {/* Top Circles */}
    {[
      { x: 70, y: 50, label: "Banks" },
      { x: 200, y: 40, label: "Investors" },
      { x: 330, y: 50, label: "Buyers" },
    ].map((n) => (
      <g key={n.label}>
        <circle
          cx={n.x}
          cy={n.y}
          r="28"
          fill="#FFFFFF"
          stroke="#B91C1C"
          strokeWidth="1.5"
          strokeOpacity="0.25"
        />

        <text
          x={n.x}
          y={n.y + 4}
          textAnchor="middle"
          fontFamily="monospace"
          fontSize="10"
          fontWeight="600"
          fill="#000000"
        >
          {n.label}
        </text>
      </g>
    ))}

    {/* Main Grovally Circle */}
    <motion.circle
      cx="200"
      cy="200"
      r="42"
      fill="#B91C1C"
      animate={{
        r: [42, 46, 42],
      }}
      transition={{
        duration: 2.4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    {/* Grovally Text */}
    <text
      x="200"
      y="196"
      textAnchor="middle"
      fontFamily="monospace"
      fontSize="11"
      fontWeight="700"
      text-center
      fill="#FFFFFF"
    >
      Grovally
    </text>

    {/* Business Badge */}
    <rect
      x="164"
      y="202"
      width="72"
      height="15"
      rx="5"
      fill="#7F1D1D"
    />

    <text
      x="200"
      y="213"
      textAnchor="middle"
      fontFamily="monospace"
      fontSize="8"
      fontWeight="700"
      fill="#FFFFFF"
    >
      BUSINESS
    </text>

  </svg>
</motion.div>
       
      </div>

      {/* ============ TRADE FINANCE SERVICES ============ */}
      <div className="relative mx-auto -mt-16 w-full max-w-7xl ">
        <div className="mb-14 flex flex-col gap-3">
         
          <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            Trade finance,<span className=" text-red-600"> handled end to end</span> 
          </h2>
          <p className="max-w-xl text-sm text-black/60">
            From issuance to settlement — instruments for businesses moving
            goods across borders.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tradeFinance.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="group relative flex flex-col gap-4 rounded-lg border border-dashed border-black/20 bg-white p-6 transition hover:border-red-400 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-red-600 opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-red-600 opacity-0 transition group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black/[0.04]">
                  <Icon className="h-5 w-5 text-red-600" />
                </div>
                <span className="font-mono text-[10px] text-black/30">
                  TF-{String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-serif text-base font-medium text-black">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-black/50">
                {desc}
              </p>

              <div className="mt-auto flex items-center gap-1 pt-1 text-xs font-semibold text-red-700 opacity-0 transition group-hover:opacity-100">
                Learn more
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ============ ADVISORY SERVICES ============ */}
      <div className="relative mt-5 mx-auto w-full max-w-7xl">
        <div className="mb-14 flex text-center flex-col gap-3">
          
          <h2 className="font-serif text-3xl text-center  font-medium tracking-tight sm:text-4xl">
            Capital  advisory <span className="text-red-600"> , one desk</span> 
          </h2>
          <p className="max-w-2xl items-center left-16  text-sm text-black/60">
            Structuring, valuation, and introductions for businesses raising
            or transacting capital.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advisory.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              className="group relative flex flex-col gap-4 rounded-lg border border-dashed border-black/20 bg-white p-6 transition hover:border-red-700/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-red-700 opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-red-700 opacity-0 transition group-hover:opacity-100" />

              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black/[0.04]">
                  <Icon className="h-5 w-5 text-red-700" />
                </div>
                <span className="font-mono text-[10px] text-black/30">
                  AD-{String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-serif text-base font-medium text-black">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-black/50">
                {desc}
              </p>

              <div className="mt-auto flex items-center gap-1 pt-1 text-xs font-semibold text-red-700 opacity-0 transition group-hover:opacity-100">
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
