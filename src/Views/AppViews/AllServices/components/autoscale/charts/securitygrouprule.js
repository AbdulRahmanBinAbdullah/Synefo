import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function SecurityGroupsRules() {
  const securityGroups = [
    { name: "sg-0d9c7327da1a909d3", inbound: "2 permission entries", outbound: "3 permission entries" },
    { name: "sg-0d9c7327da1a909d3", inbound: "3 permission entries", outbound: "2 permission entries" },
    { name: "sg-0d9c7327da1a909d3", inbound: "1 permission entry", outbound: "2 permission entries" },
    { name: "sg-0d9c7327da1a909d3", inbound: "4 permission entries", outbound: "1 permission entry" },
    { name: "sg-0d9c7327da1a909d3", inbound: "2 permission entries", outbound: "4 permission entries" },
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
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Security Group Name</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Inbound Rule Count</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Outbound Rule Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {securityGroups.map((group, index) => (
              <TableRow >
                <TableCell sx={cellStyle}>{group.name}</TableCell>
                <TableCell sx={cellStyle}>{group.inbound}</TableCell>
                <TableCell sx={cellStyle}>{group.outbound}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
