import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const cards = [
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
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-black">
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-red-500/20 blur-[150px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[150px] animate-pulse"></div>

        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/10 blur-[120px]"></div>

        <div className="absolute top-20 left-1/4 h-72 w-72 rounded-full bg-red-500/20 blur-[150px] animate-pulse"></div>

        <div className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-orange-500/20 blur-[150px] animate-pulse"></div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      {/* Hero Section */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          w-full max-w-7xl
          rounded-[40px]
          border border-white/20
          bg-white/80
          backdrop-blur-3xl
          p-10 md:p-20
          shadow-[0_20px_120px_rgba(255,0,0,0.20)]
          "
        >
          {/* Badge */}
          <div className="mb-6 inline-flex rounded-full border border-red-300 bg-red-100 px-5 py-2 text-sm font-medium tracking-[0.2em] text-red-700">
            AI-POWERED BUSINESS SOLUTIONS
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Grovally
            </span>

            <span className="block mt-2 bg-gradient-to-r from-black via-gray-700 to-red-600 bg-clip-text text-transparent">
              Future Of Innovation
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-4xl text-lg leading-9 text-gray-700 md:text-xl">
            Smart IT, BPO, KPO & Finance services under one roof.
            Build your next-generation business with AI-powered
            automation, cloud systems, customer support, and
            financial intelligence.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-5 sm:flex-row">

            <Link
              to="/services"
              className="
              group relative overflow-hidden
              rounded-full
              bg-gradient-to-r
              from-red-600
              to-red-800
              px-8 py-4
              font-semibold
              text-white
              transition-all duration-500
              hover:scale-110
              hover:shadow-[0_0_40px_rgba(255,0,0,0.6)]
              "
            >
              Explore Services
            </Link>

            <Link
              to="/contact"
              className="
              rounded-full
              border-2 border-red-600
              px-8 py-4
              font-semibold
              text-red-600
              transition-all duration-500
              hover:bg-red-600
              hover:text-white
              "
            >
              Contact Sales
            </Link>

          </div>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid w-full max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">

          {cards.map((card, index) => (
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
              className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              border border-white/20
              bg-white/80
              backdrop-blur-xl
              p-8
              shadow-lg
              transition-all duration-500
              hover:-translate-y-4
              hover:shadow-[0_20px_60px_rgba(255,0,0,0.3)]
              "
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-red-600/10 opacity-0 transition duration-500 group-hover:opacity-100"></div>

              {/* Shine */}
              <div className="absolute -left-32 top-0 h-full w-24 rotate-12 bg-white/30 blur-2xl transition-all duration-700 group-hover:left-[120%]"></div>

              <div className="relative z-10">

                <motion.div
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                  }}
                  transition={{ duration: 0.8 }}
                  className="mb-6 text-6xl"
                >
                  {card.icon}
                </motion.div>

                <h2 className="text-2xl font-bold text-black">
                  {card.title}
                </h2>

                <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-red-500 to-orange-500"></div>

                <p className="mt-6 leading-8 text-gray-600">
                  {card.description}
                </p>

                <div className="mt-6">
                  <button className="rounded-full border border-red-500 px-5 py-2 text-sm font-medium text-red-500 transition hover:bg-red-500 hover:text-white">
                    Learn More →
                  </button>
                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}