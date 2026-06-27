import React from "react";

const services = [
  {
    title: "AI Chatbots",
    desc: "Smart automation bots for business support.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
  },
  {
    title: "Generative AI",
    desc: "GPT-based content and automation solutions.",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=800",
  },
  {
    title: "Machine Learning",
    desc: "Predictive models and intelligent systems.",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=800",
  },
  {
    title: "Automation",
    desc: "Business workflow automation systems.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    title: "Data Analytics",
    desc: "Data insights for better decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    title: "Predictive Analytics",
    desc: "Future forecasting with AI models.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
  },
  {
    title: "Natural Language Processing",
    desc: "Human language understanding AI.",
    image: "https://images.unsplash.com/photo-1677756119517-756a7b7f5b7e?w=800",
  },
  {
    title: "Computer Vision",
    desc: "Image and object recognition systems.",
    image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800",
  },
  {
    title: "AI Assistants",
    desc: "Virtual AI-powered assistants.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
  },
  {
    title: "Document AI",
    desc: "Smart document processing system.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800",
  },
  {
    title: "AI Integration",
    desc: "AI integration in existing systems.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800",
  },
  {
    title: "Voice AI",
    desc: "Speech recognition and voice bots.",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800",
  },
  {
    title: "RPA Automation",
    desc: "Robotic process automation tools.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
  },
  {
    title: "Recommendation Systems",
    desc: "Smart product suggestions.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  },
  {
    title: "Custom AI Solutions",
    desc: "Tailor-made AI for your business.",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800",
  },
];

function AI() {
  return (
    <section className="min-h-screen bg-gray-50 py-24 px-6">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
          AI & <span className="text-red-600">Automation</span>
        </h1>

        <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-lg">
          Modern AI solutions to automate, analyze and scale your business.
        </p>
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
              hover:-translate-y-2
              cursor-pointer
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

export default AI;