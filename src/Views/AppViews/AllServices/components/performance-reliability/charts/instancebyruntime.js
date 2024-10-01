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
  ChartOptions,
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

export default function InstanceRunTimeChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Total Instance run time by instance ID',
        font: {
          size: 16,
          weight: 'bold',
        },
      },
      subtitle: {
        display: true,
        text: 'The total time taken by a running instance',
        padding: {
          bottom: 10,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Hours',
        },
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
        },
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  const labels = [
    '06-01', '06-02', '06-03', '06-04', '06-05',
    '06-06', '06-07', '06-08', '06-09', '06-10',
    '06-11', '06-12', '06-13',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'i-0fbdfe5f0000fc5d3',
        data: [5.5, 5, 6.5, 6.5, 7, 6, 5.5, 7.5, 6, 6, 6, 6, 7],
        borderColor: 'rgb(75, 192, 92)',
        backgroundColor: 'rgba(75, 192, 92, 0.5)',
        tension: 0.4,
      },
      {
        label: 'i-0fbdfe5f0000fc5d3',
        data: [4.5, 5, 4.5, 5, 4, 6, 4.5, 5.5, 5, 4.5, 4.5, 5, 5.5],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.4,
      },
      {
        label: 'i-0fbdfe5f0000fc5d3',
        data: [5.5, 8, 6.5, 8.5, 7, 8.5, 6, 6.5, 7, 6, 7.5, 6.5, 7],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="h-[400px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
