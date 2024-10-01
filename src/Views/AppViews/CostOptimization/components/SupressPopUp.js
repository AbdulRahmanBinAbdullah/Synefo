import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

const SuppressPopup = ({ onClose }) => {
  const [selectedInstance, setSelectedInstance] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSuppress = () => {
    if (selectedInstance) {
      setShowConfirmation(true);
    }
  };

  const handleConfirm = () => {
    console.log('Suppressing instance:', selectedInstance);
    // Here you would typically handle the suppression action
    // For now, we'll just close the popup after a short delay
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Suppress</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <label htmlFor="instance-select" className="block text-sm font-medium text-gray-700 mb-1">
              Select Instance
            </label>
            <select
              id="instance-select"
              value={selectedInstance}
              onChange={(e) => setSelectedInstance(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select instance</option>
              <option value="instance1">Instance 1</option>
              <option value="instance2">Instance 2</option>
              <option value="instance3">Instance 3</option>
            </select>
          </div>
          
          <p className="text-center text-gray-600">
            Do you want to suppress the instances?
          </p>
          
          <button
            onClick={handleSuppress}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Suppress
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
            <p className="text-gray-600 text-center mb-4">Successfully suppressed</p>
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

export default SuppressPopup;