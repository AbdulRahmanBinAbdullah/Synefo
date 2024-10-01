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

export default function NetworkTrafficChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
      },
      y: {
        title: {
          display: false,

        },
        min: 0,
        max: 100,
      },
    },
  };

  const labels = [
    '00:00', '00:30', '01:00', '01:30', '02:00', 
    '02:30', '03:00', '03:30', '04:00', '04:30', 
    '05:00', '05:30', '06:00'
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'i-0fbdfe5f0000fc5d3',
        data: [40, 55, 50, 60, 55, 70, 65, 60, 75, 60, 65, 55, 60],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'i-0fbdfe5f0000fc5d3',
        data: [45, 40, 55, 45, 65, 55, 60, 50, 45, 55, 50, 45, 40],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'i-0fbdfe5f0000fc5d3',
        data: [35, 45, 55, 50, 45, 60, 55, 65, 80, 55, 60, 40, 60],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'i-0fbdfe5f0000fc5d3',
        data: [40, 50, 45, 55, 60, 50, 55, 60, 70, 65, 60, 55, 60],
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor: 'rgba(255, 205, 86, 0.5)',
      },
    ],
  };

  return (
    <div className="h-[270px]">
      <Line options={options} data={data} />
    </div>
  );
}
