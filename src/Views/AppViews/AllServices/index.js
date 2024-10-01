


// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import Vector from "assets/img/allservices/Vector.png";
// import Filter from "assets/img/allservices/Filters.png";
// import Timerange from './components/tabs';
// import Developmentbuttons from './components/Developmentbuttons';
// import Visualizations from './components/visualizations'
// import FilterModal from './components/Filter';
// export default function EC2DashboardHeader() {
//   const [selectedTab, setSelectedTab] = React.useState(0);
//   const [selectedTimeRange, setSelectedTimeRange] = React.useState('1M');

//   const handleTabChange = (event, newValue) => {
//     setSelectedTab(newValue);
//   };

//   const handleTimeRangeChange = (range) => {
//     setSelectedTimeRange(range);
//   };

//   return (
//     <div>
//       <AppBar position="static" color="transparent" elevation={0}>
//         <Toolbar className="justify-between">
//           <div className="flex items-center">
//             <img src={Vector} alt="Logo" className="w-8 h-8 mr-2" />
//             <Typography variant="h6" component="div" className="text-indigo-600 font-bold" style={{color:'#383874'}} sx={{fontFamily:'poppins'}}>
//               EC2 - Elastic Compute Cloud
//             </Typography>
//           </div>

//           <div className="flex space-x-2">
//             <Button
//               size="small"
//               className="text-gray-600 mx-2"
//             style={{backgroundColor:'#ffffff',textTransform:'none',border:'none',color:'black'}}
//               startIcon={<img src={Filter} alt="Filter" style={{ width: '15px', height: '16px', }} />}
//             >
//               Filters
//             </Button>
//             <Button
//               size="small"
//               className="text-indigo-600 hover:bg-indigo-200 mx-2"
//               style={{backgroundColor:'#DDE1F8',color:'#383874',textTransform:'none'}}
//             >
//               View potential savings
//             </Button>
          
//           </div>

//         </Toolbar>
//         <Timerange/>
//       </AppBar>
//     <Developmentbuttons/>
//     <Visualizations/>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography } from '@mui/material';

// const TabItem = ({ label, isActive, onClick }) => (
//   <button
//     className={`px-4 py-2 font-medium text-sm focus:outline-none ${
//       isActive
//         ? 'text-[#383874] border-b-2 border-[#8676FF]'
//         : 'text-[#383874] hover:text-[#8676FF]'
//     }`}
//     onClick={onClick}
//   >
//     {label}
//   </button>
// );

// const AllServices = () => {
//   const [selectedTab, setSelectedTab] = useState(0);
//   const tabs = ['Development', 'Test', 'Stage', 'Production'];

//   const handleTabChange = (event, newValue) => {
//     setSelectedTab(newValue);
//   };

//   return (
//     <div className="w-full">
//       <AppBar position="static" color="transparent" elevation={0}>
//         <Toolbar className="flex flex-col justify-start items-start p-0">
//           <Typography
//             variant="h6"
//             component="div"
//             className="text-[#383874] font-bold pl-4 mb-2"
//             sx={{ fontFamily: 'Poppins' }}
//           >
//             All Services
//           </Typography>
//           <div className="flex w-full overflow-x-auto">
//             {tabs.map((tab, index) => (
//               <TabItem
//                 key={tab}
//                 label={tab}
//                 isActive={selectedTab === index}
//                 onClick={() => handleTabChange(null, index)}
//               />
//             ))}
//           </div>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };

// export default AllServices;



import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Tabs, Tab } from '@mui/material'; // Added Tabs and Tab here
import Vector from "assets/img/allservices/Vector.png";
import Filter from "assets/img/allservices/Filters.png";
import Timerange from './components/tabs';
import Developmentbuttons from './components/Developmentbuttons';
import Visualizations from './components/visualizations';
import FilterModal from './components/Filter';
import Buttons from './buttons';
export default function EC2DashboardHeader() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedTimeRange, setSelectedTimeRange] = useState('1M');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleTimeRangeChange = (range) => {
    setSelectedTimeRange(range);
  };

  const handleFilterButtonClick = () => {
    setIsFilterModalOpen(true);
  };

  const handleFilterModalClose = () => {
    setIsFilterModalOpen(false);
  };

  const handleFilterSubmit = (selectedDepartment) => {
    console.log('Selected Department:', selectedDepartment);
    // Add your logic here to handle the selected department
  };

  return (
    <div>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className="justify-between">
          <div className="flex items-center">
            <Typography variant="h6" component="div" className="text-indigo-600 font-bold" style={{ color: '#383874' }} sx={{ fontFamily: 'poppins' }}>
              All Services
            </Typography>
          </div>
        </Toolbar>
        <div className="flex">
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            aria-label="environment-tabs"
            sx={{
              '& .MuiTab-root': {
                color: '#383874',
                textTransform: 'none',
                '&.Mui-selected': {
                  color: '#383874',
                },
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#8676FF',
              },
            }}
          >
            <Tab label="Development" />
            <Tab label="Test" />
            <Tab label="Stage" />
            <Tab label="Production" />
          </Tabs>
        </div>
      </AppBar>
      <Developmentbuttons />
      <Buttons/>
      {isFilterModalOpen && (
        <FilterModal
          open={isFilterModalOpen}
          onClose={handleFilterModalClose}
          onSubmit={handleFilterSubmit}
        />
      )}
    </div>
  );
}
