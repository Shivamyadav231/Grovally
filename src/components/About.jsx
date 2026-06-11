import { motion } from "framer-motion";
import {
  FaRocket,
  FaBrain,
  FaChartLine,
  FaGlobe,
  FaLaptopCode,
  FaUsers,
} from "react-icons/fa";

export default function About() {
  const services = [
    "IT Solutions",
    "AI Automation",
    "Web Development",
    "Mobile Apps",
    "Digital Marketing",
    "BPO Services",
    "KPO Services",
    "Financial Consulting",
    "Funding Assistance",
    "Business Strategy",
    "Import & Export Services",
    "Traditional Marketing",
    "Logistics & Supply Chain Solutions",
    "Training &  Corporate Learning",
    "import & Export Services"



  ];

  return (
    <section className="relative top-5 overflow-hidden bg-white text-gray-900">

      {/* Soft Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-red-100 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gray-100 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="px-6 py-2 rounded-full  bg-red-50 border border-red-100 text-red-700 text-sm tracking-[3px]">
            ABOUT GROVALLY
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
            Empowering Businesses Through
            <span className="block text-red-600">
              Technology & Innovation
            </span>
          </h1>

          <p className="max-w-4xl mx-auto mt-8 text-lg leading-9 text-gray-600">
            Grovally is a business solutions company helping startups,
            SMEs and enterprises scale through IT solutions, AI automation,
            finance consulting, BPO & digital transformation.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-24 grid lg:grid-cols-2 gap-10">

          {/* WHO WE ARE */}
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[30px] p-10 border border-gray-100 shadow-sm bg-white"
          >
            <FaUsers className="text-5xl mb-6 text-red-500" />

            <h2 className="text-3xl font-bold mb-4">
              Who We Are
            </h2>

            <p className="text-gray-600 leading-8">
              We are a modern technology-driven company helping businesses
              grow using smart digital systems, automation, and strategic consulting.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              Our focus is simple — build scalable systems that improve efficiency,
              reduce cost and increase revenue.
            </p>
          </motion.div>

          {/* MISSION */}
          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[30px] p-10 border border-gray-100 shadow-sm bg-white"
          >
            <FaRocket className="text-5xl mb-6 text-red-500" />

            <h2 className="text-3xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-8">
              To empower businesses with modern technology, AI systems,
              and financial consulting that creates real-world impact.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              We aim to build long-term partnerships, not just projects.
            </p>
          </motion.div>
        </div>

        {/* SERVICES */}
        <div className="mt-24">
          <h2 className="text-center text-4xl font-black mb-12">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 text-center text-gray-700 hover:border-red-200 hover:text-red-600 transition"
              >
                {service}
              </motion.div>
            ))}
          </div>
        </div>

        {/* APPROACH */}
        <div className="mt-24 grid lg:grid-cols-3 gap-8">

          <div className="p-8 rounded-[25px] border bg-white shadow-sm">
            <FaBrain className="text-4xl text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Innovation</h3>
            <p className="text-gray-600 leading-7">
              AI-powered solutions and modern systems to solve real business problems.
            </p>
          </div>

          <div className="p-8 rounded-[25px] border bg-white shadow-sm">
            <FaLaptopCode className="text-4xl text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Technology</h3>
            <p className="text-gray-600 leading-7">
              Scalable software, web apps, and enterprise systems.
            </p>
          </div>

          <div className="p-8 rounded-[25px] border bg-white shadow-sm">
            <FaChartLine className="text-4xl text-red-500 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Growth</h3>
            <p className="text-gray-600 leading-7">
              Business strategies focused on revenue, scaling and efficiency.
            </p>
          </div>
        </div>

        {/* VISION */}
        <div className="mt-24 text-center p-12 rounded-[30px] border bg-gradient-to-b from-white to-red-50 shadow-sm">

          <FaGlobe className="text-6xl text-red-500 mx-auto mb-6" />

          <h2 className="text-4xl font-black">
            Our Vision
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-8">
            To become a global leader in digital transformation,
            helping businesses grow through technology, finance and innovation.
          </p>

        </div>

      </div>
    </section>
  );
}