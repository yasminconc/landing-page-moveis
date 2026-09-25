// src/pages/projects/showcaseData.js

// Quarto
import quarto1 from '../../assets/quarto1.jpeg'
import quarto2 from '../../assets/quarto2.jpeg'
import quarto3 from '../../assets/quarto3.jpeg'
import quarto4 from '../../assets/kitchen.jpg' // ou outra foto de ambiente

// Lounge / Estar
import lounge1 from '../../assets/lounge1.jpeg'
import lounge2 from '../../assets/lounge2.jpeg'
import sala1 from '../../assets/cozinha1.jpeg'
import sala2 from '../../assets/sala2.jpeg'

// Sala de Jantar / Dining
import sala3 from '../../assets/sala3.jpeg'
import sala4 from '../../assets/sala4.jpeg'
import sala5 from '../../assets/sala5.jpeg'
import living1 from '../../assets/living-room1.jpeg'


// Escritório / Office
import escritorio4 from '../../assets/escritorio4.jpeg'
import escritorio5 from '../../assets/escritorio5.jpeg'
import escritorio6 from '../../assets/escritorio6.jpeg'
import living2 from '../../assets/living-room2.jpeg'

// src/pages/projects/showcaseData.js
import bed from '../../assets/bed-icon.svg';
import chair from '../../assets/chair-icon.svg';
import glass from '../../assets/dinning-room-icon.svg';
import office from '../../assets/office-icon.svg';

export const CATEGORIES = [
  { id: 'bedroom', label: 'BEDROOM', icon: bed },
  { id: 'lounge', label: 'LOUNGE', icon: chair },
  { id: 'dining', label: 'DINING ROOM', icon: glass },
  { id: 'office', label: 'OFFICE', icon: office },
];

export const showcaseData = {
  bedroom: [
    {
      id: 'bed-1',
      title: 'MASTER SUITE CANOPY',
      subtitle: 'MINIMALIST HERITAGE BEDROOM',
      img: quarto1,
      detailFocus: 'center 75%', // Posição que dá o foco no móvel
      wood: 'Carvalho Americano Maciço',
      finish: 'Verniz Fosco Acetinado',
      expectation: 'Cliente desejava cama com cabeceira flutuante e iluminação indireta integrada.',
      highlight: 'Encaixes de marcenaria artesanal sem fixações aparentes.',
      client: 'Marina & Lucas — São Paulo, SP'
    },
    {
      id: 'bed-2',
      title: 'NORDIC OAK WARDROBE',
      subtitle: 'INTEGRATED CLOSET SYSTEM',
      img: quarto2,
      detailFocus: 'right 60%',
      wood: 'Freijó Natural & Palhinha',
      finish: 'Óleo Vegetal Natural',
      expectation: 'Otimização máxima de espaço vertical mantendo leveza visual no quarto.',
      highlight: 'Portas usinadas com treliça ventilada manualmente.',
      client: 'Renata Castro — Curitiba, PR'
    },
    {
      id: 'bed-3',
      title: 'JAPANDI BED PLATFORM',
      subtitle: 'LOW PROFILE SLEEP SYSTEM',
      img: quarto3,
      detailFocus: 'center 60%',
      wood: 'Tauari Claro',
      finish: 'Seladora Fosca Touch',
      expectation: 'Design rebaixado minimalista com mesinhas laterais integradas em balanço.',
      highlight: 'Cantos curvos usinados em CNC de alta precisão.',
      client: 'Guilherme Dias — Rio de Janeiro, RJ'
    },
    {
      id: 'bed-4',
      title: 'HERITAGE SUITE DRESSER',
      subtitle: 'CUSTOM STORAGE UNIT',
      img: quarto4,
      detailFocus: 'center center',
      wood: 'Nogueira Maciça',
      finish: 'Cera de Abelha & Verniz PU',
      expectation: 'Pôde integrar nichos para organização de jóias e espelho escamoteável.',
      highlight: 'Gavetas com corrediças ocultas e amortecimento soft-close.',
      client: 'Família Silveira — Belo Horizonte, MG'
    }
  ],

  lounge: [
    {
      id: 'lou-1',
      title: 'MID-CENTURY CREDENZA',
      subtitle: 'ACOUSTIC & MEDIA LOUNGE',
      img: lounge1,
      detailFocus: 'left 60%',
      wood: 'Nogueira Escura Selecionada',
      finish: 'Verniz Poliuretano Acetinado',
      expectation: 'Acomodar equipamentos de áudio vintage preservando ventilação posterior.',
      highlight: 'Portas de correr com ripado contínuo e veio alinhado.',
      client: 'André Martins — Florianópolis, SC'
    },
    {
      id: 'lou-2',
      title: 'CONVERSATION MODULAR SOFA',
      subtitle: 'ORGANIC WOODEN BASE',
      img: lounge2,
      detailFocus: 'center 80%',
      wood: 'Cumaru Extra & Couro Natural',
      finish: 'Acabamento Mineral Mate',
      expectation: 'Estrutura robusta com bandejas laterais embutidas de apoio para copos e livros.',
      highlight: 'Base chanfrada em ângulo de 45°.',
      client: 'Camila & Fernando — Porto Alegre, RS'
    },
    {
      id: 'lou-3',
      title: 'SCULPTURAL COFFEE TABLE',
      subtitle: 'CENTRAL ACCENT PIECE',
      img: sala1,
      detailFocus: 'center 50%',
      wood: 'Peroba Rosa de Demolição',
      finish: 'Tratamento Hidrorrepelente',
      expectation: 'Mesa de centro com aspecto rústico nobre para contrastar com ambiente clean.',
      highlight: 'Bordas naturais mantidas com preenchimento em resina fosca.',
      client: 'Patrícia Prado — São Paulo, SP'
    },
    {
      id: 'lou-4',
      title: 'ARCHITECTURAL WALL SHELVING',
      subtitle: 'FLOOR TO CEILING SYSTEM',
      img: sala2,
      detailFocus: 'center 40%',
      wood: 'Carvalho Europeu',
      finish: 'Pátina Suave Clareada',
      expectation: 'Estante de 3.2m de altura para livros de arte e iluminação LED oculta.',
      highlight: 'Prateleiras com alma de aço estrutural para vão livre sem flecha.',
      client: 'Roberto Vasconcelos — Brasília, DF'
    }
  ],

  dining: [
    {
      id: 'din-1',
      title: 'MONOLITH DINING TABLE',
      subtitle: 'CENTRAL GATHERING PIECE',
      img: sala3,
      detailFocus: 'center 65%',
      wood: 'Angelim Pedra Maciço',
      finish: 'Óleo Monocoat Resistente',
      expectation: 'Mesa de jantar de 3m para 10 pessoas com tampo inteiriço chanfrado.',
      highlight: 'Pés em cavalete piramidal com travamento tradicional de respiga.',
      client: 'Luciana Mello — Campinas, SP'
    },
    {
      id: 'din-2',
      title: 'LINEAR BUFFET & BAR',
      subtitle: 'WALL-MOUNTED SIDEBOARD',
      img: sala4,
      detailFocus: 'left 70%',
      wood: 'Nogueira & Mármore Paraná',
      finish: 'Verniz Ultramate',
      expectation: 'Aparador suspenso com nicho de pedra para bar e preparo de bebidas.',
      highlight: 'Iluminação difusa interna ativada por sensor de presença.',
      client: 'Henrique Barreto — Salvador, BA'
    },
    {
      id: 'din-3',
      title: 'CURVED DINING CHAIRS SET',
      subtitle: 'ERGONOMIC WOODWORK',
      img: sala5,
      detailFocus: 'center 75%',
      wood: 'Tauari Vaporizado Curvado',
      finish: 'Toque Sedoso Acetinado',
      expectation: 'Cadeiras leves, empilháveis e confortáveis para longas reuniões de jantar.',
      highlight: 'Encosto moldado por termoformagem em prensa hidráulica.',
      client: 'Clara Meirelles — Rio de Janeiro, RJ'
    },
    {
      id: 'din-4',
      title: 'CHEF CELLAR & CABINET',
      subtitle: 'TEMPERATURE CONTROLLED UNIT',
      img: living1,
      detailFocus: 'center center',
      wood: 'Cedro Rosa Aromático',
      finish: 'Selador Ecológico',
      expectation: 'Adega climatizada embutida em armário com fechamento hermético de vidro duplo.',
      highlight: 'Prateleiras deslizantes para garrafas com inclinação de 15°.',
      client: 'Marcelo Rezende — Santos, SP'
    }
  ],

  office: [
    {
      id: 'off-1',
      title: 'EXECUTIVE CANTILEVER DESK',
      subtitle: 'ERGONOMIC HOME WORKSPACE',
      img: escritorio4,
      detailFocus: 'center 70%',
      wood: 'Nogueira Maciça & Couro Soleta',
      finish: 'Acabamento PU Anti-risco',
      expectation: 'Mesa limpa com canaleta oculta de fiação, tomadas embutidas e gaveteiro invisível.',
      highlight: 'Estrutura em balanço sustentada por coluna lateral reforçada.',
      client: 'Diego Albuquerque — Vitória, ES'
    },
    {
      id: 'off-2',
      title: 'LIBRARY STORAGE & ARCHIVE',
      subtitle: 'MODULAR WALL ARCHIVE',
      img: escritorio5,
      detailFocus: 'center 50%',
      wood: 'Carvalho Americano',
      finish: 'Verniz Fosco Microtexturizado',
      expectation: 'Nichos dimensionados para pasta suspensa e livros pesados de advocacia.',
      highlight: 'Trilhos deslizantes com roldanas de rolamento silencioso.',
      client: 'Escritório Fontes & Associados — SP'
    },
    {
      id: 'off-3',
      title: 'FLOATING CREDENZA & DISPLAY',
      subtitle: 'MINIMAL WALL DISPLAY',
      img: escritorio6,
      detailFocus: 'left 60%',
      wood: 'Freijó Maciço e Vidro Canelado',
      finish: 'Óleo Natural Mate',
      expectation: 'Móvel de apoio para troféus e cafeteira com visual leve.',
      highlight: 'Portas em vidro canelado com perfil de madeira ultrafino de 15mm.',
      client: 'Bárbara Fontana — Goiânia, GO'
    },
    {
      id: 'off-4',
      title: 'MEETING & CONFERENCE DESK',
      subtitle: 'TEAM COLLABORATIVE TABLE',
      img: living2,
      detailFocus: 'center center',
      wood: 'Pau-Ferro Natural',
      finish: 'Verniz de Alta Resistência',
      expectation: 'Mesa de conferência para 8 pessoas com conectividade integrada de áudio/vídeo.',
      highlight: 'Caixas de conectividade ocultas em tampa basculante de madeira.',
      client: 'Studio Co-working — São Paulo, SP'
    }
  ]
}