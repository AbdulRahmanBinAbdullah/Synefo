// import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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

const wafrData = [
  { workload: '45ad26d', status: 'Pending', type: 'Well-Architected Framework Review', updated: '2023-12-01 10:30:15' },
  { workload: 'da42ba114', status: 'Pending', type: 'Well-Architected Framework Review', updated: '2023-12-01 10:30:15' },
  { workload: '4aa915ee5', status: 'Pending', type: 'Well-Architected Framework Review', updated: '2023-12-01 10:30:15' },
  { workload: '90d5e45a', status: 'Pending', type: 'Well-Architected Framework Review', updated: '2023-12-01 10:30:15' },
];

const topServicesData = [
  { name: 'EC2', cpu: '85%', memory: '65%', cost: '$6,200' },
  { name: 'Lambda', cpu: '80%', memory: '70%', cost: '$5,400' },
  { name: 'RDS Instance', cpu: '65%', memory: '50%', cost: '$4,600' },
  { name: 'Amazon S3', cpu: '60%', memory: '45%', cost: '$3,200' },
];

const costData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'EC2',
      data: [300, 400, 350, 500, 450, 550, 500, 600, 550, 700, 650, 600],
      borderColor: 'rgb(255, 159, 64)',
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
      tension: 0.4,
    },
    {
      label: 'Load Balancer',
      data: [400, 450, 400, 500, 450, 500, 550, 600, 550, 650, 600, 650],
      borderColor: 'rgb(54, 162, 235)',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      tension: 0.4,
    },
    {
      label: 'S3',
      data: [200, 250, 300, 350, 300, 400, 350, 450, 400, 500, 450, 400],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.4,
    },
  ],
};

const resources = [
  { region: 'US East (N. Virginia)', resources: 150, totalCost: '$12,000', resourceTypes: 'EC2, S3, Lambda' },
  { region: 'US West (Oregon)', resources: 100, totalCost: '$8,500', resourceTypes: 'EC2, CloudFront, RDS' },
  { region: 'US West (N. California)', resources: 80, totalCost: '$7,000', resourceTypes: 'S3, RDS, EC2' },
  { region: 'Asia Pacific (Mumbai)', resources: 90, totalCost: '$6,200', resourceTypes: 'Lambda, EC2, S3' },
  { region: 'South America (Sao Paulo)', resources: 50, totalCost: '$4,000', resourceTypes: 'S3, RDS, CloudFront' },
  { region: 'US East (Ohio)', resources: 40, totalCost: '$2,000', resourceTypes: 'EC2, S3, Lambda' },
];

export default function Dashboard() {
  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">WAFR</h2>
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-600 border-b">
                <th className="pb-2">WORKLOADS</th>
                <th className="pb-2">STATUS</th>
                <th className="pb-2">WORKLOAD TYPE</th>
                <th className="pb-2">UPDATED</th>
              </tr>
            </thead>
            <tbody>
              {wafrData.map((row, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-3 text-sm">{row.workload}</td>
                  <td className="py-3">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
                      {row.status}
                    </span>
                  </td>
                  <td className="py-3 text-sm">{row.type}</td>
                  <td className="py-3 text-sm">{row.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Top 4 Services</h2>
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-600 border-b">
                <th className="pb-2">SERVICE NAME</th>
                <th className="pb-2">CPU UTILIZATION</th>
                <th className="pb-2">MEMORY UTILIZATION</th>
                <th className="pb-2">COST (MONTHLY)</th>
              </tr>
            </thead>
            <tbody>
              {topServicesData.map((service, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-3 text-sm">{service.name}</td>
                  <td className="py-3 text-sm">{service.cpu}</td>
                  <td className="py-3 text-sm">{service.memory}</td>
                  <td className="py-3 text-sm">{service.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Cost Spent on Top Services</h2>
          <div className="h-64">
            <Line 
              data={costData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: true,
                    ticks: {
                      callback: function(value) {
                        return '$' + value;
                      }
                    }
                  }
                },
                plugins: {
                  legend: {
                    position: 'bottom'
                  }
                }
              }}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Region Wise Resources</h2>
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-600 border-b">
                <th className="pb-2">REGION</th>
                <th className="pb-2">NO. OF RESOURCES</th>
                <th className="pb-2">TOTAL COST</th>
                <th className="pb-2">RESOURCE TYPES</th>
              </tr>
            </thead>
            <tbody>
              {resources.map((resource, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-3 text-sm">{resource.region}</td>
                  <td className="py-3 text-sm">{resource.resources}</td>
                  <td className="py-3 text-sm">{resource.totalCost}</td>
                  <td className="py-3 text-sm">{resource.resourceTypes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}