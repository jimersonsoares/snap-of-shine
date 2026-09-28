import facial from "@/assets/facial.jpg";
import body from "@/assets/body.jpg";
import advanced from "@/assets/advanced.jpg";
import technology from "@/assets/technology.jpg";
import dermocosmetics from "@/assets/dermocosmetics.jpg";
import portrait from "@/assets/hero-woman.jpg";

/**
 * Tratamentos reais da LeVive, conforme o material "Nossos cuidados LeVive".
 * As fotos são provisórias: troque o `image` de cada tratamento pela foto real.
 * As explicações são gerais e devem ser revisadas pela clínica.
 */
export type Treatment = {
  name: string;
  description: string;
  image: string;
};

export type TreatmentGroup = {
  category: string;
  /** Complemento do material da clínica, exibido acima dos cards. */
  note?: string;
  treatments: Treatment[];
};

export const treatmentGroups: TreatmentGroup[] = [
  {
    category: "Facial",
    treatments: [
      {
        name: "Limpeza de Pele Profunda",
        description:
          "Remove impurezas, cravos e células mortas, deixando a pele mais limpa, uniforme e preparada para outros cuidados.",
        image: facial,
      },
      {
        name: "Microagulhamento Facial",
        description:
          "Microperfurações controladas estimulam a produção de colágeno e ajudam a melhorar textura, poros e marcas.",
        image: advanced,
      },
      {
        name: "Radiofrequência Facial",
        description:
          "Aquecimento controlado das camadas da pele que estimula o colágeno e contribui para mais firmeza.",
        image: technology,
      },
      {
        name: "Clareamento Facial",
        description:
          "Protocolo para suavizar manchas e uniformizar o tom da pele, com ativos clareadores e fotoproteção.",
        image: dermocosmetics,
      },
      {
        name: "Dermaplaning",
        description:
          "Esfoliação delicada que remove células mortas e a penugem fina, deixando a pele mais lisa e luminosa.",
        image: portrait,
      },
      {
        name: "Peeling para Bolsas e Olheiras",
        description:
          "Peeling específico para a região dos olhos, que ajuda a suavizar a pigmentação e a aparência cansada do olhar.",
        image: facial,
      },
      {
        name: "Peeling Facial (Alta Performance)",
        description:
          "Renovação celular com ácidos selecionados para melhorar textura, viço e manchas, de acordo com a necessidade da pele.",
        image: dermocosmetics,
      },
    ],
  },
  {
    category: "Corporal",
    treatments: [
      {
        name: "Criolipólise",
        description:
          "Resfriamento controlado de áreas com gordura localizada, uma alternativa não invasiva para o contorno corporal.",
        image: technology,
      },
      {
        name: "Radiofrequência Corporal",
        description:
          "Aquecimento das camadas profundas da pele que estimula o colágeno e melhora a firmeza e o aspecto da celulite.",
        image: body,
      },
      {
        name: "Drenagem Linfática Manual",
        description:
          "Movimentos suaves e ritmados que estimulam a circulação linfática e ajudam a reduzir inchaço e retenção de líquidos.",
        image: dermocosmetics,
      },
      {
        name: "Massagem Modeladora",
        description:
          "Manobras firmes que ativam a circulação e auxiliam no contorno e na definição do corpo.",
        image: body,
      },
      {
        name: "Protocolo Anti-Foliculite (Glúteos)",
        description:
          "Cuidado para pelos encravados, manchas e irritações na região dos glúteos, deixando a pele mais lisa e uniforme.",
        image: dermocosmetics,
      },
      {
        name: "Tratamento de Pescoço e Colo",
        description:
          "Protocolo para firmeza, linhas e manchas de uma região que costuma mostrar cedo os sinais do tempo.",
        image: portrait,
      },
      {
        name: "Limpeza de Pele das Costas",
        description:
          "Limpeza profunda das costas para remover cravos e impurezas e cuidar de áreas com tendência à acne.",
        image: body,
      },
      {
        name: "Lipoquímica/Intradermoterapia",
        description:
          "Aplicação de ativos diretamente na região tratada para auxiliar na redução de gordura localizada.",
        image: technology,
      },
      {
        name: "Clareamento Corporal",
        description:
          "Protocolo para uniformizar o tom de áreas como axilas, virilhas, joelhos e cotovelos.",
        image: dermocosmetics,
      },
    ],
  },
  {
    category: "Capilar",
    treatments: [
      {
        name: "Queda de cabelo pós-emagrecimento",
        description:
          "Tratamento para a queda de fios que pode surgir após uma perda de peso importante ou mudanças na alimentação.",
        image: portrait,
      },
      {
        name: "Afinamento do fio",
        description:
          "Protocolo que fortalece o couro cabeludo e estimula fios mais espessos e resistentes.",
        image: dermocosmetics,
      },
      {
        name: "Alopecia androgenética",
        description:
          "Acompanhamento da queda de origem hormonal e genética, com terapias voltadas ao couro cabeludo.",
        image: technology,
      },
      {
        name: "Caspa/oleosidade",
        description:
          "Cuidado do couro cabeludo para controlar descamação, coceira e excesso de oleosidade.",
        image: portrait,
      },
    ],
  },
  {
    category: "Íntimo",
    treatments: [
      {
        name: "Rejuvenescimento íntimo",
        description:
          "Tecnologias que estimulam o colágeno da região íntima, contribuindo para firmeza, hidratação e bem-estar.",
        image: technology,
      },
      {
        name: "Clareamento íntimo",
        description:
          "Protocolo para uniformizar o tom da pele da região íntima e da virilha, com ativos adequados à área.",
        image: dermocosmetics,
      },
    ],
  },
  {
    category: "Infusão Inteligente",
    note: "Drug Delivery de Ativos de Alta Performance: ativos conduzidos às camadas mais profundas da pele para potencializar cada protocolo.",
    treatments: [
      {
        name: "Lift Facial",
        description:
          "Ativos tensores conduzidos às camadas da pele para uma aparência mais firme e sustentada.",
        image: advanced,
      },
      {
        name: "Anti-Rugas",
        description: "Ativos que suavizam linhas de expressão e estimulam a renovação da pele.",
        image: facial,
      },
      {
        name: "Pescoço e Colo",
        description:
          "Ativos firmadores e clareadores para a pele fina e delicada do pescoço e do colo.",
        image: portrait,
      },
      {
        name: "Glow (Luminosidade e Viço)",
        description: "Ativos antioxidantes e hidratantes que devolvem brilho e viço à pele opaca.",
        image: dermocosmetics,
      },
      {
        name: "Repair (Reparação da Pele)",
        description:
          "Ativos reparadores que fortalecem a barreira da pele e acalmam sensibilidades.",
        image: facial,
      },
      {
        name: "Clareamento de Alta Performance",
        description:
          "Ativos clareadores conduzidos em profundidade para tratar manchas persistentes.",
        image: dermocosmetics,
      },
    ],
  },
  {
    category: "Profissional parceiro",
    note: "Procedimentos realizados por profissional parceiro, sob consulta.",
    treatments: [
      {
        name: "Botox",
        description:
          "Aplicação de toxina botulínica para suavizar rugas de expressão, preservando a naturalidade do rosto.",
        image: advanced,
      },
      {
        name: "Harmonização Facial",
        description:
          "Conjunto de procedimentos que realçam e equilibram os traços do rosto, respeitando suas características.",
        image: portrait,
      },
      {
        name: "Bioestimulador",
        description:
          "Aplicação que estimula a produção natural de colágeno, melhorando a firmeza da pele de forma gradual.",
        image: facial,
      },
    ],
  },
];

const WHATSAPP_NUMBER = "5500000000000";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = whatsappLink("Olá! Gostaria de agendar uma avaliação na LeVive.");
export const INSTAGRAM_URL = "https://instagram.com/";
