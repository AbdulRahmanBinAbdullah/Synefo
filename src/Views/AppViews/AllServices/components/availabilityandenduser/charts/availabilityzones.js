import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function InstancesInAvailabilityZones() {
  const instances = [
    { instanceId: "i-0fbdfe5f0000fc5d3", instanceName: "WebServer1", availabilityZone: "us-east-1a" },
    { instanceId: "i-0fbdfe5f0000fc5d3", instanceName: "DBServer1", availabilityZone: "us-west-2a" },
    { instanceId: "i-0fbdfe5f0000fc5d3", instanceName: "CacheServer1", availabilityZone: "eu-west-1b" },
    { instanceId: "i-0fbdfe5f0000fc5d3", instanceName: "TestInstance1", availabilityZone: "us-east-1a" },
    { instanceId: "i-0fbdfe5f0000fc5d3", instanceName: "AppServer1", availabilityZone: "us-west-2a" },
    { instanceId: "i-0fbdfe5f0000fc5d3", instanceName: "DBServer1", availabilityZone: "eu-west-1b" },
  ];

  const cellStyle = {
    padding: '8px 10px',
    color: '#383874',
  };

  return (
    <div className="p-1">
      <TableContainer className="h-80">
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>INSTANCE ID</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>INSTANCE NAME</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>AVAILABILITY ZONE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {instances.map((instance, index) => (
              <TableRow key={index}>
                <TableCell sx={cellStyle}>{instance.instanceId}</TableCell>
                <TableCell sx={cellStyle}>{instance.instanceName}</TableCell>
                <TableCell sx={cellStyle}>{instance.availabilityZone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}