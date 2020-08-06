import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit {
  highcharts = Highcharts;
  chartOptions = {
    series: [{
      name: ['Bimestre 1'],
      data: [1, 2, 3]
    }]
  };
  constructor() { }

  ngOnInit() {
  }

}
