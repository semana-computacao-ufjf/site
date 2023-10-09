export default class EventEnum {
  static CompeticaoIA: number = 0;
  static Hackathon1: number = 1;
  static Hackathon2: number = 2;

  static getEvents(): string[] {
    return ['Competição IA', 'Hackathon 1', 'Hackathon 2'];
  }

  static getEvent(type: number): string {
    return this.getEvents()[type];
  }
}
