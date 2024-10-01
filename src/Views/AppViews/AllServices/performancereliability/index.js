import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Vector from "assets/img/allservices/Vector.png";
import Filter from "assets/img/allservices/Filters.png";
import Timerange from '../components/tabs';
import Terminatebuttons from '../components/performance-reliability/Performancebuttons';
import FilterModal from '../components/Filter';
import SchedulerModal from '../components/performance-reliability/schedular';
import SetAlertForm from '../components/performance-reliability/Setalert';
import EC2Dashboard from '../components/performance-reliability/visualizations';
export default function EC2DashboardHeader() {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [selectedTimeRange, setSelectedTimeRange] = React.useState('1M');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isSchedularOpen, setIsSchedularOpen] = useState(false);


  const [isAlertOpen, setIsAlertOpen] = useState(false);

const handleSetAlertOpen = () => {
  setIsAlertOpen(true);
};

const handleSetAlertClose = () => {
  setIsAlertOpen(false);
};

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  

  const handleTimeRangeChange = (range) => {
    setSelectedTimeRange(range);
  };

  const handleFilterButtonClick = () => {
    setIsFilterModalOpen(true);
  };

  const handleSchedularOpen = () => {
    setIsSchedularOpen(true);
  };

  const handleSchedularClose = () => {
    setIsSchedularOpen(false);
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
            <img src={Vector} alt="Logo" className="w-8 h-8 mr-2" />
            <Typography variant="h6" component="div" className="text-indigo-600 font-bold" style={{ color: '#383874' }} sx={{ fontFamily: 'poppins' }}>
              EC2 - Elastic Compute Cloud
            </Typography>
          </div>

          <div className="flex space-x-2">
            <Button
              variant='outlined'
              size="small"
              className="hover:bg-indigo-200 mx-2"
              sx={{ borderColor: '#384CFF' }}
              style={{ backgroundColor: '#FFFFFF', color: '#384CFF', textTransform: 'none' }}
              onClick={handleSchedularOpen}
            >
              Scheduler
            </Button>
            <Button
          size="small"
          className="hover:bg-indigo-200 mx-2"
          style={{ backgroundColor: '#023AFF', color: '#FFFFFF', textTransform: 'none' }}
          onClick={handleSetAlertOpen}
        >
          Set Alert
        </Button>

            <Button
              size="small"
              className="text-gray-600 mx-2"
              style={{ backgroundColor: '#ffffff', textTransform: 'none', border: 'none', color: 'black' }}
              startIcon={<img src={Filter} alt="Filter" style={{ width: '15px', height: '16px' }} />}
              onClick={handleFilterButtonClick}
            >
              Filters
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Timerange />
      <Terminatebuttons />
    <EC2Dashboard />

      {isFilterModalOpen && (
        <FilterModal
          open={isFilterModalOpen}
          onClose={handleFilterModalClose}
          onSubmit={handleFilterSubmit}

        />
      )}

      {/* Render SchedulerModal */}
      <SchedulerModal
        open={isSchedularOpen}
        onClose={handleSchedularClose}
      />

      {/* Render SetAlertForm */}
      
    {isAlertOpen && (
      <SetAlertForm
        open={isAlertOpen}
        onClose={handleSetAlertClose}
      />
    )}
    </div>
  );
}
