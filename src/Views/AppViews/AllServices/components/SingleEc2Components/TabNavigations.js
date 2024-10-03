import React from 'react';

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    'Performance',
    'Availability',
    'Reliability',
    'End Usage',
    'Compliance',
    'Data Protection',
  ];

  return (
    <div className="flex gap-4 bg-blue-100 rounded-full px-2 items-center justify-start">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
            activeTab === tab ? 'bg-blue-600 text-white' : 'text-black hover:bg-gray-200'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default NavigationTabs;



// import React, { useState, useRef, useEffect } from 'react';

// const NavigationTabs = () => {
//   const [activeTab, setActiveTab] = useState('Discovered Assets');
//   const [activeTabStyle, setActiveTabStyle] = useState({});
//   const tabsRef = useRef([]);

//   const tabs = [
//     'Discovered Assets',
//     'Application',
//     'Billing',
//     'Threat and security Events',
//     'Compliance Policies',
//     'Alerts',
//     'Inputs',
//   ];

//   useEffect(() => {
//     const activeIndex = tabs.indexOf(activeTab);
//     const activeTabElement = tabsRef.current[activeIndex];
    
//     if (activeTabElement) {
//       const { offsetLeft, offsetWidth } = activeTabElement;
//       setActiveTabStyle({
//         transform: `translateX(${offsetLeft}px)`,
//         width: `${offsetWidth}px`,
//       });
//     }
//   }, [activeTab]);

//   return (
//     <div className="relative w-full flex items-center bg-blue-100 rounded-full px-2">
//       {/* Render all tab labels but make the active one visually distinct */}
//       {tabs.map((tab, index) => (
//         <div
//           key={index}
//           ref={(el) => (tabsRef.current[index] = el)}
//           className={`relative px-6 py-2 text-sm font-medium transition-colors duration-300 ${
//             activeTab === tab ? 'text-transparent' : 'text-black hover:bg-gray-200'
//           }`}
//           onClick={() => setActiveTab(tab)}
//         >
//           {tab}
//         </div>
//       ))}

//       {/* Moving active tab */}
//       <div
//         className="absolute top-0 left-0 h-full bg-blue-600 text-white rounded-full flex items-center justify-center font-medium transition-transform duration-300 ease-in-out"
//         style={activeTabStyle}
//       >
//         {activeTab}
//       </div>
//     </div>
//   );
// };

// export default NavigationTabs;
