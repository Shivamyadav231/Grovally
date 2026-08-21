import { motion } from "framer-motion";
import {
  Search,
  Bell,
  Mail,
  MessageCircle,
  Clock,
  LayoutDashboard,
  Activity,
  FolderOpen,
  Calendar,
  Trophy,
  Users,
  UserCog,
  BarChart3,
  FileText,
  Landmark,
  Package,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const searchFields = [
  "Product Name",
  "Service Category",
  "Department",
  "State",
  "City",
  "Organization",
  "Tender ID",
  "Keywords",
  "CPV Code",
  "Closing Date",
];

const tenderManagement = [
  { title: "Daily Tender Alerts", icon: Bell },
  { title: "Email Alerts", icon: Mail },
  { title: "WhatsApp Notifications", icon: MessageCircle },
  { title: "Deadline Reminders", icon: Clock },
  { title: "Bid Tracking Dashboard", icon: LayoutDashboard },
  { title: "Tender Status Monitoring", icon: Activity },
  { title: "Document Management", icon: FolderOpen },
  { title: "Tender Calendar", icon: Calendar },
  { title: "Award Tracking", icon: Trophy },
  { title: "Team Collaboration", icon: Users },
  { title: "Multi User Access", icon: UserCog },
  { title: "Reports & Analytics", icon: BarChart3 },
];

const industries = [
  "Construction",
  "Civil Engineering",
  "Electrical",
  "Mechanical",
  "Information Technology",
  "Healthcare",
  "Pharmaceuticals",
  "Railways",
  "Defence",
  "Smart City Projects",
  "Energy",
  "Solar",
  "Telecom",
  "Manufacturing",
  "Water Supply",
  "Mining",
  "Education",
  "Food & Catering",
  "Security Services",
  "Facility Management",
];

const bidDocumentation = [
  "Technical Bid",
  "Financial Bid",
  "BOQ Preparation",
  "Compliance Documents",
  "Affidavits",
  "Declarations",
  "Experience Certificates",
  "OEM Authorization",
  "EMD Documentation",
  "Bank Guarantee",
];

const bidConsultancy = [
  "Tender Eligibility Analysis",
  "Bid Strategy & Planning",
  "Document Verification",
  "Technical Compliance",
  "Financial Bid Review",
  "Bid Submission Assistance",
  "Post-Bid Support",
  "Tender Clarification Assistance",
];

const gemProcurement = [
  "GeM Registration",
  "Vendor Registration",
  "Product Listing",
  "Catalogue Creation",
  "Profile Management",
  "Bid Participation",
  "Order Management",
  "Vendor Empanelment",
  "Procurement Consultancy",
  "OEM Registration",
  "Government Procurement",
  "Supply Chain Support",
];

function SectionHeading({ eyebrow, title, sub }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-8 sm:mb-12"
    >
      <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-red-600">
        <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
        {eyebrow}
      </span>
      <h2 className="mt-3 text-2xl sm:text-4xl font-bold tracking-tight text-black">
        {title}
      </h2>
      {sub && (
        <p className="mt-2 max-w-xl text-sm sm:text-base text-black/55">
          {sub}
        </p>
      )}
    </motion.div>
  );
}

function Chip({ label, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: (index % 10) * 0.035, ease: "backOut" }}
      whileHover={{ y: -3, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="cursor-default rounded-full border border-black/10 bg-white px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium text-black/70 shadow-sm transition-colors duration-300 hover:border-red-600/40 hover:text-red-600 hover:shadow-md"
    >
      {label}
    </motion.span>
  );
}

function IconCard({ title, Icon, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex items-center gap-3 sm:gap-4 overflow-hidden rounded-2xl border border-black/10 bg-white p-4 sm:p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg active:shadow-sm"
    >
      <span className="pointer-events-none absolute inset-0 bg-red-600/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-red-600/10 text-red-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      <span className="relative text-sm sm:text-base font-medium text-black">
        {title}
      </span>
    </motion.div>
  );
}

export default function Shivam() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-black">
      {/* soft grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* glow blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-red-500/10 blur-[100px] sm:blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-red-500/10 blur-[100px] sm:blur-[140px]" />

      {/* ============ HERO + SEARCH ============ */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-red-600/25 bg-red-600/5 px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-red-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
            Tender & Bid Consultancy
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            Find the right tender.
            <br />
            <span className="text-red-600">Win the bid.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 max-w-xl text-sm sm:text-lg leading-relaxed text-black/60"
          >
            Search live tenders, track deadlines, and get end-to-end bid
            support — from documentation to GeM registration.
          </motion.p>
        </motion.div>

        {/* search card */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 sm:mt-14 max-w-4xl rounded-2xl sm:rounded-3xl border border-black/10 bg-white p-4 sm:p-6 shadow-xl"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
            {searchFields.map((field, i) => (
              <motion.input
                key={field}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.03 }}
                type="text"
                placeholder={field}
                className="w-full rounded-xl border border-black/10 bg-black/[0.02] px-3 py-2.5 text-xs sm:text-sm text-black placeholder:text-black/40 outline-none transition-all focus:border-red-600/50 focus:bg-white focus:ring-2 focus:ring-red-600/10"
              />
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-red-700"
          >
            <Search className="h-4 w-4" />
            Search Tenders
          </motion.button>
        </motion.div>
      </div>

      {/* ============ TENDER MANAGEMENT ============ */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 border-t border-black/10">
        <SectionHeading
          eyebrow="Stay ahead"
          title="Tender management, on autopilot"
          sub="Never miss a deadline — alerts, tracking, and reporting in one dashboard."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {tenderManagement.map((item, i) => (
            <IconCard key={item.title} title={item.title} Icon={item.icon} index={i} />
          ))}
        </div>
      </div>

      {/* ============ INDUSTRIES ============ */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 border-t border-black/10">
        <SectionHeading
          eyebrow="Where we work"
          title="Industries we cover"
          sub="From civil works to defence — tenders across every sector."
        />
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {industries.map((label, i) => (
            <Chip key={label} label={label} index={i} />
          ))}
        </div>
      </div>

      {/* ============ BID DOCUMENTATION ============ */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 border-t border-black/10">
        <SectionHeading
          eyebrow="Paperwork, sorted"
          title="Bid documentation we prepare"
          sub="Every document a compliant, submission-ready bid needs."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {bidDocumentation.map((title, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 4 }}
              className="group flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3.5 shadow-sm transition-shadow hover:shadow-md"
            >
              <FileText className="h-4 w-4 flex-shrink-0 text-red-600 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm sm:text-base text-black/80">{title}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ============ BID CONSULTANCY ============ */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 border-t border-black/10">
        <SectionHeading
          eyebrow="Guided bidding"
          title="Bid consultancy services"
          sub="From eligibility checks to post-bid support — we're with you at every step."
        />
        <div className="flex flex-wrap gap-2.5 sm:gap-3">
          {bidConsultancy.map((label, i) => (
            <Chip key={label} label={label} index={i} />
          ))}
        </div>
      </div>

      {/* ============ GEM & PROCUREMENT ============ */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20 border-t border-black/10">
        <SectionHeading
          eyebrow="Government marketplace"
          title="GeM & procurement support"
          sub="Registration, listing, and vendor management for government procurement."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {gemProcurement.map((title, i) => (
            <IconCard
              key={title}
              title={title}
              Icon={i % 3 === 0 ? Landmark : i % 3 === 1 ? Package : ShieldCheck}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* ============ CTA BAND ============ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-5xl px-4 sm:px-6 pb-16 sm:pb-24"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl sm:rounded-3xl bg-black px-6 sm:px-10 py-8 sm:py-10 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to bid smarter?
            </h3>
            <p className="mt-1 text-sm text-white/60">
              Talk to our tender consultants today.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-red-700 flex-shrink-0"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>
      </motion.div>

      
      
      
    </section>
  );
}
