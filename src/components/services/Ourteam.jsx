import React from "react";

const team = [
 
  {
    name: "Chetan Singh Prajapati",
    role: "CEO & Founder",
    image: "",
    description: "Leads company vision, strategy, and overall business growth.",
  },
  {
    name: "Deepanshu Pal",
    role: "Project Manager",
    image: "",
    description: "Manages projects, timelines, and client communication.",
  },
  {
    name: "Shivam Yadav",
    role: "AI Full Stack Developer",
    image: "",
    description: "Builds AI-powered full-stack applications with expertise in frontend, backend, and intelligent systems.",
  },

  
];

function Ourteam() {
  return (
    <section className="min-h-screen bg-white py-24 px-6">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
          Our Team
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
          Meet the people behind our success — building ideas into reality with passion and precision.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">

        {team.map((member, i) => (
          <div
            key={i}
            className="
              group bg-white rounded-3xl overflow-hidden
              border border-gray-200
              shadow-sm hover:shadow-2xl
              transition duration-300
              hover:-translate-y-3
              cursor-pointer
            "
          >

            {/* IMAGE */}
            <div className="relative h-72 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="
                  w-full h-full object-cover
                  group-hover:scale-110
                  transition duration-500
                "
              />

              {/* soft overlay */}
              <div className="
                absolute inset-0 bg-gradient-to-t from-black/50 to-transparent
              "></div>
            </div>

            {/* CONTENT */}
            <div className="p-6 text-center">

              <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-red-600 transition">
                {member.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {member.role}
              </p>

              {/* separator line */}
              <div className="w-12 h-[2px] bg-gray-200 mx-auto my-5 group-hover:bg-red-500 transition"></div>

              <p className="text-gray-500 text-sm leading-relaxed">
                {member.description}
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Ourteam;