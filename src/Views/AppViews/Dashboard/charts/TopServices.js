import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Typography 
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
    return (
      <Paper sx={{ width: '100%', overflow: 'hidden', padding: 2 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
          Top 4 Services
        </Typography>
        <TableContainer TableContainer sx={{ maxHeight: 300,width: 430,overflowX:'hidden' }}>
          <Table sx={{ minWidth: 100 }} aria-label="top services table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: '#757575' }}>SERVICE NAME</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', color: '#757575' }}>CPU UTILIZATION</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', color: '#757575' }}>MEMORY UTILIZATION</TableCell>
                <TableCell align="right" sx={{ fontWeight: 'bold', color: '#757575' }}>COST (MONTHLY)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.services.map((service) => (
                <TableRow
                  key={service.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" sx={{ color: '#757575',fontFamily:'poppins' }} scope="row">
                    {service.name}
                  </TableCell>
                  <TableCell align="right" sx={{ color: '#757575',fontFamily:'poppins' }}>{`${service.cpuUtilization}%`}</TableCell>
                  <TableCell align="right" sx={{ color: '#757575',fontFamily:'poppins' }}>{`${service.memoryUtilization}%`}</TableCell>
                  <TableCell align="right" sx={{ color: '#757575',fontFamily:'poppins' }}>{`$${service.cost.toLocaleString()}`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
}

export default TopServicesTable;