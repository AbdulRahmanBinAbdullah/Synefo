import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function Ami() {
  const amis = [
    {
      name: "ASG-Group-1",
      amiName: "procurement-img-25/3/2021",
      amiId: "ami-009281sa987gad",
      source: "827961793917/procurement-img",
      owner: "827961793917",
      visibility: "Private",
      platform: "Linux/UNIX",
      rootDeviceType: "ebs",
      status: "Available"
    },
    {
      name: "ASG-Group-2",
      amiName: "procurement-img-26/3/2021",
      amiId: "ami-009281sa987gad",
      source: "650972263848/procurement-img",
      owner: "650972263848",
      visibility: "Private",
      platform: "Linux/UNIX",
      rootDeviceType: "ebs",
      status: "Unavailable"
    },
    {
      name: "ASG-Group-3",
      amiName: "procurement-img-26/3/2021",
      amiId: "ami-009281sa987gad",
      source: "827961793917/procurement-img",
      owner: "827961793917",
      visibility: "Private",
      platform: "Linux/UNIX",
      rootDeviceType: "ebs",
      status: "Available"
    },
    {
      name: "ASG-Group-4",
      amiName: "procurement-img-26/3/2021",
      amiId: "ami-009281sa987gad",
      source: "650972292735/procurement-img",
      owner: "650972292735",
      visibility: "Private",
      platform: "Linux/UNIX",
      rootDeviceType: "ebs",
      status: "Unavailable"
    },
    {
      name: "ASG-Group-5",
      amiName: "procurement-img-26/3/2021",
      amiId: "ami-009281sa987gad",
      source: "827961793917/procurement-img",
      owner: "827961793917",
      visibility: "Private",
      platform: "Linux/UNIX",
      rootDeviceType: "ebs",
      status: "Available"
    }
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
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>AMI Name</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>AMI ID</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Source</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Owner</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Visibility</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Platform</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Root Device Type</TableCell>
              <TableCell sx={{ ...cellStyle, fontWeight: 'bold' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {amis.map((ami, index) => (
              <TableRow key={ami.amiId}>
                <TableCell sx={cellStyle}>{ami.name}</TableCell>
                <TableCell sx={cellStyle}>{ami.amiName}</TableCell>
                <TableCell sx={cellStyle}>{ami.amiId}</TableCell>
                <TableCell sx={cellStyle}>{ami.source}</TableCell>
                <TableCell sx={cellStyle}>{ami.owner}</TableCell>
                <TableCell sx={cellStyle}>{ami.visibility}</TableCell>
                <TableCell sx={cellStyle}>{ami.platform}</TableCell>
                <TableCell sx={cellStyle}>{ami.rootDeviceType}</TableCell>
                <TableCell sx={cellStyle}>
                  <span className={`px-2 py-1 rounded-full ${ami.status === 'Available' ? 'text-green-700' : 'text-red-700 '}`}>
                    {ami.status}
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
