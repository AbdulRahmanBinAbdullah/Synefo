
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
