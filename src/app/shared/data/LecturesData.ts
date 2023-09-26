import Lecture from '../classes/lecture';
import Speaker from '../classes/speaker';
import TypeEnum from '../enums/type-enum';

export const SpeakersData: Speaker[] = [
  new Speaker(0, 'Lahis', '', '', '', 'PGMC', 1),
  new Speaker(1, 'Priscila', '', '', '', 'PGMC', 2),
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
      'Abaqus',
      150,
      'Lab 1 Engenharia Computacional',
      'Abaqus',
      TypeEnum.Minicurso,
      SpeakersData[0]
    ),
    new Lecture(
      2,
      new Date(2023, 9, 23, 14, 0),
      'FeniCs',
      150,
      'Lab 2 Engenharia Computacional',
      'FeniCs',
      TypeEnum.Minicurso,
      SpeakersData[1]
    ),
    new Lecture(
      3,
      new Date(2023, 9, 23, 17, 0),
      '',
      60,
      '',
      '',
      TypeEnum.Palestra
    ),
    new Lecture(
      4,
      new Date(2023, 9, 23, 19, 0),
      'Abertura da Semana da Computação e Credenciamento',
      60,
      '',
      'Abertura da Semana da Computação e Credenciamento',
      TypeEnum.Palestra
    ),
    new Lecture(
      5,
      new Date(2023, 9, 23, 20, 0),
      'Palestra de Abertura',
      90,
      '',
      'Palestra de Abertura',
      TypeEnum.Palestra
    ),
  ],
  // Terça
  [
    new Lecture(
      7,
      new Date(2023, 9, 24, 8, 0),
      'OpenFoam',
      240,
      'L205',
      'OpenFoam',
      TypeEnum.Minicurso,
      new Speaker(7, 'Anderson', 'PGMC', '', '', 'PGMC', 7)
    ),
  ],
  // Quarta
  [
    new Lecture(
      11,
      new Date(2023, 9, 25, 8, 0),
      'Carpintaria de Software',
      240,
      '',
      'Carpintaria de Software',
      TypeEnum.Minicurso,
      new Speaker(11, 'GET EngComp', 'GET', '', '', 'GET', 11)
    ),
  ],
  // Quinta
  [
    new Lecture(
      20,
      new Date(2023, 9, 26, 8, 0),
      'TailwindCSS e Prisma',
      240,
      '',
      'TailwindCSS e Prisma',
      TypeEnum.Minicurso,
      new Speaker(20, 'Johnny', 'CGCO', '', '', 'CGCO', 20)
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
