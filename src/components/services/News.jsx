import React from "react";

const newsData = [
  {
    id: 1,
    title: "AI is Transforming Modern Businesses",
    description:
      "Artificial Intelligence is helping companies improve productivity and customer experience.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    date: "2026-06-27",
  },
  {
    id: 2,
    title: "Cloud Computing Trends in 2026",
    description:
      "Cloud technologies continue to reshape digital transformation strategies.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    date: "2026-06-25",
  },
  {
    id: 3,
    title: "Cybersecurity Becomes a Business Priority",
    description:
      "Companies are investing more in cybersecurity to protect digital assets.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    date: "2026-06-20",
  },
];

function News() {
  const latestNews = [...newsData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section className="min-h-screen bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12">
          Latest News
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {news.date}
                </p>

                <h3 className="text-xl text-black font-bold mb-3">
                  {news.title}
                </h3>

                <p className="text-gray-600">
                  {news.description}
                </p>

                <button className="mt-5 text-blue-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;