import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutTemplate,
  RefreshCw,
  Briefcase,
  Building2,
  ShoppingCart,
  GraduationCap,
  Stethoscope,
  Rocket,
  FileEdit,
  School,
  HeartPulse,
  BookOpen,
  Truck,
  UserCog,
  Store,
  HeartHandshake,
  Boxes,
  Landmark,
  ArrowUpRight,
} from "lucide-react";

const categories = {
  websites: {
    label: "Websites",
    items: [
      { title: "Static Website", des: "Fast, simple pages for businesses that don't need a backend.", icon: LayoutTemplate },
      { title: "Dynamic Website", des: "Content-driven sites with a backend and admin control.", icon: RefreshCw },
      { title: "Business Website", des: "A professional site that represents your company online.", icon: Briefcase },
      { title: "Corporate Website", des: "Multi-department sites built for larger organizations.", icon: Building2 },
      { title: "Ecommerce Website", des: "Product catalogs, checkout, and payments, ready to sell.", icon: ShoppingCart },
      { title: "School Website", des: "Admissions, notices, and academics presented to parents.", icon: GraduationCap },
      { title: "Hospital Website", des: "Departments, doctors, and appointment info for patients.", icon: Stethoscope },
      { title: "Landing Pages", des: "Focused, high-converting pages for a single campaign or offer.", icon: Rocket },
      { title: "CMS Website", des: "Edit pages, blogs, and content yourself — no developer needed.", icon: FileEdit },
    ],
  },
  portals: {
    label: "Portals",
    items: [
      { title: "Schools Portal", des: "Attendance, grades, and communication for students and parents.", icon: School },
      { title: "Hospital Portal", des: "Appointments, records, and billing in one patient dashboard.", icon: HeartPulse },
      { title: "College Portal", des: "Admissions, courses, and results for students and faculty.", icon: BookOpen },
      { title: "Vendor Portal", des: "Purchase orders, invoices, and status tracking for suppliers.", icon: Truck },
      { title: "Employee Portal", des: "Payslips, leave requests, and internal announcements, self-serve.", icon: UserCog },
      { title: "Franchise Portal", des: "Reporting and resources shared across every franchise location.", icon: Store },
      { title: "NGO Portal", des: "Donor management, programs, and impact reporting in one place.", icon: HeartHandshake },
      { title: "B2B Marketplace", des: "Multi-vendor listings, orders, and payments between businesses.", icon: Boxes },
      { title: "Job Portal", des: "Job listings, applications, and candidate tracking, end to end.", icon: Briefcase },
      { title: "Government Portal", des: "Citizen services and applications, digitized and trackable.", icon: Landmark },
    ],
  },
};

const audiences = ["businesses", "schools", "hospitals", "vendors", "employees", "governments"];

export default function Website() {
  const [activeTab, setActiveTab] = useState("websites");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % audiences.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8F4] text-[#1F2421]">

     
      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 text-center lg:py-32">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0F6E5C]/20 bg-[#0F6E5C]/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#f32106]"
        >
          Websites &amp; Portals
        </motion.div>
        <motion.h1
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
  className="flex flex-wrap items-baseline justify-center gap-x-3 text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
>
  <span>Built for</span>

  <span className="relative inline-block min-w-[9ch] text-[#f81408]">
    <AnimatePresence mode="wait">
      <motion.span
        key={audiences[wordIndex]}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="inline-block whitespace-nowrap"
      >
        {audiences[wordIndex]}
      </motion.span>
    </AnimatePresence>
  </span>
</motion.h1>
      

       

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#121613]"
        >
          From a simple business site to a multi-role portal — we design and
          build the version your users will actually come back to.
        </motion.p>

        
      </div>

      {/* ============ CATALOG ============ */}
      <div className="relative  -mt-10 mx-auto w-full max-w-6xl  ">

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
                    className="absolute inset-0 rounded-full bg-[#e52a11]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    activeTab === key ? "text-white" : "text-[#e61616]"
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
            {categories[activeTab].items.map(({ title, des, icon: Icon }) => (
              <div
                key={title}
                className="group flex flex-col gap-4 rounded-2xl border border-[#1F2421]/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#0F6E5C]/30 hover:shadow-[0_12px_28px_rgba(15,110,92,0.08)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F6E5C]/[0.08]">
                  <Icon className="h-5 w-5 text-[#f32f19]" />
                </div>
                <h3 className="text-base font-semibold text-[#1F2421]">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6B7268]">
                  {des}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ============ CTA BAND ============ */}
      <div className="relative mx-auto w-full max-w-6xl border-t border-[#1F2421]/10 px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#1F2421] p-10 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Know what you need? Or not sure yet?
            </h3>
            <p className="mt-2 text-sm text-[#B9C0BA]">
              Either way, we'll help you scope the right build.
            </p>
          </div>
          <button className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#fd241d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#12836e] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30">
            Talk to our team
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
