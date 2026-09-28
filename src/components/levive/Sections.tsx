import { useEffect, useState } from "react";
import {
  Clock,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Sparkles,
  Star,
  UserRound,
  Waves,
} from "lucide-react";
import technology from "@/assets/technology.jpg";
import leticia from "@/assets/leticia.jpg";
import flavia from "@/assets/flavia.jpg";
import about from "@/assets/about-clinic.jpg";
import facial from "@/assets/facial.jpg";
import body from "@/assets/body.jpg";
import advanced from "@/assets/advanced.jpg";
import dermocosmetics from "@/assets/dermocosmetics.jpg";
import logo from "@/assets/levive-logo.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { INSTAGRAM_URL, WHATSAPP_URL } from "./data";

const careCards = [
  {
    icon: UserRound,
    title: "Atendimento personalizado",
    text: "Escuta atenta e avaliação individual: cada protocolo é desenhado para você.",
  },
  {
    icon: Waves,
    title: "Tecnologia a favor do cuidado",
    text: "Equipamentos modernos aplicados com precisão e segurança em cada etapa.",
  },
  {
    icon: Sparkles,
    title: "Dermocosméticos de alta performance",
    text: "Ativos selecionados com critério técnico para potencializar e manter os resultados.",
  },
];

export function HowWeCare() {
  return (
    <section id="como-cuidamos" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:items-stretch md:px-10">
        <div className="relative md:h-full">
          <div className="photo-zoom rounded-[2rem] shadow-[var(--shadow-soft)] md:h-full">
            <img
              src={technology}
              alt="Ambiente sofisticado da LeVive com equipamento de estética moderno"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-[26rem] w-full object-cover md:h-full"
            />
          </div>
          <div className="absolute -right-5 -top-5 hidden h-28 w-28 rounded-full border border-gold/30 md:block" />
        </div>
        <div className="@container">
          <span className="kicker">Como cuidamos</span>
          {/* Sized to the column so "Uma experiência de cuidado." always holds one line. */}
          <h2 className="section-title mt-4 [font-size:min(3.5rem,9.6cqi)]!">
            Mais do que estética.{" "}
            <em className="block italic text-gold-deep">Uma experiência de cuidado.</em>
          </h2>
          <p className="mt-6 text-[0.98rem] leading-relaxed text-muted-foreground">
            Na LeVive, o cuidado começa pela escuta. Unimos atendimento personalizado, tecnologia e
            dermocosméticos de alta performance em protocolos pensados para a sua individualidade,
            respeitando a beleza natural de cada pessoa.
          </p>
          <div className="mt-10 space-y-4">
            {careCards.map((c) => (
              <article key={c.title} className="card-soft flex gap-5 p-6">
                <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40">
                  <c.icon aria-hidden="true" className="h-5 w-5 stroke-[1.3] text-gold-deep" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Avaliação", text: "Entendemos suas necessidades e objetivos." },
  {
    n: "02",
    title: "Planejamento",
    text: "Construímos um protocolo personalizado para você.",
  },
  {
    n: "03",
    title: "Tratamento",
    text: "Realizamos cada etapa com tecnologia, cuidado e segurança.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    text: "Acompanhamos sua evolução ao longo da jornada.",
  },
];

export function CarePlan() {
  return (
    <section id="jornada" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-2xl">
          <span className="kicker">Seu plano de cuidado</span>
          <h2 className="section-title mt-4 [--section-title-scale:0.7]">
            Uma jornada pensada <em className="italic text-gold-deep">em quatro etapas</em>
          </h2>
        </div>

        <div className="relative mt-[70px]">
          {/* Desktop: one rule from the centre of circle 01 to the centre of circle 04. */}
          <div
            aria-hidden="true"
            className="absolute top-[45px] hidden h-px bg-[linear-gradient(to_right,transparent,#C9AD80_12%,#C9AD80_88%,transparent)] lg:block"
            style={{ left: "calc((100% - 96px) / 8)", right: "calc((100% - 96px) / 8)" }}
          />
          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => {
              const last = i === steps.length - 1;
              return (
                <li
                  key={s.n}
                  className="relative grid grid-cols-[64px_1fr] gap-x-5 lg:flex lg:flex-col lg:items-center lg:gap-[22px] lg:text-center"
                >
                  {/* Mobile: a segment from this circle's centre to the next one's. */}
                  {!last && (
                    <span
                      aria-hidden="true"
                      className={`absolute top-8 left-8 h-[calc(100%+2.5rem)] w-px lg:hidden ${
                        i === 0
                          ? "bg-[linear-gradient(to_bottom,transparent,#C9AD80_30%)]"
                          : i === steps.length - 2
                            ? "bg-[linear-gradient(to_bottom,#C9AD80_70%,transparent)]"
                            : "bg-[#C9AD80]"
                      }`}
                    />
                  )}
                  <div
                    className={`relative z-10 row-span-2 flex h-16 w-16 items-center justify-center rounded-full border border-[#C9AD80] font-serif text-2xl leading-none shadow-[0_0_0_10px_var(--background)] lg:h-[90px] lg:w-[90px] lg:text-[32px] ${
                      last ? "bg-[#C9AD80] text-foreground" : "bg-background text-gold-deep"
                    }`}
                  >
                    {s.n}
                  </div>
                  <h3 className="mt-3.5 font-serif text-[26px] font-medium leading-tight lg:mt-0 lg:text-[30px]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[15px] font-light leading-[1.7] text-muted-foreground lg:mt-0 lg:max-w-[230px]">
                    {s.text}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-20 grid items-center gap-10 rounded-[2rem] border border-gold/25 bg-beige p-8 md:grid-cols-[1.4fr_1fr] md:p-12">
          <div>
            <h3 className="text-3xl leading-tight md:text-4xl">Como é a avaliação</h3>
            <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
              Na avaliação, conversamos sobre seus objetivos, analisamos sua pele e montamos um
              plano de cuidado só seu. É o primeiro passo da jornada.
            </p>
            <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-4 text-sm">
              <div>
                <dt className="eyebrow">Duração</dt>
                <dd className="mt-1.5 text-foreground/85">A confirmar</dd>
              </div>
              <div>
                <dt className="eyebrow">Valor</dt>
                <dd className="mt-1.5 text-foreground/85">A confirmar</dd>
              </div>
            </dl>
          </div>
          <div className="md:justify-self-end md:text-right">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold">
              <MessageCircle className="h-4 w-4" />
              Agendar avaliação
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              O agendamento é feito pelo WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Results() {
  return (
    <section id="resultados" className="bg-beige py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kicker kicker-symmetric">Resultados</span>
          <h2 className="section-title mt-4">
            Resultados que valorizam <em className="italic text-gold-deep">a sua beleza natural</em>
          </h2>
          <div className="gold-rule mx-auto mt-7 w-32" />
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <article key={i} className="card-soft overflow-hidden p-4">
              <div className="grid grid-cols-2 gap-3">
                {["Antes", "Depois"].map((label) => (
                  <div
                    key={label}
                    className="relative flex h-56 items-center justify-center rounded-xl bg-beige"
                  >
                    <img src={logo} alt="" aria-hidden="true" className="w-24 opacity-20" />
                    <span className="absolute bottom-3 left-3 rounded-full border border-gold/40 bg-background/80 px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] text-gold-ink">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="px-3 py-5 text-sm text-muted-foreground">
                Espaço reservado para as imagens reais de resultados da clínica.
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs tracking-wide text-muted-foreground">
          Resultados podem variar de acordo com cada pessoa e protocolo.
        </p>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Cliente LeVive",
    text: "Depoimento placeholder: o cuidado e a atenção estiveram presentes do início ao fim do atendimento.",
  },
  {
    name: "Cliente LeVive",
    text: "Depoimento placeholder: gostei da forma como tudo foi explicado e adaptado para a minha pele.",
  },
  {
    name: "Cliente LeVive",
    text: "Depoimento placeholder: ambiente acolhedor, equipe atenciosa e uma experiência muito tranquila.",
  },
];

const AUTOPLAY_MS = 7000;

// Embla needs more track than three wide slides give it to loop cleanly, so the
// list is rendered twice; the copies are hidden from assistive tech.
const testimonialSlides = [...testimonials, ...testimonials];

const arrowClass =
  "top-1/2 h-11 w-11 -translate-y-1/2 border-gold/40 bg-background/90 text-gold-deep shadow-[var(--shadow-soft)] backdrop-blur hover:bg-gold/10 hover:text-gold-deep disabled:opacity-40";

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMedia = () => setReducedMotion(media.matches);
    const onVisibility = () => setHidden(document.hidden);
    onMedia();
    media.addEventListener("change", onMedia);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      media.removeEventListener("change", onMedia);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  /** Of the two copies of testimonial i, the one closest to the current slide. */
  const nearestCopy = (i: number) => {
    const total = testimonialSlides.length;
    const distance = (a: number) =>
      Math.min(Math.abs(a - selected), total - Math.abs(a - selected));
    const other = i + testimonials.length;
    return distance(other) < distance(i) ? other : i;
  };

  // Any slide change, automatic or manual, restarts the countdown.
  useEffect(() => {
    if (!api || paused || hidden || reducedMotion) return;
    const timer = window.setTimeout(() => api.scrollNext(), AUTOPLAY_MS);
    return () => window.clearTimeout(timer);
  }, [api, selected, paused, hidden, reducedMotion]);

  return (
    <section id="depoimentos" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kicker kicker-symmetric">Depoimentos</span>
          <h2 className="section-title mt-4">
            Experiências <em className="italic text-gold-deep">que ficam</em>
          </h2>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "center", loop: true }}
          aria-roledescription="carrossel"
          aria-label="Depoimentos de clientes"
          className="mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
          }}
        >
          <CarouselContent className="py-6">
            {testimonialSlides.map((t, i) => (
              <CarouselItem
                key={i}
                aria-label={`${(i % testimonials.length) + 1} de ${testimonials.length}`}
                aria-hidden={i >= testimonials.length ? true : undefined}
                className="basis-[88%] md:basis-[70%] lg:basis-[58%]"
              >
                {/* Scale a wrapper, not the slide: Embla measures slides to place the loop. */}
                <div
                  className={`h-full transition-[opacity,scale] duration-700 ease-out ${
                    selected === i ? "scale-100 opacity-100" : "scale-[0.92] opacity-45"
                  }`}
                >
                  <article className="card-soft flex h-full flex-col items-center p-10 text-center md:p-14">
                    <div className="flex gap-1 text-gold-deep">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-7 font-serif text-xl italic leading-relaxed text-foreground/85 md:text-[1.75rem]">
                      “{t.text}”
                    </blockquote>
                    <div className="mt-8 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/35 bg-beige text-[0.7rem] text-gold-deep">
                        LV
                      </div>
                      <p className="text-[0.78rem] uppercase tracking-[0.18em] text-muted-foreground">
                        {t.name}
                      </p>
                    </div>
                  </article>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            aria-label="Depoimento anterior"
            className={`left-1 md:left-6 ${arrowClass}`}
          />
          <CarouselNext
            aria-label="Próximo depoimento"
            className={`right-1 md:right-6 ${arrowClass}`}
          />
        </Carousel>

        <div className="mt-8 flex justify-center gap-2.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(nearestCopy(i))}
              aria-label={`Ir para o depoimento ${i + 1}`}
              aria-current={selected % testimonials.length === i ? "true" : undefined}
              className="flex h-11 items-center justify-center px-1"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-500 ${
                  selected % testimonials.length === i ? "w-8 bg-gold" : "w-1.5 bg-gold/35"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-beige py-24 md:py-32">
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 w-[30rem] max-w-none opacity-[0.06]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        {/* Image composition, 540×720 at full size; everything inside is placed in %. */}
        <div className="relative z-10 mx-auto aspect-[540/720] w-full max-w-[540px]">
          {/* Main photo: arch (220px top radius, 24px base corners). */}
          <div className="photo-zoom absolute top-0 left-0 h-[86.11%] w-[81.48%] border border-[#C9AD80] [border-radius:50%_50%_24px_24px/35.48%_35.48%_24px_24px]">
            <img
              src={leticia}
              alt="Letícia Batista, gestora da LeVive"
              loading="lazy"
              width={880}
              height={1449}
              className="h-full w-full object-cover object-[50%_28%]"
            />
          </div>

          {/* Secondary photo: overlaps the main photo's bottom-right corner, 8px frame in the section colour. */}
          <div className="photo-zoom absolute top-[61.11%] left-[57.41%] h-[38.89%] w-[42.59%] rounded-[20px] border-8 border-beige shadow-[0_18px_40px_-24px_rgba(60,40,20,0.25)]">
            <img
              src={flavia}
              alt="Flávia Daher, esteticista da LeVive"
              loading="lazy"
              width={600}
              height={600}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="absolute bottom-[10.8%] left-[-4%] z-10 rounded-2xl border border-gold/25 bg-card/95 px-5 py-4 backdrop-blur md:px-6 md:py-5">
            <p className="eyebrow">Gestora</p>
            <p className="mt-1.5 font-serif text-xl md:text-2xl">Letícia Batista</p>
          </div>
          <div className="absolute right-[-4%] bottom-[-3%] z-10 rounded-2xl border border-gold/25 bg-card/95 px-4 py-3 backdrop-blur">
            <p className="eyebrow">Esteticista</p>
            <p className="mt-1 font-serif text-lg md:text-xl">Flávia Daher</p>
          </div>
        </div>

        <div className="relative z-10 pt-6 md:pt-0">
          <span className="kicker">Quem cuida de você</span>
          <h2 className="section-title section-title-compact mt-4">
            Cuidado com <em className="italic text-gold-deep">nome e rosto.</em>
          </h2>
          <div className="gold-rule mt-7 w-28" />
          <p className="mt-7 text-[0.98rem] leading-relaxed text-muted-foreground">
            Espaço reservado para apresentar quem está à frente da LeVive: a trajetória, o que
            motivou a criação da clínica e a forma de conduzir cada atendimento.
          </p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="eyebrow">Formação</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">A confirmar</dd>
            </div>
            <div>
              <dt className="eyebrow">Registro profissional</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">A confirmar</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="eyebrow">Forma de atender</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A confirmar: como é o primeiro contato, a avaliação e o acompanhamento.
              </dd>
            </div>
          </dl>

          <div className="mt-10 border-t border-gold/25 pt-7">
            <p className="font-serif text-2xl">A LeVive, uma clínica com alma.</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Nossa missão é cuidar da beleza natural com técnica, tecnologia e acolhimento, com
              ética, individualidade, segurança e cuidado humano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MainCta() {
  return (
    <section className="bg-nude py-24 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
        <h2 className="text-4xl leading-[1.12] md:text-5xl">Que tal viver a experiência LeVive?</h2>
        <p className="mt-6 text-[0.98rem] leading-relaxed text-foreground/75">
          Agende sua avaliação e descubra um protocolo pensado para você.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold">
            Agendar avaliação
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-outline-gold">
            <MessageCircle className="h-4 w-4" />
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

const posts = [facial, body, advanced, technology, dermocosmetics, about];

export function InstagramSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="kicker kicker-symmetric">Instagram</span>
          <h2 className="mt-4 text-4xl leading-[1.12] md:text-5xl">
            Viva a LeVive também no Instagram
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {posts.map((src, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl"
              tabIndex={-1}
              aria-hidden="true"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/12" />
            </a>
          ))}
        </div>

        <div className="mt-11 text-center">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn-outline-gold">
            <Instagram className="h-4 w-4" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contato" className="bg-beige py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-10">
        <div>
          <span className="kicker">Localização e contato</span>
          <h2 className="mt-4 text-4xl leading-[1.12] md:text-5xl">Venha conhecer a LeVive</h2>
          <div className="gold-rule mt-7 w-28" />

          <ul className="mt-10 space-y-6 text-sm">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 stroke-[1.2] text-gold-deep" />
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Endereço
                </p>
                <p className="mt-1.5 text-foreground/85">
                  Rua e número, bairro — cidade/UF (a confirmar)
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 stroke-[1.2] text-gold-deep" />
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Telefone / WhatsApp
                </p>
                <p className="mt-1.5 text-foreground/85">(00) 00000-0000</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 stroke-[1.2] text-gold-deep" />
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Horário de atendimento
                </p>
                <p className="mt-1.5 text-foreground/85">
                  Segunda a sexta, 9h às 19h · Sábado, 9h às 13h (a confirmar)
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Instagram className="mt-0.5 h-5 w-5 shrink-0 stroke-[1.2] text-gold-deep" />
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Instagram
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1.5 inline-block text-foreground/85 transition-colors hover:text-gold-deep"
                >
                  @levive
                </a>
              </div>
            </li>
          </ul>

          <div className="mt-10 flex flex-wrap gap-3.5">
            <a
              href="https://www.google.com/maps/search/?api=1&query=LeVive+Beleza+Natural"
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              <Navigation className="h-4 w-4" />
              Como chegar
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-outline-gold">
              <MessageCircle className="h-4 w-4" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-gold/25 shadow-[var(--shadow-soft)]">
          <iframe
            title="Mapa da localização da LeVive"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-46.66%2C-23.58%2C-46.62%2C-23.55&layer=mapnik"
            className="h-80 w-full grayscale-[35%] md:h-full md:min-h-[26rem]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
