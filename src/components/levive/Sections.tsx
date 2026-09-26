import {
  Clock,
  Heart,
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
import about from "@/assets/about-clinic.jpg";
import founder from "@/assets/founder.jpg";
import facial from "@/assets/facial.jpg";
import body from "@/assets/body.jpg";
import advanced from "@/assets/advanced.jpg";
import dermocosmetics from "@/assets/dermocosmetics.jpg";
import logo from "@/assets/levive-logo.png.asset.json";
import { INSTAGRAM_URL, WHATSAPP_URL } from "./data";

const pillars = [
  {
    icon: UserRound,
    title: "Atendimento Personalizado",
    text: "Escuta atenta e protocolos desenhados para a sua individualidade.",
  },
  {
    icon: Sparkles,
    title: "Alta Performance",
    text: "Dermocosméticos e ativos selecionados com critério técnico.",
  },
  {
    icon: Waves,
    title: "Tecnologia",
    text: "Equipamentos modernos aplicados com precisão e segurança.",
  },
  {
    icon: Heart,
    title: "Beleza Natural",
    text: "Resultados suaves que respeitam a sua essência.",
  },
];

export function Experience() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">A Experiência LeVive</span>
          <h2 className="mt-4 text-4xl leading-[1.12] md:text-5xl">
            Mais do que estética. Uma experiência de cuidado.
          </h2>
          <div className="gold-rule mx-auto mt-7 w-32" />
          <p className="mt-7 text-[0.98rem] leading-relaxed text-muted-foreground">
            Na LeVive, acreditamos que cuidar da beleza também é cuidar de si. Cada
            atendimento é pensado para proporcionar uma experiência personalizada,
            acolhedora e segura, respeitando a individualidade e a beleza natural de cada
            pessoa.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <article key={p.title} className="card-soft p-8">
              <p.icon className="h-7 w-7 stroke-[1.2] text-gold-deep" />
              <h3 className="mt-6 text-xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const techCards = [
  {
    title: "Protocolos Personalizados",
    text: "Cada plano é construído a partir da avaliação individual da sua pele.",
  },
  {
    title: "Equipamentos Modernos",
    text: "Espaço para cadastrar as tecnologias disponíveis na clínica.",
  },
  {
    title: "Dermocosméticos",
    text: "Ativos de alta performance para potencializar e manter resultados.",
  },
];

export function Technology() {
  return (
    <section id="tecnologia" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-10">
        <div className="relative">
          <img
            src={technology}
            alt="Ambiente sofisticado da LeVive com equipamento de estética moderno"
            loading="lazy"
            width={1408}
            height={1008}
            className="h-[26rem] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)] md:h-[32rem]"
          />
          <div className="absolute -right-5 -top-5 hidden h-28 w-28 rounded-full border border-gold/30 md:block" />
        </div>
        <div>
          <span className="eyebrow">Tecnologia</span>
          <h2 className="mt-4 text-4xl leading-[1.12] md:text-5xl">
            Tecnologia e conhecimento a favor da sua beleza
          </h2>
          <p className="mt-6 text-[0.98rem] leading-relaxed text-muted-foreground">
            Associamos tecnologia, protocolos personalizados e dermocosméticos de alta
            performance para oferecer uma experiência de cuidado cada vez mais precisa e
            individualizada.
          </p>
          <div className="mt-10 space-y-4">
            {techCards.map((c) => (
              <article key={c.title} className="card-soft flex gap-5 p-6">
                <div className="mt-1 h-10 w-10 shrink-0 rounded-full border border-gold/40" />
                <div>
                  <h3 className="text-xl">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.text}
                  </p>
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
    <section className="bg-beige py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-2xl">
          <span className="eyebrow">Seu plano de cuidado</span>
          <h2 className="mt-4 text-4xl leading-[1.12] md:text-5xl">
            Uma jornada pensada em quatro etapas
          </h2>
        </div>

        <div className="relative mt-16">
          <div className="gold-rule absolute left-0 right-0 top-6 hidden lg:block" />
          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-background font-serif text-lg text-gold-deep">
                  {s.n}
                </div>
                <h3 className="mt-6 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Results() {
  return (
    <section id="resultados" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Resultados</span>
          <h2 className="mt-4 text-4xl leading-[1.12] md:text-5xl">
            Resultados que valorizam a sua beleza natural
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
                    <img
                      src={logo.url}
                      alt=""
                      aria-hidden="true"
                      className="w-24 opacity-20"
                    />
                    <span className="absolute bottom-3 left-3 rounded-full border border-gold/40 bg-background/80 px-3 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-gold-deep">
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
    name: "Nome da cliente",
    text: "Depoimento placeholder: fui recebida com muito cuidado e atenção do início ao fim do atendimento.",
  },
  {
    name: "Nome da cliente",
    text: "Depoimento placeholder: gostei da forma como tudo foi explicado e adaptado para a minha pele.",
  },
  {
    name: "Nome da cliente",
    text: "Depoimento placeholder: ambiente acolhedor, equipe atenciosa e uma experiência muito tranquila.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-beige py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Depoimentos</span>
          <h2 className="mt-4 text-4xl leading-[1.12] md:text-5xl">
            Experiências que ficam
          </h2>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <article key={i} className="card-soft p-8">
              <div className="flex gap-1 text-gold-deep">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-6 text-lg leading-relaxed text-foreground/85">
                “{t.text}”
              </blockquote>
              <div className="mt-7 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/35 bg-beige text-[0.7rem] text-gold-deep">
                  LV
                </div>
                <p className="text-[0.78rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {t.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-background py-24 md:py-32">
      <img
        src={logo.url}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 w-[30rem] max-w-none opacity-[0.06]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-10">
        <div className="relative z-10">
          <span className="eyebrow">Sobre a LeVive</span>
          <h2 className="mt-4 text-4xl leading-[1.08] md:text-6xl">Uma clínica com alma.</h2>
          <div className="gold-rule mt-7 w-28" />
          <p className="mt-7 text-[0.98rem] leading-relaxed text-muted-foreground">
            A LeVive nasceu para transformar o cuidado com a beleza em uma experiência de
            acolhimento, confiança e autoestima. Aqui, cada pessoa é única e merece ser
            cuidada de forma individual.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="eyebrow">Nossa história</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Espaço reservado para a história da clínica e da fundadora.
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Missão</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Cuidar da beleza natural com técnica, tecnologia e acolhimento.
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Valores</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Ética, individualidade, segurança e cuidado humano.
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-5">
          <img
            src={founder}
            alt="Espaço para a foto da fundadora da LeVive"
            loading="lazy"
            width={1008}
            height={1200}
            className="col-span-2 h-72 w-full rounded-[1.75rem] object-cover shadow-[var(--shadow-soft)]"
          />
          <img
            src={about}
            alt="Recepção elegante da clínica LeVive"
            loading="lazy"
            width={1200}
            height={1408}
            className="h-56 w-full rounded-[1.5rem] object-cover"
          />
          <img
            src={dermocosmetics}
            alt="Dermocosméticos de alta performance utilizados na LeVive"
            loading="lazy"
            width={1008}
            height={1200}
            className="h-56 w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function MainCta() {
  return (
    <section className="bg-nude py-24 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-10">
        <h2 className="text-4xl leading-[1.12] md:text-5xl">
          Está pronta para viver a experiência LeVive?
        </h2>
        <p className="mt-6 text-[0.98rem] leading-relaxed text-foreground/75">
          Agende sua avaliação e descubra um protocolo pensado para você.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-gold">
            Agendar avaliação
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-outline-gold"
          >
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
          <span className="eyebrow">Instagram</span>
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
              aria-label="Abrir o Instagram da LeVive"
            >
              <img
                src={src}
                alt="Publicação da LeVive no Instagram"
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/12" />
            </a>
          ))}
        </div>

        <div className="mt-11 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-outline-gold"
          >
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
          <span className="eyebrow">Localização e contato</span>
          <h2 className="mt-4 text-4xl leading-[1.12] md:text-5xl">
            Venha conhecer a LeVive
          </h2>
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
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-gold"
            >
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
