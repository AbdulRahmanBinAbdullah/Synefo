


import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const data = [
  { instanceId: 'i-0fbdfe5f0000fc5d3', state: 'Running' },
  { instanceId: 'i-0fbdfe5f0000fc5d4', state: 'Stopped' },
  { instanceId: 'i-0fbdfe5f0000fc5d5', state: 'Terminated' },
  { instanceId: 'i-0fbdfe5f0000fc5d6', state: 'Running' },
  { instanceId: 'i-0fbdfe5f0000fc5d7', state: 'Stopped' },
  { instanceId: 'i-0fbdfe5f0000fc5d6', state: 'Running' },
  { instanceId: 'i-0fbdfe5f0000fc5d7', state: 'Stopped' },
];

const StateIndicator = ({ state }) => {
  const getStateStyle = () => {
    switch (state) {
      case 'Running':
        return 'bg-green-400 text-white';
      case 'Stopped':
        return 'bg-red-400 text-white';
      case 'Terminated':
        return 'bg-orange-400 text-white';
      default:
        return 'bg-gray-400 text-white';
    }
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStateStyle()}`}>
      {state}
    </span>
  );
};

const cellStyle = {
  color: '#383874',
  padding: '8px 8px', 
};

const EC2InstanceStateTable = () => {
  return (
    <div>
      <TableContainer 
        className=" rounded-lg h-80"
        style={{ maxHeight: 'calc(100% - 60px)', overflowY: 'auto' }} >
        <Table stickyHeader> {/* Using 'small' size for more compact layout */}
          <TableHead>
            <TableRow>
              <TableCell className="font-bold" sx={{ ...cellStyle, fontWeight: 'bold' }}>INSTANCE ID</TableCell>
              <TableCell className="font-bold" sx={{ ...cellStyle, fontWeight: 'bold' }}>INSTANCE STATE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-mono" sx={cellStyle}>{row.instanceId}</TableCell>
                <TableCell sx={{ ...cellStyle, padding: '4px' }}> {/* Further reduced padding for state indicator */}
                  <StateIndicator state={row.state} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EC2InstanceStateTable;