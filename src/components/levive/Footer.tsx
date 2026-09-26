import { Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/levive-logo.png.asset.json";
import { INSTAGRAM_URL, WHATSAPP_URL } from "./data";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-background pb-28 pt-16 md:pb-14">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src={logo.url} alt="LeVive – Beleza Natural" className="h-12 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              LeVive – Beleza Natural. Beleza &amp; Estética com alma, cuidado
              personalizado e resultados naturais.
            </p>
          </div>

          <nav className="flex flex-col gap-3 md:items-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.78rem] uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-gold-deep"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="md:text-right">
            <p className="eyebrow">Fale com a LeVive</p>
            <div className="mt-4 flex gap-3 md:justify-end">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da LeVive"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-deep transition-colors hover:bg-gold/10"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da LeVive"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-deep transition-colors hover:bg-gold/10"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Este site tem caráter informativo e não substitui avaliação profissional.
              Resultados podem variar de acordo com cada pessoa e protocolo.
            </p>
          </div>
        </div>

        <div className="gold-rule mt-12" />
        <p className="mt-6 text-center text-xs tracking-wide text-muted-foreground">
          © {new Date().getFullYear()} LeVive – Beleza Natural. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export function FloatingActions() {
  return (
    <>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-deep text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:scale-105 md:bottom-7"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-background/95 p-3 backdrop-blur md:hidden">
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold w-full">
          Agendar avaliação
        </a>
      </div>
    </>
  );
}
