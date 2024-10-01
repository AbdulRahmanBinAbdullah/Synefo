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

const MemoryUtilizationChart = () => {
  const data = {
    labels: ['WEBSERVER1', 'DBSERVER1', 'APPSERVER1', 'WORKERNODE1', 'CACHESERVER1', 'PROXYSERVER1', 'TESTINSTANCE1'],
    datasets: [
      {
        data: [280, 490, 650, 370, 530, 700, 390],
        backgroundColor: 'rgba(236, 72, 153, 0.8)',
        borderColor: 'rgba(236, 72, 153, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 1000,
        ticks: {
          stepSize: 200,
          callback: (value) => value + ' GB',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.parsed.y} GB`,
        },
      },
    },
  };

  return (
    <div >
      <h2  className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Memory Utilization (GB)</h2>
      <p className="text-sm text-gray-600 mb-4">
        Measurement of the amount of memory being used by a system or application
      </p>
      <div style={{ height: '270px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default MemoryUtilizationChart;