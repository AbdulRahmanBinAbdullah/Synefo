// import React, { useState } from 'react';
// import RemediatePopup from '../remediate';

// const instanceData = [
//   {
//     type: 'General Purpose SSD (gp3)',
//     price: 0.440,
//     volumeSize: '8 GiB',
//     baselineIOPS: 3000,
//     burstIOPS: 3000,
//     baselineThroughput: '125 MiB per second',
//     burstThroughput: '125 MiB per second',
//     priceDifference: null,
//     performanceRisk: null,
//     current: true
//   },
//   {
//     type: 'General Purpose SSD (gp3)',
//     price: 0.440,
//     volumeSize: '8 GiB',
//     baselineIOPS: 3000,
//     burstIOPS: 3000,
//     baselineThroughput: '125 MiB per second',
//     burstThroughput: '125 MiB per second',
//     priceDifference: 0.440,
//     performanceRisk: 'Very Low',
//     current: false
//   }
// ];

// const EC2VolumesComparison = () => {
//   const [selectedInstances, setSelectedInstances] = useState(
//     instanceData.map(instance => instance.current)
//   );
//   const [showRemediatePopup, setShowRemediatePopup] = useState(false);

//   const handleRemediationClick = () => {
//     setShowRemediatePopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowRemediatePopup(false);
//   };

//   const handleCheckboxChange = (index) => {
//     setSelectedInstances(prev => {
//       const newSelected = [...prev];
//       newSelected[index] = !newSelected[index];
//       return newSelected;
//     });
//   };

//   return (
//     <div className="p-6">
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
//           <h2 className="text-lg font-medium text-gray-900">
//             Compare current instance type with recommended options
//           </h2>
//           <button
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//             onClick={handleRemediationClick}
//           >
//             Optimize
//           </button>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Options</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Price<br />(after discount)
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume Type</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume Size</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Baseline IOPS</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Burst IOPS</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Baseline<br />Throughput</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Burst<br />Throughput</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Difference<br />(Monthly)</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance Risk</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {instanceData.map((instance, index) => (
//                 <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <input
//                         type="checkbox"
//                         checked={selectedInstances[index]}
//                         onChange={() => handleCheckboxChange(index)}
//                         className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
//                       />
//                       <span className="ml-2 text-sm text-gray-700">
//                         {instance.current ? 'Current' : `Option ${index}`}
//                       </span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${instance.price.toFixed(3)} per hour</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.type}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.volumeSize}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.baselineIOPS}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.burstIOPS}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.baselineThroughput}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.burstThroughput}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {instance.priceDifference ? `$${instance.priceDifference.toFixed(3)} per month` : '-'}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {instance.performanceRisk || '-'}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {showRemediatePopup && (
//         <RemediatePopup onClose={handleClosePopup} />
//       )}
//     </div>
//   );
// };

// export default EC2VolumesComparison;



import React, { useEffect, useState } from 'react';
import RemediatePopup from '../remediate';

export default function EC2VolumesComparison() {
  const [volumes, setVolumes] = useState([]);
  const [selectedVolumes, setSelectedVolumes] = useState([]);
  const [showRemediatePopup, setShowRemediatePopup] = useState(false);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/dev/recommendations/ebs?accountId=657907747545&region=us-east-1", requestOptions) // Replace with your actual API endpoint
      .then(response => response.json())
      .then(result => {
        const formattedVolumes = result.map(volume => ({
          id: volume.volumeId,
          type: volume.currentVolumeType,
          price: volume.price, // Adjust if your API provides price
          volumeSize: volume.currentVolumeSize,
          baselineIOPS: volume.baselineIOPS, // Adjust if necessary
          burstIOPS: volume.burstIOPS, // Adjust if necessary
          baselineThroughput: volume.baselineThroughput, // Adjust if necessary
          burstThroughput: volume.burstThroughput, // Adjust if necessary
          priceDifference: volume.priceDifference, // Adjust if necessary
          performanceRisk: volume.performanceRisk, // Adjust if necessary
          current: true // Assuming current for fetched volumes
        }));
        setVolumes(formattedVolumes);
        setSelectedVolumes(formattedVolumes.map(() => true)); // Select all by default
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleRemediationClick = () => {
    setShowRemediatePopup(true);
  };

  const handleClosePopup = () => {
    setShowRemediatePopup(false);
  };

  const handleCheckboxChange = (index) => {
    setSelectedVolumes(prev => {
      const newSelected = [...prev];
      newSelected[index] = !newSelected[index];
      return newSelected;
    });
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold " style={{color:'#383874'}}>
            Compare current instance type with recommended options ({volumes.length})
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price<br />(after discount)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Baseline IOPS</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Burst IOPS</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Baseline<br />Throughput</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Burst<br />Throughput</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Difference<br />(Monthly)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance Risk</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {volumes.map((volume, index) => (
                <tr key={volume.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedVolumes[index]}
                        onChange={() => handleCheckboxChange(index)}
                        className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">
                        {volume.current ? 'Current' : `Option ${index}`}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${volume.price?.toFixed(3)} per hour</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volume.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volume.volumeSize}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volume.baselineIOPS}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volume.burstIOPS}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volume.baselineThroughput}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{volume.burstThroughput}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {volume.priceDifference ? `$${volume.priceDifference.toFixed(3)} per month` : '-'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {volume.performanceRisk || '-'}
                  </td>
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
