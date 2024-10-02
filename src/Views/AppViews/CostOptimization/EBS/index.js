import React from 'react';
import { AppBar, Toolbar, Typography, Button, Paper } from '@mui/material';
// Import Allresources if it's a separate component
// import Allresources from './path/to/Allresources'; 
import Allresources from '../components/allresources';
import VolumeBar from '../components/EBSRecommendations/Volumesummary';
import EC2InstanceComparison from '../components/EC2Recommendations/CurrantInstanceType';
import EC2VolumesComparison from '../components/EBSRecommendations/currantvolumes';
import InstanceComparisonHeader from '../components/EBSRecommendations/comparisonheader';
import EC2Dashboard from '../components/charts/EBSVolumes/visualizations';
const EBSRecommendations = () => {
  return (
    <div>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar className="justify-between">
          <div className="flex items-center">
            <Typography
              variant="h6"
              component="div"
              className="text-indigo-600 font-bold"
              style={{ color: '#383874' }}
              sx={{ fontFamily: 'Poppins' }}
            >
              Cost
            </Typography>
          </div>
          <div className="flex items-center">
    <Allresources />
  </div>
        </Toolbar>
      </AppBar>
      <VolumeBar/>
      <EC2VolumesComparison/>
<InstanceComparisonHeader/>
<EC2Dashboard/>
    </div>
  );
};

export default EBSRecommendations;
