import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import RemediatePopup from '../remediate';

const InstanceComparison = () => {
  const [instances, setInstances] = useState([]);
  const [selectedInstances, setSelectedInstances] = useState([]);
  const [showRemediatePopup, setShowRemediatePopup] = useState(false);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/dev/recommendations/instances?accountId=657907747545&region=us-east-1", requestOptions) // Replace with your actual API endpoint
      .then(response => response.json())
      .then(result => {
        const formattedInstances = result.map(instance => ({
          type: instance.instanceType,
          volumeType: instance.volumeType,
          monthlySaving: instance.monthlySaving,
          price: instance.price,
          performanceRisk: instance.performanceRisk,
          vCPUs: instance.vCPUs,
          memory: instance.memory,
          network: instance.network,
          ebsBandwidth: instance.ebsBandwidth,
          current: instance.current // Assuming the API returns a field indicating if it's current
        }));
        setInstances(formattedInstances);
        setSelectedInstances(formattedInstances.map(instance => instance.current)); // Select current instances by default
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
          <h2 className="text-lg font-semibold text-gray-800" style={{color:'#383874'}}>
            Compare Current Instance Type with Recommended Options ({instances.length})
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estimated Monthly Saving</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (after discount)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance Risk</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">vCPUs</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Memory</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Network</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EBS Bandwidth</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {instances.map((instance, index) => (
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.volumeType}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.monthlySaving}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.performanceRisk}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.vCPUs}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.memory}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.network}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.ebsBandwidth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showRemediatePopup && <RemediatePopup onClose={handleClosePopup} />}
    </div>
  );
};

export default InstanceComparison;
