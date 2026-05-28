import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#020617] text-white">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-red-500/20 blur-[120px] animate-pulse"></div>

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[120px]"></div>
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* HERO SECTION */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-7xl rounded-[40px] border border-white/10 bg-white/5 p-10 md:p-20 backdrop-blur-2xl shadow-[0_20px_120px_rgba(0,255,255,0.15)]"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm tracking-[0.2em] text-cyan-300">
            AI-POWERED BUSINESS SOLUTIONS
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-tight md:text-8xl">
            Grovally
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Future Of Innovation
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-300 md:text-xl">
            Smart IT, BPO, KPO & Finance services under one roof.
            Build your next-generation business with AI-powered
            automation, cloud systems, customer support, and financial
            intelligence.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-5 sm:flex-row">
            <Link
              to="/services"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-cyan-400 px-8 py-4 text-sm font-bold text-slate-950 transition hover:scale-105"
            >
              <span className="relative z-10">Explore Services</span>

              <div className="absolute inset-0 translate-y-full bg-white/20 transition duration-500 group-hover:translate-y-0"></div>
            </Link>

            <Link
              to="/contact"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Contact Sales
            </Link>
          </div>
        </motion.div>

        {/* Floating Cards */}
        <div className="mt-20 grid w-full max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              title: "IT Innovation",
              description:
                "Custom applications, AI models, and cloud systems built for growth.",
              icon: "💻",
            },
            {
              title: "BPO Excellence",
              description:
                "Smart support, automation, and multilingual customer care.",
              icon: "📞",
            },
            {
              title: "KPO Insights",
              description:
                "Research, analytics, and strategic intelligence.",
              icon: "📊",
            },
            {
              title: "Finance Services",
              description:
                "Loan support, credit insights, and finance automation.",
              icon: "💳",
            },
          ].map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              whileHover={{
                rotateX: -8,
                rotateY: 8,
                scale: 1.05,
              }}
              className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500"
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 transition duration-500 group-hover:opacity-100"></div>

              {/* Shine */}
              <div className="absolute -left-32 top-0 h-full w-24 rotate-12 bg-white/10 blur-2xl transition-all duration-700 group-hover:left-[120%]"></div>

              <div className="relative z-10">
                <div className="mb-6 text-6xl">{card.icon}</div>

                <h2 className="text-2xl font-bold text-white">
                  {card.title}
                </h2>

                <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>

                <p className="mt-6 leading-8 text-slate-300">
                  {card.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}