export default function Products() {
  const podcasts = [
    {
      id: 1,
      title: "The Future of AI",
      host: "Grovally Podcast",
      duration: "42 min",
      category: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=900",
    },
    {
      id: 2,
      title: "Startup Success Stories",
      host: "Business Talk",
      duration: "35 min",
      category: "Startups",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
    },
    {
      id: 3,
      title: "Digital Marketing Trends",
      host: "Marketing Masters",
      duration: "50 min",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900",
    },
  ];

  return (
    <section className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-7xl mt-10 mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl  text-red-600 font-bold">
            Podcasts
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Listen to inspiring conversations about AI, startups, technology,
            business growth, and innovation.
          </p>
        </div>

     
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {podcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={podcast.image}
                alt={podcast.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <span className="rounded-full bg-red-100 px-3 py-1 text-sm text-red-600">
                  {podcast.category}
                </span>

                <h2 className="mt-4 text-2xl  text-black font-bold">
                  {podcast.title}
                </h2>

                <p className="mt-2 text-gray-600">
                  Host: {podcast.host}
                </p>

                <p className="text-gray-500">
                  Duration: {podcast.duration}
                </p>

                <button className="mt-6 w-full rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700">
                  
                  ▶ Listen Now
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}