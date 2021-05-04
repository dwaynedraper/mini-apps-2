  
import React from 'react';
import { Line } from 'react-chartjs-2';

export default class LineChart extends React.Component {

  componentDidMount() {
    let keys = this.props.keys;
    let vals = this.props.vals;
    let ctx = document.getElementById('myChart');
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: keys,
        datasets: [{
          label: 'Current value in USD:',
          data: vals,
          backgroundColor: 'rgba(80, 33, 173, 0.2)',
          borderColor: '#66baff',
          borderWidth: 3
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Bitcoin Value Chart'
        }
      }
    })
  }
  
  render() {
    return (
      <div className="chart-container">
        <canvas id="myChart" style={{width: "600", height: "400"}}></canvas>
      </div>
    )
  }
}