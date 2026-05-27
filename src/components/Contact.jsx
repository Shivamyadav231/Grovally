import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async () => {
    setIsSending(true);

    // Fake API Delay
    setTimeout(() => {
      console.log(form);

      setIsSending(false);
      setIsSent(true);

      // Reset form
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <section className="space-y-10">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-10 shadow-2xl">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>

          <p className="text-slate-400 leading-8">
            Have an idea or need support? Send us a message and our team will
            respond quickly with the right solution for your business.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-white">
            Get in touch
          </h2>

          <dl className="mt-6 space-y-5 text-slate-300">
            <div>
              <dt className="font-semibold text-slate-100">Email</dt>

              <dd>
                <a
                  href="mailto:grovallybusinesssolutions@gmail.com"
                  className="text-cyan-400 hover:underline"
                >
                  grovallybusinesssolutions@gmail.com
                </a>
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-slate-100">Phone</dt>

              <dd>
                <a
                  href="tel:+919217753755"
                  className="text-cyan-400 hover:underline"
                >
                  +91 9217753755
                </a>
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-slate-100">Office</dt>

              <dd>
                <a
                  href="https://maps.google.com/?q=Greater+Noida+India"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  TF-03, 3RD FLOOR, SUN TWINLIGHT METRO STREET,
                  GREATER NOIDA, UTTAR PRADESH - 201310, INDIA
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/* Contact Form */}
        <form className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl space-y-5">
          <label className="block text-sm font-medium text-slate-200">
            Name

            <input
              type="text"
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
              placeholder="Your name"
            />
          </label>

          <label className="block text-sm font-medium text-slate-200">
            Email

            <input
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
              placeholder="Your email"
            />
          </label>

          <label className="block text-sm font-medium text-slate-200">
            Message

            <textarea
              value={form.message}
              onChange={(event) =>
                setForm({ ...form, message: event.target.value })
              }
              className="mt-2 h-32 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
              placeholder="Tell us about your project"
            />
          </label>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSending || isSent}
            className="inline-flex w-full justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"
          >
            {isSending
              ? "Sending..."
              : isSent
              ? "Submitted"
              : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}