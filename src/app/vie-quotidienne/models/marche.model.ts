import {Time} from '@angular/common';

export class MarcheModel {

  private _id: number;
  private _adresse: string;
  private _code_postal: string;
  private _horaires: {
    id: number;
    jour: string;
    debut: Date;
    fin: Date;
  }[];


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
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

  get horaires(): { id: number; jour: string; debut: Date; fin: Date }[] {
    return this._horaires;
  }

  set horaires(value: { id: number; jour: string; debut: Date; fin: Date }[]) {
    this._horaires = value;
  }

  constructor(input: any) {
    Object.assign(this, input);
    console.log(this);
  }
}
