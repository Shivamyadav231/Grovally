import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const API = "https://blogbackendss-1.onrender.com/api/blogs";

// Render.com free-tier backends sleep after inactivity and can take 30-60s
// to wake up on the first request. We give it real time + a few retries
// instead of failing immediately.
const FETCH_TIMEOUT_MS = 20000;
const MAX_RETRIES = 3;

function fetchWithTimeout(url, ms) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  return fetch(url, { signal: controller.signal }).finally(() =>
    clearTimeout(timer)
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-3xl border border-gray-200 overflow-hidden bg-white">
      <div className="w-full h-56 bg-gray-100 animate-pulse" />
      <div className="p-6 space-y-3">
        <div className="h-3 w-20 bg-gray-100 rounded animate-pulse" />
        <div className="h-6 w-4/5 bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
        <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse" />
      </div>
    </div>
  );
}

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [waking, setWaking] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const [selectedBlog, setSelectedBlog] = useState(null);
  const cancelled = useRef(false);

  useEffect(() => {
    cancelled.current = false;

    const fetchBlogs = async () => {
      setLoading(true);
      setError("");
      setWaking(false);

      for (let i = 1; i <= MAX_RETRIES; i++) {
        if (cancelled.current) return;
        setAttempt(i);

        // after the first slow/failed attempt, tell the user the server
        // is probably waking up from sleep rather than just spinning
        if (i > 1) setWaking(true);

        try {
          const response = await fetchWithTimeout(`${API}`, FETCH_TIMEOUT_MS);

          if (!response.ok) {
            throw new Error(`Failed to load blogs (${response.status})`);
          }

          const data = await response.json();
          if (cancelled.current) return;

          setBlogs(Array.isArray(data) ? data : []);
          setLoading(false);
          setWaking(false);
          return;
        } catch (err) {
          console.error(`Blogs fetch attempt ${i} failed:`, err);

          if (i === MAX_RETRIES) {
            if (cancelled.current) return;
            setError(
              err.name === "AbortError"
                ? "The server is taking too long to respond. It may be waking up from sleep — please try again in a moment."
                : err.message
            );
            setBlogs([]);
            setLoading(false);
            setWaking(false);
          } else {
            // small backoff before retrying
            await new Promise((r) => setTimeout(r, 1500 * i));
          }
        }
      }
    };

    fetchBlogs();

    return () => {
      cancelled.current = true;
    };
  }, []);

  const retryFetch = () => {
    cancelled.current = false;
    setBlogs([]);
    setError("");
    setLoading(true);
    setAttempt(0);
    // re-trigger the effect logic manually
    (async () => {
      for (let i = 1; i <= MAX_RETRIES; i++) {
        if (cancelled.current) return;
        setAttempt(i);
        if (i > 1) setWaking(true);
        try {
          const response = await fetchWithTimeout(`${API}`, FETCH_TIMEOUT_MS);
          if (!response.ok) throw new Error(`Failed to load blogs (${response.status})`);
          const data = await response.json();
          if (cancelled.current) return;
          setBlogs(Array.isArray(data) ? data : []);
          setLoading(false);
          setWaking(false);
          return;
        } catch (err) {
          if (i === MAX_RETRIES) {
            setError(
              err.name === "AbortError"
                ? "The server is taking too long to respond. It may be waking up from sleep — please try again in a moment."
                : err.message
            );
            setBlogs([]);
            setLoading(false);
            setWaking(false);
          } else {
            await new Promise((r) => setTimeout(r, 1500 * i));
          }
        }
      }
    })();
  };

  const openBlog = (blog) => {
    setSelectedBlog(blog);
    document.body.style.overflow = "hidden";
  };

  const closeBlog = () => {
    setSelectedBlog(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold tracking-widest text-red-600 uppercase">
            Grovally Blogs
          </p>
          <h1 className="text-4xl md:text-6xl text-black font-bold mt-3">
            Latest Blogs
          </h1>
          <div className="mt-4 h-1 w-16 bg-red-600 rounded-full mx-auto" />
        </motion.div>

        {/* LOADING — skeleton grid + cold-start notice */}
        {loading && (
          <div>
            <AnimatePresence>
              {waking && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center mb-8"
                >
                  <p className="inline-flex items-center gap-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    Server is waking up, this can take up to a minute… (attempt {attempt}/{MAX_RETRIES})
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </div>
        )}

        {/* ERROR */}
        {!loading && error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <h2 className="text-2xl font-semibold text-red-500">
              Unable to load blogs
            </h2>
            <p className="text-gray-500 mt-2 max-w-md mx-auto">{error}</p>
            <button
              onClick={retryFetch}
              className="mt-5 px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition active:scale-95"
            >
              Retry
            </button>
          </motion.div>
        )}

        {/* EMPTY */}
        {!loading && !error && blogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">No blogs published yet.</p>
          </div>
        )}

        {/* BLOG CARDS */}
        {!loading && !error && blogs.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <motion.article
                key={blog.id || blog._id || blog.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(idx, 6) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white hover:shadow-2xl hover:border-red-100 transition-shadow duration-300"
              >
                {/* IMAGE */}
                {blog.image ? (
                  <div
                    className="overflow-hidden cursor-pointer"
                    onClick={() => openBlog(blog)}
                  >
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                ) : (
                  <div
                    className="w-full h-56 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center cursor-pointer"
                    onClick={() => openBlog(blog)}
                  >
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}

                {/* CONTENT */}
                <div className="p-6">
                  {blog.category && (
                    <span className="inline-block text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                      {blog.category}
                    </span>
                  )}

                  <h2 className="text-2xl text-black font-bold mt-3 line-clamp-2 group-hover:text-red-600 transition-colors">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 mt-3 line-clamp-3">
                    {blog.description}
                  </p>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-400">{blog.author}</span>

                    <button
                      onClick={() => openBlog(blog)}
                      className="font-semibold text-red-600 hover:text-red-800 hover:translate-x-1 transition cursor-pointer"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>

      {/* BLOG FULL CONTENT POPUP */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={closeBlog}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={closeBlog}
                className="fixed md:absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-black/70 text-white text-2xl flex items-center justify-center hover:bg-red-600 transition active:scale-90"
              >
                ×
              </button>

              {/* FULL IMAGE */}
              {selectedBlog.image && (
                <div className="w-full bg-black">
                  <img
                    src={selectedBlog.image}
                    alt={selectedBlog.title}
                    className="w-full max-h-[600px] object-contain mx-auto"
                  />
                </div>
              )}

              {/* BLOG CONTENT */}
              <div className="max-w-4xl mx-auto px-6 md:px-10 py-10">
                {selectedBlog.category && (
                  <span className="inline-block text-sm font-bold tracking-wider uppercase text-red-600">
                    {selectedBlog.category}
                  </span>
                )}

                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                  {selectedBlog.title}
                </h1>

                <div className="flex flex-wrap gap-3 items-center text-gray-500 mt-5">
                  {selectedBlog.author && <span>By {selectedBlog.author}</span>}
                  {selectedBlog.author && selectedBlog.createdAt && <span>•</span>}
                  {selectedBlog.createdAt && (
                    <span>
                      {new Date(selectedBlog.createdAt).toLocaleDateString(
                        "en-IN",
                        { day: "numeric", month: "long", year: "numeric" }
                      )}
                    </span>
                  )}
                </div>

                {selectedBlog.description && (
                  <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mt-8 font-medium">
                    {selectedBlog.description}
                  </p>
                )}

                {selectedBlog.content && (
                  <div className="mt-10 text-lg md:text-xl text-gray-700 leading-8 whitespace-pre-line">
                    {selectedBlog.content}
                  </div>
                )}

                <div className="mt-12 pt-8 border-t">
                  <button
                    onClick={closeBlog}
                    className="px-7 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition active:scale-95"
                  >
                    Close Blog
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
