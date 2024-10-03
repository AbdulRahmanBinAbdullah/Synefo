import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const MemoryUtilizationChart = () => {
  const data = {
    labels: ['26/8', '27/8', '28/8', '29/8', '30/8', '31/8', '01/9', '02/9', '03/9', '04/9', '05/9', '06/9'],
    datasets: [
      {
        label: 'Current',
        data: [30, 28, 35, 32, 38, 30, 35, 33, 30, 37, 32, 30],
        borderColor: 'pink',
        fill: false,
        pointBackgroundColor: 'pink',
        pointBorderColor: 'pink',
        tension: 0.2,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
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
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }} aria-label="Memory Utilization Chart">
      <Line 
        data={data} 
        options={options} 
        aria-label="Line chart showing memory utilization over time"
      />
    </div>
  );
};

export default MemoryUtilizationChart;

