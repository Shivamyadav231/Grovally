import { useNavigate } from "react-router-dom";

export default function Webinrs() {
  const navigate= useNavigate()
  const webinars = [
    {
      id: 1,
      title: "AI for Business Growth",
      speaker: "Shivam Gupta",
      date: "28 July 2026",
      time: "7:00 PM",
      seats: 45,
      category: "Artificial Intelligence",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass",
      speaker: "Rahul Sharma",
      date: "30 July 2026",
      time: "6:00 PM",
      seats: 18,
      category: "Marketing",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900",
    },
    {
      id: 3,
      title: "Startup Funding Secrets",
      speaker: "Ankit Verma",
      date: "2 August 2026",
      time: "5:30 PM",
      seats: 70,
      category: "Startup",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-black py-24 px-6">
      <div className="max-w-7xl mt-10 mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">
            Live <span className="text-red-500">Webinars</span>
          </h1>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Learn from industry experts, AI professionals and business leaders.
            Reserve your seat today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {webinars.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-black backdrop-blur-md transition duration-300 hover:border-red-500 hover:-translate-y-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-400">
                  {item.category}
                </span>

                <h2 className="mt-4 text-2xl font-bold">
                  {item.title}
                </h2>

                <div className="mt-5 space-y-2 text-gray-300">

                  <p>🎤 {item.speaker}</p>

                  <p>📅 {item.date}</p>

                  <p>⏰ {item.time}</p>

                  <p>👥 {item.seats} Seats Left</p>

                </div>

                <button   onClick={() => navigate("/contact")} className="mt-7 w-full rounded-xl bg-red-600 py-3 font-semibold transition hover:bg-red-700">
                  Register Now
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}