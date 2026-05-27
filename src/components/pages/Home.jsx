import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="space-y-12">
      <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-900 via-slate-800 to-cyan-900 px-6 py-16 shadow-2xl sm:px-12">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <span className="inline-flex rounded-full bg-cyan-400/15 px-4 py-1 text-sm font-semibold text-cyan-200">
            AI-powered business solutions for modern teams
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Grovally: Smart IT, BPO, KPO & Finance services under one roof.
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Build your next project faster with our premium digital and business operations services. From cloud software to customer support and finance workflows, Grovally delivers a polished experience.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "IT Innovation",
            description: "Custom applications, AI models, and cloud systems built for growth.",
          },
          {
            title: "BPO Excellence",
            description: "Smart support, back-office automation, and multilingual customer care.",
          },
          {
            title: "KPO Insights",
            description: "Research, analytics, and strategic intelligence for fast decision-making.",
          },
          {
            title: "Finance Services",
            description: "Loan support, credit insights, and financial workflow automation.",
          },
        ].map((card) => (
          <article key={card.title} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl transition hover:-translate-y-1 hover:border-cyan-500/50 hover:bg-slate-900">
            <h2 className="text-xl font-semibold text-white">{card.title}</h2>
            <p className="mt-3 text-slate-400">{card.description}</p>
          </article>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Why Choose Grovally?</h2>
          <p className="mt-3 text-slate-400">We combine expertise, innovation, and reliability to deliver outstanding results.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: "🚀",
              title: "Fast Delivery",
              description: "Quick turnaround times without compromising quality.",
            },
            {
              icon: "🔒",
              title: "Secure & Reliable",
              description: "Enterprise-grade security and 99.9% uptime guarantee.",
            },
            {
              icon: "💡",
              title: "Innovative Solutions",
              description: "Cutting-edge technology tailored to your business needs.",
            },
          ].map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">What Our Clients Say</h2>
          <p className="mt-3 text-slate-400">Trusted by businesses worldwide for delivering exceptional results.</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Cheten Singh",
              role: "CEO  and Founder",
              testimonial: "Grovally transformed our IT infrastructure, reducing costs by 40% and improving efficiency. Their AI solutions are game-changing.",
            },
            {
              name: "Dibhayanshu Pal",
              role: "Operations Manager, Grovally",
              testimonial: "The BPO services provided seamless customer support. Our response times improved dramatically, and customer satisfaction soared.",
            },

          ].map((testimonial) => (
            <blockquote key={testimonial.name} className="rounded-2xl border border-slate-700 bg-slate-950/50 p-6">
              <p className="text-slate-300 italic">"{testimonial.testimonial}"</p>
              <footer className="mt-4">
                <cite className="text-sm font-semibold text-cyan-400">{testimonial.name}</cite>
                <p className="text-xs text-slate-500">{testimonial.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Our Services</h2>
          <p className="mt-3 text-slate-400">Explore our comprehensive range of business solutions.</p>
        </div>

        <div className="space-y-12">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-cyan-400">IT Solutions</h3>
              <Link to="/it" className="text-cyan-400 hover:text-cyan-300">View All →</Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "AI-Powered IT Solutions", tech: "Python, TensorFlow" },
                { title: "Custom Software Development", tech: "React, Node.js" },
                { title: "Cloud Computing Services", tech: "AWS, Docker" },
              ].map((service) => (
                <div key={service.title} className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
                  <h4 className="font-semibold text-white">{service.title}</h4>
                  <p className="text-sm text-slate-400 mt-1">{service.tech}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-fuchsia-400">BPO Services</h3>
              <Link to="/bpo" className="text-fuchsia-400 hover:text-fuchsia-300">View All →</Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "AI-powered customer support", tools: "ChatGPT, Dialogflow" },
                { title: "Back office automation", tools: "RPA, Zapier" },
                { title: "Data entry & processing", tools: "Excel, Databases" },
              ].map((service) => (
                <div key={service.title} className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
                  <h4 className="font-semibold text-white">{service.title}</h4>
                  <p className="text-sm text-slate-400 mt-1">{service.tools}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-violet-400">KPO Services</h3>
              <Link to="/kpo" className="text-violet-400 hover:text-violet-300">View All →</Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Market research & competitor mapping", tools: "Google Analytics, SEMrush" },
                { title: "Data analytics & business intelligence", tools: "Tableau, Python" },
                { title: "Financial modeling & forecasting", tools: "Excel, R" },
              ].map((service) => (
                <div key={service.title} className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
                  <h4 className="font-semibold text-white">{service.title}</h4>
                  <p className="text-sm text-slate-400 mt-1">{service.tools}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-green-400">Finance Services</h3>
              <Link to="/finance" className="text-green-400 hover:text-green-300">View All →</Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "EMI Calculator", desc: "Calculate loan EMIs easily" },
                { title: "Credit Score Calculator", desc: "Check your creditworthiness" },
                { title: "Loan Types", desc: "Various loan options available" },
              ].map((service) => (
                <div key={service.title} className="rounded-xl border border-slate-700 bg-slate-950/50 p-4">
                  <h4 className="font-semibold text-white">{service.title}</h4>
                  <p className="text-sm text-slate-400 mt-1">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-cyan-900/20 to-slate-900/80 p-8 shadow-2xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
          <p className="mt-3 text-slate-400">Subscribe to our newsletter for the latest insights on IT, BPO, KPO, and finance trends.</p>
          <form className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}