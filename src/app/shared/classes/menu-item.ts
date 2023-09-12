export default class MenuItem {
  _name: string;
  _link: string;

  constructor(name: string, link: string) {
    this._name = name;
    this._link = link;
  }

  get name(): string {
    return this._name;
  }

  get link(): string {
    return this._link;
  }

  set name(name: string) {
    this._name = name;
  }

  set link(link: string) {
    this._link = link;
  }
}
