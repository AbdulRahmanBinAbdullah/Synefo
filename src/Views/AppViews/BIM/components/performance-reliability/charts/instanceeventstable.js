

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const data = [
  { timestamp: '2023-06-01 09:15:00', userName: 'Jane. A', eventName: 'Create instance', description: 'Instance i-1234567890abcdef0 Created' },
  { timestamp: '2023-06-02 15:30:00', userName: 'Mick', eventName: 'Terminate instance', description: 'Instance i-0987654321fedcba0 terminated' },
  { timestamp: '2023-06-03 11:45:00', userName: 'Alex', eventName: 'Create instance', description: 'Instance i-1234567890abcdef0 Created' },
  { timestamp: '2023-06-03 14:20:00', userName: 'Jane. A', eventName: 'Terminate instance', description: 'Instance i-0987654321fedcba0 terminated' },
  { timestamp: '2023-06-03 18:55:00', userName: 'Alex', eventName: 'Create instance', description: 'Instance i-1234567890abcdef0 Created' },
];

const cellStyle = {
  color: '#383874',
  padding: '8px 4px', // Reduced horizontal padding
};

const EC2InstanceEventsTable = () => {
  return (
    <div className="p-1">
      <TableContainer className="h-80">
        <Table stickyHeader> 
          <TableHead>
            <TableRow>
              <TableCell className="font-bold" sx={{ ...cellStyle, fontWeight: 'bold' }}>TIMESTAMP</TableCell>
              <TableCell className="font-bold" sx={{ ...cellStyle, fontWeight: 'bold' }}>USER NAME</TableCell>
              <TableCell className="font-bold" sx={{ ...cellStyle, fontWeight: 'bold' }}>EVENT NAME</TableCell>
              <TableCell className="font-bold" sx={{ ...cellStyle, fontWeight: 'bold' }}>DESCRIPTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={cellStyle}>{row.timestamp}</TableCell>
                <TableCell sx={cellStyle}>{row.userName}</TableCell>
                <TableCell sx={cellStyle}>{row.eventName}</TableCell>
                <TableCell sx={cellStyle}>{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EC2InstanceEventsTable;