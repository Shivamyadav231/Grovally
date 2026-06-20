import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

function Tender() {
  return (
    <section className="relative  top-10 min-h-screen overflow-hidden bg-white px-6 py-20">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
            Government & Private Tender Services
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black text-gray-900">
            Smart
            <span className="block bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              Tender Solutions
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            We help businesses find, apply, and win government & private tenders
            with complete documentation, registration, and submission support.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {[
            {
              title: "Tender Identification",
              desc: "Find the right government and private tenders for your business.",
            },
            {
              title: "GeM Portal Support",
              desc: "Complete registration and management on GeM portal.",
            },
            {
              title: "Bid Submission",
              desc: "Professional bid preparation and submission assistance.",
            },
            {
              title: "Documentation Help",
              desc: "All required legal and technical documents preparation.",
            },
            {
              title: "Consultancy Services",
              desc: "Expert guidance to increase your winning chances.",
            },
            {
              title: "End-to-End Support",
              desc: "From registration to winning tenders — we handle everything.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-8 shadow-lg transition"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition" />

              <div className="relative z-10">

                <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 mb-5" />

                <h2 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h2>

                <p className="mt-3 text-gray-600 leading-7 text-sm">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="rounded-[30px] bg-gradient-to-r from-red-600 to-orange-500 p-10 text-white shadow-2xl">

            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Win More Tenders?
            </h2>

            <p className="mt-4 text-white/80">
              Get expert support and increase your success rate in government & private tenders.
            </p>
           <Link
  to="/contact"
  className="
  mt-8 inline-flex items-center justify-center
  rounded-full
  bg-white
  px-8 py-4
  font-bold
  text-red-600
  shadow-lg
  transition-all duration-300
  hover:scale-105
  hover:shadow-xl
  hover:bg-red-50
  "
>
  Get Started
</Link>

            

          </div>
        </div>

      </div>
    </section>
  );
}

export default Tender;