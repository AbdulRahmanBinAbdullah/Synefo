import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle the dropdown on button click
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };  

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left my-2" ref={dropdownRef}>
      {/* Button to trigger dropdown */}
      <button
        onClick={toggleDropdown}
        className={`border-[2px]  ${options ? 'border-[#384CFF] text-[#384CFF] hover:bg-blue-100':'border-gray-300 text-gray-400'} py-2 min-w-60  text-nowrap rounded-md  transition`}
      >
        {title}
      </button>

      {/* Dropdown list */}
      {isOpen && options && (
        <div className="absolute left-0 mt-1 bg-white shadow-lg rounded-md py-2 z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="block px-4 py-2 space-x-2 text-gray-700 hover:bg-[#DDE1F8] cursor-pointer"
              onClick={() => {
                // console.log(`Selected: ${option}`);
                setIsOpen(false); // Close dropdown after selection
              }}
            >
              <input type='checkbox' />
              <label>{option}</label>
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
