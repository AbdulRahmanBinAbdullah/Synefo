import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const DiskWriteOperations = () => {
  const data = {
    labels: ['26/8', '27/8', '28/8', '29/8', '30/8', '31/8', '01/9', '02/9', '03/9', '04/9', '05/9', '06/9'],
    datasets: [
      {
        label: 'Disk Write Operations (per second)',
        data: [50, 60, 45, 50, 55, 50, 52, 48, 65, 45, 55, 50],
        borderColor: 'yellow',
        fill: false,
        pointBackgroundColor: 'yellow',
        pointBorderColor: 'yellow',
        tension: 0.2, // Smoothens the line
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100, // Set max to match chart range
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
        display: false, // Title is hidden; add if needed
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }} aria-label="Disk Write Operations Chart">
      <Line 
        data={data} 
        options={options} 
        aria-label="Line chart showing disk write operations over time"
      />
    </div>
  );
};

export default DiskWriteOperations;
