
import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrl: './create-button.component.scss'
  
})
export class CreateButtonComponent {

  @Input() chartData: any; // Assuming chartData comes from elsewhere
  title: string = '';
  selectedChartType: string = 'pie'; // Default chart type

  createSentimentChart() {
    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'gauge', // Use gauge chart type for sentiment score
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: this.title
      },
      pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0, '#FFF'],
              [1, '#CCC']
            ]
          },
          borderWidth: 0,
          outerRadius: '109%'
        }, {
          backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0, '#FFF'],
              [1, '#DDD']
            ]
          },
          borderWidth: 0,
          outerRadius: '107%'
        }, { // Colored arc based on data value
          borderWidth: 1,
          outerRadius: '105%',
          innerRadius: '103%'
        }]
      },
      // ... other chart options (needle, labels, etc.) based on your data
    };

    // Assuming you have a chart container element with id 'sentimentChart' in your main dashboard
    const sentimentChart = Highcharts.chart('sentimentChart', chartOptions);
  }
}
