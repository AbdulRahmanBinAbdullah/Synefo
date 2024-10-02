


// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import { Card, CardContent, Typography,Paper } from '@mui/material';
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale, // x-axis
//   LinearScale,   // y-axis
//   PointElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Padding } from '@mui/icons-material';

// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend
// );

// const LineChart = () => {
//   const data = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//       {
//         label: 'EC2',
//         data: [600, 500, 700, 600, 800, 900, 850, 700, 750, 950, 1000, 1100],
//         borderColor: 'orange',
//         backgroundColor: 'rgba(255, 165, 0, 0.2)',
//         fill: true,
//         tension: 0.4,
//       },
//       {
//         label: 'Load Balancer',
//         data: [400, 350, 500, 450, 600, 700, 650, 600, 750, 800, 850, 900],
//         borderColor: 'blue',
//         backgroundColor: 'rgba(0, 0, 255, 0.2)',
//         fill: true,
//         tension: 0.4,
//       },
//       {
//         label: 'S3',
//         data: [300, 250, 400, 350, 500, 550, 600, 500, 600, 700, 750, 800],
//         borderColor: 'red',
//         backgroundColor: 'rgba(255, 0, 0, 0.2)',
//         fill: true,
//         tension: 0.4,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
    
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           callback: function(value) {
//             return '$' + value / 1000 + 'k'; // Format y-axis as $xK
//           },
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         position: 'bottom',
//     },
      
//     },
//   };

//   return (
    
//       <CardContent>
//         <Line data={data} options={options} />
//       </CardContent>
    
//   );
// };

// export default LineChart;



import React from 'react';
import { Line } from 'react-chartjs-2';
import { CardContent } from '@mui/material';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'EC2',
        data: [600, 500, 700, 600, 800, 900, 850, 700, 750, 950, 1000, 1100],
        borderColor: 'orange',
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Load Balancer',
        data: [400, 350, 500, 450, 600, 700, 650, 600, 750, 800, 850, 900],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'S3',
        data: [300, 250, 400, 350, 500, 550, 600, 500, 600, 700, 750, 800],
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '$' + value / 1000 + 'k'; // Format y-axis as $xK
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20, // Space between legend items
        },
      },
    },
  };

  return (
    <CardContent style={{ marginBottom: '30px' }}> {/* Adjust this margin */}
      <Line data={data} options={options} />
    </CardContent>
  );
};

export default LineChart;
