import {UploadedImagesModel} from '../../core/models/uploaded-images.model';

export class ConseilModel {
  private _id: number;
  private _content_type: number;
  private _titre: string;
  private _texte: string;
  private _date: Date;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get content_type(): number {
    return this._content_type;
  }

  set content_type(value: number) {
    this._content_type = value;
  }

  get titre(): string {
    return this._titre;
  }

  set titre(value: string) {
    this._titre = value;
  }

  get texte(): string {
    return this._texte;
  }

  set texte(value: string) {
    this._texte = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  constructor(input: any) {
    Object.assign(this, input);
  }
}
