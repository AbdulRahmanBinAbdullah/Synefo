import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

const RemediatePopup = ({ onClose, instanceData }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleRemindMe = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    // Handle confirmation action, e.g., remediation completion
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
            <span className="text-gray-900">{instanceData?.id || 'N/A'}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600">Finding</span>
            <span className="text-gray-900">{instanceData?.finding || 'N/A'}</span>
          </div>

          <div className="bg-gray-100 rounded-lg p-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-indigo-900">Current Size</span>
              <span className="text-sm font-medium text-indigo-900">Recommended</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">{instanceData?.currentType || 'N/A'}</span>
              <span className="text-gray-700">{instanceData?.recommendedType || 'N/A'}</span>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg p-3 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-indigo-900">Current Cost</span>
              <span className="text-sm font-medium text-indigo-900">Recommended</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">{`$${instanceData?.currentCost || 'N/A'}`}</span>
              <span className="text-gray-700">{`$${instanceData?.recommendedCost || 'N/A'}`}</span>
            </div>
          </div>

          <button
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
            onClick={handleRemindMe}
          >
            Remediate
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
            <p className="text-gray-600 text-center mb-4">Successfully remediated</p>
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
