import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { blogs } from "./Blogdata";

function Blog({ limit = false }) {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentBlog, setCurrentBlog] = useState(0);

  // Sort blogs once
 const latestBlogs = useMemo(() => {
  return [...blogs].sort((a, b) => b.id - a.id);
}, []);
  // HOME = 3 rotating blogs
  const displayedBlogs = limit
  ? latestBlogs.slice(0, 3)
  : latestBlogs;

  // Auto slider only for HOME
  useEffect(() => {
  if (!limit) return;


    const interval = setInterval(() => {
      setCurrentBlog((prev) =>
        prev + 1 >= latestBlogs.length - 2 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [limit, latestBlogs.length]);

  return (
    <section className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block mt-10 px-4 py-2 rounded-full bg-red-100 text-red-600 font-semibold text-sm">
            Grovally Insights
          </span>

          <h1 className="mt-5 text-5xl font-extrabold text-red-700">
            Latest Blogs & Articles
          </h1>

          <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">
            Explore the latest updates, business strategies, AI innovations,
            digital marketing trends, and technology insights.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ y: -8 }}
              className="bg-white shadow-lg rounded-3xl overflow-hidden"
            >
              <img
                src={
                  blog.image ||
                  "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781947737/future-of-ai-in-business1_whq889.jpg"
                }
                alt={blog.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <span className="text-red-600 font-semibold text-sm">
                  Technology & Innovation
                </span>

                <h2 className="mt-3 text-2xl font-bold text-slate-900">
                  {blog.title}
                </h2>

                <p className="mt-3 text-slate-600">
                  {blog.shortDesc}
                </p>

                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="mt-5 text-red-600 font-semibold hover:text-red-700"
                >
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        {selectedBlog && (
          <div
            className="fixed inset-0 z-50 bg-black/70 overflow-y-auto p-5"
            onClick={() => setSelectedBlog(null)}
          >
            <div
              className="max-w-5xl mx-auto bg-white rounded-3xl p-8 mt-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedBlog(null)}
                className="float-right text-2xl font-bold text-red-600"
              >
                ✕
              </button>

              <h2 className="text-4xl font-bold text-red-700 mb-6">
                {selectedBlog.title}
              </h2>

              <img
                src={
                  selectedBlog.image ||
                  "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_600/v1781947737/future-of-ai-in-business1_whq889.jpg"
                }
                alt={selectedBlog.title}
                className="w-full h-full object-cover rounded-2xl mb-8"
              />

              <div className="whitespace-pre-line text-gray-700 leading-8">
                {selectedBlog.content}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Blog;