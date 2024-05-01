import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.scss']
})
export class SalesByMonthComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Month wise sales'
    },
    xAxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }
    },
    series: [
      {
        name: 'Arizona',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196],
        type: 'line'
      },
      {
        name: 'California',
        data: [50, 65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 215],
        type: 'line'
      },
      {
        name: 'Texas',
        data: [90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35],
        type: 'line'
      }
    ],
    credits: {
      enabled: false
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
