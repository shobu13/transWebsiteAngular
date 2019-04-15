import {Injectable} from '@angular/core';
import {API_URL} from '../../../assets/conf';
import {formatDate} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConseilService {

  constructor(private http: HttpClient) {
  }

  list(fromDate?: Date, toDate?: Date) {
    let url = API_URL + 'conseil/?';

    if (fromDate) {
      url += '&first_date=' + formatDate(fromDate, 'yyyy-MM-dd', 'fr');
    }
    if (toDate) {
      url += '&last_date=' + formatDate(toDate, 'yyyy-MM-dd', 'fr');
    }

    return this.http.get(url);
  }

  retrieve(id: number) {
    return this.http.get(API_URL + 'conseil/' + id);
  }
}
