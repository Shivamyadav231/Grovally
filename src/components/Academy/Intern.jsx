import { Link } from "react-router-dom";

const courses = [
  {
    id: "ai-product",
    title: "AI Product Development",
    description: "Build enterprise-grade products using AI, automation, and intelligent workflows.",
    coach: "Priya Sharma",
    duration: "6 weeks",
    sessions: "18 live classes",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Growth",
    description: "Design scalable growth campaigns across digital channels for measurable business impact.",
    coach: "Rohit Verma",
    duration: "8 weeks",
    sessions: "22 live classes",
  },
  {
    id: "startup-ops",
    title: "Startup Operations & Strategy",
    description: "Master operational excellence, launch planning, and strategy for high-growth startups.",
    coach: "Anjali Gupta",
    duration: "5 weeks",
    sessions: "15 live classes",
  },
];

export default function Intern() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden bg-slate-950/95 px-4 py-16 sm:px-6 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.18),_transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-red-300">
                Enterprise Internship
              </p>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Premium internship programs for future-ready professionals.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Learn in a corporate-grade environment with structured mentorship, live sessions, and real business case studies. This experience is built for ambitious interns who want an edge in enterprise talent development.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 sm:max-w-xl">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Trusted by</p>
                  <p className="mt-3 text-3xl font-semibold text-white">150+ teams</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Live support</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Mentor-led sessions</p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-10">
              <p className="text-sm uppercase tracking-[0.28em] text-red-500">Program highlights</p>
              <div className="mt-8 space-y-5">
                {[
                  "Corporate-grade internship structure",
                  "Performance-driven learning roadmap",
                  "Live mentorship and weekly feedback",
                ].map((item) => (
                  <div key={item} className="flex gap-4 rounded-3xl bg-slate-950/70 p-4">
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-red-500/15 text-red-300">✓</span>
                    <p className="text-sm text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-red-400">Our internship tracks</p>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            Modern programs with strategic career outcomes.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">
            Each internship track is designed to deliver measurable skills, real deliverables, and a polished profile for your next role.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {courses.map((course) => (
            <Link
              key={course.id}
              to="/profile"
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/80 p-8 transition duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-slate-900"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-red-400">{course.id === "ai-product" ? "AI" : course.id === "digital-marketing" ? "Marketing" : "Strategy"}</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{course.title}</h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                  View
                </span>
              </div>
              <p className="mt-6 text-slate-300">{course.description}</p>
              <div className="mt-8 space-y-4 text-sm text-slate-400">
                <div className="flex items-center justify-between rounded-3xl bg-white/5 px-4 py-3">
                  <span>Coach</span>
                  <span className="text-white">{course.coach}</span>
                </div>
                <div className="flex items-center justify-between rounded-3xl bg-white/5 px-4 py-3">
                  <span>Duration</span>
                  <span className="text-white">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between rounded-3xl bg-white/5 px-4 py-3">
                  <span>Sessions</span>
                  <span className="text-white">{course.sessions}</span>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-red-400">
                Apply now <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
