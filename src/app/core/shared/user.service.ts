import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../../assets/conf';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  listElus() {
    return this.http.get(API_URL + 'user/list-elected');
  }
}
