import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../../assets/conf';

import {
  startOfMonth,
  endOfMonth,
} from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
  }

  list(estMairie = true, owner?, debutAfter = startOfMonth(Date.now()), finBefore = endOfMonth(Date.now())) {
    let url = API_URL + 'evenement/?';
    url += '&est_mairie=' + estMairie;
    url += '&debut_after=' + `${debutAfter.getFullYear()}-${debutAfter.getMonth() + 1}-${debutAfter.getDate()}`;
    url += '&fin_before=' + `${finBefore.getFullYear()}-${finBefore.getMonth() + 1}-${finBefore.getDate()}`;

    if (!estMairie && owner) {
      url += '&owner=' + owner;
    }
    return this.http.get(url);
  }

  retrieve(id: number) {
    return this.http.get(API_URL + 'evenement/' + id);
  }
}
