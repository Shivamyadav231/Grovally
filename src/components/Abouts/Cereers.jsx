export default function Cereers() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.15),_transparent_55%),_linear-gradient(180deg,#000000_0%,#1f1f1f_100%)] text-white px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-red-900/20 backdrop-blur-xl">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-red-500">Join the Grovally team</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Careers at Grovally
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Build your career with a high-energy team that crafts AI, software, funding, and business solutions for startups and enterprises. We
re hiring curious problem solvers, creative doers, and growth-minded people.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <p className="text-sm uppercase tracking-[0.24em] text-red-500">Why work with us</p>
            <ul className="mt-6 space-y-4 text-slate-200">
              <li className="flex gap-3 text-base leading-7">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-red-600/15 text-red-400">✓</span>
                Collaborative product-driven culture with rapid growth opportunities.
              </li>
              <li className="flex gap-3 text-base leading-7">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-red-600/15 text-red-400">✓</span>
                Flexible work environment, mentorship, and cross-functional learning.
              </li>
              <li className="flex gap-3 text-base leading-7">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-red-600/15 text-red-400">✓</span>
                Competitive compensation, performance incentives, and recognition.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <p className="text-sm uppercase tracking-[0.24em] text-red-500">Open roles</p>
            <div className="mt-6 space-y-4 text-slate-200">
              <div className="rounded-3xl bg-white/5 p-5">
                <h2 className="text-lg font-semibold text-white">AI Product Engineer</h2>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Build intelligent products, conversational agents, and automation workflows.
                </p>
              </div>
              <div className="rounded-3xl bg-white/5 p-5">
                <h2 className="text-lg font-semibold text-white">Business Strategy Consultant</h2>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Help clients launch products, improve operations, and scale revenue.
                </p>
              </div>
              <div className="rounded-3xl bg-white/5 p-5">
                <h2 className="text-lg font-semibold text-white">Marketing & Growth Lead</h2>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Lead campaigns across digital, social, and performance marketing.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20">
            <p className="text-sm uppercase tracking-[0.24em] text-red-500">Apply today</p>
            <div className="mt-6 space-y-5 text-slate-200">
              <p className="text-base leading-7">
                Send your resume and portfolio to <span className="font-semibold text-white">careers@grovally.com</span> or use the contact page below to request a recruiter call.
              </p>
              <div className="space-y-4 rounded-3xl bg-white/5 p-5">
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">What we look for</div>
                <ul className="space-y-3 text-slate-300">
                  <li>Ownership mindset and strong execution skills.</li>
                  <li>Experience with AI, SaaS, digital products, or business consulting.</li>
                  <li>Excellent communication and collaborative teamwork.</li>
                </ul>
              </div>
              <a
                href="mailto:careers@grovally.com"
                className="inline-flex w-full items-center justify-center rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
              >
                Apply via Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
