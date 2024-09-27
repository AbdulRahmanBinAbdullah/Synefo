import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function Keypairs() {
  const keyPairs = [
    { name: "Drill", type: "RSA", createdTime: "2023-06-01 10:15:00" },
    { name: "Website", type: "RSA", createdTime: "2023-06-01 11:20:00" },
    { name: "TEA", type: "RSA", createdTime: "2023-06-02 14:45:00" },
    { name: "Server", type: "RSA", createdTime: "2023-06-03 09:30:00" },
    { name: "EC2 Keypair", type: "RSA", createdTime: "2023-06-03 15:15:00" },
  ];

  const cellStyle = {
    padding: '8px 12px',
    color: '#383874',

  };

  return (
    <div className="p-1">
      <TableContainer  className="h-80">
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Key Pair Name</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Type</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Created Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {keyPairs.map((pair, index) => (
              <TableRow >
                <TableCell sx={cellStyle}>{pair.name}</TableCell>
                <TableCell sx={cellStyle}>{pair.type}</TableCell>
                <TableCell sx={cellStyle}>{pair.createdTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
