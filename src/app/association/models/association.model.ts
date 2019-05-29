import {UploadedImagesModel} from '../../core/models/uploaded-images.model';
import {UserModel} from '../../core/models/user.model';

export class AssociationModel {
  private _id: number;
  private _contentType: number;
  private _nom: string;
  private _description: string;
  private _cover: string;
  private _president: UserModel;
  private _tresorier: UserModel;
  private _secretaire: UserModel;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get contentType(): number {
    return this._contentType;
  }

  set contentType(value: number) {
    this._contentType = value;
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

  get cover(): string {
    return this._cover;
  }

  set cover(value: string) {
    this._cover = value;
  }

  get president(): UserModel {
    return this._president;
  }

  set president(value: UserModel) {
    this._president = value;
  }

  get tresorier(): UserModel {
    return this._tresorier;
  }

  set tresorier(value: UserModel) {
    this._tresorier = value;
  }

  get secretaire(): UserModel {
    return this._secretaire;
  }

  set secretaire(value: UserModel) {
    this._secretaire = value;
  }

  constructor(input: any) {
    Object.assign(this, input);
  }
}
