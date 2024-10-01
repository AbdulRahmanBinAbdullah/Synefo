// import React from 'react';
// import { CheckIcon } from 'lucide-react';
// import { useState } from 'react';
// import RemediatePopup from '../remediate';
// const instances = [
//   {
//     id: 'i-00083a8272ba6d2',
//     name: 'web server',
//     finding: 'Over-provisioned',
//     findingReason: 'CPU Over-provisioned, EBS IOPS Over...',
//     recommendationState: 'Running',
//     currentType: 'r6g.large',
//     recommendedType: 't2.micro',
//   },
//   {
//     id: 'i-00083a8272ba6d2',
//     name: 'web server',
//     finding: 'Over-provisioned',
//     findingReason: 'CPU Over-provisioned, EBS IOPS Over...',
//     recommendationState: 'Running',
//     currentType: 't4g.large',
//     recommendedType: 't2.micro',
//   },
//   {
//     id: 'i-00083a8272ba6d2',
//     name: 'web server',
//     finding: 'Over-provisioned',
//     findingReason: 'CPU Over-provisioned, EBS IOPS Over...',
//     recommendationState: 'Running',
//     currentType: 'r6g.large',
//     recommendedType: 't2.micro',
//   },
//   {
//     id: 'i-00083a8272ba6d2',
//     name: 'web server',
//     finding: 'Over-provisioned',
//     findingReason: 'CPU Over-provisioned, EBS IOPS Over...',
//     recommendationState: 'Running',
//     currentType: 't4g.large',
//     recommendedType: 't2.micro',
//   },
//   {
//     id: 'i-00083a8272ba6d2',
//     name: 'web server',
//     finding: 'Optimized',
//     findingReason: '-',
//     recommendationState: 'Running',
//     currentType: 't2.micro',
//     recommendedType: 't2.micro',
//   },
// ];

// export default function Ec2Recommendations() {


//     const [showRemediatePopup, setShowRemediatePopup] = useState(false);

//   const handleRemediationClick = () => {
//     setShowRemediatePopup(true);
//   };

//   const handleClosePopup = () => {
//     setShowRemediatePopup(false);
//   };

//   return (
//     <div className="p-6">
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Recommendations for EC2 Instances (5)
//           </h2>
//           <div className="space-x-2">
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//                           onClick={handleRemediationClick}
// >
//               Remediation
//             </button>
//             <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
//               Suppressing
//             </button>
//           </div>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   <div className="flex items-center space-x-1">
//                     <span>Instance ID</span>
//                   </div>
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Instance Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Finding
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Finding Reason
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Recommendation Instance State
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Current Instance Type
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Recommended Instance Type
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {instances.map((instance, index) => (
//                 <tr key={index} >
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <div className="flex items-center space-x-3">
//                       <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
//                       <span>{instance.id}</span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.name}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.finding}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.findingReason}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.recommendationState}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.currentType}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.recommendedType}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {showRemediatePopup && <RemediatePopup onClose={handleClosePopup} />}

//     </div>
//   );
// }



import React, { useEffect, useState } from 'react';
import RemediatePopup from '../remediate';

export default function Ec2Recommendations() {
  const [instances, setInstances] = useState([]);
  const [showRemediatePopup, setShowRemediatePopup] = useState(false);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://b3mqipcan0.execute-api.us-east-1.amazonaws.com/dev/recommendations/ec2?accountId=657907747545&region=us-east-1", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // Map the result to the desired format
        const formattedInstances = result.map(instance => ({
          id: instance.instanceId,
          name: instance.instanceName,
          finding: instance.finding.replace(/_/g, ' '), // Replace underscores with spaces
          findingReason: instance.findingReason || '-',
          recommendationState: instance.recommendationInstanceState.charAt(0).toUpperCase() + instance.recommendationInstanceState.slice(1),
          currentType: instance.currentInstanceType,
          recommendedType: instance.recommendedInstanceType,
        }));
        setInstances(formattedInstances);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

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
            Recommendations for EC2 Instances ({instances.length})
          </h2>
          <div className="space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
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
                    <span>Instance ID</span>
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Instance Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Finding
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Finding Reason
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recommendation Instance State
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
                      <span>{instance.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.finding}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.findingReason}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.recommendationState}</td>
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
