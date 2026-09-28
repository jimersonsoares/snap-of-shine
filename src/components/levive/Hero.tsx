import hero from "@/assets/hero-woman.jpg";
import logo from "@/assets/levive-logo.png";
import { WHATSAPP_URL } from "./data";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background pt-32 md:pt-40">
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="float-slow pointer-events-none absolute -right-24 top-10 w-[34rem] max-w-none opacity-[0.07] md:opacity-[0.09]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 md:grid-cols-2 md:gap-16 md:px-10 md:pb-28">
        <div className="reveal relative z-10">
          <span className="kicker">Bem-vindos à Experiência LeVive</span>
          <h1 className="mt-6 text-[44px] leading-[1.05] font-normal md:text-[64px] lg:text-[80px]">
            Beleza que revela a sua <em className="italic text-shimmer">melhor versão.</em>
          </h1>
          <div className="gold-rule mt-8 w-28" />
          <p className="mt-7 max-w-xl text-justify text-[15px] leading-relaxed text-muted-foreground hyphens-none text-pretty md:text-[17px]">
            Na LeVive, Beleza &amp; Estética com alma, unimos tecnologia, dermocosméticos de alta
            performance e um atendimento acolhedor para revelar o melhor da sua pele e do seu corpo.
            Um espaço para todas as pessoas que desejam{" "}
            <span className="whitespace-nowrap">cuidar de si.</span>
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-gold whitespace-nowrap px-6!"
            >
              Agendar Avaliação
            </a>
            <a href="#tratamentos" className="btn-outline-gold whitespace-nowrap px-6!">
              Conheça nossos tratamentos
            </a>
          </div>
          <p className="mt-8 font-serif text-[22px] italic text-foreground/70">
            Seu cuidado. Sua beleza. Sua essência.
          </p>
        </div>

        <div className="reveal relative">
          <div className="absolute -left-6 -top-6 hidden h-40 w-40 rounded-full border border-gold/30 md:block" />
          <div className="photo-zoom relative rounded-[2rem] shadow-[var(--shadow-lift)]">
            <img
              src={hero}
              alt="Mulher com pele saudável em ambiente de estética premium da LeVive"
              width={1280}
              height={1600}
              className="h-[30rem] w-full object-cover md:h-[38rem]"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-gold/25 bg-card/95 px-6 py-5 backdrop-blur md:block">
            <p className="eyebrow">Cuidado personalizado</p>
            <p className="mt-2 font-serif text-2xl">Resultados naturais</p>
          </div>
        </div>
      </div>
    </section>
  );
}
