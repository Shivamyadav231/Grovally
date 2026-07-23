const stories = [
  {
    id: 1,
    company: "Zerodha",
    founder: "Nithin Kamath",
    year: "2010",
    category: "FinTech",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900",
    description:
      "Started as a discount broker and became India's largest stock brokerage with millions of customers.",
  },
  {
    id: 2,
    company: "Boat",
    founder: "Aman Gupta",
    year: "2016",
    category: "Consumer Electronics",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900",
    description:
      "Built one of India's biggest wearable and audio brands through smart branding and online sales.",
  },
  {
    id: 3,
    company: "OYO",
    founder: "Ritesh Agarwal",
    year: "2013",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",
    description:
      "Transformed budget hotels into a global hospitality network operating across multiple countries.",
  },
];
export default function Startup() {
  return (
    <section className="min-h-screen bg-white py-24 px-6 text-black">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">
            Startup <span className="text-red-500">Stories</span>
          </h1>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Inspiring journeys of startups that turned ideas into successful
            businesses.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {stories.map((story) => (
            <div
              key={story.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-red-500 transition"
            >
              <img
                src={story.image}
                alt={story.company}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-400">
                  {story.category}
                </span>

                <h2 className="mt-4 text-2xl font-bold">
                  {story.company}
                </h2>

                <p className="mt-2 text-gray-400">
                  Founder: {story.founder}
                </p>

                <p className="text-gray-500">
                  Founded: {story.year}
                </p>

                <p className="mt-4 text-gray-300 leading-7">
                  {story.description}
                </p>

                <button className="mt-6 w-full rounded-xl bg-red-600 py-3 font-semibold hover:bg-red-700 transition">
                  Read Story
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}