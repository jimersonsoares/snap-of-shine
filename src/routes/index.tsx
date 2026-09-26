import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/levive/Header";
import { Hero } from "@/components/levive/Hero";
import { Treatments } from "@/components/levive/Treatments";
import {
  About,
  CarePlan,
  Contact,
  Experience,
  InstagramSection,
  MainCta,
  Results,
  Technology,
  Testimonials,
} from "@/components/levive/Sections";
import { Footer, FloatingActions } from "@/components/levive/Footer";

const title = "LeVive – Beleza Natural | Clínica de Estética Premium";
const description =
  "Na LeVive unimos tecnologia, dermocosméticos de alta performance e atendimento acolhedor para revelar o melhor da sua pele e do seu corpo. Agende sua avaliação.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Treatments />
        <Technology />
        <CarePlan />
        <Results />
        <Testimonials />
        <About />
        <MainCta />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
