import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "IT Solutions",
      icon: "💻",
      color: "from-red-500 to-red-700",
      path: "/it",
      desc: "AI Solutions, Database Management, Full Stack Development & Digital Transformation.",
    },
    {
      title: "BPO Services",
      icon: "📞",
      color: "from-pink-500 to-rose-600",
      path: "/bpo",
      desc: "Customer Support, Back Office Operations, Data Processing & Call Center Services.",
    },
    {
      title: "KPO Services",
      icon: "📊",
      color: "from-violet-500 to-purple-700",
      path: "/kpo",
      desc: "Research, Analytics, Business Intelligence & Knowledge-Based Solutions.",
    },
    {
      title: "Finance Services",
      icon: "💰",
      color: "from-green-500 to-emerald-700",
      path: "/finance",
      desc: "Loans, Financial Consulting, Investment Support & Business Finance Solutions.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-red-500/10 blur-[120px]" />
        <div className="absolute top-1/2 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 text-center">
        <span className="inline-flex items-center rounded-full border border-red-100 bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
          🚀 Premium Business Solutions
        </span>

        <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900">
          Our
          <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
            Services
          </span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
          Empowering businesses with innovative IT, BPO, KPO and Finance
          solutions designed to accelerate growth, efficiency and digital
          transformation.
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative max-w-7xl mx-auto px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
              }}
              className="group"
            >
              <Link to={service.path}>
                <div className="relative h-[360px] overflow-hidden rounded-[32px] border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-[0_30px_80px_rgba(201,1,0,0.15)]">
                  
                  {/* Top Gradient Line */}
                  <div
                    className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${service.color}`}
                  />

                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-all duration-500 group-hover:opacity-10`}
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    {/* Icon */}
                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${service.color} text-4xl shadow-xl transition-all duration-500 group-hover:scale-110`}
                    >
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h2 className="mt-8 text-2xl font-bold text-gray-900">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-4 text-gray-600 leading-7 flex-grow">
                      {service.desc}
                    </p>

                    {/* Button */}
                    <button
                      className={`mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${service.color} px-6 py-3 font-semibold text-white transition-all duration-300 group-hover:gap-4`}
                    >
                      Explore
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative px-6 pb-28">
        <div className="max-w-5xl mx-auto rounded-[40px] bg-gradient-to-r from-red-600 to-red-500 p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Ready to Grow Your Business?
          </h2>

          <p className="mt-5 text-red-100 text-lg max-w-2xl mx-auto">
            Partner with us to unlock innovative solutions and take your
            business to the next level.
          </p>

          <button className="mt-8 rounded-2xl bg-white px-8 py-4 font-bold text-red-600 transition hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}