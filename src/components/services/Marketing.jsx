import React from "react";

const services = [
  {
    title: "SEO",
    desc: "Improve search ranking & visibility.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    title: "Social Media Marketing",
    desc: "Grow brand on social platforms.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800",
  },
  {
    title: "PPC Ads",
    desc: "Paid ads for instant traffic.",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
  },
  {
    title: "SEM",
    desc: "Search engine marketing strategy.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800",
  },
  {
    title: "Content Marketing",
    desc: "Engaging content creation.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800",
  },
  {
    title: "Email Marketing",
    desc: "Automated email campaigns.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800",
  },
  {
    title: "Influencer Marketing",
    desc: "Boost brand via influencers.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800",
  },
  {
    title: "Affiliate Marketing",
    desc: "Earn via partnerships.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55d?w=800",
  },
  {
    title: "Video Marketing",
    desc: "Engaging video ads.",
    image: "https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=800",
  },
  {
    title: "Brand Management",
    desc: "Build strong brand identity.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
  },
  {
    title: "ORM",
    desc: "Online reputation control.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800",
  },
  {
    title: "CRO",
    desc: "Increase conversion rates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    title: "Lead Generation",
    desc: "Get quality business leads.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
  },
  {
    title: "Marketing Automation",
    desc: "Automate campaigns easily.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    title: "Analytics",
    desc: "Track performance & insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
];

function Marketing() {
  return (
    <section className="min-h-screen bg-gray-50 py-24 px-6">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          Digital <span className="text-red-600">Marketing</span>
        </h1>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
          We help businesses grow with powerful digital marketing strategies.
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

export default Marketing;