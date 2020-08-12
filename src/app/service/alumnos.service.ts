import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
// @ts-ignore
import { alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  //cd ..
  //url = 'https://vast-ridge-53018.herokuapp.com/api/alumnos'
  url = 'http://localhost/api/alumnos'
  urlCursos = 'http://localhost/api/cursos';
  urlPromedio = 'https://vast-ridge-53018.herokuapp.com/api/promedio/'

  constructor(private http: HttpClient) {
    console.log('Api funcionando');
  }
  getAlumnos(): Observable<any>{
      return this.http.get(this.url)
  }
  getAlumnoDetalle(id: string): Observable<alumno[]> {
    // @ts-ignore
    return this.http.get(this.url +'/'+  + id)
  }
  getPromedioMateria(id: string, grado:string, grupo:string): Observable<alumno[]> {
    // @ts-ignore
    return this.http.get(this.urlPromedio + id )
  }
  getAsignaturas(grado:string, grupo:string): Observable<alumno[]> {
    // @ts-ignore
    return this.http.get(this.urlCursos + '/' + id)
  }

}
