import Lecture from '../classes/lecture';
import Speaker from '../classes/speaker';
import TypeEnum from '../enums/type-enum';

export const SpeakersData: Speaker[] = [
  new Speaker(0, 'Lahis', 'essa é a bio da moça', 'aqui a fotinha da moça', 'as redes sociais da moça', 'PGMC', 1),
  new Speaker(1, 'Priscila', '', '', '', 'PGMC', 2),
  new Speaker(2, 'IA', '', '', '', '', 3),
  new Speaker(3, '', '', '', '', '', 3),
  new Speaker(4, '', '', '', '', '', 3),
  new Speaker(5, '', '', '', '', '', 3),
  new Speaker(6, '', '', '', '', '', 3),
  new Speaker(7, 'Anderson', '', '', '', 'PGMC', 7),
  new Speaker(8, 'Codi', '', '', '', 'Codi', 8),
  new Speaker(9, 'Codi', '', '', '', 'Codi', 9),
  new Speaker(10, 'Valter Camargo', '', '', '', 'UFSCAR', 10),
  new Speaker(11, 'José Luiz Ferreira', '', '', '', 'TC Projetos', 11),
  new Speaker(
    12,
    'Leonardo Alencar',
    '',
    '',
    '',
    'Prefeitura de Juiz de Fora',
    12
  ),
  new Speaker(13, '', '', '', '', 'GET SI', 13),
  new Speaker(14, '', '', '', '', 'GET EngComp', 14),
  new Speaker(15, '', '', '', '', '', 15),
  new Speaker(16, '', '', '', '', 'GET EngComp', 16),
  new Speaker(17, '', '', '', '', 'GET Comp', 17),
  new Speaker(18, '', '', '', '', 'BITKA', 18),
  new Speaker(19, '', '', '', '', 'LEVTY', 19),
  new Speaker(20, '', '', '', '', 'GET EngComp', 20),
  new Speaker(21, '', '', '', '', 'GET EngComp', 21),
  new Speaker(22, 'Marcelo Ladeira Reis', '', '', '', 'BITKA', 22),
  new Speaker(23, 'Lívio Drumond Guerra', '', '', '', 'BITKA', 23),
  new Speaker(24, 'Amanda Chenu Romano', '', '', '', 'ESSS', 24),
  new Speaker(25, 'Leandro Alvim', '', '', '', 'UFRRJ', 25),
  new Speaker(26, 'Pablo Mendes', '', '', '', '', 26),
  new Speaker(27, 'Johnny', '', '', '', 'CGCO', 27),
  new Speaker(28, '', '', '', '', 'PET Comp', 28),
  new Speaker(29, 'João Pedro Salim', '', '', '', 'Discente do DCC', 29),
  new Speaker(30, 'Leonard Chaves', '', '', '', 'Discente do DCC', 30),
  new Speaker(31, '', '', '', '', 'PET Comp', 31),
  new Speaker(32, 'Carlos Augusto de Assis Lima', '', '', '', 'Rerum', 32),
  new Speaker(33, 'Camilla Cruz', '', '', '', 'Edenred', 33),
  new Speaker(
    34,
    'Bruno Ferreira',
    `Bruno Ferreira começou sua jornada na área de Tecnologia da Informação lá em 2002, quando plataforma SaaS eram apenas uma ideia distante. Desde então, ele mergulhou de cabeça em diversas tecnologias SaaS e liderou projetos que supercomplexos.
  Em 2012, o Bruno decidiu focar seus conhecimentos exclusivamente na gestão de ativos de software e SaaS, ou como a gente gosta de chamar, SAM (Software Asset Management). Ele ficou determinado a ajudar Clientes e Parceiros a botarem ordem na bagunça do software, tanto nas máquinas locais quanto nas nuvens SaaS, IaaS, PaaS.
  Com uma baita bagagem de experiência e um monte de certificações, o Bruno é simplesmente obcecado pelo mundo da ServiceNow. Ele gerencia projetos em grandes empresas com uma facilidade que faz parecer fácil como montar um quebra-cabeça.
  Então, se você está a fim de bater um papo sobre SaaS, ServiceNow,  governança de software, ou simplesmente quer pegar umas dicas com um verdadeiro mestre na área, o Bruno é o cara! Compareça e veja como ele pode te ajudar a dominar o mundo da TI. 💻🚀`,
    '',
    '',
    'Diretor Técnico na 4Matt Tecnologia',
    34
  ),
];

export const LecturesData: Lecture[][] = [
  // Segunda
  [
    new Lecture(
      0,
      new Date(2023, 9, 23, 10, 0),
      'Abertura da Semana do ICE',
      120,
      'Auditório do ICE',
      'Abertura da Semana do ICE',
      TypeEnum.Palestra
    ),
    new Lecture(
      1,
      new Date(2023, 9, 23, 14, 0),
      'Em breve mais informações',
      150,
      'Lab 2 Engenharia Computacional',
      'Introdução a simulações da mecânica do sólidos com Abaqus/CAE',
      TypeEnum.Minicurso,
      SpeakersData[0]
    ),
    new Lecture(
      2,
      new Date(2023, 9, 23, 14, 0),
      'Em breve mais informações',
      150,
      'Lab 1 Engenharia Computacional',
      'Introdução ao método dos elementos finitos usando o FeNiCs',
      TypeEnum.Minicurso,
      SpeakersData[1]
    ),
    new Lecture(
      3,
      new Date(2023, 9, 23, 17, 0),
      'Em breve mais informações',
      60,
      'L205',
      'Competição em IA: Introdução e apresentação do problema',
      TypeEnum.Competicao,
      SpeakersData[2]
    ),
    new Lecture(
      4,
      new Date(2023, 9, 23, 19, 0),
      'Abertura da Semana da Computação e Credenciamento',
      60,
      'A confirmar',
      'Abertura da Semana da Computação e Credenciamento',
      TypeEnum.Palestra
    ),
    new Lecture(
      5,
      new Date(2023, 9, 23, 20, 0),
      'Palestra de Abertura',
      90,
      'A confirmar',
      'Palestra de Abertura',
      TypeEnum.Palestra
    ),
  ],
  // Terça
  [
    new Lecture(
      6,
      new Date(2023, 9, 24, 8, 0),
      'Mais informações em breve',
      240,
      'L107',
      'Hackathon',
      TypeEnum.Competicao
    ),
    new Lecture(
      7,
      new Date(2023, 9, 24, 8, 0),
      'OpenFoam',
      240,
      'Lab 2 Engenharia Computacional',
      'Introdução à simulação de dinâmica dos fluidos usando OpenFOAM',
      TypeEnum.Minicurso,
      SpeakersData[7]
    ),
    new Lecture(
      8,
      new Date(2023, 9, 24, 8, 0),
      'Mais informações me breve',
      120,
      'L205',
      'Minicurso Codi Academy',
      TypeEnum.Minicurso,
      SpeakersData[8]
    ),
    new Lecture(
      9,
      new Date(2023, 9, 24, 10, 0),
      'Mais informações me breve',
      120,
      'L205',
      'Minicurso Codi Academy',
      TypeEnum.Minicurso,
      SpeakersData[9]
    ),
    new Lecture(
      10,
      new Date(2023, 9, 24, 14, 30),
      'Em breve mais informações',
      60,
      'A confirmar',
      'Engenharia de Software e IA',
      TypeEnum.Palestra,
      SpeakersData[10]
    ),
    new Lecture(
      11,
      new Date(2023, 9, 24, 14, 30),
      'Em breve mais informações',
      90,
      'A confirmar',
      'Projeto Automotivo do Design ao Protótipo com Auxílio da Ciência da Computação',
      TypeEnum.Palestra,
      SpeakersData[11]
    ),
    new Lecture(
      12,
      new Date(2023, 9, 24, 17, 0),
      'Em breve mais informações',
      60,
      'A confirmar',
      'Em breve',
      TypeEnum.Palestra,
      SpeakersData[12]
    ),
    new Lecture(
      13,
      new Date(2023, 9, 24, 19, 0),
      'Em breve mais informações',
      180,
      'L205',
      'Começando no React com um jogo idle clicker',
      TypeEnum.Minicurso,
      SpeakersData[13]
    ),
    new Lecture(
      14,
      new Date(2023, 9, 24, 19, 0),
      'Em breve mais informações',
      180,
      'L107',
      'Introdução à linguagem de programação Python',
      TypeEnum.Minicurso,
      SpeakersData[14]
    ),
    new Lecture(
      15,
      new Date(2023, 9, 24, 19, 0),
      'Em breve mais informações',
      180,
      'Lab 2 Engenharia Computacional',
      'Hackathon',
      TypeEnum.Competicao,
      SpeakersData[15]
    ),
  ],
  // Quarta
  [
    new Lecture(
      16,
      new Date(2023, 9, 25, 8, 0),
      'Carpintaria de Software',
      240,
      'L205',
      'Carpintaria de Software',
      TypeEnum.Minicurso,
      SpeakersData[16]
    ),
    new Lecture(
      17,
      new Date(2023, 9, 25, 8, 0),
      'Em breve mais informações',
      240,
      'L107',
      'Minicurso de GIT',
      TypeEnum.Minicurso,
      SpeakersData[17]
    ),
    new Lecture(
      18,
      new Date(2023, 9, 25, 8, 0),
      'Em breve mais informações',
      240,
      'A confirmar',
      'Processo Seletivo BITKA',
      TypeEnum.ProcessoSeletivo,
      SpeakersData[18]
    ),
    new Lecture(
      19,
      new Date(2023, 9, 25, 8, 0),
      'Em breve mais informações',
      240,
      'A confirmar',
      'Processo Seletivo LEVTY',
      TypeEnum.ProcessoSeletivo,
      SpeakersData[19]
    ),
    new Lecture(
      20,
      new Date(2023, 9, 25, 14, 0),
      'Em breve mais informações',
      210,
      'L107',
      'Introdução ao LaTeX',
      TypeEnum.Minicurso,
      SpeakersData[20]
    ),
    new Lecture(
      21,
      new Date(2023, 9, 25, 14, 0),
      'Em breve mais informações',
      210,
      'Lab 2 Engenharia Computacional',
      'Introdução a simulações computacionais com Ansys',
      TypeEnum.Minicurso,
      SpeakersData[21]
    ),
    new Lecture(
      22,
      new Date(2023, 9, 25, 17, 0),
      'Em breve mais informações',
      60,
      'A confirmar',
      'Em breve',
      TypeEnum.Palestra,
      [SpeakersData[22], SpeakersData[23]]
    ),
    new Lecture(
      23,
      new Date(2023, 9, 25, 19, 0),
      'Em breve mais informações',
      60,
      'On-line',
      'O que é CFD',
      TypeEnum.Palestra,
      SpeakersData[24]
    ),
    new Lecture(
      24,
      new Date(2023, 9, 25, 20, 0),
      'Em breve mais informações',
      60,
      'On-line',
      'Em breve',
      TypeEnum.Palestra,
      SpeakersData[25]
    ),
    new Lecture(
      25,
      new Date(2023, 9, 25, 21, 0),
      'Em breve mais informações',
      60,
      'On-line',
      'Em breve',
      TypeEnum.Palestra,
      SpeakersData[26]
    ),
  ],
  // Quinta
  [
    new Lecture(
      26,
      new Date(2023, 9, 26, 8, 0),
      'Em breve mais informações',
      660,
      'A confirmar',
      'Visita Técnica à EMBRAPA',
      TypeEnum.VisitaTecnica
    ),
    new Lecture(
      27,
      new Date(2023, 9, 26, 8, 0),
      'Em breve mais informações',
      240,
      'L107',
      'Desenvolvendo uma aplicação com Next.js e Tailwind CSS',
      TypeEnum.Minicurso,
      SpeakersData[27]
    ),
    new Lecture(
      28,
      new Date(2023, 9, 26, 10, 0),
      'Em breve mais informações',
      120,
      'L205',
      'Dominando o VS Code',
      TypeEnum.Minicurso,
      SpeakersData[28]
    ),
    new Lecture(
      29,
      new Date(2023, 9, 26, 14, 0),
      'Em breve mais informações',
      240,
      'L107',
      'Recriando as mecânicas de Celeste na Unity',
      TypeEnum.Minicurso,
      [SpeakersData[29], SpeakersData[30]]
    ),
    new Lecture(
      30,
      new Date(2023, 9, 26, 14, 0),
      'Em breve mais informações',
      240,
      'L205',
      'Fundamentos de desenvolvimento Web',
      TypeEnum.Minicurso,
      SpeakersData[31]
    ),
    new Lecture(
      31,
      new Date(2023, 9, 26, 19, 0),
      'Em breve mais informações',
      60,
      'A confirmar',
      'Em breve',
      TypeEnum.Palestra,
      SpeakersData[32]
    ),
    new Lecture(
      32,
      new Date(2023, 9, 26, 20, 0),
      'Em breve mais informações',
      60,
      'A confirmar',
      'Em breve',
      TypeEnum.Palestra,
      SpeakersData[33]
    ),
    new Lecture(
      33,
      new Date(2023, 9, 26, 21, 0),
      'Em breve mais informações',
      60,
      'A confirmar',
      'Em breve',
      TypeEnum.Palestra,
      SpeakersData[34]
    ),
  ],
  // Sexta
  [
    new Lecture(
      29,
      new Date(2023, 9, 27, 8, 0),
      'Maratona de Programação JR',
      240,
      'L107',
      'Maratona de Programação JR',
      TypeEnum.Competicao,
      new Speaker(29, 'DCC', 'DCC', '', '', 'DCC', 29)
    ),
  ],
];
