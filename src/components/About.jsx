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
    <section className="relative min-h-screen overflow-hidden bg-white px-6 py-20">

      {/* Flying Rocket */}
      <motion.div
        animate={{
          x: [-200, 1800],
          y: [100, -50, 100],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-10 left-0 z-50 text-7xl"
      >
        🚀
      </motion.div>

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-red-500/20 blur-[120px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-red-400/20 blur-[120px] animate-pulse"></div>
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative mx-auto max-w-7xl rounded-[40px] bg-[#C90102] p-10 md:p-16 shadow-[0_20px_100px_rgba(201,1,2,0.35)]"
      >
        <div className="relative z-10">

          <div className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm tracking-widest text-white">
            ABOUT GROVALLY
          </div>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            The Future Of
            <span className="block text-black">
              Digital Innovation
            </span>
          </h1>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-white/90">
            Grovally brings together IT, BPO, KPO and Finance capabilities
            into one intelligent ecosystem. We create premium digital
            experiences powered by automation, AI-driven workflows and
            modern enterprise technology.
          </p>
        </div>
      </motion.div>

      {/* Cards */}
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
              rotateX: -10,
              rotateY: 10,
              scale: 1.05,
              y: -10,
            }}
            className="group relative overflow-hidden rounded-[35px] p-8"
            style={{
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
          >
            {/* Card BG */}
            <div className="absolute inset-0 rounded-[35px] bg-gradient-to-br from-[#C90102] to-[#a50000]"></div>

            {/* Shine Effect */}
            <div className="absolute -left-32 top-0 h-full w-24 rotate-12 bg-white/20 blur-2xl transition-all duration-700 group-hover:left-[120%]"></div>

            <div className="relative z-10">

              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.2,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="mb-6 text-6xl"
              >
                {item.icon}
              </motion.div>

              <h2 className="text-3xl font-bold text-white">
                {item.title}
              </h2>

              <div className="mt-4 h-1 w-20 rounded-full bg-white"></div>

              <p className="mt-6 text-lg leading-8 text-white/80">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}