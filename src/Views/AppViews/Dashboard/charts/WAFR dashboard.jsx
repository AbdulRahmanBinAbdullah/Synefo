


import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Chip 
} from '@mui/material';

class WAFRDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workloads: [
        { id: '45sdf28d', status: 'Pending', workloadType: 'Well-Architected Framework Review', updated: '2023-12-01, 10:30:15' },
        { id: 'ds42es114', status: 'Pending', workloadType: 'Well-Architected Framework Review', updated: '2023-12-01, 10:30:15' },
        { id: '4se215es5', status: 'Pending', workloadType: 'Well-Architected Framework Review', updated: '2023-12-01, 10:30:15' },
        { id: '95dse45s', status: 'Pending', workloadType: 'Well-Architected Framework Review', updated: '2023-12-01, 10:30:15' },
      ]
    };
  }

  render() {
    const cellStyle = {
      padding: '10px 5px',
      color: '#383874',
    };

    return (
      <div className="p-1">
        <TableContainer className="h-80">
          <Table size="small" stickyHeader aria-label="WAFR table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...cellStyle, fontWeight: 'bold' ,textTransform:'uppercase',fontFamily: 'Roboto, sans-serif' }}>Workloads</TableCell>
                <TableCell sx={{ ...cellStyle, fontWeight: 'bold' ,textTransform:'uppercase',fontFamily: 'Roboto, sans-serif' }}>Status</TableCell>
                <TableCell sx={{ ...cellStyle, fontWeight: 'bold' ,textTransform:'uppercase',fontFamily: 'Roboto, sans-serif' }}>Workload Type</TableCell>
                <TableCell sx={{ ...cellStyle, fontWeight: 'bold' ,textTransform:'uppercase',fontFamily: 'Roboto, sans-serif' }}>Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.workloads.map((workload) => (
                <TableRow key={workload.id}>
                  <TableCell sx={cellStyle}>{workload.id}</TableCell>
                  <TableCell sx={cellStyle}>
                    <Chip 
                      label={workload.status} 
                      color="warning" 
                      size="small"
                      sx={{ 
                        backgroundColor: '#FFA500',
                        color: 'white',
                        fontWeight: 'bold'
                      }} 
                    />
                  </TableCell>
                  <TableCell sx={cellStyle}>{workload.workloadType}</TableCell>
                  <TableCell sx={cellStyle}>{workload.updated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default WAFRDashboard;
