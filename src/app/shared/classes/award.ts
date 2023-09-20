export default class Award {
  private _name: string;
  private _awardList: string[] = [];

  constructor(name: string, list: string[]) {
    this._name = name;
    this._awardList = list;
  }

  get name(): string {
    return this._name;
  }

  get awardList(): string[] {
    return this._awardList;
  }
}
