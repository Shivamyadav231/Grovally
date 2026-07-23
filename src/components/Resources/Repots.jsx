export default function Repots() {
  const reports = [
    {
      id: 1,
      title: "Artificial Intelligence Market Report 2026",
      category: "AI",
      pages: 84,
      date: "July 2026",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
      description:
        "Comprehensive analysis of AI trends, market growth, investments and future opportunities.",
    },
    {
      id: 2,
      title: "Indian Startup Ecosystem Report",
      category: "Startup",
      pages: 62,
      date: "June 2026",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900",
      description:
        "Funding trends, unicorn growth, government schemes and emerging startup sectors.",
    },
    {
      id: 3,
      title: "Digital Marketing Industry Outlook",
      category: "Marketing",
      pages: 58,
      date: "May 2026",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900",
      description:
        "SEO, AI marketing, social media trends and advertising performance insights.",
    },
    {
      id: 4,
      title: "Cloud & Cyber Security Report",
      category: "Technology",
      pages: 71,
      date: "April 2026",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900",
      description:
        "Cloud adoption, cyber security threats, compliance and enterprise security strategies.",
    },
  ];

  return (
    <section className="min-h-screen bg-white py-24 px-6 text-black">
      <div className="max-w-7xl  mt-10 mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">
            Industry <span className="text-red-500">Reports</span>
          </h1>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">
            Access premium research reports covering Artificial Intelligence,
            Startups, Technology, Finance, Marketing and emerging industries.
          </p>
        </div>

        {/* Reports */}
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">

          {reports.map((report) => (
            <div
              key={report.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg transition hover:-translate-y-2 hover:border-red-500"
            >
              <img
                src={report.image}
                alt={report.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm text-red-400">
                  {report.category}
                </span>

                <h2 className="mt-4 text-xl font-bold">
                  {report.title}
                </h2>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  {report.description}
                </p>

                <div className="mt-5 flex justify-between text-sm text-gray-500">
                  <span>{report.pages} Pages</span>
                  <span>{report.date}</span>
                </div>

                <button className="mt-6 w-full rounded-xl bg-red-600 py-3 font-semibold transition hover:bg-red-700">
                  Download Report
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}