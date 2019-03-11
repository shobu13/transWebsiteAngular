export class UploadedImagesModel {
  private _id: number;
  private _image: string;
  private _objectId: number;
  private _owner: number;
  private _contentType: number;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get objectId(): number {
    return this._objectId;
  }

  set objectId(value: number) {
    this._objectId = value;
  }

  get owner(): number {
    return this._owner;
  }

  set owner(value: number) {
    this._owner = value;
  }

  get contentType(): number {
    return this._contentType;
  }

  set contentType(value: number) {
    this._contentType = value;
  }

  constructor(input: any) {
    Object.assign(this, input);
  }
}
