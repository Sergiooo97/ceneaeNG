import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'highcharts-chart',
  template: `
    <highcharts-chart
      [Highcharts]="Highcharts"

      [constructorType]="chartConstructor"
      [options]="chartOptions"
      [callbackFunction]="chartCallback"

      [(update)]="updateFlag"
      [oneToOne]="oneToOneFlag"
      [runOutsideAngular]="runOutsideAngularFlag"

      style="width: 100%; height: 400px; display: block;"
    ></highcharts-chart>
  `,
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
