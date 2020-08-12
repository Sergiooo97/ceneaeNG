import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ActivatedRoute } from '@angular/router';
import {AlumnosService} from '../../../service/alumnos.service';

@Component({
  selector: 'alumno-informacion',
  templateUrl: './alumno-informacion.component.html',
  styleUrls: ['./alumno-informacion.component.css']
})
export class AlumnoInformacionComponent implements OnInit, OnDestroy {
  public alumnos:Array<any> = []
  id: any;
  params: any;
  grado: any;
  grupo: any;
  pgrado: any;
  pgrupo: any;
 
  //Gráfica
  highcharts = Highcharts;
  chartOptions = {
    series: [{
      name: ['Bimestre 1'],
      data: [1, 2, 3]
    }]
  };
  //Obtener info alumno
  constructor(private _ac: ActivatedRoute, private alumnosService: AlumnosService) {}
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

    /*this.alumnosService.getAsignaturas(this.grado, this.grupo).subscribe(
        data => {
          console.log(data);
          this.alumnos = data;
        },
        error => console.log(<any>error)); */
  
  }
  ngOnDestroy(){
    this.params.unsubscribe();
  }
}
