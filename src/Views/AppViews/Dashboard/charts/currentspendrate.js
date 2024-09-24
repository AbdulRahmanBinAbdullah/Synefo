import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const CurrentSpendRate = () => (
  <Paper sx={{ p: 2, mb: 2 }}>
    <Typography variant="h6" gutterBottom >Current Spend Rate</Typography>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box display="flex" alignItems="center">
          <Box sx={{ bgcolor: 'error.main', borderRadius: '50%', width: 40, height: 40, mr: 1 }} />
          <Box>
            <Typography variant="subtitle2">Average Per Hour</Typography>
            <Typography variant="h6">$2,340</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box display="flex" alignItems="center">
          <Box sx={{ color: '#3f51b5', borderRadius: '50%', width: 40, height: 40, mr: 1 }} />
          <Box>
            <Typography variant="subtitle2">Per Day</Typography>
            <Typography variant="h6">$103,540</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Paper>
);

export default CurrentSpendRate;