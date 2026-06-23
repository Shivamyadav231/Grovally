import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Education() {
    const navigate = useNavigate();
  const courses = [
    {
      title: "Digital Marketing",
      desc: "Learn SEO, Google Ads, Social Media Marketing, Content Marketing, Email Marketing and growth strategies.",
      icon: "📈",
    },
    {
      title: "Artificial Intelligence (AI)",
      desc: "Understand AI concepts, intelligent systems, and practical business applications of AI.",
      icon: "🤖",
    },
    {
      title: "AI Tools & Automation",
      desc: "Master ChatGPT, automation tools, prompt engineering and AI productivity systems.",
      icon: "⚡",
    },
    {
      title: "Machine Learning",
      desc: "Build predictive models and understand algorithms used in modern AI systems.",
      icon: "🧠",
    },
    {
      title: "Data Science",
      desc: "Learn data analysis, visualization, business intelligence and data-driven decision making.",
      icon: "📊",
    },
    {
      title: "Business Management",
      desc: "Develop leadership, planning and strategic decision-making skills.",
      icon: "💼",
    },
    {
      title: "Project Management",
      desc: "Learn project planning, execution, Agile and Scrum methodologies.",
      icon: "📋",
    },
    {
      title: "Financial Management",
      desc: "Master budgeting, financial planning and business finance management.",
      icon: "💰",
    },
    {
      title: "Human Resource Management",
      desc: "Learn recruitment, employee management and organizational development.",
      icon: "👥",
    },
    {
      title: "Operations Management",
      desc: "Improve efficiency through operational planning and process optimization.",
      icon: "⚙️",
    },
    {
      title: "Entrepreneurship Development",
      desc: "Build startups, create business models and develop entrepreneurial skills.",
      icon: "🚀",
    },
    {
      title: "Business Analytics",
      desc: "Transform business data into insights and improve strategic decisions.",
      icon: "📉",
    },
    {
      title: "Web Development",
      desc: "Create responsive and modern websites using industry technologies.",
      icon: "🌐",
    },
    {
      title: "Full Stack Development",
      desc: "Learn frontend, backend and database technologies for complete applications.",
      icon: "💻",
    },
    {
      title: "React JS Development",
      desc: "Build modern and scalable web applications using React.",
      icon: "⚛️",
    },
    {
      title: "Python Programming",
      desc: "Learn one of the world's most popular programming languages.",
      icon: "🐍",
    },
    {
      title: "Java Programming",
      desc: "Master object-oriented programming and enterprise applications.",
      icon: "☕",
    },
    {
      title: "Cyber Security",
      desc: "Learn ethical hacking, network security and cyber defense strategies.",
      icon: "🔐",
    },
    {
      title: "Cloud Computing",
      desc: "Understand AWS, cloud architecture and scalable infrastructure.",
      icon: "☁️",
    },
    {
      title: "UI/UX Design",
      desc: "Create beautiful, user-friendly and engaging digital experiences.",
      icon: "🎨",
    },
    {
      title: "Graphic Designing",
      desc: "Master branding, social media graphics and visual communication.",
      icon: "🖌️",
    },
    {
      title: "Search Engine Optimization (SEO)",
      desc: "Improve website rankings and increase organic traffic.",
      icon: "🔍",
    },
    {
      title: "Social Media Marketing",
      desc: "Learn Facebook, Instagram, LinkedIn and YouTube marketing strategies.",
      icon: "📱",
    },
    {
      title: "Content Marketing",
      desc: "Create high-quality content that drives traffic and conversions.",
      icon: "✍️",
    },
    {
      title: "Email Marketing",
      desc: "Build email campaigns and customer engagement strategies.",
      icon: "📧",
    },
    {
      title: "E-Commerce Management",
      desc: "Learn online store management and digital business operations.",
      icon: "🛒",
    },
    {
      title: "Business Communication",
      desc: "Develop professional communication and presentation skills.",
      icon: "🗣️",
    },
    {
      title: "Leadership & Team Management",
      desc: "Become an effective leader and manage high-performing teams.",
      icon: "👑",
    },
    {
      title: "Startup & Innovation Management",
      desc: "Learn innovation strategies and startup growth frameworks.",
      icon: "💡",
    },
    {
      title: "Digital Transformation Strategy",
      desc: "Understand how technology drives modern business transformation.",
      icon: "🌍",
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-red-100 text-red-600 font-semibold">
            🎓 Professional Training & Certification
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-gray-900">
            Education & <span className="text-red-600">Training Programs</span>
          </h1>

          <p className="max-w-5xl mx-auto mt-8 text-lg text-gray-600 leading-9">
            Grovally Business Solutions offers industry-focused education and
            certification programs designed to help students, professionals,
            entrepreneurs, and business leaders develop practical skills in
            Artificial Intelligence, Digital Marketing, Technology, Management,
            Finance, and Business Transformation. Our programs combine
            theoretical knowledge with real-world projects, expert mentorship,
            and hands-on training to prepare learners for successful careers
            and business growth in the digital era.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            ["30+", "Professional Courses"],
            ["1000+", "Students Trained"],
            ["100+", "Industry Projects"],
            ["24/7", "Learning Support"],
          ].map(([num, text], i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 text-center shadow-lg"
            >
              <h2 className="text-4xl font-bold text-red-600">{num}</h2>
              <p className="mt-3 text-gray-600">{text}</p>
            </div>
          ))}
        </div>

        {/* Courses */}
        <div className="mt-24">
          <h2 className="text-center text-4xl font-bold text-gray-900">
            Our Courses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-14">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-red-300 transition"
              >
                <div className="text-5xl">{course.icon}</div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {course.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {course.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-24 rounded-[40px] bg-gradient-to-r from-red-600 to-red-500 text-white p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold">
            Why Learn With Grovally?
          </h2>

          <p className="max-w-5xl mx-auto mt-8 text-lg leading-9">
            Our training programs are designed to bridge the gap between
            academic learning and industry requirements. We focus on practical
            skills, live projects, business case studies, and emerging
            technologies that help students and professionals become job-ready
            and future-ready. Whether you want to start a new career, upgrade
            your existing skills, or grow your business, our industry-oriented
            courses provide the knowledge and experience needed to succeed in
            today's rapidly evolving digital economy.
          </p>

          <button onClick={() => navigate("/contact")} className="mt-10 px-10 py-4 rounded-2xl bg-white text-red-600 font-bold hover:scale-105 transition">
            Explore Programs →
          </button>
        </div>
      </div>
    </section>
  );
}