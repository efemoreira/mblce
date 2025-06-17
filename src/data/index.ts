import { Event, Person, Post, Denuncia, MenuItem, Reel } from "@/types";

export const heroSlides = [
  {
    id: "slide-1",
    title: "Junte-se ao MBL Ceará",
    subtitle: "Movimento Brasil Livre",
    description: "Faça parte do movimento que luta por liberdade, transparência e renovação política no Ceará.",
    imageUrl: "/images/banner-1.jpg",
    buttonText: "Saiba Mais",
    buttonLink: "/sobre"
  },
];

export const events: Event[] = [
  // {
  //   id: "mbl-day-2025",
  //   title: "MBL Day 2025",
  //   date: "2025-07-15",
  //   location: "Centro de Eventos do Ceará, Fortaleza",
  //   description: "O maior evento de renovação política do estado do Ceará. Participe e conheça as propostas do MBL para o futuro do estado.",
  //   image: "/images/mbl-day.jpg",
  //   link: "/eventos/mbl-day",
  //   isHighlight: true,
  //   isActive: true,
  //   registrationUrl: "/eventos/mbl-day",
  //   tags: ["política", "renovação", "evento"],
  //   details: {
  //     whatToExpect: "Este evento reunirá membros, simpatizantes e lideranças do MBL para discutir temas relevantes para o futuro político do Ceará e do Brasil. Os participantes terão a oportunidade de interagir com palestrantes renomados, participar de workshops e expandir sua rede de contatos.",
  //     schedule: [
  //       {
  //         time: "09:00",
  //         activity: "Credenciamento e café da manhã",
  //         description: "Recepção dos participantes com café da manhã de boas-vindas"
  //       },
  //       {
  //         time: "10:00",
  //         activity: "Abertura oficial com coordenadores",
  //         description: "Apresentação dos coordenadores e abertura oficial do evento"
  //       },
  //       {
  //         time: "11:00",
  //         activity: "Palestra principal",
  //         description: "Palestra magna sobre o futuro da política brasileira",
  //         speaker: "Convidado especial"
  //       },
  //     ],
  //     highlights: [
  //       "Palestras com grandes nomes da política nacional",
  //       "Workshops sobre comunicação política e mobilização",
  //       "Sessão de autógrafos com lançamentos de livros",
  //       "Networking com lideranças e membros de todo o Brasil"
  //     ]
  //   }
  // },
  // {
  //   id: "congresso-mbl-2025",
  //   title: "Congresso Nacional MBL 2025",
  //   date: "2025-09-20",
  //   endDate: "2025-09-21",
  //   location: "Brasília, DF",
  //   description: "Congresso anual que reúne coordenadores e membros de todo o Brasil para discutir os rumos do movimento.",
  //   image: "/images/congresso-mbl.jpg",
  //   link: "/eventos/congresso",
  //   isHighlight: true,
  //   isActive: true,
  //   registrationUrl: "/eventos/congresso",
  //   tags: ["congresso", "nacional", "política"],
  //   details: {
  //     whatToExpect: "O Congresso Nacional do MBL reúne anualmente coordenadores e membros de todo o Brasil para discutir os rumos do movimento e as estratégias para o futuro.",
  //     objectives: [
  //       "Fortalecer a integração entre os núcleos regionais do MBL",
  //       "Definir as diretrizes políticas para o próximo ano",
  //       "Capacitar lideranças regionais em temas estratégicos",
  //       "Promover o intercâmbio de experiências entre as regionais",
  //       "Avaliar os resultados das ações realizadas no último ano"
  //     ],
  //     multiDay: {
  //       day1: {
  //         date: "2025-09-20",
  //         title: "Dia 1 - 20 de setembro",
  //         schedule: [
  //           {
  //             time: "08:30",
  //             activity: "Credenciamento",
  //             description: "Recepção e credenciamento dos participantes"
  //           },
  //           {
  //             time: "09:30",
  //             activity: "Cerimônia de abertura",
  //             description: "Abertura oficial do congresso"
  //           },
  //           {
  //             time: "10:30",
  //             activity: "Palestra magna: \"O futuro da direita no Brasil\"",
  //             description: "Palestra principal sobre o cenário político nacional"
  //           },
  //           {
  //             time: "12:00",
  //             activity: "Almoço",
  //             description: "Intervalo para almoço"
  //           },
  //           {
  //             time: "14:00",
  //             activity: "Grupos de trabalho temáticos",
  //             description: "Divisão em grupos para discussões específicas"
  //           },
  //           {
  //             time: "17:00",
  //             activity: "Encerramento do dia",
  //             description: "Síntese dos trabalhos do primeiro dia"
  //           }
  //         ]
  //       },
  //       day2: {
  //         date: "2025-09-21",
  //         title: "Dia 2 - 21 de setembro",
  //         schedule: [
  //           {
  //             time: "09:00",
  //             activity: "Apresentação das deliberações dos grupos",
  //             description: "Cada grupo apresenta suas conclusões"
  //           },
  //           {
  //             time: "10:30",
  //             activity: "Debate sobre as propostas",
  //             description: "Discussão geral sobre as propostas apresentadas"
  //           },
  //           {
  //             time: "12:00",
  //             activity: "Almoço",
  //             description: "Intervalo para almoço"
  //           },
  //           {
  //             time: "14:00",
  //             activity: "Votação das diretrizes",
  //             description: "Votação das diretrizes e propostas para o próximo ano"
  //           },
  //           {
  //             time: "16:00",
  //             activity: "Cerimônia de encerramento",
  //             description: "Encerramento oficial do congresso"
  //           }
  //         ]
  //       }
  //     },
  //     speakers: [
  //       {
  //         id: "palestrante-1",
  //         name: "Palestrante 1",
  //         title: "Especialista em Política",
  //         image: "/images/palestrante-1.jpg"
  //       },
  //       {
  //         id: "palestrante-2",
  //         name: "Palestrante 2",
  //         title: "Especialista em Política",
  //         image: "/images/palestrante-2.jpg"
  //       },
  //       {
  //         id: "palestrante-3",
  //         name: "Palestrante 3",
  //         title: "Especialista em Política",
  //         image: "/images/palestrante-3.jpg"
  //       },
  //       {
  //         id: "palestrante-4",
  //         name: "Palestrante 4",
  //         title: "Especialista em Política",
  //         image: "/images/palestrante-4.jpg"
  //       }
  //     ]
  //   }
  // },
  // {
  //   id: "palestra-economia",
  //   title: "Palestra: Economia e Liberdade",
  //   date: "2025-08-10",
  //   location: "Universidade Federal do Ceará, Fortaleza",
  //   description: "Palestra sobre os princípios de uma economia livre e suas vantagens para o desenvolvimento do país.",
  //   image: "/images/palestra-economia.jpg",
  //   link: "/eventos/palestra-economia",
  //   isHighlight: false,
  //   isActive: true,
  //   registrationUrl: "/eventos/palestra-economia",
  //   tags: ["economia", "palestra", "liberdade"],
  //   details: {
  //     whatToExpect: "Uma palestra esclarecedora sobre os fundamentos da economia livre e como esses princípios podem contribuir para o desenvolvimento econômico e social do país.",
  //     schedule: [
  //       {
  //         time: "19:00",
  //         activity: "Abertura",
  //         description: "Apresentação do palestrante e do tema"
  //       },
  //       {
  //         time: "19:15",
  //         activity: "Palestra: Economia e Liberdade",
  //         description: "Apresentação principal sobre os princípios da economia livre",
  //         speaker: "Especialista em Economia"
  //       },
  //       {
  //         time: "20:30",
  //         activity: "Sessão de perguntas",
  //         description: "Perguntas e respostas com o público"
  //       },
  //       {
  //         time: "21:00",
  //         activity: "Encerramento",
  //         description: "Considerações finais e networking"
  //       }
  //     ]
  //   }
  // },
  // // Exemplo de evento inativo - não será mostrado na página
  // {
  //   id: "evento-passado",
  //   title: "Workshop: Comunicação Política",
  //   date: "2025-05-01",
  //   location: "Centro Cultural, Fortaleza",
  //   description: "Workshop sobre técnicas de comunicação política e estratégias de marketing político.",
  //   image: "/images/workshop-comunicacao.jpg",
  //   link: "/eventos/workshop-comunicacao",
  //   isHighlight: false,
  //   isActive: false, // Este evento não será mostrado
  //   tags: ["workshop", "comunicação", "marketing político"]
  // }
];

export const team: Person[] = [
  {
    id: "daniel",
    name: "Daniel",
    role: "Coordenador Estadual",
    description: "Coordenador estadual do MBL Ceará.",
    image: "/images/sobre/coordenadores/Daniel.png",
    socialMedia: {
      instagram: "https://instagram.com/daniel",
    }
  },
  {
    id: "derich",
    name: "Derich",
    role: "Coordenador Jurídico",
    description: "Responsável pela área jurídica do movimento.",
    image: "/images/sobre/coordenadores/Derich.png",
    socialMedia: {
      instagram: "https://instagram.com/derich",
    }
  },
  {
    id: "eliezer",
    name: "Eliezer",
    role: "Coordenador de Comunicação",
    description: "Responsável pela comunicação do MBL Ceará.",
    image: "/images/sobre/coordenadores/Eliezer.png",
    socialMedia: {
      instagram: "https://instagram.com/eliezer",
    }
  },
  {
    id: "matheus-janja",
    name: "Matheus Janja",
    role: "Coordenador de Mobilização",
    description: "Responsável pela mobilização e campanhas.",
    image: "/images/sobre/coordenadores/Matheus-Janja.png",
    socialMedia: {
      instagram: "https://instagram.com/matheusjanja",
    }
  },
  {
    id: "pedro-arthur",
    name: "Pedro Arthur",
    role: "Coordenador de Núcleos",
    description: "Responsável pelos núcleos regionais.",
    image: "/images/sobre/coordenadores/Pedro-Arthur.png",
    socialMedia: {
      instagram: "https://instagram.com/pedroarthur",
    }
  },
  {
    id: "thiago",
    name: "Thiago",
    role: "Coordenador de Eventos",
    description: "Organizador dos eventos do MBL Ceará.",
    image: "/images/sobre/coordenadores/Thiago.png",
    socialMedia: {
      instagram: "https://instagram.com/thiago",
    }
  },
  {
    id: "victor",
    name: "Victor",
    role: "Coordenador de Projetos",
    description: "Responsável pelos projetos especiais.",
    image: "/images/sobre/coordenadores/Victor.png",
    socialMedia: {
      instagram: "https://instagram.com/victor",
    }
  }
];

export const denuncias: Denuncia[] = [
  // {
  //   id: "denuncia-001",
  //   title: "Irregularidade em obra pública municipal",
  //   description: "Denúncia sobre possíveis irregularidades em licitação para obra de pavimentação no bairro Centro.",
  //   date: "2025-05-20",
  //   location: "Fortaleza",
  //   status: "resolvida",
  //   isPublic: true,
  //   image: "/images/denuncia-1.jpg"
  // },
  // {
  //   id: "denuncia-002",
  //   title: "Desvio de recursos na Secretaria de Saúde",
  //   description: "Suspeita de desvio de recursos destinados à compra de medicamentos para o posto de saúde municipal.",
  //   date: "2025-05-15",
  //   location: "Sobral",
  //   status: "em_analise",
  //   isPublic: true
  // },
];

export const menuItems: MenuItem[] = [
  {
    name: "Início",
    path: "/"
  },
  {
    name: "Sobre",
    path: "/sobre"
  },
  {
    name: "Eventos",
    path: "/eventos"
  },
  {
    name: "Camisa",
    path: "/camisa"
  },
  {
    name: "Denúncias",
    path: "/denuncias"
  }
];

export const reels: Reel[] = [
  // {
  //   id: "reel-001",
  //   title: "A importância da liberdade econômica",
  //   videoUrl: "https://www.instagram.com/reel/C1EXEMPLO1/",
  //   thumbnail: "/images/reel-1.jpg"
  // },
];
