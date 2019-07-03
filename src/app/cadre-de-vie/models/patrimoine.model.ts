import {UploadedImagesModel} from '../../core/models/uploaded-images.model';

export class PatrimoineModel {
  private _id: number;
  private _images: UploadedImagesModel[];
  private _content_type: number;
  private _nom: string;
  private _description: string;
  private _adresse: string;
  private _patrimoine_image: string;

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

  get adresse(): string {
    return this._adresse;
  }

  set adresse(value: string) {
    this._adresse = value;
  }

  get patrimoine_image(): string {
    return this._patrimoine_image;
  }

  set patrimoine_image(value: string) {
    this._patrimoine_image = value;
  }

  constructor(input: any) {
    Object.assign(this, input);
  }
}
