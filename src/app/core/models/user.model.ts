export class UserModel {
  private _id: number;
  private _lastLogin: Date;
  private _isSuperUser: boolean;
  private _username: string;
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _isStaff: boolean;
  private _isActive: boolean;
  private _dateJoined: boolean;
  private _groups: {
    id: number,
    name: string,
    permissions: number[]
  };


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get lastLogin(): Date {
    return this._lastLogin;
  }

  set lastLogin(value: Date) {
    this._lastLogin = value;
  }

  get isSuperUser(): boolean {
    return this._isSuperUser;
  }

  set isSuperUser(value: boolean) {
    this._isSuperUser = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get isStaff(): boolean {
    return this._isStaff;
  }

  set isStaff(value: boolean) {
    this._isStaff = value;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  get dateJoined(): boolean {
    return this._dateJoined;
  }

  set dateJoined(value: boolean) {
    this._dateJoined = value;
  }

  get groups(): { id: number; name: string; permissions: number[] } {
    return this._groups;
  }

  set groups(value: { id: number; name: string; permissions: number[] }) {
    this._groups = value;
  }

  constructor(input: any) {
    Object.assign(this, input);
  }
}
