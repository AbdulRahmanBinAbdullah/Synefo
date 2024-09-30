// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const CPUUtilizationChart = () => {
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'bottom',
//       },
//       title: {
//         display: true,
//         text: 'CPU Utilization by Instance ID',
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100,
//         ticks: {
//           callback: (value) => `${value}%`,
//         },
//       },
//     },
//   };

//   const labels = [
//     '00:00', '00:30', '01:00', '01:30', '02:00', '02:30',
//     '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00'
//   ];

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'i-0fbdfe5f0000fc5d3',
//         data: [78, 76, 75, 71, 75, 78, 77, 78, 79, 77, 78, 77, 76],
//         borderColor: 'rgb(255, 99, 132)',
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//       {
//         label: 'i-0fbdfe5f0000fc5d3',
//         data: [63, 61, 59, 58, 62, 64, 63, 64, 63, 62, 63, 64, 65],
//         borderColor: 'rgb(255, 159, 64)',
//         backgroundColor: 'rgba(255, 159, 64, 0.5)',
//       },
//       {
//         label: 'i-0fbdfe5f0000fc5d3',
//         data: [52, 44, 43, 45, 47, 48, 46, 47, 49, 52, 55, 50, 47],
//         borderColor: 'rgb(255, 205, 86)',
//         backgroundColor: 'rgba(255, 205, 86, 0.5)',
//       },
//       {
//         label: 'i-0fbdfe5f0000fc5d3',
//         data: [35, 33, 36, 37, 35, 36, 35, 36, 37, 38, 37, 38, 37],
//         borderColor: 'rgb(75, 192, 192)',
//         backgroundColor: 'rgba(75, 192, 192, 0.5)',
//       },
//       {
//         label: 'i-0fbdfe5f0000fc5d3',
//         data: [22, 25, 20, 23, 25, 24, 25, 24, 22, 19, 23, 27, 30],
//         borderColor: 'rgb(54, 162, 235)',
//         backgroundColor: 'rgba(54, 162, 235, 0.5)',
//       },
//     ],
//   };

//   return (
//     <div >
//       <Line options={options} data={data} />
//       <p className="text-center text-sm text-gray-500 mt-2">
//         The average CPU utilization percentage by instance.
//       </p>
//     </div>
//   );
// };

// export default CPUUtilizationChart;



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