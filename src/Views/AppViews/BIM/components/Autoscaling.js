import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import {styled} from '@mui/material/styles'
const autoScalingGroups = [
  {
    groupName: 'ASG-Group-1',
    launchConfiguration: 'LaunchConfig-1',
    instanceType: 't2.micro',
    availabilityZone: 'us-east-1a',
    minSize: 1,
    maxSize: 3,
    desiredCapacity: 2,
    healthCheckType: 'ELB',
    status: 'Scale Up',
  },
  {
    groupName: 'ASG-Group-2',
    launchConfiguration: 'LaunchConfig-2',
    instanceType: 'm5.large',
    availabilityZone: 'us-west-2a',
    minSize: 2,
    maxSize: 5,
    desiredCapacity: 3,
    healthCheckType: 'EC2',
    status: 'Scale Down',
  },
  {
    groupName: 'ASG-Group-3',
    launchConfiguration: 'LaunchConfig-3',
    instanceType: 'c5.xlarge',
    availabilityZone: 'eu-west-1b',
    minSize: 3,
    maxSize: 10,
    desiredCapacity: 5,
    healthCheckType: 'ELB',
    status: 'Scale Up',
  },
  {
    groupName: 'ASG-Group-4',
    launchConfiguration: 'LaunchConfig-4',
    instanceType: 't3.medium',
    availabilityZone: 'ap-southeast-2a',
    minSize: 1,
    maxSize: 5,
    desiredCapacity: 1,
    healthCheckType: 'EC2',
    status: 'Scale Down',
  },
  {
    groupName: 'ASG-Group-5',
    launchConfiguration: 'LaunchConfig-5',
    instanceType: 'm4.xlarge',
    availabilityZone: 'us-west-1a',
    minSize: 2,
    maxSize: 8,
    desiredCapacity: 4,
    healthCheckType: 'ELB',
    status: 'Scale Up',
  },
];
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '10px 8px',
   color:'#383874'
}));

export default function AutoScalingEC2InstanceTable() {
  return (
    <div className="overflow-x-auto overflow-y-auto"> 
      <h2  className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Auto Scaling EC2 Instance</h2>
      <TableContainer component={Paper} className="min-w-80 h-70 "> 
        <Table className="min-w-full" size="small"> 
          <TableHead>
            <TableRow >
              <StyledTableCell className="font-bold "  sx={{color:'#383874',fontWeight: 'bold'}}>Group Name</StyledTableCell>
              <StyledTableCell className="font-bold " sx={{color:'#383874',fontWeight: 'bold'}}>Launch Configuration</StyledTableCell>
              <StyledTableCell className="font-bold " sx={{color:'#383874',fontWeight: 'bold'}}>Instance Type</StyledTableCell>
              <StyledTableCell className="font-bold " sx={{color:'#383874',fontWeight: 'bold'}}>Availability Zone</StyledTableCell>
              <StyledTableCell className="font-bold " sx={{color:'#383874',fontWeight: 'bold'}}>Min Size</StyledTableCell>
              <StyledTableCell className="font-bold " sx={{color:'#383874',fontWeight: 'bold'}}>Max Size</StyledTableCell>
              <StyledTableCell className="font-bold " sx={{color:'#383874',fontWeight: 'bold'}}>Desired Capacity</StyledTableCell>
              <StyledTableCell className="font-bold " sx={{color:'#383874',fontWeight: 'bold'}}>Health Check Type</StyledTableCell>
              <StyledTableCell className="font-bold " sx={{color:'#383874',fontWeight: 'bold'}}>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {autoScalingGroups.map((group, index) => (
              <TableRow key={group.groupName} >
                <StyledTableCell className="text-indigo-700">{group.groupName}</StyledTableCell>
                <StyledTableCell>{group.launchConfiguration}</StyledTableCell>
                <StyledTableCell>{group.instanceType}</StyledTableCell>
                <StyledTableCell>{group.availabilityZone}</StyledTableCell>
                <StyledTableCell>{group.minSize}</StyledTableCell>
                <StyledTableCell>{group.maxSize}</StyledTableCell>
                <StyledTableCell>{group.desiredCapacity}</StyledTableCell>
                <StyledTableCell>{group.healthCheckType}</StyledTableCell>
                <StyledTableCell>
                  <span
                    className={`px-1 py-0  text-xs font-semibold ${
                      group.status === 'Scale Up' ? 'text-green-800' : 'text-red-800'
                    }`}
                  >
                    {group.status}
                  </span>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
