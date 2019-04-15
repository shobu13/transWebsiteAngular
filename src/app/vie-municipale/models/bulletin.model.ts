export class BulletinModel {
  private _id: number;
  private _date: Date;
  private _pdf: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get pdf(): string {
    return this._pdf;
  }

  set pdf(value: string) {
    this._pdf = value;
  }

  constructor(input: any) {
    Object.assign(this, input);
  }
}
