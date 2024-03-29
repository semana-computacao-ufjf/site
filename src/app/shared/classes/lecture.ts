import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import TypeEnum from '../enums/type-enum';
import Speaker from './speaker';

export default class Lecture {
  private _dateTime: Date;
  private _description: string;
  private _duration: number; // tempo em minutos
  private _id: number;
  private _location: string;
  private _speaker?: Speaker | Speaker[];
  private _title: string;
  private _type: number;

  constructor(
    id: number,
    dateTime: Date,
    description: string,
    duration: number,
    location: string,
    title: string,
    type: number,
    speaker?: Speaker | Speaker[]
  ) {
    this._id = id;
    this._dateTime = dateTime;
    this._description = description;
    this._duration = duration;
    this._location = location;
    this._speaker = speaker;
    this._title = title;
    this._type = type;
  }

  get id(): number {
    return this._id;
  }

  get color(): string {
    return TypeEnum.getColor(this._type);
  }

  get icon(): IconDefinition {
    return TypeEnum.getIcon(this._type);
  }

  get dateTime(): Date {
    return this._dateTime;
  }

  get description(): string {
    return this._description;
  }

  get duration(): number {
    return this._duration;
  }

  get location(): string {
    return this._location;
  }

  get speaker(): Speaker | Speaker[] | undefined {
    return this._speaker;
  }

  get title(): string {
    return this._title;
  }

  get type(): number {
    return this._type;
  }
}
