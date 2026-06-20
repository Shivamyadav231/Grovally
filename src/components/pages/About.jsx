import React from "react";
import { motion } from "framer-motion";

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
    "Training & Corporate Learning",
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-20">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-red-100 blur-3xl opacity-40" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-red-200 blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-red-100 border border-red-200 text-red-700 text-sm font-semibold tracking-[3px]">
            ABOUT GROVALLY
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-gray-900">
            Empowering Businesses Through
            <span className="block bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              Technology & Innovation
            </span>
          </h1>

          <p className="max-w-4xl mx-auto mt-8 text-lg leading-9 text-gray-600">
            Grovally is a business solutions company helping startups, SMEs,
            and enterprises scale through IT solutions, AI automation, finance
            consulting, BPO services, and digital transformation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-24 grid lg:grid-cols-2 gap-10">
          {/* Who We Are */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-[30px] overflow-hidden border border-gray-100 shadow-lg bg-white"
          >
            <img
              src="https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781854330/360_F_532812571_2Fzs20otX5pbSCqZG4jXEROYEiBExPQA_oyxtci.jpg"
              alt="Who We Are"
              className="w-full h-64 object-cover"
            />

            <div className="p-10">
              <h2 className="text-3xl font-bold mb-4 text-red-600">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-8">
  Grovally Business Solutions is a modern, technology-driven organization
  dedicated to transforming businesses through innovative digital solutions and
  strategic consulting services. Our company specializes in delivering
  end-to-end solutions across information technology, artificial intelligence,
  business process management, finance, and digital transformation.

  With a strong focus on quality, innovation, and customer satisfaction, we
  work closely with businesses to understand their challenges and provide
  scalable solutions that drive efficiency and long-term growth. Our goal is
  to become a trusted partner for organizations seeking to leverage technology
  and innovation to achieve their business objectives.
</p>

              
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="rounded-[30px] overflow-hidden border border-gray-100 shadow-lg bg-white"
          >
            <img
              src="https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781870835/360_F_523633866_Hm1H8jiHUuvHEwEvZKsC9jZwLEYdM3Bz_enhu24.jpg"
              alt="Our Mission"
              className="w-full h-64 object-cover"
            />

            <div className="p-10">
              <h2 className="text-3xl font-bold mb-4 text-red-600">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-8">
  Our mission is to empower businesses by providing innovative technology,
  intelligent automation, and strategic consulting solutions that create
  measurable value. We aim to simplify complex business processes, improve
  operational efficiency, and enable organizations to make informed decisions
  through technology and data-driven strategies.

  We are committed to building long-term relationships with our clients by
  delivering reliable, scalable, and future-ready solutions that support their
  growth and success in an increasingly digital and competitive world.
</p>
              

              
            </div>
          </motion.div>
        </div>

        {/* Services */}
        <div className="mt-24">
          <h2 className="text-center text-4xl font-bold text-red-600 mb-12">
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 text-center text-gray-700 hover:border-red-500 hover:text-red-600 cursor-pointer"
              >
                {service}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="mt-24 grid lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-[25px] border bg-white shadow-sm">
            <img
              src="https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781869668/Techtalk-ai-laptop-hero_bacgnh.jpg"
              alt="Innovation"
              className="w-full h-52 object-cover rounded-2xl mb-5"
            />

            <h3 className="text-2xl font-bold text-red-600 mb-3">
              Innovation
            </h3>
            <p className="text-gray-600 leading-7">
  We believe innovation is the key to business success. By leveraging
  artificial intelligence, automation, and modern digital solutions, we help
  organizations solve complex challenges, improve productivity, and create
  smarter ways of working. Our innovative approach enables businesses to stay
  ahead in an ever-evolving market.
</p>

            
          </div>

          <div className="p-8 rounded-[25px] border bg-white shadow-sm">
            <img
              src="https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781869609/stock-photo-futuristic-robot-artificial-intelligence-huminoid-programming-coding-technology-development-machine_a5llgr.webp"
              alt="Technology"
              className="w-full h-52 object-cover rounded-2xl mb-5"
            />

            <h3 className="text-2xl font-bold text-red-600 mb-3">
              Technology
            </h3>
            <p className="text-gray-600 leading-7">
  Technology is at the core of everything we do. We design and develop
  scalable software, web applications, mobile solutions, and enterprise
  systems that empower businesses to streamline operations, enhance customer
  experiences, and accelerate digital transformation with confidence.
</p>

            
          </div>

          <div className="p-8 rounded-[25px] border bg-white shadow-sm">
            <img
              src="https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781870555/business-goal-growth-strategy-focuses-business-goal-growth-roadmap-development-team-driven-achievement-439082173_lc9dby.webp"
              alt="Growth"
              className="w-full h-52 object-cover rounded-2xl mb-5"
            />

            <h3 className="text-2xl font-bold text-red-600 mb-3">Growth</h3>
            <p className="text-gray-600 leading-7">
  Our growth-focused strategies are designed to help businesses achieve
  sustainable success. Through data-driven insights, strategic planning, and
  innovative solutions, we enable organizations to increase revenue, improve
  efficiency, expand their market presence, and unlock new opportunities for
  long-term growth.
</p>

            
          </div>
        </div>

        {/* Vision */}
        
          
          <div className="mt-24 text-center p-12 rounded-[30px] bg-gradient-to-r from-red-600 to-red-500 text-white shadow-xl">
  <h2 className="text-4xl md:text-5xl font-bold">
    Our Vision
  </h2>

  <p className="max-w-5xl mx-auto mt-8 text-lg leading-9 text-red-50">
    At Grovally Business Solutions, our vision is to become a globally trusted
    leader in technology, business consulting, and digital transformation
    services. We aspire to empower startups, small and medium enterprises, and
    large organizations by providing innovative solutions that drive
    sustainable growth, operational excellence, and long-term success.

    We envision a future where businesses can seamlessly adopt modern
    technologies, leverage artificial intelligence, and embrace digital
    innovation to overcome challenges and unlock new opportunities. Through
    our commitment to excellence, customer satisfaction, and continuous
    innovation, we aim to create meaningful impact and become a strategic
    partner in our clients' growth journey.

    Our goal is to build a smarter, more connected, and technology-driven
    business ecosystem where organizations of every size can thrive,
    compete globally, and achieve their full potential.
  </p>
</div>

          
        </div>
      
    </section>
  );
}