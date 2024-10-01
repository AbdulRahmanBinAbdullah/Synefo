import React from 'react';
import { AppBar, Toolbar, Typography ,Button,Paper} from '@mui/material';
import Allresources from '../components/allresources';
import InstanceBar from '../components/EC2Recommendations/InstanceSummary';
const CostOptimization = () => {
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
  </div>
  
  );
};

export default CostOptimization;
