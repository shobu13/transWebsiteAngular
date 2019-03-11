import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../../assets/conf';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get(API_URL + 'association/');
  }

  retrieve(id: number) {
    return this.http.get(API_URL + 'association/' + id);
  }
}
