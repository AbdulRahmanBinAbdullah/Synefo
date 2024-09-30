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

const generateData = (length = 24) => {
  const hours = Array.from({ length }, (_, i) => i);
  return hours.map((hour) => ({
    time: `${hour.toString().padStart(2, '0')}:00`,
    readOperations: Math.floor(Math.random() * (80 - 20 + 1) + 20), // Data between 20-80
    writeOperations: Math.floor(Math.random() * (50 - 10 + 1) + 10), // Data between 10-50
  }));
};

const DiskIOOperations = () => {
  const data = generateData();

  const chartData = {
    labels: data.map((item) => item.time),
    datasets: [
      {
        label: 'Read Operations',
        data: data.map((item) => item.readOperations),
        borderColor: 'rgba(255, 99, 132, 1)', // Red
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light Red
      },
      {
        label: 'Write Operations',
        data: data.map((item) => item.writeOperations),
        borderColor: 'rgba(54, 162, 235, 1)', // Blue
            backgroundColor: 'rgba(54, 162, 235, 0.2)', // Light Blue
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 100, 
        ticks: {
          stepSize: 20, 
          callback: (value) => `${value} MB/S`, 
          font: {
            size: 10,
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },
  };

  return (
    <div >
      <h2  className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Disk I/O Operations</h2>
      <div style={{ height: '250px' }}>
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default DiskIOOperations;