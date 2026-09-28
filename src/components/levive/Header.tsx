import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/levive-logo-sm.png";
import logoHiRes from "@/assets/levive-logo-header.png";
import { WHATSAPP_URL } from "./data";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Jornada", href: "#jornada" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Como cuidamos", href: "#como-cuidamos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

/** The link whose section has reached the upper third of the viewport. */
function currentSection() {
  const doc = document.documentElement;
  if (window.scrollY + window.innerHeight >= doc.scrollHeight - 2) {
    return links[links.length - 1]!.href;
  }
  const line = window.innerHeight * 0.35;
  let current: string | null = null;
  for (const l of links) {
    const section = document.querySelector(l.href);
    if (section && section.getBoundingClientRect().top <= line) current = l.href;
  }
  return current;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setActive(currentSection());
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // The "evive" wordmark sits at ~66% of the logo's height, not 50%: nudge the nav and
  // actions down by ~16% of the current logo height so they line up with it.
  const wordmarkAlign = scrolled
    ? "translate-y-[9px] md:translate-y-[10px]"
    : "translate-y-[10px] md:translate-y-[15px]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 shadow-[0_1px_0_0_color-mix(in_oklab,var(--gold)_28%,transparent)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
        <a href="#inicio" className="flex items-center" aria-label="LeVive – Beleza Natural">
          <img
            src={logo}
            srcSet={`${logo} 400w, ${logoHiRes} 600w`}
            sizes="(min-width: 768px) 165px, 110px"
            width={400}
            height={233}
            alt="LeVive – Beleza Natural"
            decoding="async"
            fetchPriority="high"
            className={`w-auto transition-all duration-500 ${scrolled ? "h-14 md:h-16" : "h-16 md:h-24"}`}
          />
        </a>

        <nav
          className={`hidden items-center gap-5 transition-transform duration-500 xl:flex ${wordmarkAlign}`}
        >
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative text-[0.78rem] uppercase tracking-[0.14em] transition-colors hover:text-gold-deep after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                  isActive ? "text-gold-deep after:w-full" : "text-foreground/80 after:w-0"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div
          className={`flex items-center gap-3 transition-transform duration-500 ${wordmarkAlign}`}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-gold hidden sm:inline-flex"
          >
            Agendar avaliação
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-principal"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-deep transition-colors hover:bg-gold/10 xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-principal"
        inert={!open}
        className={`grid bg-background/97 backdrop-blur-md transition-[grid-template-rows] duration-500 xl:hidden ${
          open ? "grid-rows-[1fr] border-t border-gold/20" : "grid-rows-[0fr]"
        }`}
      >
        <nav className="min-h-0 overflow-hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "location" : undefined}
                  className={`flex items-center gap-3 border-b border-gold/10 py-3.5 text-sm uppercase tracking-[0.16em] last:border-0 ${
                    isActive ? "text-gold-deep" : "text-foreground/85"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 shrink-0 rounded-full bg-gold transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {l.label}
                </a>
              );
            })}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="btn-gold mt-5 mb-2"
            >
              Agendar avaliação
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
