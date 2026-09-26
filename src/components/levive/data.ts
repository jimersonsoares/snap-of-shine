import facial from "@/assets/facial.jpg";
import body from "@/assets/body.jpg";
import advanced from "@/assets/advanced.jpg";
import technology from "@/assets/technology.jpg";
import dermocosmetics from "@/assets/dermocosmetics.jpg";

/** Placeholders facilmente editáveis — substitua pelos tratamentos reais da clínica. */
export const categories = [
  "Todos",
  "Facial",
  "Corporal",
  "Harmonização",
  "Tecnologias",
  "Dermocosméticos",
] as const;

export type Category = (typeof categories)[number];

export type Treatment = {
  name: string;
  category: Exclude<Category, "Todos">;
  description: string;
  image: string;
};

export const treatments: Treatment[] = [
  {
    name: "Protocolo Facial Personalizado",
    category: "Facial",
    description:
      "Cuidado individualizado para saúde, viço e equilíbrio da pele do rosto.",
    image: facial,
  },
  {
    name: "Limpeza de Pele Profunda",
    category: "Facial",
    description:
      "Higienização completa com ativos de alta performance e finalização calmante.",
    image: dermocosmetics,
  },
  {
    name: "Protocolo Corporal",
    category: "Corporal",
    description:
      "Sessões pensadas para bem-estar, firmeza e contorno do corpo.",
    image: body,
  },
  {
    name: "Estética Avançada Facial",
    category: "Harmonização",
    description:
      "Procedimentos avançados com abordagem discreta e resultados naturais.",
    image: advanced,
  },
  {
    name: "Protocolo com Tecnologia",
    category: "Tecnologias",
    description:
      "Equipamentos modernos aplicados de forma precisa e segura para cada pele.",
    image: technology,
  },
  {
    name: "Rotina de Dermocosméticos",
    category: "Dermocosméticos",
    description:
      "Indicação de home care de alta performance para manter os resultados.",
    image: dermocosmetics,
  },
];

export const WHATSAPP_URL =
  "https://wa.me/5500000000000?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20LeVive.";
export const INSTAGRAM_URL = "https://instagram.com/";
