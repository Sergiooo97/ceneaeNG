import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'alumno-grafica',
  templateUrl: './alumno-grafica.component.html',
  styleUrls: ['./alumno-grafica.component.css']
})
export class AlumnoGraficaComponent implements OnInit {

  //Gráfica
  highcharts = Highcharts;
  chartOptions = {
    series: [{
      name: ['Bimestre 1'],
      data: [1, 2, 3]
    }]
  };
  constructor() { }

  ngOnInit(): void {
  }

}