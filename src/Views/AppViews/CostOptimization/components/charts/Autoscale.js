import React, { useEffect, useState } from 'react';
import RemediatePopup from '../remediate';
import SuppressPopup from '../SupressPopUp';

const Component = () => {
  const [instances, setInstances] = useState([]);
  const [showRemediatePopup, setShowRemediatePopup] = useState(false);
  const [showSuppressPopup, setShowSuppressPopup] = useState(false);

  const handleRemediationClick = () => {
    setShowRemediatePopup(true);
  };

  const handleSuppressClick = () => {
    setShowSuppressPopup(true);
  };

  const handleClosePopup = () => {
    setShowRemediatePopup(false);
    setShowSuppressPopup(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/instances"); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();

        // Format the instances
        const formattedInstances = result.map(instance => ({
          name: instance.name,
          finding: instance.finding.replace(/_/g, ' '), // Replace underscores with spaces
          currentInstanceType: instance.currentInstanceType,
          recommendedInstanceType: instance.recommendedInstanceType,
          desiredInstances: instance.desiredInstances,
        }));

        setInstances(formattedInstances);
      } catch (error) {
        console.error('Error fetching data:',error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm m-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold" style={{color:'#383874'}}>Recommendations for Autoscale Grouping ({instances.length})</h2>
        <div className="space-x-2">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={handleRemediationClick}
          >
            Remediation
          </button>
          <button 
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            onClick={handleSuppressClick}
          >
            Suppressing
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Auto Scaling Group Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Finding</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Instance Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recommended Instance Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Desired Number of Instances</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {instances.map((instance, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.finding}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.currentInstanceType}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.recommendedInstanceType}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.desiredInstances}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showRemediatePopup && <RemediatePopup onClose={handleClosePopup} />}
      {showSuppressPopup && <SuppressPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default Component;
