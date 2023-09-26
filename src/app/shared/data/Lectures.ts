import Lecture from '../classes/lecture';
import Speaker from '../classes/speaker';
import TypeEnum from '../enums/type-enum';

export const Lectures = [
  // Segunda
  [
    new Lecture(
      1,
      new Date(2023, 10, 23, 10, 0),
      'Abertura da Semana do ICE',
      120,
      'Auditório do ICE',
      'Abertura da Semana do ICE',
      TypeEnum.Palestra
    ),
  ],
  // Terça
  [
    new Lecture(
      7,
      new Date(2023, 10, 24, 8, 0),
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
      new Date(2023, 10, 25, 8, 0),
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
      new Date(2023, 10, 26, 8, 0),
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
      new Date(2023, 10, 27, 8, 0),
      'Maratona de Programação JR',
      240,
      'L107',
      'Maratona de Programação JR',
      TypeEnum.Competicao,
      new Speaker(29, 'DCC', 'DCC', '', '', 'DCC', 29)
    ),
  ],
];
