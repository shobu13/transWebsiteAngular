import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../../assets/conf';

@Injectable({
  providedIn: 'root'
})
export class SalleDeFeteService {

  constructor(private http: HttpClient) {
  }

  list() {
    return this.http.get(API_URL + 'salle-de-fete/');
  }
}
