export default class Organizer {
  _profileLink: string;
  _imageSrc: string;
  _fullName: string;
  _role: string;

  constructor(
    profileLink: string,
    imageSrc: string,
    fullName: string,
    role: string
  ) {
    this._profileLink = profileLink;
    this._imageSrc = imageSrc;
    this._fullName = fullName;
    this._role = role;
  }

  get profileLink(): string {
    return this._profileLink;
  }

  get imageSrc(): string {
    return this._imageSrc;
  }

  get fullName(): string {
    return this._fullName;
  }

  get role(): string {
    return this._role;
  }
}
