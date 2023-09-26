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
  static Palestra: number = 0;
  static Minicurso: number = 1;
  static ProcessoSeletivo: number = 2;
  static Competicao: number = 3;
  static VisitaTecnica: number = 4;
  static ShowTalentos: number = 5;

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
    const colors = ['info', 'light', 'warning', 'success', 'danger', 'primary'];
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
