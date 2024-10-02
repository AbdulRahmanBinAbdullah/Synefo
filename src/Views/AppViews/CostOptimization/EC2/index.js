import React from 'react';
import { AppBar, Toolbar, Typography, Button, Paper } from '@mui/material';
// Import Allresources if it's a separate component
// import Allresources from './path/to/Allresources'; 
import Allresources from '../components/allresources';
import InstanceBar	 from '../components/EC2Recommendations/InstanceSummary';
import EC2InstanceComparison from '../components/EC2Recommendations/CurrantInstanceType';
import InstanceComparisonHeader from '../components/EC2Recommendations/InstanceComparisonHeader';
import EC2Dashboard from '../components/charts/EC2Instance/visualizations';
const Ec2Recommendations = () => {
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
      <InstanceBar/>
      <EC2InstanceComparison/>
<InstanceComparisonHeader/>
<EC2Dashboard/>
    </div>
  );
};

export default Ec2Recommendations;
