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

const CPUUtilizationChart = () => {
  const data = {
    labels: ['00:00', '00:05', '00:10', '00:15', '00:20', '00:25', '00:30', '00:35', '00:40', '00:45', '00:50', '00:55', '01:00'],
    datasets: [
      {
        label: 'CPU Utilization',
        data: [32, 38, 15, 5, 32, 38, 32, 12, 32, 38, 65, 45, 32],
        borderColor: '#22c55e',
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
        tension: 0.1,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
          callback: (value) => value + '%',
          font: {
            size: 10,
          },
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
          label: (context) => `${context.parsed.y}%`,
        },
      },
    },
  };

  return (
    <div >
      <h2  className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Total CPU Utilization Across All Instance</h2>
      <p className="text-sm text-gray-600 mb-4">
        CPU's processing power is being used over time, allowing to monitor the workload on EC2 instances
      </p>
      <div style={{ height: '200px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default CPUUtilizationChart;