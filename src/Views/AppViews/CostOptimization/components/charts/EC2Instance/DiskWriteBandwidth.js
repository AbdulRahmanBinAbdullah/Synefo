import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const DiskWriteBandwidth = () => {
  const data = {
    labels: ['26/8', '27/8', '28/8', '29/8', '30/8', '31/8', '01/9', '02/9', '03/9', '04/9', '05/9', '06/9'],
    datasets: [
      {
        label: 'Disk Write Bandwidth (MiB/second)',
        data: [150, 160, 140, 145, 155, 150, 148, 145, 160, 150, 155, 150],
        borderColor: 'purple',
        fill: false,
        pointBackgroundColor: 'purple',
        pointBorderColor: 'purple',
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
        max: 400, // Set max to match chart range
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
    <div style={{ width: '100%', height: '400px' }} aria-label="Disk Write Bandwidth Chart">
      <Line 
        data={data} 
        options={options} 
        aria-label="Line chart showing disk write bandwidth over time"
      />
    </div>
  );
};

export default DiskWriteBandwidth;
