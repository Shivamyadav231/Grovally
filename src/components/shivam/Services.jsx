import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "IT Solutions",
      image:
        "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781853059/AI-Powered-Solutions-1024x768_mb7msq.jpg",
      color: "from-red-500 to-red-700",
      path: "/it",
      desc:
        "AI Solutions, Database Management, Full Stack Development, Cloud Services, Software Development, and Digital Transformation solutions tailored for modern businesses.",
    },
    {
      title: "Finance Services",
      image:
        "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781851589/role-ai-digital-banking-online-600nw-2761269275_pz4pkc.webp",
      color: "from-red-500 to-red-700",
      path: "/business",
      desc:
        "Loans, Financial Consulting, Investment Support, Credit Solutions, and Business Finance Services designed to help organizations achieve financial stability and growth.",
    },
    {
      title: "LPO Services",
      image:
        "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781853030/NewPhotonicsLPOopticalconnectivityinnovationblog_ldn6kb.webp",
      color: "from-red-500 to-red-700",
      path: "/ourservices",
      desc:
        "Legal Process Outsourcing, Contract Management, Documentation, Compliance Support, and Legal Research solutions for businesses worldwide.",
    },
    {
      title: "BPO Services",
      image:
        "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781851010/Untitled-1-3_mhhzme.webp",
      color: "from-red-500 to-red-700",
      path: "/bpo",
      desc:
        "Customer Support, Back Office Operations, Technical Support, Data Management, and Call Center Services to improve efficiency and customer satisfaction.",
    },
    {
      title: "KPO Services",
      image:
        "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781851650/360_F_1768058516_bLXo6SSvp6cZGKLicCewjPCT6z1KxrRH_ijziqq.jpg",
      color: "from-red-500 to-red-700",
      path: "/kpo",
      desc:
        "Research, Analytics, Business Intelligence, Data Processing, and Knowledge Management solutions that empower organizations to make informed decisions.",
    },
    {
      title: "Tool Services",
      image:
        "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1782107797/tool_anj7le.jpg",
      color: "from-red-500 to-red-700",
      path: "/finance",
      desc:
        "AI-powered CRM for banks and NBFCs featuring lead management, customer onboarding, loan application tracking, EMI reminders, document verification, and analytics solutions.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-red-100 blur-3xl opacity-40" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-red-200 blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20 mt-10">
          <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-600 font-semibold">
            🚀 Premium Business Solutions
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-black text-gray-900">
            Our{" "}
            <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>

          <p className="mt-8 max-w-4xl mx-auto text-lg leading-9 text-gray-600">
            At Grovally Business Solutions, we provide comprehensive business
            and technology services designed to help organizations innovate,
            grow, and succeed in the digital era. From advanced IT solutions
            and AI automation to finance consulting, BPO, KPO, and LPO
            services, our expert team delivers customized strategies that
            improve efficiency, reduce operational costs, and create
            sustainable business growth. We combine technology, expertise, and
            innovation to empower businesses and unlock new opportunities in an
            ever-changing market.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10 }}
            >
              <Link to={service.path}>
                <div className="overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    <h2 className="absolute bottom-5 left-5 text-2xl font-bold text-white">
                      {service.title}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between">
                    <p className="text-gray-600 leading-7 min-h-[130px]">
                      {service.desc}
                    </p>

                    <button
                      className={`mt-6 w-full rounded-xl bg-gradient-to-r ${service.color} py-3 text-white font-semibold transition-all duration-300 hover:scale-105`}
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