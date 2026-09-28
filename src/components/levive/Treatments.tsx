import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { treatmentGroups, whatsappLink } from "./data";

export function Treatments() {
  const [active, setActive] = useState(0);
  const group = treatmentGroups[active] ?? treatmentGroups[0]!;

  return (
    <section id="tratamentos" className="bg-beige py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-2xl">
          <span className="kicker">Tratamentos</span>
          <h2 className="section-title section-title-compact mt-4">
            Tratamentos pensados <em className="italic text-gold-deep">para você</em>
          </h2>
          <p className="mt-5 text-[0.98rem] leading-relaxed text-muted-foreground">
            Protocolos personalizados para cuidar da sua pele, do seu corpo e da sua autoestima.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {treatmentGroups.map(({ category: c }, i) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`rounded-full border px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.16em] transition-all duration-300 ${
                active === i
                  ? "border-transparent bg-gradient-to-r from-gold to-gold-deep text-primary-foreground"
                  : "border-gold/35 text-foreground/70 hover:border-gold hover:text-gold-deep"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {group.note && (
          <p className="mt-8 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground">
            {group.note}
          </p>
        )}

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {group.treatments.map((t) => (
            <article key={t.name} className="card-soft group overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.05]"
                />
              </div>
              <div className="p-7">
                <span className="eyebrow">{group.category}</span>
                <h3 className="mt-3 text-2xl">{t.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t.description}
                </p>
                <a
                  href={whatsappLink(`Olá! Gostaria de saber mais sobre ${t.name} na LeVive.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-[0.74rem] uppercase tracking-[0.2em] text-gold-deep"
                >
                  Saiba mais
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
