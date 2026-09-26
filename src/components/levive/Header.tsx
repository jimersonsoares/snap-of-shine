import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/levive-logo.png.asset.json";
import { WHATSAPP_URL } from "./data";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre a LeVive", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 shadow-[0_1px_0_0_color-mix(in_oklab,var(--gold)_28%,transparent)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a href="#inicio" className="flex items-center" aria-label="LeVive – Beleza Natural">
          <img
            src={logo.url}
            alt="LeVive – Beleza Natural"
            className={`w-auto transition-all duration-500 ${scrolled ? "h-9" : "h-11"}`}
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-[0.78rem] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-gold-deep after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold hidden sm:inline-flex">
            Agendar avaliação
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-deep transition-colors hover:bg-gold/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-gold/20 bg-background/97 backdrop-blur-md transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-gold/10 py-3.5 text-sm uppercase tracking-[0.16em] text-foreground/85 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="btn-gold mt-5 mb-2"
          >
            Agendar avaliação
          </a>
        </nav>
      </div>
    </header>
  );
}
