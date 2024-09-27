import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const InstanceFamilyDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFamily, setSelectedFamily] = useState('Any Instance Family');

  const instanceFamilies = [
    'Any Instance Family',
    'General Purpose',
    'Compute Optimized',
    'Memory Optimized',
    'Accelerated Computing',
    'Storage Optimized'
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectFamily = (family) => {
    setSelectedFamily(family);
    setIsOpen(false);
  };

  return (
    <div className="w-full max-w-xs">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Instance Family
      </label>
      <div className="relative">
        <button
          type="button"
          className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          onClick={toggleDropdown}
        >
          <span className="block truncate">{selectedFamily}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </button>

        {isOpen && (
          <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
            {instanceFamilies.map((family, index) => (
              <li
                key={index}
                className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-blue-100"
                onClick={() => selectFamily(family)}
              >
                {family}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default InstanceFamilyDropdown;