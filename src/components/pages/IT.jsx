import React from 'react'

function IT() {
  const services = [
    {
      title: "AI-Powered IT Solutions",
      description: "Leverage machine learning and AI to automate processes and gain insights.",
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API"],
    },
    {
      title: "Custom Software Development",
      description: "Tailored applications built to meet your specific business requirements.",
      technologies: ["React", "Node.js", "Python", "Java"],
    },
    {
      title: "Cloud Computing Services",
      description: "Scalable cloud infrastructure and migration services.",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker"],
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with advanced security measures.",
      technologies: ["Firewall", "Encryption", "SIEM", "Penetration Testing"],
    },
    {
      title: "IT Consulting Services",
      description: "Expert advice to optimize your IT strategy and operations.",
      technologies: ["System Analysis", "Architecture Design", "DevOps"],
    },
    {
      title: "Shopify Development",
      description: "Custom e-commerce stores with advanced features.",
      technologies: ["Shopify Liquid", "JavaScript", "GraphQL"],
    },
    {
      title: "WordPress Development",
      description: "Custom websites and blogs with powerful CMS capabilities.",
      technologies: ["PHP", "MySQL", "JavaScript", "WP REST API"],
    },
    {
      title: "Full Stack Development",
      description: "End-to-end web application development.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Backend Solutions",
      description: "Robust server-side logic and API development.",
      technologies: ["Node.js", "Python", "Java", "PostgreSQL"],
    },
    {
      title: "Database Design and Management",
      description: "Efficient data storage and retrieval systems.",
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
  ];

  return (
    <section className="space-y-10">
      <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-2xl shadow-cyan-500/10">
        <h1 className="text-4xl font-extrabold text-white">IT Solutions</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Cutting-edge technology solutions to transform your business operations and drive innovation.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-6 shadow-xl transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-500/20">
            <div className="text-2xl mb-3">💻</div>
            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-slate-300 mb-4">{service.description}</p>
            <div className="text-sm text-slate-400">
              <strong>Technologies:</strong> {service.technologies.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default IT