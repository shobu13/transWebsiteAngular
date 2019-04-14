import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {formatDate} from '@angular/common';
import {API_URL} from '../../../assets/conf';

@Injectable({
  providedIn: 'root'
})
export class NewpaperService {

  constructor(private http: HttpClient) {
  }

  list(fromDate?: Date, toDate?: Date, isHall?: Boolean, association?: number) {
    let requestURL = API_URL + 'newpaper/?';
    if (fromDate) {
      requestURL += '&first_date=' + formatDate(fromDate, 'yyyy-MM-dd', 'fr');
    }
    if (toDate) {
      requestURL += '&last_date=' + formatDate(toDate, 'yyyy-MM-dd', 'fr');
    }
    if (isHall) {
      requestURL += '&is_hall=' + isHall;
    }
    if (association) {
      requestURL += '&owner=' + association;
    }

    return this.http.get(requestURL);
  }

  retrieve(id: number) {
    return this.http.get(API_URL + 'newpaper/' + id);
  }
}
