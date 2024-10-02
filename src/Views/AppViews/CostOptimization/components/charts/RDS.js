import React, { useEffect, useState } from 'react';
import RemediatePopup from '../remediate'; // Adjust the import path as necessary

export default function RdsRecommendations() {
  const [instances, setInstances] = useState([]);
  const [showRemediatePopup, setShowRemediatePopup] = useState(false);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    // Fetching data from the API (replace the URL with the actual endpoint)
    fetch('http://localhost:3000/dev/recommendations/rds?accountId=657907747545&region=us-east-1', requestOptions)
      .then(response => response.json())
      .then(result => {
        const formattedInstances = result.map(instance => ({
          identifier: instance.dbIdentifier,
          engine: instance.engine,
          finding: instance.finding,
          findingReasons: instance.findingReasons || '-',
          currentType: instance.currentInstanceType,
          recommendedType: instance.recommendedInstanceType,
        }));
        setInstances(formattedInstances);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleRemediationClick = () => {
    setShowRemediatePopup(true);
  };

  const handleClosePopup = () => {
    setShowRemediatePopup(false);
  };

  return (
    <div className="p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800" style={{color:'#383874'}}>
            Recommendations for RDS DB Instance ({instances.length})
          </h2>
          <div className="space-x-2">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              onClick={handleRemediationClick}
            >
              Remediation
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
              Suppressing
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center space-x-1">
                    <span>DB Identifier</span>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Engine
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Instance Finding
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Instance Finding Reasons
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Instance Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recommended Instance Type
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {instances.map((instance, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                      <span>{instance.identifier}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.engine}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.finding}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.findingReasons}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.currentType}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.recommendedType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showRemediatePopup && <RemediatePopup onClose={handleClosePopup} />}
    </div>
  );
}
