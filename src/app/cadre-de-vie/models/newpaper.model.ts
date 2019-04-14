import {UploadedImagesModel} from '../../core/models/uploaded-images.model';
import {AssociationModel} from '../../association/models/association.model';

export class NewpaperModel {
  private _id: number;
  private _images: UploadedImagesModel[];
  private _contentType: number;
  private _titre: string;
  private _texte: string;
  private _date: Date;
  private _estMairie: boolean;
  private _owner: AssociationModel;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get images(): UploadedImagesModel[] {
    return this._images;
  }

  set images(value: UploadedImagesModel[]) {
    this._images = value;
  }

  get contentType(): number {
    return this._contentType;
  }

  set contentType(value: number) {
    this._contentType = value;
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

  get estMairie(): boolean {
    return this._estMairie;
  }

  set estMairie(value: boolean) {
    this._estMairie = value;
  }

  get owner(): AssociationModel {
    return this._owner;
  }

  set owner(value: AssociationModel) {
    this._owner = value;
  }

  constructor(input: any) {
    Object.assign(this, input);
  }
}
