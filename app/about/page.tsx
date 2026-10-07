import type { Metadata } from "next";
import { contact } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — Pothraj Group",
  description: "The story, journey and leadership of Pothraj Group, est. 1981 in Mysuru.",
};

const journey = [
  { year: "1981", title: "Roots in Mysuru", text: "M. K. Pothraj founds the business with a community-first outlook." },
  { year: "1990s", title: "Steady expansion", text: "Distribution and trade grow across Karnataka, built on long relationships." },
  { year: "2000s", title: "Building spaces", text: "The group moves into infrastructure, developing residential and commercial projects." },
  { year: "2010s", title: "Diversification", text: "Hospitality, education and agri-energy join the portfolio." },
  { year: "Today", title: "A group for generations", text: "Six verticals, plus media and social initiatives, guided from Bengaluru." },
];

export default function About() {
  return (
    <>
      {/* Intro */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pt-44">
        <p className="rise text-xs uppercase tracking-[0.35em] text-gold">About the group</p>
        <h1 className="rise delay-1 mt-6 max-w-5xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
          From a regional business to a <em className="text-gold">diversified enterprise.</em>
        </h1>
        <div className="rise delay-2 mt-12 grid gap-10 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-muted">
            Pothraj Group began in Mysuru more than four decades ago. What started as a single venture has grown into
            a family of businesses spanning infrastructure, beverages, hospitality, agri-energy, education and
            commerce.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            Through every stage of growth, one thing has stayed constant: we build alongside the communities we
            serve, and we measure success in decades — not quarters.
          </p>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="scroll-mt-20 bg-sand py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-serif text-4xl md:text-5xl">Our journey</h2>
          <ol className="relative mt-14 border-l border-gold/40">
            {journey.map((j) => (
              <li key={j.year} className="mb-12 ml-8 last:mb-0">
                <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full border-2 border-gold bg-sand" />
                <p className="font-serif text-3xl text-gold">{j.year}</p>
                <h3 className="mt-2 text-xl font-medium">{j.title}</h3>
                <p className="mt-2 max-w-xl text-muted">{j.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-8">
        <p className="text-xs uppercase tracking-[0.35em] text-gold">Leadership</p>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl">The people behind the group</h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {[
            {
              initials: "MK",
              name: "M. K. Pothraj",
              role: "Founder",
              text: "Set the group's foundations in 1981 with a belief that enterprise should strengthen the community around it.",
              tone: "from-[#3a3128] to-[#1b1915]",
            },
            {
              initials: "BP",
              name: "Balajhi Pothraj",
              role: "Chairman & Managing Director",
              text: "Leads the group's evolution into a diversified enterprise while keeping its founding values at the centre.",
              tone: "from-[#1f3a2e] to-[#0f1f18]",
            },
          ].map((p) => (
            <article key={p.name} className="overflow-hidden rounded-3xl border border-black/5 bg-white">
              <div className={`relative flex aspect-[16/9] items-center justify-center bg-gradient-to-br ${p.tone}`}>
                <div className="grain absolute inset-0 opacity-30" />
                <span className="relative font-serif text-7xl text-gold-soft/80">{p.initials}</span>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl">{p.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-gold">{p.role}</p>
                <p className="mt-4 leading-relaxed text-muted">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">Contact</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Start a conversation with us.
            </h2>
            <ul className="mt-10 space-y-6">
              <li>
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Office</p>
                <p className="mt-1 text-lg">{contact.address}</p>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Email</p>
                <a href={`mailto:${contact.email}`} className="mt-1 block text-lg hover:text-gold-soft">{contact.email}</a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.25em] text-white/50">Phone</p>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="mt-1 block text-lg hover:text-gold-soft">{contact.phone}</a>
              </li>
            </ul>
          </div>

          <form
            action={`mailto:${contact.email}`}
            method="post"
            encType="text/plain"
            className="space-y-5 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10"
          >
            {[
              { name: "name", label: "Your name", type: "text" },
              { name: "email", label: "Email address", type: "email" },
            ].map((f) => (
              <label key={f.name} className="block">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">{f.label}</span>
                <input
                  required
                  name={f.name}
                  type={f.type}
                  className="mt-2 w-full border-b border-white/20 bg-transparent py-2 outline-none transition focus:border-gold-soft"
                />
              </label>
            ))}
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-white/50">Message</span>
              <textarea
                required
                name="message"
                rows={4}
                className="mt-2 w-full resize-none border-b border-white/20 bg-transparent py-2 outline-none transition focus:border-gold-soft"
              />
            </label>
            <button type="submit" className="w-full rounded-full bg-gold py-3 text-sm font-medium transition hover:bg-[#9a763c]">
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
