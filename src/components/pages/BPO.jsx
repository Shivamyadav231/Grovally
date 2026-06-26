import {
  motion,
} from "framer-motion";

import {
  FaRobot,
  FaDatabase,
  FaHeadset,
  FaShoppingCart,
  FaShieldAlt,
  FaTasks,
  FaGlobe,
  FaClipboardCheck,
  FaUserTie,
  FaChartLine,
} from "react-icons/fa";

export default function BPO() {

  const services = [

    {
      icon: <FaRobot />,
      title: "AI-powered customer support",
      description:
        "Intelligent chatbots and virtual assistants for 24/7 customer service.",
      tools: [
        "ChatGPT",
        "Dialogflow",
        "Zendesk",
      ],
      color:
        "from-cyan-400 to-blue-500",
    },

    {
      icon: <FaTasks />,
      title: "Back office automation",
      description:
        "Streamline administrative tasks with automated workflows.",
      tools: [
        "RPA Tools",
        "Zapier",
        "Power Automate",
      ],
      color:
        "from-purple-400 to-pink-500",
    },

    {
      icon: <FaDatabase />,
      title: "Data entry & processing",
      description:
        "Accurate data management and processing services.",
      tools: [
        "Excel",
        "Google Sheets",
        "Databases",
      ],
      color:
        "from-green-400 to-emerald-500",
    },

    {
      icon: <FaGlobe />,
      title: "Multilingual helpdesk",
      description:
        "Support in multiple languages for global customers.",
      tools: [
        "Translation APIs",
        "CRM Systems",
        "AI Translation",
      ],
      color:
        "from-orange-400 to-red-500",
    },

    {
      icon: <FaShoppingCart />,
      title: "E-commerce operations",
      description:
        "Manage online store operations and order fulfillment.",
      tools: [
        "Shopify",
        "WooCommerce",
        "Magento",
      ],
      color:
        "from-pink-400 to-fuchsia-500",
    },

    {
      icon: <FaClipboardCheck />,
      title: "Quality assurance",
      description:
        "Ensure high standards in all business processes.",
      tools: [
        "Audit Tools",
        "QA Reports",
        "Feedback Systems",
      ],
      color:
        "from-yellow-400 to-orange-500",
    },

    {
      icon: <FaUserTie />,
      title: "Virtual assistant services",
      description:
        "Personalized administrative support remotely.",
      tools: [
        "Asana",
        "Trello",
        "Email Tools",
      ],
      color:
        "from-indigo-400 to-violet-500",
    },

    {
      icon: <FaShieldAlt />,
      title: "Content moderation",
      description:
        "Monitor and moderate user-generated content.",
      tools: [
        "AI Moderation",
        "Human Review",
        "Community Rules",
      ],
      color:
        "from-rose-400 to-red-500",
    },

    {
      icon: <FaHeadset />,
      title: "Order management",
      description:
        "Handle order processing and logistics coordination.",
      tools: [
        "ERP Systems",
        "Inventory Software",
        "Shipping APIs",
      ],
      color:
        "from-teal-400 to-cyan-500",
    },

    {
      icon: <FaChartLine />,
      title: "Sales support",
      description:
        "Assist in lead generation and sales processes.",
      tools: [
        "CRM Software",
        "Lead Tracking",
        "Sales Scripts",
      ],
      color:
        "from-lime-400 to-green-500",
    },
  ];

  return (

    <section className="relative min-h-screen top-8 overflow-hidden bg-white px-6 py-24 text-black">

      {/* Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-fuchsia-500/10 blur-[140px]"></div>

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]"></div>

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

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          className="mb-20 text-center"
        >

          <div className="inline-flex rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-6 py-2 text-sm tracking-[0.3em] text-fuchsia-300">

            NEXT GEN BPO

          </div>

          <h1 className="mt-8 text-6xl text-red-600 leading-tight lg:text-7xl">

            Smart BPO
            

            Solutions

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-black">

            We combine AI automation, intelligent
            workflows, and human expertise to
            deliver world-class business process
            outsourcing solutions.

          </p>

        </motion.div>

        {/* CARDS */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => (

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
                delay: index * 0.08,
              }}

              whileHover={{
                y: -12,
                scale: 1.02,
              }}

              className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl"
            >

              {/* Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-20`}></div>

              {/* Border Glow */}
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

                {/* Tools */}
                <div className="mt-8 flex flex-wrap gap-3">

                  {service.tools.map((tool) => (

                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl"
                    >

                      {tool}

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