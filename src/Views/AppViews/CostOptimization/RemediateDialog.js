import React from 'react';
import { X } from 'lucide-react';

const RemediatePopup = ({ isOpen, onClose, instanceId, finding, currentSize, recommendedSize, currentCost, recommendedCost }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Remediate</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Instance ID</p>
              <p>{instanceId}</p>
            </div>
            <div>
              <p className="font-semibold">Finding</p>
              <p>{finding}</p>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Current Size</p>
                <p>{currentSize}</p>
              </div>
              <div>
                <p className="font-semibold">Recommended</p>
                <p>{recommendedSize}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Current Cost</p>
                <p>${currentCost}</p>
              </div>
              <div>
                <p className="font-semibold">Recommended</p>
                <p>${recommendedCost}</p>
              </div>
            </div>
          </div>
          <button 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => {
              console.log('Remind me clicked');
              onClose();
            }}
          >
            Remind me
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemediatePopup;