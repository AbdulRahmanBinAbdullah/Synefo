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

export default function DataTransferOutChart() {
  const options = {
    responsive: true,
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
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          color: '#383874',
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: (value) => `${value} GB`,
          color: '#383874',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  const labels = [
    '00:00', '00:30', '01:00', '01:30', '02:00',
    '02:30', '03:00', '03:30', '04:00', '04:30',
    '05:00', '05:30', '06:00',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'i-0fbdfe5f0000fc5d3',
        data: [15, 12, 20, 22, 15, 25, 22, 25, 40, 20, 30, 22, 28],
        borderColor: '#4CAF50',
        backgroundColor: 'rgba(76, 175, 80, 0.2)',
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: 'i-0fbdfe5f0000fc5d3',
        data: [10, 30, 25, 5, 2, 35, 30, 15, 10, 8, 5, 2, 8],
        borderColor: '#8E24AA',
        backgroundColor: 'rgba(142, 36, 170, 0.2)',
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: 'i-0fbdfe5f0000fc5d3',
        data: [5, 2, 18, 15, 25, 30, 20, 35, 45, 20, 30, 12, 25],
        borderColor: '#FF5252',
        backgroundColor: 'rgba(255, 82, 82, 0.2)',
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: 'i-0fbdfe5f0000fc5d3',
        data: [12, 15, 12, 25, 38, 18, 5, 18, 22, 15, 8, 5, 10],
        borderColor: '#448AFF',
        backgroundColor: 'rgba(68, 138, 255, 0.2)',
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  return (
    <div >
      <div style={{ height: '400px',width: '100%' }}>
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
