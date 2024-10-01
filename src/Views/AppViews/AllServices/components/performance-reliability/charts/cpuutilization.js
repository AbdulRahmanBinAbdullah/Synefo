import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function CPUUtilizationChart() {
  const labels = [
    '00:00', '00:30', '01:00', '01:30', '02:00',
    '02:30', '03:00', '03:30', '04:00', '04:30',
    '05:00', '05:30', '06:00'
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Instance 1',
        data: [78, 76, 74, 70, 72, 76, 78, 80, 78, 76, 78, 76, 75],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Instance 2',
        data: [62, 60, 58, 65, 68, 62, 60, 66, 64, 62, 61, 63, 65],
        borderColor: 'rgb(255, 159, 64)',
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
      },
      {
        label: 'Instance 3',
        data: [50, 45, 48, 52, 48, 46, 44, 49, 50, 54, 52, 48, 51],
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor: 'rgba(255, 205, 86, 0.5)',
      },
      // Add more datasets if needed
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value) {
            return value + '%';
          },
        },
        title: {
          display: false,
        },
      },
      x: {
        title: {
          display: false,
        },
      },
    },
  };

  return (
    <div >
      
      <Line options={options} data={data} />
    </div>
  );
}