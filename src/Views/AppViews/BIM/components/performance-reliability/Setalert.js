import React, { useState,useEffect,useRef } from 'react';
import { ChevronDown, X } from 'lucide-react';

const SetAlertForm = ({ open, onClose }) => {
    const [instanceName, setInstanceName] = useState('');
    const [alertName, setAlertName] = useState('');
    const [selectedMetric, setSelectedMetric] = useState('');
    const [comparisonOperator, setComparisonOperator] = useState('');
    const modalRef = useRef(null);
  
    const handleClose = () => {
      onClose();
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          handleClose();
        }
      };
  
      if (open) {
        document.addEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [open, onClose]);
  return (
    open && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
        <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <div className="flex justify-end mb-4">
            <button onClick={handleClose}>
              <X className="text-gray-400 hover:text-gray-600" size={24} />
            </button>
          </div>
          <h2 className="text-xl font-bold mb-4 text-indigo-800">Set Alert</h2>
          <form className="space-y-4">
            <div className="relative">
              <select
                className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
                value={instanceName}
                onChange={(e) => setInstanceName(e.target.value)}
              >
                <option value="" disabled hidden>Type Instance Name</option>
                <option value="instance1">Instance 1</option>
                <option value="instance2">Instance 2</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            <input
              type="text"
              placeholder="Type Alert Name"
              className="w-full p-2 border rounded-md"
              value={alertName}
              onChange={(e) => setAlertName(e.target.value)}
            />

            <div className="flex space-x-2">
              <div className="relative flex-1">
                <select
                  className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
                  value={selectedMetric}
                  onChange={(e) => setSelectedMetric(e.target.value)}
                >
                  <option value="" disabled hidden>Select Metrics</option>
                  <option value="cpu">CPU</option>
                  <option value="memory">Memory</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <input
                type="text"
                placeholder="CPU-% OR Memory-Bytes"
                className="flex-1 p-2 border rounded-md"
                readOnly
              />
            </div>

            <div className="relative">
              <select
                className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
                value={comparisonOperator}
                onChange={(e) => setComparisonOperator(e.target.value)}
              >
                <option value="" disabled hidden>Select comparison operator</option>
                <option value="gt">&gt;</option>
                <option value="lt">&lt;</option>
                <option value="eq">=</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            <div className="flex justify-end space-x-2">
              <button type="button" className="px-4 py-2 border rounded-md text-indigo-600 hover:bg-indigo-50" onClick={handleClose}>
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                Remind me
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default SetAlertForm;