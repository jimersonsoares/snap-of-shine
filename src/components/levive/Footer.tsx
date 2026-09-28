import logo from "@/assets/levive-logo-sm.png";
import logoHiRes from "@/assets/levive-logo-header.png";
import whatsappIcon from "@/assets/whatsapp.png";
import instagramIcon from "@/assets/instagram.png";
import { INSTAGRAM_URL, WHATSAPP_URL } from "./data";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Jornada", href: "#jornada" },
  { label: "Tratamentos", href: "#tratamentos" },
  { label: "Como cuidamos", href: "#como-cuidamos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-background pb-28 pt-16 md:pb-14">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img
              src={logo}
              srcSet={`${logo} 400w, ${logoHiRes} 600w`}
              sizes="110px"
              width={400}
              height={233}
              alt="LeVive – Beleza Natural"
              loading="lazy"
              className="h-16 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              LeVive – Beleza &amp; Estética com alma, cuidado personalizado e resultados naturais.
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
                className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={whatsappIcon}
                  alt=""
                  width={44}
                  height={44}
                  loading="lazy"
                  className="h-11 w-11 drop-shadow-[0_6px_12px_rgba(0,0,0,0.14)]"
                />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da LeVive"
                className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={instagramIcon}
                  alt=""
                  width={44}
                  height={44}
                  loading="lazy"
                  className="h-11 w-11 drop-shadow-[0_6px_12px_rgba(0,0,0,0.14)]"
                />
              </a>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Este site tem caráter informativo e não substitui avaliação profissional. Resultados
              podem variar de acordo com cada pessoa e protocolo.
            </p>
          </div>
        </div>

        <div className="gold-rule mt-12" />
        <p className="mt-6 text-center text-xs tracking-wide text-muted-foreground">
          © {new Date().getFullYear()} LeVive – Beleza &amp; Estética. Todos os direitos reservados.
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
        className="fixed bottom-24 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 hover:scale-105 md:bottom-7"
      >
        <img
          src={whatsappIcon}
          alt=""
          width={64}
          height={64}
          className="h-16 w-16 drop-shadow-[0_10px_18px_rgba(0,0,0,0.18)]"
        />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-background/95 p-3 backdrop-blur md:hidden">
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold w-full">
          Agendar avaliação
        </a>
      </div>
    </>
  );
}
