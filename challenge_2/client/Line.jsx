  
import React from 'react';
import { Line } from 'react-chartjs-2';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        }
      }
    ]
  }
};

class LineChart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Line data={{
          labels: this.props.keys,
          datasets: [{
            label: 'Value in USD',
            data: this.props.vals,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          }]
        }} options={options} />
      </div>
    )
  }
}

export default LineChart;