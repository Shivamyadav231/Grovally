import React from "react";

import {
  motion,
} from "framer-motion";

import {
  FaChartLine,
  FaBrain,
  FaFileAlt,
} from "react-icons/fa";

function KPO() {

  const services = [

    {
      icon: <FaChartLine />,
      title:
        "Market Research & Analytics",

      description:
        "Comprehensive market analysis, competitor mapping, and business intelligence solutions.",

      tools: [
        "Google Analytics",
        "SEMrush",
        "Power BI",
      ],

      color:
        "from-violet-500 to-fuchsia-500",
    },

    {
      icon: <FaBrain />,
      title:
        "AI Driven Insights",

      description:
        "Predictive analytics, financial forecasting, and smart AI-powered reporting systems.",

      tools: [
        "Machine Learning",
        "Python",
        "NLP",
      ],

      color:
        "from-cyan-500 to-blue-500",
    },

    {
      icon: <FaFileAlt />,
      title:
        "Strategic Reporting",

      description:
        "Professional reports, research documentation, and data-driven strategic planning.",

      tools: [
        "Tableau",
        "Excel",
        "Dashboards",
      ],

      color:
        "from-pink-500 to-rose-500",
    },
  ];

  return (

    <section className="relative min-h-screen  top-10 overflow-hidden bg-white px-6 py-24 text-black">

      {/* Background Glow */}
      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[140px]"></div>

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-fuchsia-500/20 blur-[140px]"></div>

      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Hero */}
        <motion.div

          initial={{
            opacity: 0,
            y: 50,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          className="mb-20 text-center"
        >

          <div className="inline-flex rounded-full border border-red-500 bg-violet-500/10 px-6 py-2 text-sm tracking-[0.3em] text-red-300">

            KPO SERVICES

          </div>

          <h1 className="mt-8 text-6xl font-black text-red-700 leading-tight lg:text-7xl">

            Knowledge
            

            Process Outsourcing

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-black">

            Smart research, AI-driven analytics,
            financial forecasting, and strategic
            intelligence solutions for modern businesses.

          </p>

        </motion.div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">

          {services.map(
            (service, index) => (

              <motion.div

                key={service.title}

                initial={{
                  opacity: 0,
                  y: 50,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.5,
                  delay:
                    index * 0.1,
                }}

                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}

                className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl"
              >

                {/* Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-25`}></div>

                {/* Icon */}
                <div className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${service.color} text-3xl shadow-[0_10px_40px_rgba(255,255,255,0.15)]`}>

                  {service.icon}

                </div>

                {/* Content */}
                <div className="relative z-10">

                  <h2 className="mt-8 text-3xl font-black">

                    {service.title}

                  </h2>

                  <p className="mt-5 leading-8 text-slate-400">

                    {service.description}

                  </p>

                  {/* Tools */}
                  <div className="mt-8 flex flex-wrap gap-3">

                    {service.tools.map(
                      (tool) => (

                        <span
                          key={tool}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl"
                        >

                          {tool}

                        </span>

                      )
                    )}

                  </div>

                </div>

              </motion.div>

            )
          )}

        </div>

      </div>

    </section>
  );
}

export default KPO;