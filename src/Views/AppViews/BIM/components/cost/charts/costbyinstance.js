import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CostByInstanceTypeChart = () => {
  const data = {
    labels: ['t2.micro', 'm5.large', 'c5.xlarge', 'r5.2xlarge', 't3.medium', 'm4.xlarge'],
    datasets: [
      {
        label: 'Monthly Cost ($)',
        data: [400, 300, 400, 500, 300, 450],
        backgroundColor: 'rgba(255, 99, 132, 0.8)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Monthly Cost ($)',
        },
        ticks: {
          callback: (value) => '$' + value,
        },
      },
      x: {
        title: {
          display: true,
          text: 'Instance Type',
        },
      },
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default CostByInstanceTypeChart;