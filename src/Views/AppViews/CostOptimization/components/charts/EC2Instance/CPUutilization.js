// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';

// const CpuUtilizationChart = () => {
//   const data = {
//     labels: ['26/8', '27/8', '28/8', '29/8', '30/8', '31/8', '01/9', '02/9', '03/9', '04/9', '05/9', '06/9'],
//     datasets: [
//       {
//         label: 'Current',
//         data: [50, 50, 60, 40, 50, 45, 50, 50, 60, 50, 55, 50],
//         borderColor: 'green',
//         fill: false,
//         pointBackgroundColor: 'green',
//         pointBorderColor: 'green',
//         tension: 0.2,
//       },
//       {
//         label: 'Option 1',
//         data: [25, 20, 30, 15, 25, 20, 15, 20, 25, 20, 25, 30],
//         borderColor: 'pink',
//         fill: false,
//         pointBackgroundColor: 'pink',
//         pointBorderColor: 'pink',
//         tension: 0.2,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100,
//       },
//     },
//     plugins: {
//       legend: {
//         display: false, // This will hide the legend
//       },
//     },
//   };

//   return (
//     <div style={{ width: '100%' }}> {/* Added height to maintain aspect ratio */}
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default CpuUtilizationChart;



import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const CpuUtilizationChart = () => {
  const data = {
    labels: ['26/8', '27/8', '28/8', '29/8', '30/8', '31/8', '01/9', '02/9', '03/9', '04/9', '05/9', '06/9'],
    datasets: [
      {
        label: 'Current',
        data: [50, 50, 60, 40, 50, 45, 50, 50, 60, 50, 55, 50],
        borderColor: 'green',
        fill: false,
        pointBackgroundColor: 'green',
        pointBorderColor: 'green',
        tension: 0.2,
      },
      {
        label: 'Option 1',
        data: [25, 20, 30, 15, 25, 20, 15, 20, 25, 20, 25, 30],
        borderColor: 'pink',
        fill: false,
        pointBackgroundColor: 'pink',
        pointBorderColor: 'pink',
        tension: 0.2,
      },
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
        }
      },
      x: {
        title: {
          display: false,
          
        }
      }
    },
    plugins: {
      legend: {
        display: false, // Show the legend for better accessibility
      },
      title: {
        display: false,
        // text: 'CPU Utilization Chart'
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px' }} aria-label="CPU Utilization Chart">
      <Line 
        data={data} 
        options={options} 
        aria-label="Line chart showing CPU utilization over time"
      />
    </div>
  );
};

export default CpuUtilizationChart;