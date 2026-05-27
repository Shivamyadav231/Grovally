export default function About() {
  return (
    <section className="space-y-10">
      <div className="rounded-3xl border border-red-600 bg-slate-900/80 p-10 shadow-2xl">
        <h1 className="text-4xl font-bold text-white">About Grovally</h1>
        <p className="mt-4 max-w-3xl text-slate-300 leading-8">
          Grovally brings together IT, BPO, KPO, and finance capabilities into one powerful platform. We focus on intelligent automation, reliable support, backed by data-driven decisions and modern digital workflows.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          { title: "Our Mission", description: "Help businesses grow faster through smart technology, efficient operations, and trusted financial support." },
          { title: "Our Vision", description: "Create a seamless service experience where teams, processes, and customers connect with clarity and speed." },
          { title: "Our Values", description: "Quality, transparency, responsiveness, and innovation guide every engagement." },
          { title: "Why Choose Us", description: "We combine specialist expertise with modern tools to deliver better outcomes and a smoother customer journey." },
        ].map((item) => (
          <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-xl">
            <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
            <p className="mt-3 text-slate-400">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}