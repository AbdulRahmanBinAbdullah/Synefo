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

export default function OutgoingNetworkTrafficChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: false,
        
      },
      subtitle: {
        display: false,
        
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
        grid: {
          display: true,
        },
      },
      y: {
        title: {
          display: false,
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
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
        data: [40, 45, 55, 50, 60, 55, 60, 50, 70, 60, 45, 55, 60],
        borderColor: 'rgb(75, 192, 92)',
        backgroundColor: 'rgba(75, 192, 92, 0.5)',
        tension: 0.4,
      },
      {
        label: 'i-0fbdfe5f0000fc5d3',
        data: [20, 40, 10, 35, 20, 40, 30, 25, 20, 30, 20, 25, 40],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.4,
      },
      {
        label: 'i-0fbdfe5f0000fc5d3',
        data: [50, 60, 50, 55, 25, 40, 45, 65, 70, 50, 60, 75, 70],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.4,
      },
      {
        label: 'i-0fbdfe5f0000fc5d3',
        data: [35, 40, 55, 35, 45, 55, 60, 50, 65, 55, 45, 50, 40],
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor: 'rgba(255, 205, 86, 0.5)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div >
      <div className="h-[270px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
