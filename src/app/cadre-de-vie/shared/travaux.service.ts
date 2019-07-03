import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DateFormatter} from '@angular/common/src/pipes/deprecated/intl';
import {API_URL} from '../../../assets/conf';

@Injectable({
  providedIn: 'root'
})
export class TravauxService {

  constructor(private http: HttpClient) {
  }

  list(finAfter?: Date) {
    let date: string;
    date = `${finAfter.getFullYear()}-${finAfter.getMonth()}-${finAfter.getDay()}`;
    let url = API_URL + 'travail/';
    if (finAfter) {
      url += '?fin_after=' + date;
    }
    return this.http.get(url);
  }
}
