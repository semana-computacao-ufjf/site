import {
  IconDefinition,
  faUsersRectangle,
  faPersonChalkboard,
  faBriefcase,
  faAward,
  faVanShuttle,
  faGuitar,
} from '@fortawesome/free-solid-svg-icons';

export default class TypeEnum {
  Palestra = 0;
  Minicurso = 1;
  ProcessoSeletivo = 2;
  Competicao = 3;
  VisitaTecnica = 4;
  ShowTalentos = 5;

  static getTypes(): string[] {
    return [
      'Palestra',
      'Minicurso',
      'Processo Seletivo',
      'Competição',
      'Visita Técnica',
      'Show de Talentos',
    ];
  }

  static getType(type: number): string {
    return this.getTypes()[type];
  }

  static getColor(type: number): string {
    const colors = [''];
    return colors[type];
  }

  static getIcon(type: number): IconDefinition {
    const icons = [
      faUsersRectangle,
      faPersonChalkboard,
      faBriefcase,
      faAward,
      faVanShuttle,
      faGuitar,
    ];
    return icons[type];
  }
}
