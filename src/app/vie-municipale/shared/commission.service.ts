import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../../assets/conf';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CommissionService {

  constructor(private http: HttpClient) {
  }

  list(fromDate?: Date, toDate?: Date) {
    let url = API_URL + 'commission/?';

    if (fromDate) {
      url += '&first_date=' + formatDate(fromDate, 'yyyy-MM-dd', 'fr');
    }
    if (toDate) {
      url += '&last_date=' + formatDate(toDate, 'yyyy-MM-dd', 'fr');
    }

    return this.http.get(url);
  }

  retrieve(id: number) {
    return this.http.get(API_URL + 'commission/' + id);
  }
}
