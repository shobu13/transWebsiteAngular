export class UserModel {

  private _id: number;
  private _last_login: Date;
  private _is_superuser: boolean;
  private _username: string;
  private _first_name: string;
  private _last_name: string;
  private _email: string;
  private _is_staff: boolean;
  private _is_active: boolean;
  private _date_joined: boolean;
  private _groups: {
    id: number,
    name: string,
    permissions: number[]
  };
  private _elu_picture: {
    id: number;
    picture: string;
  };


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get last_login(): Date {
    return this._last_login;
  }

  set last_login(value: Date) {
    this._last_login = value;
  }

  get is_superuser(): boolean {
    return this._is_superuser;
  }

  set is_superuser(value: boolean) {
    this._is_superuser = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get first_name(): string {
    return this._first_name;
  }

  set first_name(value: string) {
    this._first_name = value;
  }

  get last_name(): string {
    return this._last_name;
  }

  set last_name(value: string) {
    this._last_name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get is_staff(): boolean {
    return this._is_staff;
  }

  set is_staff(value: boolean) {
    this._is_staff = value;
  }

  get is_active(): boolean {
    return this._is_active;
  }

  set is_active(value: boolean) {
    this._is_active = value;
  }

  get date_joined(): boolean {
    return this._date_joined;
  }

  set date_joined(value: boolean) {
    this._date_joined = value;
  }

  get groups(): { id: number; name: string; permissions: number[] } {
    return this._groups;
  }

  set groups(value: { id: number; name: string; permissions: number[] }) {
    this._groups = value;
  }

  get elu_picture(): { id: number; picture: string } {
    return this._elu_picture;
  }

  set elu_picture(value: { id: number; picture: string }) {
    this._elu_picture = value;
  }

  constructor(input: any) {
    Object.assign(this, input);
  }
}
