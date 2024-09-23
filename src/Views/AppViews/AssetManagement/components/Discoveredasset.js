import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const DiscoveredAssets = () => {
  return (
    <Box sx={{ }}>
      {/* Heading */}
      

      {/* White Box */}
      <Paper elevation={2} sx={{ padding: '10px', height: '45px' ,    fontFamily: 'Poppins', 
}}>
        {/* Content inside the box, currently empty */}
        <Typography variant="h6" >
        Discovered Assets
      </Typography>
      </Paper>
    </Box>

  );
};

export default DiscoveredAssets;
