import React from 'react';
import { Box, Card, Typography, Grid, Tabs, Tab, Avatar, Badge } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SingleEc2 = () => {
  const metricsData = [
    { label: 'CPU Utilization', current: '25%', avg: '30%', max: '40%' },
    { label: 'Memory Utilization', current: '15GB', avg: '25GB', max: '50GB' },
    { label: 'Storage Utilization', current: '25%', avg: '30%', max: '40%' },
    { label: 'Network Utilization', inbound: '500 Mbps', outbound: '200 Mbps', transferred: '10 GB' },
  ];

  const performanceData = {
    labels: ['04:00', '04:15', '04:30', '04:45', '05:00'],
    datasets: [
      {
        label: 'CPU User',
        data: [15, 20, 25, 30, 35],
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'CPU Idle',
        data: [70, 65, 60, 55, 50],
        borderColor: 'purple',
        fill: false,
      },
      // Add other performance datasets similarly
    ],
  };

  return (
    <Box sx={{ padding: 2 }}>
      {/* Header Section */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h5">Amazon Web Services</Typography>
          <Typography variant="body2">Organization Unit: Synecetics</Typography>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <Badge badgeContent="83%" color="primary">
            <Typography>SLA</Typography>
          </Badge>
          <Avatar src="/profile-pic.jpg" alt="Profile" sx={{ width: 40, height: 40, marginLeft: 2 }} />
        </Grid>
      </Grid>

      {/* Metric Cards */}
      <Grid container spacing={2} mt={2}>
        {metricsData.map((metric, index) => (
          <Grid item xs={3} key={index}>
            <Card sx={{ padding: 2 }}>
              <Typography variant="subtitle1">{metric.label}</Typography>
              <Typography variant="body2">Current: {metric.current}</Typography>
              <Typography variant="body2">Average: {metric.avg}</Typography>
              <Typography variant="body2">Max: {metric.max}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Tabs Section */}
      <Tabs value={0} sx={{ marginTop: 2 }} centered>
        <Tab label="Performance" />
        <Tab label="Availability" />
        <Tab label="Reliability" />
        <Tab label="End Usage" />
        <Tab label="Security" />
        <Tab label="Data Protection" />
      </Tabs>

      {/* Performance Graphs */}
      <Typography variant="h6" sx={{ marginTop: 2 }}>Compute Performance</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Line data={performanceData} options={{ responsive: true, maintainAspectRatio: false }} />
        </Grid>
        <Grid item xs={6}>
          <Line data={performanceData} options={{ responsive: true, maintainAspectRatio: false }} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SingleEc2;
