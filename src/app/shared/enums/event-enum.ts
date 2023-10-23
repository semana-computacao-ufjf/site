export default class EventEnum {
  static CompeticaoIA: number = 0;
  static Hackathon1: number = 1;
  static Hackathon2: number = 2;

  static getEvents(): string[] {
    return ['Competição IA', 'Hackathon Rerum', 'Hackathon 4Matt'];
  }

  static getEvent(type: number): string {
    return this.getEvents()[type];
  }
}
