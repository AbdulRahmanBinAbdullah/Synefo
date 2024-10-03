import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from '../header';
import MetricCards from './matrixCard';
import TabNavigation from './TabNavigations';
import Performance from './Performance'

const SingleEc2 = () => {
  // State to manage the currently active tab
  const [activeTab, setActiveTab] = useState('Performance');

  return (
    <Box sx={{ padding: 2 }}>
      {/* Header Section */}
      <Header />

      {/* Metric Cards */}
      <MetricCards />

      {/* Tab Navigation */}
      <div className="flex justify-center py-2">
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Conditional Rendering Based on Active Tab */}
      {activeTab === 'Performance' && <Performance /> }
      {activeTab === 'Availability' && <div>Availability Page</div>}
      {activeTab === 'Reliability' && <div>Reliability Page</div>}
      {activeTab === 'End Usage' && <div>End Usage Page</div>}
      {activeTab === 'Compliance' && <div>Compliance Page</div>}
      {activeTab === 'Data Protection' && <div>Data Protection Page</div>}
    </Box>
  );
};

export default SingleEc2;
