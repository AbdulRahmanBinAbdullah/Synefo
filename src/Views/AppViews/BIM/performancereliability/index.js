import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const resourceSections = [
  {
    title: 'Instance Count',
    items: [
      { label: 'Running Instances', value: 15 },
      { label: 'Stopped Instances', value: '05' },
    ],
  },
  {
    title: 'CPU Reservation',
    items: [
      { label: 'CPU Reserved', value: '8 vCPUs' },
      { label: 'CPU Utilization', value: '70%' },
    ],
  },
  {
    title: 'Network Traffic',
    items: [
      { label: 'Inbound Traffic', value: '250mbps' },
      { label: 'Outbound Traffic', value: '300mbps' },
    ],
  },
  {
    title: 'Instance Health Check',
    items: [
      { label: 'Healthy Instances', value: 10 },
      { label: 'Unhealthy Instances', value: '05' },
    ],
  },
  {
    title: 'Storage Utilization',
    items: [
      { label: 'EBS Volume', value: '80%' },
      { label: 'Instance Store Volume', value: '60%' },
    ],
  },
  {
    title: 'Memory Utilization',
    items: [
      { label: 'Current Usage', value: 15 },
      { label: 'Max Usage(24hr)', value: 50 },
    ],
  },
  {
    title: 'Network Latency',
    items: [
      { label: 'Average Latency', value: '50ms' },
      { label: 'Maximum Latency', value: '80ms' },
    ],
  },
  {
    title: 'Auto Scaling',
    items: [
      { label: 'Auto Scaling Groups', value: '3 Active' },
      { label: 'Launch Configuration', value: '5 Configured' },
    ],
  },
  {
    title: 'Instance Security Group',
    items: [
      { label: 'Web Server', value: 10 },
      { label: 'Data Base Server', value: 15 },
    ],
  },
  {
    title: 'Instance Backup Status',
    items: [
      { label: 'Successful Backups', value: 10 },
      { label: 'Missing Backups', value: '03' },
    ],
  },
  {
    title: 'Disk Utilization',
    items: [
      { label: 'Root Volume', value: '80%' },
      { label: 'Data Volume', value: '20%' },
    ],
  },
  {
    title: 'Disk Space Utilization',
    items: [
      { label: 'Used', value: '80%' },
      { label: 'Free', value: '20%' },
    ],
  },
];

export default function ResourcesDashboard() {
  return (
    <div >
      <h2  className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>
        Resources
      </h2>
      <Grid container spacing={1}>
        {resourceSections.map((section) => (
          <Grid item xs={12} sm={6} md={2} lg={2} key={section.title}>


<Paper className="p-2 h-full">
    <Typography variant="body2" className="text-600" sx={{color:'#383874'}}>
        {section.title}
    </Typography>
    <Typography variant="body2">
        This is a test text to check rendering
    </Typography>
    {section.items.map((item) => (
        <div key={item.label} className="flex justify-between mb-2">
<Typography variant="body2" className="text-indigo-600" fontSize="0.50rem" sx={{color:'#383874',fontWeight: 'bold'}} >
    {item.label}
</Typography>
           


<Typography 
  variant="body2" 
  className="text-indigo-800" 
  fontSize="0.75rem" 
  sx={{ fontWeight: 'bold' ,   color:'#383874'
  }}
>
  {item.value}
</Typography>

        </div>
    ))}
</Paper>

          </Grid>
        ))}
      </Grid>
    </div>
  );
}
