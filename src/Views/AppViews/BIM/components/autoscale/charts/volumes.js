import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function Volumes() {
  const volumes = [
    { name: "Syneto", volumeId: "vol-0fadf65f0000fc5d3", type: "gp2", created: "2023-06-10 10:15:00", state: "Available" },
    { name: "Website", volumeId: "vol-0fadf65f0000fc5d3", type: "gp2", created: "2023-06-10 10:15:00", state: "Available" },
    { name: "Synectiks", volumeId: "vol-0fadf65f0000fc5d3", type: "gp2", created: "2023-06-10 10:15:00", state: "Available" },
    { name: "Web Server", volumeId: "vol-0fadf65f0000fc5d3", type: "gp2", created: "2023-06-10 10:15:00", state: "Available" },
    { name: "Web Platform", volumeId: "vol-0fadf65f0000fc5d3", type: "gp2", created: "2023-06-10 10:15:00", state: "Available" },
  ];

  const cellStyle = {
    padding: '8px 12px',
    color: '#383874',

  };

  return (
    <div className="p-1">
      <TableContainer  className="h-80" >
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Volume ID</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Type</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Created</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Volume State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {volumes.map((volume, index) => (
              <TableRow >
                <TableCell sx={cellStyle}>{volume.name}</TableCell>
                <TableCell sx={cellStyle}>{volume.volumeId}</TableCell>
                <TableCell sx={cellStyle}>{volume.type}</TableCell>
                <TableCell sx={cellStyle}>{volume.created}</TableCell>
                <TableCell sx={cellStyle}>
                  <span className={`px-2 py-1 text-green-700 bg-green-100 rounded-full`}>
                    {volume.state}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
