import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function Snapshots() {
  const snapshots = [
    { name: "Drill", snapshotId: "snap-0fbdfe5f0000fc5d3", volumeSize: "8 GiB", description: "fb-web-petclinic" },
    { name: "Website", snapshotId: "snap-0fbdfe5f0000fc5d3", volumeSize: "8 GiB", description: "AWS Elastic Disaster Recovery Base Snapshot" },
    { name: "TEA", snapshotId: "snap-0fbdfe5f0000fc5d3", volumeSize: "1 GiB", description: "2023-06-02 14:45:00" },
    { name: "Server", snapshotId: "snap-0fbdfe5f0000fc5d3", volumeSize: "6 GiB", description: "2023-06-03 09:30:00" },
    { name: "EC2 Keypair", snapshotId: "snap-0fbdfe5f0000fc5d3", volumeSize: "3 GiB", description: "2023-06-03 15:15:00" },
  ];

  const cellStyle = {
    padding: '8px 16px',
    color: '#383874',

  };

  return (
    <div className="p-1">
      <TableContainer  className="h-80">
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Snapshot ID</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Volume Size</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {snapshots.map((snapshot, index) => (
              <TableRow >
                <TableCell sx={cellStyle}>{snapshot.name}</TableCell>
                <TableCell sx={cellStyle}>{snapshot.snapshotId}</TableCell>
                <TableCell sx={cellStyle}>{snapshot.volumeSize}</TableCell>
                <TableCell sx={cellStyle}>{snapshot.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
