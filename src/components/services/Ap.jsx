import React from "react";

const services = [
  {
    title: "Web App Development",
    desc: "Scalable and secure web apps.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
  {
    title: "Mobile App Development",
    desc: "Android & iOS applications.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
  },
  {
    title: "Enterprise Applications",
    desc: "Business-level applications.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800",
  },
  {
    title: "E-Commerce Apps",
    desc: "Online store solutions.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
  },
  {
    title: "SaaS Development",
    desc: "Cloud-based software systems.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
  },
  {
    title: "CRM Development",
    desc: "Customer management systems.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    title: "ERP Solutions",
    desc: "Business process automation.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
  },
  {
    title: "PWA Development",
    desc: "Fast app-like web experiences.",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800",
  },
  {
    title: "API Integration",
    desc: "Secure system connectivity.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
  },
  {
    title: "Cloud Applications",
    desc: "Scalable cloud systems.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
  },
  {
    title: "UI/UX Design",
    desc: "Modern interface design.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800",
  },
  {
    title: "App Modernization",
    desc: "Upgrade legacy systems.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
  },
  {
    title: "Support & Maintenance",
    desc: "Ongoing technical support.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
  },
  {
    title: "Database Design",
    desc: "Secure data architecture.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800",
  },
  {
    title: "Testing & QA",
    desc: "Reliable application testing.",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800",
  },
];

function Ap() {
  return (
    <section className="min-h-screen bg-gray-50 py-24 px-6">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          Application <span className="text-red-600">Development</span>
        </h1>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
          We build powerful, scalable and modern applications for digital transformation.
        </p>

        <button className="
          mt-8 px-8 py-3 bg-red-600 text-white
          rounded-full hover:bg-red-700 hover:scale-105
          transition shadow-lg
        ">
          Get Free Consultation
        </button>
      </div>

      {/* CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {services.map((item, i) => (
          <div
            key={i}
            className="
              group bg-white rounded-2xl overflow-hidden
              border border-gray-200 shadow-sm
              hover:shadow-2xl transition
              hover:-translate-y-2 cursor-pointer
            "
          >

            {/* IMAGE */}
            <div className="h-44 overflow-hidden relative">

              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full h-full object-cover
                  group-hover:scale-110 transition duration-500
                "
              />

              {/* overlay */}
              <div className="
                absolute inset-0 bg-gradient-to-t
                from-black/60 to-transparent
              " />

            </div>

            {/* CONTENT */}
            <div className="p-5">

              <h3 className="
                text-lg font-semibold text-gray-900
                group-hover:text-red-600 transition
              ">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {item.desc}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Ap;