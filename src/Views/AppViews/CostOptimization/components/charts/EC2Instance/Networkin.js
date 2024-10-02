import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Networkin = () => {
  const data = {
    labels: ['26/8', '27/8', '28/8', '29/8', '30/8', '31/8', '01/9', '02/9', '03/9', '04/9', '05/9', '06/9'],
    datasets: [
      {
        label: 'Option 1',
        data: [30, 28, 35, 32, 38, 30, 35, 33, 30, 37, 32, 30],
        borderColor: 'pink',
        fill: false,
        pointBackgroundColor: 'pink',
        pointBorderColor: 'pink',
        tension: 0.2, // Smoothens the line
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            max: 100,
          },
        },
      ],
    },
    plugins:{legend: {
      display: false,
    },
   },
  };

  return (
    <div style={{  width: '100%' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default Networkin;
