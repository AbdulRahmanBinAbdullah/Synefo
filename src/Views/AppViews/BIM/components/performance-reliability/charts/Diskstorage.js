import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DiskStorageUtilizationChart = () => {
  const data = {
    labels: [
      'i-0fbdfe5f0000fc5d3',
      'i-0fbdfe5f0670fc5d3',
      'i-0fbdfe5e0700fc5d3',
      'i-idsdfee60890fc5d9',
      'i-0fbdfe5f0000fcsd3'
    ],
    datasets: [
      {
        data: [273, 152, 215, 172, 261],
        backgroundColor: [
          'rgba(255, 159, 64, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)'
        ],
        borderColor: [
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.parsed || 0;
            return `${label}: ${value} GB`;
          },
        },
      },
    },
  };

  return (
    <div className="text-xs"> {/* Changed to text-xs for smallest default size */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/3">
          <Pie data={data} options={options} />
        </div>
        <div className="w-full md:w-1/2 mt-2 md:mt-0 mr-11">
          <div className="flex font-bold mb-1 text-[10px]"> {/* Custom text size */}
            <span className="w-1/2">Instance ID</span>
            <span className="w-1/2 text-right">DISK SPACE USAGE</span>
          </div>
          <ul className="space-y-0.5"> {/* Further reduced vertical spacing */}
            {data.labels.map((label, index) => (
              <li key={label} className="flex items-center text-[9px]"> {/* Custom text size */}
                <span className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}></span>
                <span className="flex-grow">{label}</span>
                <span >{data.datasets[0].data[index]} GB</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};



export default DiskStorageUtilizationChart;