import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function SuccessfulEventsInEC2() {
  const events = [
    { time: "2023-06-01 10:15:00", eventName: "Instance Launch", user: "admin" },
    { time: "2023-06-01 11:30:00", eventName: "Security Group Update", user: "developer" },
    { time: "2023-06-02 14:45:00", eventName: "Instance Stop", user: "admin" },
    { time: "2023-06-03 09:30:00", eventName: "Instance Reboot", user: "operator" },
    { time: "2023-06-03 15:15:00", eventName: "Volume Attachment", user: "admin" },
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
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>TIME</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>EVENT NAME</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>USER</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event, index) => (
              <TableRow key={index}>
                <TableCell sx={cellStyle}>{event.time}</TableCell>
                <TableCell sx={cellStyle}>{event.eventName}</TableCell>
                <TableCell sx={cellStyle}>{event.user}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}