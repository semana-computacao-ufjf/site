import { Lectures } from '../data/Lectures';
import Lecture from './lecture';

export default class Speaker {
  _description: string;
  _fullName: string;
  _id: number;
  _imageSrc: string;
  _lectureGiven: number;
  _profileLink: string;
  _role: string;

  constructor(
    id: number,
    fullName: string,
    description: string,
    imageSrc: string,
    profileLink: string,
    role: string,
    lectureGiven: number
  ) {
    this._id = id;
    this._fullName = fullName;
    this._description = description;
    this._imageSrc = imageSrc;
    this._profileLink = profileLink;
    this._role = role;
    this._lectureGiven = lectureGiven;
  }

  get id(): number {
    return this._id;
  }

  get description(): string {
    return this._description;
  }

  get fullName(): string {
    return this._fullName;
  }

  get imageSrc(): string {
    return this._imageSrc;
  }

  get lectureGiven(): number {
    return this._lectureGiven;
  }

  get profileLink(): string {
    return this._profileLink;
  }

  get role(): string {
    return this._role;
  }
}
