import {UserModel} from '../../core/models/user.model';

export class CommerceModel {
  private _id: number;
  private _content_type: number;
  private _nom: string;
  private _adresse: string;
  private _code_postal: string;
  private _resume: string;
  private _description: string;
  private _header: string;
  private _owner: UserModel;

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

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get adresse(): string {
    return this._adresse;
  }

  set adresse(value: string) {
    this._adresse = value;
  }

  get code_postal(): string {
    return this._code_postal;
  }

  set code_postal(value: string) {
    this._code_postal = value;
  }

  get resume(): string {
    return this._resume;
  }

  set resume(value: string) {
    this._resume = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get header(): string {
    return this._header;
  }

  set header(value: string) {
    this._header = value;
  }

  get owner(): UserModel {
    return this._owner;
  }

  set owner(value: UserModel) {
    this._owner = value;
  }

  constructor(input: any) {
    Object.assign(this, input);
  }
}
