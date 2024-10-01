
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

const generateData = (length) => {
  return Array.from({ length }, (_, i) => ({
    time: `${String(i).padStart(2, '0')}:00`,
    incomingTraffic: Math.random() * 400,
    outgoingTraffic: Math.random() * 600,
  }));
};

const data = generateData(25);

export default function NetworkTraffic() {
    const networkTrafficData = {
        labels: data.map((item) => item.time),
        datasets: [
          {
            label: 'Incoming Traffic',
            data: data.map((item) => item.incomingTraffic),
            borderColor: 'rgba(255, 99, 132, 1)', // Red
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light Red
          },
          {
            label: 'Outgoing Traffic',
            data: data.map((item) => item.outgoingTraffic),
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
        display:false
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
        max: 600,
        ticks: {
          stepSize: 100,
          callback: (value) => value + ' Mbps',
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
      <div >
        <div >
          <h2  className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Network Traffic (Mbps)</h2>
          <p className="text-sm text-gray-600 mb-4">
            Measurement of the amount of network traffic in and out of the system
          </p>
          <div style={{ height: '200px' }}>
            <Line data={networkTrafficData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}