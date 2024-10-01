// import React from 'react';
// import { X } from 'lucide-react';

// const RemediatePopup = ({ onClose }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
//       <button 
//         onClick={onClose}
//         className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
//       >
//         <X size={20} />
//       </button>
      
//       <h2 className="text-xl font-semibold text-indigo-900 mb-4">Remediate</h2>
      
//       <div className="space-y-4">
//         <div className="flex justify-between">
//           <span className="text-gray-600">Instance ID</span>
//           <span className="text-gray-900">i-0083a8272ba6d2</span>
//         </div>
        
//         <div className="flex justify-between">
//           <span className="text-gray-600">Finding</span>
//           <span className="text-gray-900">Over-provisioned</span>
//         </div>
        
//         <div className="bg-gray-100 rounded-lg p-3 space-y-2">
//           <div className="flex justify-between">
//             <span className="text-sm font-medium text-indigo-900">Current Size</span>
//             <span className="text-sm font-medium text-indigo-900">Recommended</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-gray-700">r6g.large</span>
//             <span className="text-gray-700">t2.micro</span>
//           </div>
//         </div>
        
//         <div className="bg-gray-100 rounded-lg p-3 space-y-2">
//           <div className="flex justify-between">
//             <span className="text-sm font-medium text-indigo-900">Current Cost</span>
//             <span className="text-sm font-medium text-indigo-900">Recommended</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="text-gray-700">$10</span>
//             <span className="text-gray-700">$2</span>
//           </div>
//         </div>
        
//         <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
//           Remind me
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RemediatePopup;


import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

const RemediatePopup = ({ onClose }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleRemindMe = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    // Here you would typically handle the confirmation action
    // For now, we'll just close the popup
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
        
        <h2 className="text-xl font-semibold text-indigo-900 mb-4">Remediate</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Instance ID</span>
            <span className="text-gray-900">i-0083a8272ba6d2</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600">Finding</span>
            <span className="text-gray-900">Over-provisioned</span>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-indigo-900">Current Size</span>
              <span className="text-sm font-medium text-indigo-900">Recommended</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">r6g.large</span>
              <span className="text-gray-700">t2.micro</span>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-indigo-900">Current Cost</span>
              <span className="text-sm font-medium text-indigo-900">Recommended</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">$10</span>
              <span className="text-gray-700">$2</span>
            </div>
          </div>
          
          <button 
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
            onClick={handleRemindMe}
          >
            Remind me
          </button>
        </div>
      </div>

      {showConfirmation && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 rounded-full p-2">
                <Check size={24} className="text-green-600" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-center mb-2">Done!</h2>
            <p className="text-gray-600 text-center mb-4">successfully remediated</p>
            <button 
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
              onClick={handleConfirm}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RemediatePopup;
