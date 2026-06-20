
import React from "react";

import { motion } from "framer-motion";

function Blog() {
  return (
    <section className="min-h-screen  bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mt-7  rounded-full bg-red-100 text-red-600 font-semibold text-sm">
            Grovally Insights
          </span>

          <h1 className="mt-5 text-5xl font-extrabold text-red-700">
            Latest Blogs & Articles
          </h1>

          <p className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto">
            Explore the latest updates, business strategies, AI innovations,
            digital marketing trends, BPO solutions, and technology insights.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {[, ].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={`${item}`}
                alt="blog"
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <span className="text-red-600 font-semibold text-sm">
                  Business Growth
                </span>

                <h2 className="mt-3 text-xl font-bold text-slate-900">
                  How AI Is Transforming Modern Businesses
                </h2>

                <p className="mt-3 text-slate-600">
                  Discover how AI automation, customer support solutions,
                  and smart analytics are helping businesses scale faster.
                </p>

                <button className="mt-5 text-red-600 font-semibold hover:text-red-700">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;

