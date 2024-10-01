
import React from 'react';
import CircularProgress from './Circularprogress';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';

export default function ErrorRateDisplay() {
  return (
    <Card sx={{ width: 250, boxShadow: 3, borderRadius: 3 }}>
      <CardContent sx={{ p: 1 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <CircularProgress progress={32} />
          <Box>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Error Rate
            </Typography>
            <Box display="flex" alignItems="center">
              <Typography variant="h5" fontWeight="bold">
                48.3%
              </Typography>
              <Box display="flex" alignItems="center" ml={1} color="green">
                <ArrowUpward sx={{ fontSize: 16 }} />
                <Typography variant="body2">10%</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
