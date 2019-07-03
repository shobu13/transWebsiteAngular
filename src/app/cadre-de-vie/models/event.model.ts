import {UploadedImagesModel} from '../../core/models/uploaded-images.model';
import {AssociationModel} from '../../association/models/association.model';

export class EventModel {
  private _id: number;
  private _images: UploadedImagesModel;
  private _content_type: number;
  private _nom: string;
  private _description: string;
  private _est_marie: boolean;
  private _debut: Date;
  private _fin: Date;
  private _owner: AssociationModel;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get images(): UploadedImagesModel {
    return this._images;
  }

  set images(value: UploadedImagesModel) {
    this._images = value;
  }

  get content_type(): number {
    return this._content_type;
  }

  set content_type(value: number) {
    this._content_type = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get est_marie(): boolean {
    return this._est_marie;
  }

  set est_marie(value: boolean) {
    this._est_marie = value;
  }

  get debut(): Date {
    return this._debut;
  }

  set debut(value: Date) {
    this._debut = new Date(value);
  }

  get fin(): Date {
    return this._fin;
  }

  set fin(value: Date) {
    this._fin = new Date(value);
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
