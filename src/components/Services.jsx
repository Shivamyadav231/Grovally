import { Link } from "react-router-dom";

export default function Services() {
  const serviceSections = [
    {
      title: "IT Solutions",
      description: "From custom software to cloud migration and cybersecurity, our IT services deliver scalable technology that powers growth.",
      items: [
        "AI-Powered IT Solutions",
        "Custom Software Development",
        "Cloud Computing & Infrastructure",
        "Cybersecurity & Compliance",
        "DevOps & Automation",
        "Backend Systems & Databases",
      ],
      link: "/it",
      color: "cyan",
    },
    {
      title: "BPO Services",
      description: "Smart outsourcing for customer support, data processing, and operations—designed to boost productivity and reduce costs.",
      items: [
        "AI-powered customer support",
        "Back office automation",
        "Data entry & processing",
        "Multilingual helpdesk",
        "E-commerce operations",
        "Sales support & order management",
      ],
      link: "/bpo",
      color: "fuchsia",
    },
    {
      title: "KPO Services",
      description: "Research, analytics, and strategic reporting that help businesses make faster, smarter decisions.",
      items: [
        "Market research & competitor mapping",
        "Data analytics & business intelligence",
        "Financial modeling & forecasting",
        "AI-driven insights",
        "Document processing & research",
        "Strategic reporting",
      ],
      link: "/kpo",
      color: "violet",
    },
    {
      title: "Finance Services",
      description: "Loan support, EMI guidance, credit score tools, and finance automation for both businesses and individuals.",
      items: [
        "EMI Calculator",
        "Credit Score Calculator",
        "Loan processing support",
        "Financial automation",
        "Credit guidance",
        "Loan advisory services",
      ],
      link: "/finance",
      color: "green",
    },
  ];

  const colorStyles = {
    cyan: {
      border: "hover:border-cyan-400/50",
      link: "text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/10",
    },
    fuchsia: {
      border: "hover:border-fuchsia-400/50",
      link: "text-fuchsia-300 border-fuchsia-500/30 hover:bg-fuchsia-500/10",
    },
    violet: {
      border: "hover:border-violet-400/50",
      link: "text-violet-300 border-violet-500/30 hover:bg-violet-500/10",
    },
    green: {
      border: "hover:border-green-400/50",
      link: "text-green-300 border-green-500/30 hover:bg-green-500/10",
    },
  };

  return (
    <section className="space-y-10">
      <div className="rounded-3xl border border-slate-700 bg-slate-700/80 p-10 shadow-2xl">
        <h1 className="text-4xl font-bold text-white">Complete Services Overview</h1>
        <p className="mt-4 max-w-3xl text-slate-400">
          Click any category to view the full offering. This page shows every service in one place so you can easily see what Grovally provides.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        {serviceSections.map((section) => (
          <article
            key={section.title}
            className={`rounded-[2rem] border border-slate-700 bg-slate-950/90 p-8 shadow-xl transition hover:-translate-y-1 ${colorStyles[section.color].border}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold text-white">{section.title}</h2>
                <p className="mt-3 text-slate-400">{section.description}</p>
              </div>
              <Link
                to={section.link}
                className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold ${colorStyles[section.color].link}`}>
                View full details
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {section.items.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-700 bg-slate-900/80 p-4">
                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-700 bg-gradient-to-r from-slate-950 via-cyan-950 to-slate-900 p-10 shadow-2xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">One place for every business need</h2>
            <p className="mt-3 max-w-2xl text-slate-400">
              Grovally brings all core solutions together so your team can manage IT, operations, research, and finance from a single trusted partner.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            Talk to our team
          </Link>
        </div>
      </div>
    </section>
  );
}
