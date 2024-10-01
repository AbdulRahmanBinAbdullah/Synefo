import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function ElasticIp() {
  const elasticIPs = [
    { name: "Syneto", ipv4: "3.224.987.163", allocationId: "eipalloc-09828f0na188d18923", instanceId: "i-0fadf65f0000fc5d3" },
    { name: "Website", ipv4: "3.224.987.163", allocationId: "eipalloc-09828f0na188d18923", instanceId: "i-0fadf65f0000fc5d3" },
    { name: "Synectiks", ipv4: "3.224.987.163", allocationId: "eipalloc-09828f0na188d18923", instanceId: "i-0fadf65f0000fc5d3" },
    { name: "Web Server", ipv4: "3.224.987.163", allocationId: "eipalloc-09828f0na188d18923", instanceId: "i-0fadf65f0000fc5d3" },
    { name: "Web Platform", ipv4: "3.224.987.163", allocationId: "eipalloc-09828f0na188d18923", instanceId: "i-0fadf65f0000fc5d3" },
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
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Allocated IPv4 Address</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Allocation ID</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Allocation Instance ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {elasticIPs.map((ip, index) => (
              <TableRow >
                <TableCell sx={cellStyle}>{ip.name}</TableCell>
                <TableCell sx={cellStyle}>{ip.ipv4}</TableCell>
                <TableCell sx={cellStyle}>{ip.allocationId}</TableCell>
                <TableCell sx={cellStyle}>{ip.instanceId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
