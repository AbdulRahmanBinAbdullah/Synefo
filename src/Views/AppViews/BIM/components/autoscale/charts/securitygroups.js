import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function SecurityGroups() {
  const securityGroups = [
    { name: "Synectiks", id: "sg-0d9c7327da1a909d3", vpcId: "vpc-0ec36c6fcad5fe626" },
    { name: "Web Platform", id: "sg-0d9c7327da1a909d3", vpcId: "vpc-0ec36c6fcad5fe626" },
    { name: "Syneto", id: "sg-0d9c7327da1a909d3", vpcId: "vpc-0ec36c6fcad5fe626" },
    { name: "Website", id: "sg-0d9c7327da1a909d3", vpcId: "vpc-0ec36c6fcad5fe626" },
    { name: "Web Server", id: "sg-0d9c7327da1a909d3", vpcId: "vpc-0ec36c6fcad5fe626" },
  ];

  const cellStyle = {
    padding: '8px 10px',
    color: '#383874',
  };

  return (
    <div className="p-1">
      <TableContainer  className="h-80">
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Security Group Name</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Security Group ID</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>VPC ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {securityGroups.map((group, index) => (
              <TableRow key={group.id}>
                <TableCell sx={cellStyle}>{group.name}</TableCell>
                <TableCell sx={cellStyle}>{group.id}</TableCell>
                <TableCell sx={cellStyle}>{group.vpcId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

