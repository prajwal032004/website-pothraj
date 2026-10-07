import Link from "next/link";
import { contact, verticals } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <p className="font-serif text-3xl text-white">Pothraj</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.35em] text-gold-soft">Group · Est. 1981</p>
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            Rooted in Mysuru. Building for generations.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-gold-soft">Businesses</h4>
          <ul className="space-y-2 text-sm">
            {verticals.map((v) => (
              <li key={v.name}>
                <Link href="/#businesses" className="hover:text-white">{v.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-gold-soft">Group</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About us</Link></li>
            <li><Link href="/about#journey" className="hover:text-white">Our journey</Link></li>
            <li><Link href="/about#leadership" className="hover:text-white">Leadership</Link></li>
            <li><Link href="/#philosophy" className="hover:text-white">Philosophy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-gold-soft">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>{contact.address}</li>
            <li><a href={`mailto:${contact.email}`} className="hover:text-white">{contact.email}</a></li>
            <li><a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-white">{contact.phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-white/40 md:px-8">
          © Pothraj Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
