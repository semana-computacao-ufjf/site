export default class Supporter {
  private _name: string;
  private _logoPath: string;
  private _url: string;
  private _isSponsor: boolean;

  constructor(name: string, logoPath: string, url: string, isSponsor: boolean) {
    this._name = name;
    this._logoPath = logoPath;
    this._url = url;
    this._isSponsor = isSponsor;
  }

  get name(): string {
    return this._name;
  }

  get logoPath(): string {
    return this._logoPath;
  }

  get url(): string {
    return this._url;
  }

  get isSponsor(): boolean {
    return this._isSponsor;
  }
}
