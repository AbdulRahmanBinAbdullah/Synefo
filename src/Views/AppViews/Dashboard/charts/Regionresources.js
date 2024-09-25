

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

class RegionWiseResourcesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regions: [
        { region: 'US East (N. Virginia)', resources: 150, cost: 12000, types: 'EC2, S3, Lambda' },
        { region: 'US West (Oregon)', resources: 100, cost: 8500, types: 'EC2, CloudFront, RDS' },
        { region: 'US West (N. California)', resources: 80, cost: 7000, types: 'S3, RDS, EC2' },
        { region: 'Asia Pacific (Mumbai)', resources: 90, cost: 6200, types: 'Lambda, EC2, S3' },
        { region: 'South America (Sao Paulo)', resources: 50, cost: 4000, types: 'S3, RDS, CloudFront' },
        { region: 'US East (Ohio)', resources: 40, cost: 2000, types: 'EC2, S3, Lambda' },
      ]
    };
  }

  render() {
    return (
      <Paper sx={{ width: '100%', overflow: 'hidden', p:2}}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
          Region Wise Resources
        </Typography>
        <TableContainer sx={{ maxHeight: 300, width: 430,overflowX:'hidden' }}>
          <Table sx={{ minWidth: 100 }} aria-label="region-wise resources table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: '#757575'}}>REGION</TableCell>
                <TableCell align="left" sx={{ fontWeight: 'bold', color: '#757575' }}>NO. OF RESOURCES</TableCell>
                <TableCell align="left" sx={{ fontWeight: 'bold', color: '#757575'}}>TOTAL COST</TableCell>
                <TableCell align="left" sx={{ fontWeight: 'bold', color: '#757575'}}>RESOURCE TYPES</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.regions.map((region) => (
                <TableRow
                  key={region.region}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row"  sx={{ color: '#757575',fontFamily:'poppins' }}>
                    {region.region}
                  </TableCell>
                  <TableCell sx={{ color: '#757575',fontFamily:'poppins' }} align="left">{region.resources}</TableCell>
                  <TableCell sx={{ color: '#757575',fontFamily:'poppins' }} align="left">{`$${region.cost.toLocaleString()}`}</TableCell>
                  <TableCell sx={{ color: '#757575',fontFamily:'poppins' }} align="left">{region.types}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper> 
    );
  }
}

export default RegionWiseResourcesTable;
