import React, { useState } from 'react';
import { Button } from '@mui/material';
import RemediatePopup from '../remediate';

const instanceData = [
  {
    type: 't2.micro',
    price: 0.0116,
    onDemandPrice: 0.0116,
    priceDifference: 0,
    performanceRisk: 'Low',
    vCPUs: 1,
    memory: '1 GiB',
    storage: 'EBS Only',
    network: 'Low to Moderate',
    current: true
  },
  {
    type: 't4g.micro',
    price: 0.0084,
    onDemandPrice: 0.0084,
    priceDifference: -0.0032,
    performanceRisk: 'Medium',
    vCPUs: 2,
    memory: '1 GiB',
    storage: 'EBS Only',
    network: 'Up to 5 Gigabit',
    current: false
  },
  {
    type: 't3.micro',
    price: 0.0104,
    onDemandPrice: 0.0104,
    priceDifference: -0.0012,
    performanceRisk: 'Very low',
    vCPUs: 2,
    memory: '1 GiB',
    storage: 'EBS Only',
    network: 'Up to 5 Gigabit',
    current: false
  },
  {
    type: 't2.micro',
    price: 0.0116,
    onDemandPrice: 0.0116,
    priceDifference: 0,
    performanceRisk: 'Very low',
    vCPUs: 1,
    memory: '1 GiB',
    storage: 'EBS Only',
    network: 'Low to Moderate',
    current: false
  }
];

const EC2InstanceComparison = () => {
  const [selectedInstances, setSelectedInstances] = useState(
    instanceData.map(instance => instance.current)
  );
  const [showRemediatePopup, setShowRemediatePopup] = useState(false);

  const handleRemediationClick = () => {
    setShowRemediatePopup(true);
  };

  const handleCheckboxChange = (index) => {
    setSelectedInstances(prev => {
      const newSelected = [...prev];
      newSelected[index] = !newSelected[index];
      return newSelected;
    });
  };

  const handleClosePopup = () => {
    setShowRemediatePopup(false);
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Compare Current Instance Type with Recommended Options ({instanceData.length})
          </h2>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={handleRemediationClick}
          >
            Optimize
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Options</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instance Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (per hour)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">On-demand Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Difference</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance Risk</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">vCPUs</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Memory</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Storage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Network</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {instanceData.map((instance, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <input
                      type="checkbox"
                      checked={selectedInstances[index]}
                      onChange={() => handleCheckboxChange(index)}
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${instance.price.toFixed(4)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${instance.onDemandPrice.toFixed(4)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {instance.priceDifference === 0 ? '-' : `$${instance.priceDifference.toFixed(4)}`}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.performanceRisk}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.vCPUs}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.memory}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.storage}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.network}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showRemediatePopup && (
        <RemediatePopup onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default EC2InstanceComparison;
