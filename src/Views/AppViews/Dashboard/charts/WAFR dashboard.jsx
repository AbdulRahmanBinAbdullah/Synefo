// import React from 'react';
// import { 
//   Table, 
//   TableBody, 
//   TableCell, 
//   TableContainer, 
//   TableHead, 
//   TableRow, 
//   Paper, 
//   Typography, 
//   Chip 
// } from '@mui/material';

// class WAFRDashboard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       workloads: [
//         { id: '45sdf28d', status: 'Pending', workloadType: 'Well-Architected Framework Review', updated: '2023-12-01, 10:30:15' },
//         { id: 'ds42es114', status: 'Pending', workloadType: 'Well-Architected Framework Review', updated: '2023-12-01, 10:30:15' },
//         { id: '4se215es5', status: 'Pending', workloadType: 'Well-Architected Framework Review', updated: '2023-12-01, 10:30:15' },
//         { id: '95dse45s', status: 'Pending', workloadType: 'Well-Architected Framework Review', updated: '2023-12-01, 10:30:15' },
//       ]
//     };
//   }

//   render() {
//     return (
//       <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//         <Typography variant="h4" component="h1" gutterBottom sx={{ p: 2 }}>
//           WAFR
//         </Typography>
//         <TableContainer sx={{ maxHeight: 300,width:500 }}>
//           <Table stickyHeader aria-label="WAFR table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>WORKLOADS</TableCell>
//                 <TableCell>STATUS</TableCell>
//                 <TableCell>WORKLOAD TYPE</TableCell>
//                 <TableCell>UPDATED</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {this.state.workloads.map((workload) => (
//                 <TableRow key={workload.id}>
//                   <TableCell component="th" scope="row">
//                     {workload.id}
//                   </TableCell>
//                   <TableCell>
//                     <Chip 
//                       label={workload.status} 
//                       color="warning" 
//                       size="small"
//                       sx={{ 
//                         backgroundColor: '#FFA500',
//                         color: 'white',
//                         fontWeight: 'bold'
//                       }} 
//                     />
//                   </TableCell>
//                   <TableCell>{workload.workloadType}</TableCell>
//                   <TableCell>{workload.updated}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Paper>
//     );
//   }
// }

// export default WAFRDashboard;



import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Typography, 
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
    return (
      <Paper sx={{ width: '100%', overflow: 'hidden', padding: 2 }}>
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5' }}>
          WAFR
        </Typography>
        <TableContainer sx={{ maxHeight: 300, width: 410,overflowX:'hidden' }}>
          <Table sx={{ minWidth: 100 }} stickyHeader aria-label="WAFR table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: '#757575' }}>WORKLOADS</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#757575' }}>STATUS</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#757575' }}>WORKLOAD TYPE</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#757575' }}>UPDATED</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.workloads.map((workload) => (
                <TableRow key={workload.id}>
                  <TableCell component="th" scope="row">
                    {workload.id}
                  </TableCell>
                  <TableCell>
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
                  <TableCell>{workload.workloadType}</TableCell>
                  <TableCell>{workload.updated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
}

export default WAFRDashboard;
