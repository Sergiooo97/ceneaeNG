import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'highcharts-chart',
  moduleId: module.id,
  templateUrl: 'chart.component.html'

})
export class ChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      name: 'Line 1',
      data: [1, 2, 3],
      type: 'line'
    }]
  };
}
