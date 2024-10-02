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

class TopServicesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        { name: 'EC2', cpuUtilization: 85, memoryUtilization: 65, cost: 6200 },
        { name: 'Lambda', cpuUtilization: 80, memoryUtilization: 70, cost: 5400 },
        { name: 'RDS Instance', cpuUtilization: 65, memoryUtilization: 50, cost: 4500 },
        { name: 'Amazon S3', cpuUtilization: 60, memoryUtilization: 45, cost: 3500 },
      ]
    };
  }

  render() {
    const cellStyle = {
      padding: '8px 2px',
      color: '#383874',
    };

    return (
      <div className="p-1">
        <TableContainer sx={{ overflowX: 'hidden' }}>
          <Table size="small" stickyHeader aria-label="top services table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ ...cellStyle, fontWeight: '700' ,textTransform:'uppercase'  ,fontFamily: 'Roboto, sans-serif'}}>Service Name</TableCell>
                <TableCell align="left" sx={{ ...cellStyle, fontWeight: '700',textTransform:'uppercase',fontFamily: 'Roboto, sans-serif' }}>CPU Utilization</TableCell>
                <TableCell align="left" sx={{ ...cellStyle, fontWeight: '700' ,textTransform:'uppercase',fontFamily: 'Roboto, sans-serif'}}>Memory Utilization</TableCell>
                <TableCell align="left" sx={{ ...cellStyle, fontWeight: '700',textTransform:'uppercase',fontFamily: 'Roboto, sans-serif' }}>Cost (Monthly)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.services.map((service) => (
                <TableRow key={service.name}>
                  <TableCell  scope="row" sx={cellStyle}>
                    {service.name}
                  </TableCell>
                  <TableCell align="left" sx={cellStyle}>{`${service.cpuUtilization}%`}</TableCell>
                  <TableCell align="left" sx={cellStyle}>{`${service.memoryUtilization}%`}</TableCell>
                  <TableCell align="left" sx={cellStyle}>{`$${service.cost.toLocaleString()}`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

export default TopServicesTable;
