import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MastheadService {

  private dataSubject = new Subject<MastheadUpdate>();

  constructor() {
  }

  updateMasthead(cover: string, html: string) {
    this.dataSubject.next(new MastheadUpdate(cover, html));
  }

  getUpdate(): Observable<MastheadUpdate> {
    return this.dataSubject.asObservable();
  }
}

export class MastheadUpdate {

  constructor(cover: string, html: string) {
    this.cover = cover;
    this.html = html;
  }

  cover: string;
  html: string;
}
