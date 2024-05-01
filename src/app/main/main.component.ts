import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  chartOptions: Highcharts.Options = {}; // Object for chart configuration

  // Generate initial chart data (can be empty)
  chartData: any[] = [
    { name: '', data: [] } // Placeholder for series
  ];

  createChart() {
    // Prepare chart data
    this.chartData = [
      {
        name: 'Marks',
        data: [36, 65, 25, 75, 58]
      }
    ];

    // Set chart options
    this.chartOptions = {
      chart: {
        type: 'bar' // Set chart type to bar
      },
      title: {
        text: 'Student Marks'
      },
      xAxis: {
        categories: ['Amash', 'Nmash', 'Kasun', 'Pradeep', 'Nimal'] // Set category labels
      },
      yAxis: {
        title: {
          text: 'Marks'
        }
      },
      series: this.chartData
    };
  }
}
