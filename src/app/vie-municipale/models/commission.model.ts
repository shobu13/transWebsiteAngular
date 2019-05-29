import {UploadedImagesModel} from '../../core/models/uploaded-images.model';
import {UserModel} from '../../core/models/user.model';

export class CommissionModel {
  private _id: number;
  private _content_type: number;
  private _titre: string;
  private _description: string;
  private _titulaires: UserModel[];
  private _suppleants: UserModel[];

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

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get titulaires(): UserModel[] {
    return this._titulaires;
  }

  set titulaires(value: UserModel[]) {
    this._titulaires = value;
  }

  get suppleants(): UserModel[] {
    return this._suppleants;
  }

  set suppleants(value: UserModel[]) {
    this._suppleants = value;
  }

  constructor(input: any) {
    Object.assign(this, input);
  }
}
