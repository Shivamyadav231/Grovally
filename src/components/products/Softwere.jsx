import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid,
  Users,
  UserCog,
  Calculator,
  Package,
  Wallet,
  GraduationCap,
  Stethoscope,
  BedDouble,
  UtensilsCrossed,
  Building2,
  HandCoins,
  HeartHandshake,
  Truck,
  Factory,
  ArrowUpRight,
} from "lucide-react";

const categories = {
  core: {
    label: " business systems",
    items: [
      { title: "ERP Software", desc: "One system connecting finance, operations, and reporting.", icon: LayoutGrid },
      { title: "CRM Software", desc: "Track leads, deals, and customer history in one pipeline.", icon: Users },
      { title: "HRMS Software", desc: "Attendance, leave, and employee records without spreadsheets.", icon: UserCog },
      { title: "Accounting Software", desc: "Invoicing, ledgers, and tax-ready books, always up to date.", icon: Calculator },
      { title: "Inventory Management Software", desc: "Stock levels, purchase orders, and reorder alerts in real time.", icon: Package },
      { title: "Payroll Software", desc: "Salary runs, compliance, and payslips handled automatically.", icon: Wallet },
    ],
  },
  industry: {
    label: "Industry solutions",
    items: [
      { title: "School Management Software", desc: "Admissions, attendance, fees, and report cards in one place.", icon: GraduationCap },
      { title: "Hospital Management Software", desc: "Patient records, appointments, and billing for care teams.", icon: Stethoscope },
      { title: "Hotel Management Software", desc: "Bookings, housekeeping, and front-desk operations, synced.", icon: BedDouble },
      { title: "Restaurant Software", desc: "Orders, table management, and kitchen tickets without the chaos.", icon: UtensilsCrossed },
      { title: "Real Estate Software", desc: "Listings, site visits, and buyer follow-ups, tracked end to end.", icon: Building2 },
      { title: "Microfinance Software", desc: "Loan disbursal, collections, and repayment tracking built in.", icon: HandCoins },
      { title: "NGO Management Software", desc: "Donor records, program tracking, and grant reporting made simple.", icon: HeartHandshake },
      { title: "Logistics Software", desc: "Fleet, routes, and shipment tracking from dispatch to delivery.", icon: Truck },
      { title: "Manufacturing Software", desc: "Production planning, work orders, and floor tracking together.", icon: Factory },
    ],
  },
};

const industries = ["schools", "hospitals", "hotels", "manufacturers", "logistics teams", "NGOs"];

export default function Softewre() {
  const [activeTab, setActiveTab] = useState("core");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % industries.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8F4] text-[#1F2421]">

      {/* ============ HERO ============ */}
      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 text-center lg:py-32">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0F6E5C]/20 bg-[#0F6E5C]/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#f73109]"
        >
          Business software
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
        >
          Software built for
          <br className="hidden sm:block" />{" "}
          <span className="relative inline-block h-[1.15em] min-w-[8ch] align-bottom text-[#e41212]">
            <AnimatePresence mode="wait">
              <motion.span
                key={industries[wordIndex]}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute left-0 top-0 whitespace-nowrap"
              >
                {industries[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5B615C]"
        >
          Sixteen products, one philosophy: software should fit how your
          business actually runs, not the other way around.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="group inline-flex items-center gap-2 rounded-lg bg-[#e12807] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0c5c4d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F6E5C]/40">
            Book a demo
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          
        </motion.div>
      </div>

      {/* ============ CATALOG ============ */}
      <div className="relative mx-auto -mt-28 w-full max-w-6xl">

        {/* Tabs */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-full border border-[#1F2421]/10 bg-white p-1">
            {Object.entries(categories).map(([key, cat]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className="relative rounded-full px-5 py-2 text-sm font-semibold transition"
              >
                {activeTab === key && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-[#f51909]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    activeTab === key ? "text-white" : "text-[#5B615C]"
                  }`}
                >
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {categories[activeTab].items.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="group flex flex-col gap-4 rounded-2xl border border-[#1F2421]/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#0F6E5C]/30 hover:shadow-[0_12px_28px_rgba(15,110,92,0.08)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F6E5C]/[0.08]">
                  <Icon className="h-5 w-5 text-[#f91605]" />
                </div>
                <h3 className="text-base font-semibold text-[#1F2421]">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6B7268]">
                  {desc}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ============ CTA BAND ============ */}
    
    </section>
  );
}
