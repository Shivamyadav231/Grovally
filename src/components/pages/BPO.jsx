export default function BPO() {
  const services = [
    {
      title: "AI-powered customer support",
      description: "Intelligent chatbots and virtual assistants for 24/7 customer service.",
      tools: ["ChatGPT", "Dialogflow", "Zendesk"],
    },
    {
      title: "Back office automation",
      description: "Streamline administrative tasks with automated workflows.",
      tools: ["RPA Tools", "Zapier", "Microsoft Power Automate"],
    },
    {
      title: "Data entry & processing",
      description: "Accurate data management and processing services.",
      tools: ["Excel", "Google Sheets", "Custom Databases"],
    },
    {
      title: "Multilingual helpdesk",
      description: "Support in multiple languages for global customers.",
      tools: ["Translation APIs", "Multilingual Staff", "CRM Systems"],
    },
    {
      title: "E-commerce operations",
      description: "Manage online store operations and order fulfillment.",
      tools: ["Shopify", "WooCommerce", "Magento"],
    },
    {
      title: "Quality assurance",
      description: "Ensure high standards in all business processes.",
      tools: ["Quality Checklists", "Audit Tools", "Feedback Systems"],
    },
    {
      title: "Virtual assistant services",
      description: "Personalized administrative support remotely.",
      tools: ["Asana", "Trello", "Email Management Tools"],
    },
    {
      title: "Content moderation",
      description: "Monitor and moderate user-generated content.",
      tools: ["AI Moderation", "Human Review", "Community Guidelines"],
    },
    {
      title: "Order management",
      description: "Handle order processing and logistics coordination.",
      tools: ["ERP Systems", "Inventory Software", "Shipping APIs"],
    },
    {
      title: "Sales support",
      description: "Assist in lead generation and sales processes.",
      tools: ["CRM Software", "Lead Tracking", "Sales Scripts"],
    },
  ];

  return (
    <section className="space-y-10">
      <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-fuchsia-500/10">
        <h1 className="text-4xl font-extrabold text-white">BPO Services</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          We combine intelligent workflows and human-first support to deliver consistent, high-quality business process outsourcing.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-6 shadow-xl transition hover:-translate-y-1 hover:border-fuchsia-400/40 hover:shadow-fuchsia-500/20">
            <div className="text-2xl mb-3">🤖</div>
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