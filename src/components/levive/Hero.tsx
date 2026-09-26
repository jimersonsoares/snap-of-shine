import hero from "@/assets/hero-woman.jpg";
import logo from "@/assets/levive-logo.png.asset.json";
import { WHATSAPP_URL } from "./data";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background pt-28 md:pt-32">
      <img
        src={logo.url}
        alt=""
        aria-hidden="true"
        className="float-slow pointer-events-none absolute -right-24 top-10 w-[34rem] max-w-none opacity-[0.07] md:opacity-[0.09]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 md:grid-cols-2 md:gap-16 md:px-10 md:pb-28">
        <div className="reveal relative z-10">
          <span className="eyebrow">Bem-vinda à Experiência LeVive</span>
          <h1 className="mt-6 text-[2.7rem] leading-[1.06] md:text-6xl">
            Beleza que revela a sua{" "}
            <em className="not-italic text-gold-deep">melhor versão.</em>
          </h1>
          <div className="gold-rule mt-8 w-28" />
          <p className="mt-7 max-w-xl text-[1rem] leading-relaxed text-muted-foreground">
            Na LeVive – Beleza &amp; Estética com alma, unimos tecnologia,
            dermocosméticos de alta performance e um atendimento acolhedor para revelar o
            melhor da sua pele e do seu corpo.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold">
              Agendar minha avaliação
            </a>
            <a href="#tratamentos" className="btn-outline-gold">
              Conheça nossos tratamentos
            </a>
          </div>
          <p className="mt-8 font-serif text-lg italic text-foreground/70">
            Seu cuidado. Sua beleza. Sua essência.
          </p>
        </div>

        <div className="reveal relative">
          <div className="absolute -left-6 -top-6 hidden h-40 w-40 rounded-full border border-gold/30 md:block" />
          <img
            src={hero}
            alt="Mulher com pele saudável em ambiente de estética premium da LeVive"
            width={1280}
            height={1600}
            className="relative h-[30rem] w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)] md:h-[38rem]"
          />
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-gold/25 bg-card/95 px-6 py-5 backdrop-blur md:block">
            <p className="eyebrow">Cuidado personalizado</p>
            <p className="mt-2 font-serif text-2xl">Resultados naturais</p>
          </div>
        </div>
      </div>
    </section>
  );
}
