import React, { Component } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { RestService } from '../_service/RestService';
import { config } from '../../config';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const barchart = {
  labels: ['01', '02', '03', '04', '05', '06'],
  datasets: [
    {
      label: 'Line Dataset',
      lineTension: 0.5,
      fill: false,
      borderColor: 'rgba(255,255,255,0.5)',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 2,
      type: 'line',
    },
  ],
};

const barOptions = {
  plugins: {
    legend: {
      display: false,
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  scales: {
    y: {
      ticks: {
        color: 'white',
        stepSize: 10,
        beginAtZero: true,
      },
      grid: {
        display: false
      }
    },
    x: {
      ticks: {
        color: 'white',
        stepSize: 10,
       
      },
      grid: {
        display: false
      }
    },
  },
}

class CurrentAvrageWaitTimeChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    try {
      this.fetchData();
    } catch (err) {
      console.log('Avarage response time data load failed. Error: ', err);
    }
  }
  fetchData = () => {
    RestService.getData(config.GET_AVG_WAIT_TIME_DATA, null, null).then((response) => {
      this.setState({
        datasets: [
          {
            label: 'Line Dataset',
            lineTension: 0.2,
            fill: false,
            borderColor: 'rgba(255,255,255,0.5)',
            data: response.lineDataSetList,
            borderWidth: 2,
            // Changes this dataset to become a line
            type: 'line',
          },
        ],
        labels: response.daysList,
      });
      console.log('Avg Resp Time Data :::::: ', response);
    });
  }

  render() {
    return (
      <div className="" style={{ width: '100%', height: '100%' }}>
        <Bar data={barchart} options={barOptions} />
      </div>
    );
  }
}

export default CurrentAvrageWaitTimeChart;