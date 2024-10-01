// import React from 'react';
// import { CheckIcon } from 'lucide-react';
// import RemediatePopup from '../remediate';
// const functions = [
//   {
//     name: 'lambda-recommendation-test',
//     finding: 'Not Optimized',
//     findingReason: 'Memory Under Provisioned',
//     performanceRisk: 'Very Low',
//     currentMemory: '128 MB',
//     recommendedMemory: '160 MB',
//   },
//   {
//     name: 'lambda-recommendation-test-sleep',
//     finding: 'Not Optimized',
//     findingReason: 'Memory Under Provisioned',
//     performanceRisk: 'Very Low',
//     currentMemory: '128 MB',
//     recommendedMemory: '160 MB',
//   },
// ];

// export default function Lambda() {
//   return (
//     <div className="p-6  bg-gray-50 ">
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Recommendations for Lambda functions (2)
//           </h2>
//           <div className="space-x-2">
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
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
//                     <span>Function Name</span>
//                   </div>
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Finding
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Finding Reason
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Current Performance Risk
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Current Configured Memory
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Recommended Configured Memory
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {functions.map((func, index) => (
//                 <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <div className="flex items-center space-x-3">
//                       <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
//                       <span>{func.name}</span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{func.finding}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{func.findingReason}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{func.performanceRisk}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{func.currentMemory}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{func.recommendedMemory}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { CheckIcon } from 'lucide-react';
import RemediatePopup from '../remediate';

const functions = [
  {
    name: 'lambda-recommendation-test',
    finding: 'Not Optimized',
    findingReason: 'Memory Under Provisioned',
    performanceRisk: 'Very Low',
    currentMemory: '128 MB',
    recommendedMemory: '160 MB',
  },
  {
    name: 'lambda-recommendation-test-sleep',
    finding: 'Not Optimized',
    findingReason: 'Memory Under Provisioned',
    performanceRisk: 'Very Low',
    currentMemory: '128 MB',
    recommendedMemory: '160 MB',
  },
];

export default function Lambda() {
  const [showRemediatePopup, setShowRemediatePopup] = useState(false);

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
          <h2 className="text-lg font-semibold text-gray-800">
            Recommendations for Lambda functions (2)
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
                  Function Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Finding
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Finding Reason
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Performance Risk
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Configured Memory
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recommended Configured Memory
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {functions.map((func, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                      <span>{func.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{func.finding}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{func.findingReason}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{func.performanceRisk}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{func.currentMemory}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{func.recommendedMemory}</td>
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
