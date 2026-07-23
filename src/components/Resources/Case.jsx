export default function Case() {
  const caseStudies = [
    {
      id: 1,
      title: "AI Customer Support Automation",
      company: "Retail Company",
      category: "Artificial Intelligence",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900",
      challenge:
        "Customer support response time was too high and support costs were increasing.",
      solution:
        "Implemented an AI chatbot integrated with CRM and WhatsApp support.",
      result: "70% faster responses • 45% lower support cost • 92% customer satisfaction",
    },
    {
      id: 2,
      title: "Business Website & SEO Growth",
      company: "Healthcare Startup",
      category: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
      challenge:
        "Low online visibility and very few organic leads.",
      solution:
        "Redesigned the website, improved SEO and launched a content strategy.",
      result: "300% traffic growth • 180% more leads • Top Google rankings",
    },
    {
      id: 3,
      title: "Cloud Infrastructure Migration",
      company: "Manufacturing Company",
      category: "Cloud Solutions",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900",
      challenge:
        "Legacy servers caused downtime and poor scalability.",
      solution:
        "Migrated applications to AWS with automated deployment pipelines.",
      result: "99.9% uptime • 35% infrastructure savings • Better scalability",
    },
  ];

  return (
    <section className="min-h-screen bg-white py-24 px-6 text-black">
      <div className="max-w-7xl mt-10  mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">
            Success <span className="text-red-500">Case Studies</span>
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600">
            Discover how businesses transformed their operations with AI,
            software development, cloud solutions and digital marketing.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">

          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg transition duration-300 hover:-translate-y-2 hover:border-red-500"
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

                <h2 className="mt-4 text-2xl text-black font-bold">
                  {item.title}
                </h2>

                <p className="mt-2 text-red-400">
                  {item.company}
                </p>

                <div className="mt-6 space-y-4 text-sm">

                  <div>
                    <h3 className="font-semibold text-white">Challenge</h3>
                    <p className="mt-1 text-gray-600">{item.challenge}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">Solution</h3>
                    <p className="mt-1 text-gray-600">{item.solution}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">Results</h3>
                    <p className="mt-1 text-green-400">{item.result}</p>
                  </div>

                </div>

                <button className="mt-8 w-full rounded-xl bg-red-600 py-3 font-semibold transition hover:bg-red-700">
                  Read Full Case Study
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}