import React from "react";

const services = [
  {
    title: "Logo Design",
    desc: "Unique brand identity logos.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800",
  },
  {
    title: "Brand Identity",
    desc: "Complete branding system.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800",
  },
  {
    title: "Business Card",
    desc: "Professional visiting cards.",
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800",
  },
  {
    title: "Brochure Design",
    desc: "Marketing brochures.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
  },
  {
    title: "Flyer & Poster",
    desc: "Creative promotions.",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800",
  },
  {
    title: "Social Media Creatives",
    desc: "Engaging digital posts.",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800",
  },
  {
    title: "Banner Design",
    desc: "Web & ad banners.",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800",
  },
  {
    title: "Packaging Design",
    desc: "Product packaging visuals.",
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800",
  },
  {
    title: "Infographics",
    desc: "Data visualization designs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    title: "Presentation Design",
    desc: "Business presentations.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55d?w=800",
  },
  {
    title: "UI Graphics",
    desc: "App & website visuals.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800",
  },
  {
    title: "Illustrations",
    desc: "Custom digital artwork.",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800",
  },
  {
    title: "Advertisement Design",
    desc: "Marketing ads visuals.",
    image: "https://images.unsplash.com/photo-1520975922284-9c9b1b1f1a0f?w=800",
  },
  {
    title: "Catalog Design",
    desc: "Product catalogs.",
    image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?w=800",
  },
  {
    title: "Motion Graphics",
    desc: "Animated visuals & videos.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
  },
];

function Graphis() {
  return (
    <section className="min-h-screen bg-gray-50 py-24 px-6">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          Graphic <span className="text-red-600">Design</span>
        </h1>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
          Creative designs that build strong brand identity and visual impact.
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

export default Graphis;