import Link from "next/link";
import { principles, verticals } from "@/lib/data";

const pillars = [
  { label: "Vision", text: "Enterprises that lift entire communities, not just balance sheets." },
  { label: "Mission", text: "Bridge grassroots strength with modern capability across every sector we enter." },
  { label: "Purpose", text: "Build things that outlast us — for families, towns and the generations ahead." },
];

const stats = [
  { value: "1981", label: "Founded in Mysuru" },
  { value: "40+", label: "Years of trust" },
  { value: "6", label: "Business verticals" },
  { value: "1", label: "Family of values" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,#5a4a32_0%,transparent_55%),radial-gradient(ellipse_at_bottom_left,#1f3a2e_0%,transparent_60%)]" />
        <div className="grain absolute inset-0 -z-10 opacity-40" />
        <div className="absolute right-[-10%] top-[10%] -z-10 h-[60vmin] w-[60vmin] rounded-full border border-gold/30" />
        <div className="absolute right-[-2%] top-[18%] -z-10 h-[44vmin] w-[44vmin] rounded-full border border-gold/20" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-32 md:px-8 md:pb-28">
          <p className="rise text-xs uppercase tracking-[0.4em] text-gold-soft">Pothraj Group · Est. 1981</p>
          <h1 className="rise delay-1 mt-6 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
            Building for <em className="text-gold-soft">generations.</em>
          </h1>
          <p className="rise delay-2 mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            A diversified enterprise from Mysuru, bringing community roots and modern ambition together across
            real estate, hospitality, education, beverages, agri-energy and commerce.
          </p>
          <div className="rise delay-3 mt-10 flex flex-wrap gap-4">
            <Link href="#businesses" className="rounded-full bg-gold px-7 py-3 text-sm font-medium transition hover:bg-[#9a763c]">
              Explore our businesses
            </Link>
            <Link href="/about" className="rounded-full border border-white/30 px-7 py-3 text-sm transition hover:bg-white/10">
              Our story →
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-black/5 bg-sand py-5">
        <div className="marquee flex w-max gap-12 whitespace-nowrap font-serif text-2xl text-ink/70">
          {[...verticals, ...verticals].map((v, i) => (
            <span key={i} className="flex items-center gap-12">
              {v.name} <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Vision / Mission / Purpose */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="grid gap-px overflow-hidden rounded-3xl bg-black/10 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.label} className="bg-ivory p-10">
              <span className="font-serif text-sm text-gold">0{i + 1}</span>
              <h3 className="mt-4 font-serif text-3xl">{p.label}</h3>
              <p className="mt-4 leading-relaxed text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:grid-cols-2 md:px-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-[#3a3128] to-[#1b1915]">
            <div className="grain absolute inset-0 opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center font-serif text-[9rem] text-gold-soft/80">
              MK
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-serif text-2xl">M. K. Pothraj</p>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Founder</p>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">The beginning</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              A single idea, planted in Mysuru in 1981.
            </h2>
            <p className="mt-6 leading-relaxed text-muted">
              M. K. Pothraj started with a simple conviction: a business is only as strong as the community around
              it. That belief became the foundation for everything the group has built since — one patient step at a
              time.
            </p>
            <Link href="/about" className="mt-8 inline-block border-b border-gold pb-1 text-sm font-medium">
              Read the full story →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 py-20 md:grid-cols-4 md:px-8">
        {stats.map((s) => (
          <div key={s.label} className="border-l border-gold/50 pl-6">
            <p className="font-serif text-5xl md:text-6xl">{s.value}</p>
            <p className="mt-2 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Businesses */}
      <section id="businesses" className="scroll-mt-20 bg-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gold-soft">Our businesses</p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
                Six verticals. One way of working.
              </h2>
            </div>
            <p className="max-w-sm text-white/60">
              Each business stands on its own, yet all share the same patience, care and local grounding.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {verticals.map((v, i) => (
              <article
                key={v.name}
                className={`group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br ${v.tone} p-8 transition duration-500 hover:-translate-y-1`}
              >
                <div className="grain absolute inset-0 opacity-20" />
                <div className="relative flex items-start justify-between">
                  <span className="text-4xl transition duration-500 group-hover:scale-110">{v.icon}</span>
                  <span className="font-serif text-sm text-white/50">0{i + 1}</span>
                </div>
                <div className="relative">
                  <h3 className="font-serif text-3xl">{v.name}</h3>
                  <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-white/80 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 max-md:max-h-24 max-md:opacity-100">
                    {v.blurb}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-8">
        <p className="text-xs uppercase tracking-[0.35em] text-gold">Philosophy</p>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
          Three principles we never trade away.
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {principles.map((p, i) => (
            <div key={p.title} className="border-t border-ink pt-6">
              <span className="font-serif text-6xl text-gold/40">{i + 1}</span>
              <h3 className="mt-4 font-serif text-2xl">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 md:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-forest px-8 py-16 text-center text-white md:py-24">
          <div className="grain absolute inset-0 opacity-20" />
          <h2 className="relative mx-auto max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            Let&apos;s build something that <em className="text-gold-soft">lasts.</em>
          </h2>
          <Link
            href="/about#contact"
            className="relative mt-10 inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-ink transition hover:bg-gold-soft"
          >
            Contact the group
          </Link>
        </div>
      </section>
    </>
  );
}
