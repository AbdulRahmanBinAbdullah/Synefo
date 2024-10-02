import React, { useEffect, useState } from 'react';
import RemediatePopup from '../remediate';

const InstanceComparisonTable = () => {
  const [data, setData] = useState([]);
  const [showRemediatePopup, setShowRemediatePopup] = useState(false);

  const handleRemediationClick = () => {
    setShowRemediatePopup(true);
  };

  const handleClosePopup = () => {
    setShowRemediatePopup(false);
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch("http://localhost:3000/dev/recommendations/instances?accountId=657907747545&region=us-east-1") // Replace with your actual API endpoint
      .then(response => response.json())
      .then(result => {
        const formattedData = result.map(instance => ({
          type: instance.type,
          configuredMemory: instance.configuredMemory,
          costLow: instance.costLow,
          costHigh: instance.costHigh,
          costDifferenceLow: instance.costDifferenceLow,
          costDifferenceHigh: instance.costDifferenceHigh,
          usedMemory: instance.usedMemory,
          durationAverage: instance.durationAverage,
          projectedDuration: instance.projectedDuration,
        }));
        setData(formattedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm m-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold" style={{color:'#383874'}}>Compare current instance type with recommended options</h2>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          onClick={handleRemediationClick}
        >
          Optimize
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Options</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Configured Memory</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Cost (Low)</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Cost (High)</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Cost Difference (Low)</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Cost Difference (High)</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Used Memory (Average)</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Duration (Average)</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Projected Duration (Expected)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="py-2 text-sm">
                  <div className="flex items-center">
                    <input type="radio" className="mr-2" name="option" checked={index === 0} readOnly />
                    <span className={index === 1 ? 'text-purple-600 font-medium' : ''}>{row.type}</span>
                  </div>
                </td>
                <td className="py-2 text-sm">{row.configuredMemory}</td>
                <td className="py-2 text-sm">{row.costLow}</td>
                <td className="py-2 text-sm">{row.costHigh}</td>
                <td className="py-2 text-sm">{row.costDifferenceLow}</td>
                <td className="py-2 text-sm">{row.costDifferenceHigh}</td>
                <td className="py-2 text-sm">{row.usedMemory}</td>
                <td className="py-2 text-sm">{row.durationAverage}</td>
                <td className="py-2 text-sm">{row.projectedDuration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showRemediatePopup && (
        <RemediatePopup onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default InstanceComparisonTable;
