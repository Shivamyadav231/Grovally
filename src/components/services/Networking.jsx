import React from "react";

const services = [
  {
    title: "Network Design",
    desc: "Secure & scalable network infrastructure.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
  },
  {
    title: "LAN & WAN Solutions",
    desc: "Business network connectivity setup.",
    image: "https://images.unsplash.com/photo-1551703599-5f1b5f8a7c0b?w=800",
  },
  {
    title: "Network Security",
    desc: "Advanced cyber protection systems.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
  },
  {
    title: "Firewall Setup",
    desc: "Secure firewall configuration.",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800",
  },
  {
    title: "Wireless Setup",
    desc: "Reliable Wi-Fi deployment.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800",
  },
  {
    title: "VPN Solutions",
    desc: "Secure remote access systems.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
  },
  {
    title: "Cloud Networking",
    desc: "Cloud-based network management.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
  },
  {
    title: "Data Center Networking",
    desc: "High-performance server networks.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800",
  },
  {
    title: "Network Monitoring",
    desc: "Real-time performance tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    title: "Troubleshooting",
    desc: "Fast issue detection & fix.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800",
  },
  {
    title: "Server Setup",
    desc: "Installation & configuration.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
  },
  {
    title: "Structured Cabling",
    desc: "Organized network cabling systems.",
    image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=800",
  },
  {
    title: "VoIP Solutions",
    desc: "Internet-based calling systems.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800",
  },
  {
    title: "Backup & Recovery",
    desc: "Data protection systems.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800",
  },
  {
    title: "Network Support",
    desc: "24/7 maintenance & support.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
  },
];

function Networking() {
  return (
    <section className="min-h-screen bg-gray-50 py-24 px-6">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          Networking <span className="text-red-600">Solutions</span>
        </h1>

        <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
          Secure, scalable and high-performance networking solutions for modern businesses.
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

export default Networking;