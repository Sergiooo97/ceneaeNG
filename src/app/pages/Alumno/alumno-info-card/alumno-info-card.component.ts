import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AlumnosService} from '../../../service/alumnos.service';
@Component({
  selector: 'alumno-info-card',
  templateUrl: './alumno-info-card.component.html',
  styleUrls: ['./alumno-info-card.component.css']
})
export class AlumnoInfoCardComponent implements OnInit, OnDestroy {
  public alumnos:Array<any> = []
  id: any;
  params: any;
  grado: any;
  grupo: any;
  pgrado: any;
  pgrupo: any;

  constructor(private _ac: ActivatedRoute, private alumnosService: AlumnosService) {}
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  ngOnInit() {
    this.params = this._ac.params.subscribe(params => this.id = params['id']);
    this.pgrado = this._ac.params.subscribe(params => this.grado = params['grado']);
    this.pgrupo = this._ac.params.subscribe(params => this.grupo = params['grupo']);

    this.alumnosService.getAlumnoDetalle(this.id).subscribe(
    data => {
      console.log(data);
      this.alumnos = data;
    },
    error => console.log(<any>error));
}
}
