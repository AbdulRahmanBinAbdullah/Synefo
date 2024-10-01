import React, { useState } from 'react';
import RemediatePopup from '../remediate'; // Adjust the import path as necessary

const volumes = [
  {
    id: 'vol-098765fd4321a91827',
    currentType: 'General Purpose SSD (gp3)',
    currentSize: '8 GiB',
    recommendedType: 'General Purpose SSD (gp3)',
    recommendedSize: '8 GiB',
  },
  {
    id: 'vol-098765fd4321a91828',
    currentType: 'General Purpose SSD (gp3)',
    currentSize: '2 GiB',
    recommendedType: 'General Purpose SSD (gp3)',
    recommendedSize: '2 GiB',
  },
  {
    id: 'vol-098765fd4321a91829',
    currentType: 'General Purpose SSD (gp3)',
    currentSize: '10 GiB',
    recommendedType: 'General Purpose SSD (gp3)',
    recommendedSize: '8 GiB',
  },
  {
    id: 'vol-098765fd4321a91830',
    currentType: 'General Purpose SSD (gp3)',
    currentSize: '20 GiB',
    recommendedType: 'General Purpose SSD (gp3)',
    recommendedSize: '20 GiB',
  },
  {
    id: 'vol-098765fd4321a91831',
    currentType: 'General Purpose SSD (gp3)',
    currentSize: '20 GiB',
    recommendedType: 'General Purpose SSD (gp3)',
    recommendedSize: '20 GiB',
  },
];

export default function EBS() {
  const [showRemediatePopup, setShowRemediatePopup] = useState(false);

  const handleRemediationClick = () => {
    setShowRemediatePopup(true);
  };

  const handleClosePopup = () => {
    setShowRemediatePopup(false);
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Recommendations for EBS volumes (5)
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
                    <span>Volume ID</span>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Volume Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Size
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recommended Volume Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recommended Size
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {volumes.map((volume, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                      <span>{volume.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volume.currentType}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volume.currentSize}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volume.recommendedType}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volume.recommendedSize}</td>
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
