import React from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaLightbulb,
  FaShoppingCart,
  FaWordpress,
  FaLaptopCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";

function IT() {
  const services = [
    {
      icon: <FaRobot />,
      title: "AI-Powered IT Solutions",
      description:
        "Leverage machine learning and AI to automate processes and gain insights.",
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API"],
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: <FaCode />,
      title: "Custom Software Development",
      description:
        "Tailored applications built to meet your specific business requirements.",
      technologies: ["React", "Node.js", "Python", "Java"],
      color: "from-violet-400 to-purple-500",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Computing Services",
      description: "Scalable cloud infrastructure and migration services.",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
      color: "from-sky-400 to-cyan-500",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with advanced security measures.",
      technologies: ["Firewall", "Encryption", "SIEM", "Penetration Testing"],
      color: "from-red-400 to-orange-500",
    },
    {
      icon: <FaLightbulb />,
      title: "IT Consulting Services",
      description: "Expert advice to optimize your IT strategy and operations.",
      technologies: ["System Analysis", "Architecture", "DevOps"],
      color: "from-yellow-400 to-amber-500",
    },
    {
      icon: <FaShoppingCart />,
      title: "Shopify Development",
      description: "Custom e-commerce stores with advanced features.",
      technologies: ["Shopify Liquid", "JavaScript", "GraphQL"],
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <FaWordpress />,
      title: "WordPress Development",
      description: "Custom websites and blogs with powerful CMS capabilities.",
      technologies: ["PHP", "MySQL", "JavaScript", "REST API"],
      color: "from-indigo-400 to-blue-500",
    },
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      description: "End-to-end web application development.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      color: "from-pink-400 to-fuchsia-500",
    },
    {
      icon: <FaServer />,
      title: "Backend Solutions",
      description: "Robust server-side logic and API development.",
      technologies: ["Node.js", "Python", "Java", "PostgreSQL"],
      color: "from-orange-400 to-red-500",
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description: "Efficient data storage and retrieval systems.",
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      color: "from-teal-400 to-cyan-500",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-4 sm:px-6 py-16 sm:py-24 text-black">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-0 h-[280px] w-[280px] sm:h-[500px] sm:w-[500px] rounded-full bg-cyan-500/10 blur-[100px] sm:blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[280px] w-[280px] sm:h-[500px] sm:w-[500px] rounded-full bg-red-500/10 blur-[100px] sm:blur-[150px]" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:70px_70px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14 sm:mb-20 text-center"
        >
          <div className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 sm:px-6 py-2 text-[11px] sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-red-600">
            FUTURE IT SOLUTIONS
          </div>

          <h1 className="mt-6 sm:mt-8 text-4xl sm:text-6xl text-red-600 font-black leading-tight lg:text-7xl">
            Advanced IT Services
          </h1>

          <p className="mx-auto mt-5 sm:mt-8 max-w-3xl text-sm sm:text-lg leading-7 sm:leading-9 text-black/60 px-2">
            Powerful digital solutions, AI automation, cloud infrastructure,
            and scalable software engineering for modern businesses.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid gap-5 sm:gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              whileHover={{ y: -10, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-[24px] sm:rounded-[35px] border border-black/10 bg-white p-5 sm:p-8 shadow-lg sm:shadow-xl transition-shadow duration-500 hover:shadow-2xl active:shadow-md"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-20`}
              />

              {/* Border on hover */}
              <div
                className={`pointer-events-none absolute inset-0 rounded-[24px] sm:rounded-[35px] border-2 border-transparent bg-gradient-to-br ${service.color} opacity-0 [mask:linear-gradient(#fff,#fff)_padding-box,linear-gradient(#fff,#fff)] [mask-composite:exclude] transition duration-500 group-hover:opacity-40`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br ${service.color} text-xl sm:text-3xl text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h2 className="mt-5 sm:mt-8 text-lg sm:text-2xl font-black leading-tight text-black">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="mt-3 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-8 text-black/55">
                  {service.description}
                </p>

                {/* Tech */}
                <div className="mt-5 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-black/10 bg-black/[0.03] px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-black/60 transition-colors duration-300 group-hover:border-red-500/30 group-hover:text-red-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IT;
