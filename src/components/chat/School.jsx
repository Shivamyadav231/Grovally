import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Education() {
  const navigate = useNavigate();

  const courses = [
    {
      title: "Digital Marketing",
      desc: "SEO, Ads, Social Media & Growth strategies.",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800",
    },
    {
      title: "Artificial Intelligence",
      desc: "AI concepts, tools & real-world applications.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    },
    {
      title: "Machine Learning",
      desc: "Predictive models & smart algorithms.",
      image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=800",
    },
    {
      title: "Data Science",
      desc: "Data analysis, BI & visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
    {
      title: "Web Development",
      desc: "Modern responsive websites & apps.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    },
    {
      title: "Full Stack Development",
      desc: "Frontend + Backend + Database mastery.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    },
    {
      title: "Cyber Security",
      desc: "Ethical hacking & network protection.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    },
    {
      title: "Cloud Computing",
      desc: "AWS, Azure & cloud architecture.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    },
    {
      title: "UI/UX Design",
      desc: "Modern product & interface design.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800",
    },
    {
      title: "Graphic Design",
      desc: "Branding, posters & creative visuals.",
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800",
    },
    {
      title: "SEO Mastery",
      desc: "Rank websites on Google top page.",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800",
    },
    {
      title: "Business Management",
      desc: "Leadership, planning & strategy.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
    },
    {
      title: "Project Management",
      desc: "Agile, Scrum & execution skills.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    },
    {
      title: "Startup Development",
      desc: "Build and scale your startup idea.",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800",
    },
    {
      title: "AI Automation Tools",
      desc: "ChatGPT, automation & productivity tools.",
      image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center">
          <span className="inline-block px-6 mt-8 py-2 rounded-full bg-red-100 text-red-600 font-medium">
            🎓 Education & Certification Hub
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-gray-900">
            Learn. Build. <span className="text-red-600">Grow.</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-500 text-lg">
            Industry-focused training programs designed for real skills & career growth.
          </p>
        </div>

        {/* COURSES */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">

          {courses.map((course, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="
                group relative bg-white rounded-3xl overflow-hidden
                border border-gray-200 shadow-sm
                hover:shadow-2xl transition
                cursor-pointer
              "
            >

              {/* IMAGE */}
              <div className="h-48 overflow-hidden relative">

                <img
                  src={course.image}
                  alt={course.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110 transition duration-500
                  "
                />

                {/* overlay */}
                <div className="
                  absolute inset-0 bg-gradient-to-t
                  from-black/50 to-transparent
                " />

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition">
                  {course.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {course.desc}
                </p>

              </div>

              {/* glow border effect */}
              <div className="
                absolute inset-0 rounded-3xl
                ring-0 group-hover:ring-2
                group-hover:ring-red-400 transition
              " />

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-24 text-center">

          <div className="
            bg-gradient-to-r from-red-600 to-red-500
            text-white rounded-3xl p-14 shadow-2xl
          ">

            <h2 className="text-4xl font-bold">
              Start Learning Today 🚀
            </h2>

            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Get industry-ready skills with real projects, expert guidance & certification.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="
                mt-8 px-10 py-3 bg-white text-red-600
                font-semibold rounded-xl
                hover:scale-105 transition
              "
            >
              Enroll Now →
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}