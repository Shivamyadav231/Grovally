import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "IT Solutions",
      icon: "💻",
      color: "from-cyan-500 to-blue-600",
      path: "/it",
      desc: "AI,  Database Management, Full Stack Development, ",
    },
    {
      title: "BPO Services",
      icon: "📞",
      color: "from-pink-500 to-fuchsia-600",
      path: "/bpo",
      desc: "Customer Support, Data Processing & Operations",
    },
    {
      title: "KPO Services",
      icon: "📊",
      color: "from-violet-500 to-purple-600",
      path: "/kpo",
      desc: "Research, Analytics & Business Intelligence",
    },
    {
      title: "Finance Services",
      icon: "💰",
      color: "from-green-500 to-emerald-600",
      path: "/finance",
      desc: "Loans, Financial Solutions",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-black">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-96 w-96 bg-white blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 bg-purple-500/20 blur-[120px]" />
      </div>

      {/* Hero */}
      <div className="relative text-center py-24 px-6">
        <h1 className="text-6xl md:text-8xl font-black">
          Our
          <span className="block bg-gradient-to-r text-red-600 bg-clip-text ">
            Services
          </span>
        </h1>

        <p className="mt-8 text-black max-w-3xl mx-auto text-lg">
          Grovally delivers next-generation IT, BPO, KPO and Finance
          solutions powered by AI, automation and digital innovation.
        </p>
      </div>

      {/* Service Cards */}
      <div className="relative max-w-7xl mx-auto px-6 pb-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                rotateX: -10,
                rotateY: 10,
                scale: 1.05,
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
              className="group relative"
            >
              <Link to={service.path}>
                <div className="relative overflow-hidden rounded-[35px] border backdrop-blur-2xl p-8 h-[320px] shadow-2xl">

                  {/* Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-30 transition duration-500`}
                  />

                  {/* Shine */}
                  <div className="absolute -left-24 top-0 h-full w-20 rotate-12 group-hover:left-[120%] transition-all duration-700" />

                  <div className="relative z-10">

                    <div className="text-7xl mb-6">
                      {service.icon}
                    </div>

                    <h2 className="text-3xl font-bold">
                      {service.title}
                    </h2>

                    <p className="mt-4 text-slate-300 leading-7">
                      {service.desc}
                    </p>

                    <button
                      className={`mt-8 px-6 py-3 rounded-xl bg-gradient-to-r ${service.color} font-semibold`}
                    >
                      Explore →
                    </button>

                  </div>

                </div>
              </Link>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}