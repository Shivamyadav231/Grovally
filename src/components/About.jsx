import { motion } from "framer-motion";

export default function About() {
  const cards = [
    {
      title: "Our Mission",
      description:
        "Help businesses grow faster through smart technology, efficient operations, and trusted financial support.",
      icon: "🚀",
    },
    {
      title: "Our Vision",
      description:
        "Create a seamless service experience where teams, processes, and customers connect with clarity and speed.",
      icon: "🌍",
    },
    {
      title: "Our Values",
      description:
        "Quality, transparency, responsiveness, and innovation guide every engagement.",
      icon: "💎",
    },
    {
      title: "Why Choose Us",
      description:
        "We combine specialist expertise with modern tools to deliver better outcomes and a smoother customer journey.",
      icon: "⚡",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] px-6 py-20 text-white">
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-red-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl animate-pulse"></div>
      </div>

      {/* Floating Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative mx-auto max-w-7xl rounded-[40px] border border-white/10 bg-white/5 p-10 md:p-16 backdrop-blur-2xl shadow-[0_20px_100px_rgba(255,0,0,0.2)]"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glow Border */}
        <div className="absolute inset-0 rounded-[40px] border border-red-500/20"></div>

        <div className="relative z-10">
          <div className="mb-6 inline-block rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm tracking-widest text-red-400">
            ABOUT GROVALLY
          </div>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            The Future Of
            <span className="block bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-slate-300">
            Grovally brings together IT, BPO, KPO, and finance capabilities
            into one intelligent ecosystem. We create premium digital
            experiences powered by automation, AI-driven workflows, and modern
            enterprise technology.
          </p>
        </div>
      </motion.div>

      {/* 3D Cards */}
      <div className="relative mx-auto mt-20 grid max-w-7xl gap-10 md:grid-cols-2">
        {cards.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            whileHover={{
              rotateX: -8,
              rotateY: 8,
              scale: 1.04,
            }}
            className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500"
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-pink-500/10 to-purple-500/10 opacity-0 transition duration-500 group-hover:opacity-100"></div>

            {/* Animated Light */}
            <div className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/10 blur-2xl transition-all duration-700 group-hover:left-[120%]"></div>

            <div className="relative z-10">
              <div className="mb-6 text-6xl">{item.icon}</div>

              <h2 className="text-3xl font-bold text-white">
                {item.title}
              </h2>

              <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"></div>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                {item.description}
              </p>
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-[35px] border border-transparent transition-all duration-500 group-hover:border-red-500/30"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}