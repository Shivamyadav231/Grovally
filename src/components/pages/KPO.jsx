export default function KPO() {
  const services = [
    {
      title: "Market research & competitor mapping",
      description: "Comprehensive analysis of market trends and competitor strategies.",
      tools: ["Google Analytics", "SEMrush", "SurveyMonkey"],
    },
    {
      title: "Data analytics & business intelligence",
      description: "Transform raw data into actionable business insights.",
      tools: ["Tableau", "Power BI", "Python", "SQL"],
    },
    {
      title: "Financial modeling & forecasting",
      description: "Accurate financial projections and risk assessments.",
      tools: ["Excel", "R", "Financial Software", "Monte Carlo Simulation"],
    },
    {
      title: "AI-driven insights",
      description: "Leverage AI for predictive analytics and pattern recognition.",
      tools: ["Machine Learning Models", "NLP", "Computer Vision"],
    },
    {
      title: "Document processing & research",
      description: "Efficient handling of large volumes of documents and research data.",
      tools: ["OCR Technology", "Document Management Systems", "Research Databases"],
    },
    {
      title: "Strategic reporting",
      description: "Clear, concise reports to support strategic decision-making.",
      tools: ["Data Visualization Tools", "Presentation Software", "Custom Dashboards"],
    },
  ];

  return (
    <section className="space-y-10">
      <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-violet-500/10">
        <h1 className="text-4xl font-extrabold text-white">KPO Services</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Get actionable intelligence and research-driven insights to improve decision-making across every stage of your business.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-6 shadow-xl transition hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-violet-500/20">
            <div className="text-2xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-slate-300 mb-3">{service.description}</p>
            <div className="text-sm text-slate-400">
              <strong>Tools:</strong> {service.tools.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}