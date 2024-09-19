import React from 'react';
import { Card, CardContent, CardHeader, Typography, Chip, Box } from '@mui/material';

class WAFRCard extends React.Component {
  render() {
    const { workload } = this.props;

    return (
      <Card sx={{ minWidth: 275, marginBottom: 2 }}>
        <CardHeader 
          title={`Workload ID: ${workload.id}`} 
          subheader={`Last Updated: ${workload.updated}`} 
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Workload Type: {workload.workloadType}
          </Typography>
          <Box sx={{ marginTop: 2 }}>
            <Chip 
              label={workload.status} 
              color="warning" 
              size="small"
              sx={{ 
                backgroundColor: '#FFA500',
                color: 'white',
                fontWeight: 'bold'
              }} 
            />
          </Box>
        </CardContent>
      </Card>
    );
  }
}

export default WAFRCard;
