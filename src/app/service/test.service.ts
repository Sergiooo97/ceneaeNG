import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TestService {
url = 'http://localhost/api/'
  constructor(private http: HttpClient) {
    console.log('servicio test');
  }
  getPersonas(){
    let header = new HttpHeaders()
        .set('Content-Type', 'aplication/json')
    return this.http.get(this.url, {
      headers: header
    } )
  }
}
