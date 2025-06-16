import { Event, Person, Post, Denuncia, MenuItem } from "@/types";

export const events: Event[] = [
  {
    id: "mbl-day-2025",
    title: "MBL Day 2025",
    date: "2025-07-15",
    location: "Centro de Eventos do Ceará, Fortaleza",
    description: "O maior evento de renovação política do estado do Ceará. Participe e conheça as propostas do MBL para o futuro do estado.",
    image: "/images/mbl-day.jpg",
    link: "/eventos/mbl-day",
    isHighlight: true,
    tags: ["política", "renovação", "evento"]
  },
  {
    id: "congresso-mbl-2025",
    title: "Congresso Nacional MBL 2025",
    date: "2025-09-20",
    location: "Brasília, DF",
    description: "Congresso anual que reúne coordenadores e membros de todo o Brasil para discutir os rumos do movimento.",
    image: "/images/congresso-mbl.jpg",
    link: "/eventos/congresso",
    isHighlight: true,
    tags: ["congresso", "nacional", "política"]
  },
  {
    id: "palestra-economia",
    title: "Palestra: Economia e Liberdade",
    date: "2025-08-10",
    location: "Universidade Federal do Ceará, Fortaleza",
    description: "Palestra sobre os princípios de uma economia livre e suas vantagens para o desenvolvimento do país.",
    image: "/images/palestra-economia.jpg",
    link: "/eventos/palestra-economia",
    isHighlight: false,
    tags: ["economia", "palestra", "liberdade"]
  }
];

export const team: Person[] = [
  {
    id: "coordenador-estadual",
    name: "Rafael Silva",
    role: "Coordenador Estadual",
    description: "Advogado e ativista político, coordena as ações do MBL no Ceará desde 2018.",
    image: "/images/coordenador.jpg",
    socialMedia: {
      instagram: "https://instagram.com/rafaelsilva",
      twitter: "https://twitter.com/rafaelsilva",
    }
  },
  {
    id: "coordenador-juridico",
    name: "Mariana Costa",
    role: "Coordenadora Jurídica",
    description: "Advogada especialista em Direito Constitucional, responsável pela área jurídica do movimento.",
    image: "/images/coord-juridico.jpg",
    socialMedia: {
      instagram: "https://instagram.com/marianacosta",
      linkedin: "https://linkedin.com/in/marianacosta",
    }
  },
  {
    id: "coordenador-comunicacao",
    name: "Pedro Almeida",
    role: "Coordenador de Comunicação",
    description: "Jornalista com experiência em marketing político, responsável pela estratégia de comunicação.",
    image: "/images/coord-comunicacao.jpg",
    socialMedia: {
      instagram: "https://instagram.com/pedroalmeida",
      twitter: "https://twitter.com/pedroalmeida",
    }
  },
  {
    id: "coordenador-mobilizacao",
    name: "Carla Mendes",
    role: "Coordenadora de Mobilização",
    description: "Cientista política, responsável pela mobilização e campanhas do movimento no estado.",
    image: "/images/coord-mobilizacao.jpg",
    socialMedia: {
      instagram: "https://instagram.com/carlamendes",
      facebook: "https://facebook.com/carlamendes",
    }
  }
];

export const posts: Post[] = [
  {
    id: "liberdade-economica",
    title: "A importância da liberdade econômica para o desenvolvimento do Brasil",
    excerpt: "Como a liberdade econômica pode transformar o país e gerar mais oportunidades para todos os brasileiros.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl.",
    author: "Rafael Silva",
    date: "2025-05-15",
    image: "/images/liberdade-economica.jpg",
    category: "Economia"
  },
  {
    id: "reforma-administrativa",
    title: "Por que precisamos de uma reforma administrativa urgente?",
    excerpt: "A reforma administrativa é fundamental para tornar o Estado mais eficiente e reduzir os gastos públicos.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl.",
    author: "Mariana Costa",
    date: "2025-05-10",
    image: "/images/reforma-administrativa.jpg",
    category: "Política"
  },
  {
    id: "educacao-liberdade",
    title: "Educação e liberdade: caminhos para um futuro melhor",
    excerpt: "Como a liberdade de escolha na educação pode melhorar a qualidade do ensino no Brasil.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed euismod, nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nisl eget ultricies ultricies, nunc nisl ultricies nunc, vitae ultricies nisl.",
    author: "Pedro Almeida",
    date: "2025-05-05",
    image: "/images/educacao-liberdade.jpg",
    category: "Educação"
  }
];

export const denuncias: Denuncia[] = [
  {
    id: "denuncia-001",
    title: "Irregularidade em obra pública municipal",
    description: "Denúncia sobre possíveis irregularidades em licitação para obra de pavimentação no bairro Centro.",
    date: "2025-05-20",
    location: "Fortaleza",
    status: "resolvida",
    isPublic: true,
    image: "/images/denuncia-1.jpg"
  },
  {
    id: "denuncia-002",
    title: "Desvio de recursos na Secretaria de Saúde",
    description: "Suspeita de desvio de recursos destinados à compra de medicamentos para o posto de saúde municipal.",
    date: "2025-05-15",
    location: "Sobral",
    status: "em_analise",
    isPublic: true
  },
  {
    id: "denuncia-003",
    title: "Uso indevido de veículo oficial",
    description: "Denúncia sobre o uso de veículo oficial para fins particulares por parte de funcionário público.",
    date: "2025-05-10",
    location: "Juazeiro do Norte",
    status: "resolvida",
    isPublic: true,
    image: "/images/denuncia-3.jpg"
  }
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
