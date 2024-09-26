import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const SystemHealth = () => {
  const data = {
    labels: ['Healthy Instances', 'Warning Instances', 'Critical Instances'],
    datasets: [
      {
        data: [15, 3, 2], // Data values
        backgroundColor: ['#4ade80', '#fbbf24', '#f87171'], // Colors
        borderColor: ['#4ade80', '#fbbf24', '#f87171'], // Border colors
        borderWidth: 1, // Border width
      },
    ],
  };

  // Individual chart data with colors
  const chartLabels = [
    { label: 'Healthy Instances', value: 15, color: '#4ade80' },
    { label: 'Warning Instances', value: 3, color: '#fbbf24' },
    { label: 'Critical Instances', value: 2, color: '#f87171' },
  ];

  // Calculate the total value of all instances
  const totalInstances = chartLabels.reduce((acc, item) => acc + item.value, 0);

  // Chart options
  const options = {
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
  };

  return (
    <div className="flex items-center justify-center">
      {/* Donut Chart */}
      <div style={{ width: '200px', height: '300px' }}>
        <Doughnut data={data} options={options} />
      </div>

      {/* Labels and Values */}
      <div className="ml-6">
        {/* Total Instances Row */}
        <div className="flex items-center mb-4">
          <span className="text-gray-700 font-medium mr-2">Total Instances:</span>
          <span className="text-gray-800 font-bold">{totalInstances}</span>
        </div>

        {/* Individual Instances */}
        {chartLabels.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            {/* Color Indicator */}
            <div
              style={{
                backgroundColor: item.color,
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                marginRight: '8px',
              }}
            />
            {/* Label and Value */}
            <span className="text-gray-700 font-medium mr-2">{item.label}:</span>
            <span className="text-gray-800 font-bold">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemHealth;
