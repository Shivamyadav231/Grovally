import React from "react";

import {
  motion,
} from "framer-motion";

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
      technologies: [
        "Python",
        "TensorFlow",
        "PyTorch",
        "OpenAI API",
      ],
      color:
        "from-cyan-400 to-blue-500",
    },

    {
      icon: <FaCode />,
      title: "Custom Software Development",
      description:
        "Tailored applications built to meet your specific business requirements.",
      technologies: [
        "React",
        "Node.js",
        "Python",
        "Java",
      ],
      color:
        "from-violet-400 to-purple-500",
    },

    {
      icon: <FaCloud />,
      title: "Cloud Computing Services",
      description:
        "Scalable cloud infrastructure and migration services.",
      technologies: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
      ],
      color:
        "from-sky-400 to-cyan-500",
    },

    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity Solutions",
      description:
        "Protect your digital assets with advanced security measures.",
      technologies: [
        "Firewall",
        "Encryption",
        "SIEM",
        "Penetration Testing",
      ],
      color:
        "from-red-400 to-orange-500",
    },

    {
      icon: <FaLightbulb />,
      title: "IT Consulting Services",
      description:
        "Expert advice to optimize your IT strategy and operations.",
      technologies: [
        "System Analysis",
        "Architecture",
        "DevOps",
      ],
      color:
        "from-yellow-400 to-amber-500",
    },

    {
      icon: <FaShoppingCart />,
      title: "Shopify Development",
      description:
        "Custom e-commerce stores with advanced features.",
      technologies: [
        "Shopify Liquid",
        "JavaScript",
        "GraphQL",
      ],
      color:
        "from-green-400 to-emerald-500",
    },

    {
      icon: <FaWordpress />,
      title: "WordPress Development",
      description:
        "Custom websites and blogs with powerful CMS capabilities.",
      technologies: [
        "PHP",
        "MySQL",
        "JavaScript",
        "REST API",
      ],
      color:
        "from-indigo-400 to-blue-500",
    },

    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      description:
        "End-to-end web application development.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      color:
        "from-pink-400 to-fuchsia-500",
    },

    {
      icon: <FaServer />,
      title: "Backend Solutions",
      description:
        "Robust server-side logic and API development.",
      technologies: [
        "Node.js",
        "Python",
        "Java",
        "PostgreSQL",
      ],
      color:
        "from-orange-400 to-red-500",
    },

    {
      icon: <FaDatabase />,
      title: "Database Management",
      description:
        "Efficient data storage and retrieval systems.",
      technologies: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
      ],
      color:
        "from-teal-400 to-cyan-500",
    },
  ];

  return (

    <section className="relative min-h-screen overflow-hidden bg-white px-6 py-24 text-black">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]"></div>

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px]"></div>

      </div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HERO */}
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

          <div className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-6 py-2 text-sm tracking-[0.3em] text-red-300">

            FUTURE IT SOLUTIONS

          </div>

          <h1 className="mt-8 text-6xl  text-red-600 font-black leading-tight lg:text-7xl">

            Advanced
            <br />

            IT Services

          </h1>

          <p className="mx-auto mt-8 text-black max-w-3xl text-lg leading-9">

            Powerful digital solutions,
            AI automation, cloud
            infrastructure, and scalable
            software engineering for
            modern businesses.

          </p>

        </motion.div>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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
                    index * 0.08,
                }}

                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}

                className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl"
              >

                {/* Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-20`}></div>

                {/* Border */}
                <div className={`absolute inset-0 rounded-[35px] border border-transparent bg-gradient-to-br ${service.color} opacity-0 transition duration-500 group-hover:opacity-20`}></div>

                <div className="relative z-10">

                  {/* Icon */}
                  <div className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${service.color} text-3xl shadow-[0_10px_40px_rgba(255,255,255,0.15)]`}>

                    {service.icon}

                  </div>

                  {/* Title */}
                  <h2 className="mt-8 text-2xl font-black leading-tight">

                    {service.title}

                  </h2>

                  {/* Description */}
                  <p className="mt-5 leading-8 text-slate-400">

                    {service.description}

                  </p>

                  {/* Tech */}
                  <div className="mt-8 flex flex-wrap gap-3">

                    {service.technologies.map(
                      (tech) => (

                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl"
                        >

                          {tech}

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

export default IT;