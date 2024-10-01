import React, { useState } from 'react';
import { CheckIcon } from 'lucide-react';
import RemediatePopup from '../remediate';
import SuppressPopup from '../SupressPopUp';

const groups = [
  {
    name: 'ASG-webserver',
    finding: 'Not Optimized',
    currentInstanceType: 't2.micro',
    recommendedInstanceType: 't3.micro',
    desiredInstances: '04',
  },
  {
    name: 'ASG-webserver',
    finding: 'Not Optimized',
    currentInstanceType: 't2.micro',
    recommendedInstanceType: 't3.micro',
    desiredInstances: '02',
  },
];

export default function Component() {
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

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Recommendations for Auto Scaling Group (2)
          </h2>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center space-x-1">
                    <span>Auto Scaling Group Name</span>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Finding
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Instance Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recommended Instance Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Desired Number of Instances
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {groups.map((group, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                      <span>{group.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{group.finding}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{group.currentInstanceType}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{group.recommendedInstanceType}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{group.desiredInstances}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showRemediatePopup && <RemediatePopup onClose={handleClosePopup} />}
      {showSuppressPopup && <SuppressPopup onClose={handleClosePopup} />}
    </div>
  );
}