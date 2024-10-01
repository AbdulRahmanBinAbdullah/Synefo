
import React, { Component } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, Typography
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'Configs/AppConfig';
import { getRecentVisitedEnvironments } from 'Utils';
import axios from 'axios';

// Define constants for message and API URL
const NO_WORKLOADS_MESSAGE = "There are no workloads.";
// const API_URL = `https://dpgg16uo5d.execute-api.us-east-1.amazonaws.com/dev/show_workload`;
const API_URL = `https://dpgg16uo5d.execute-api.us-east-1.amazonaws.com/dev/show_workload`;

class WorkloadsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentEnvironments: null,
      workloads: [], // Default to an empty array
    };
  }

  componentDidMount() {
    const recentEnvironments = getRecentVisitedEnvironments();
    
    // Update state with the fetched data
    if (recentEnvironments) {
      this.setState({ recentEnvironments }, this.fetchWorkloads);  
    }
  }

  // Axios function to fetch API data
  fetchWorkloads = async () => {
    const { recentEnvironments } = this.state;

    if (recentEnvironments && recentEnvironments.length > 0) {
      const accountId = recentEnvironments[0].accountId; // Assuming the accountId is at index 0

      try {
        // const response = await axios.get(https://dpgg16uo5d.execute-api.us-east-1.amazonaws.com/dev/show_workload?AccountId=${accountId});
        const response = await axios.get(`https://dpgg16uo5d.execute-api.us-east-1.amazonaws.com/dev/show_workload?AccountId=${657907747545}`);
        // console.log("response",response);
        
        this.setState({ workloads: response.data }); // Update the state with fetched data
        const workloadsWithStates = this.addStateToWorkloads(response.data); // Add 'states' key
        this.setState({ workloads: workloadsWithStates });
        console.log("this is the data", response.data );
        
      } catch (error) {
        this.setState({ error: 'Failed to fetch workloads' }); // Handle error
        console.error('Error fetching workloads:', error);
      }
    }
  };

  addStateToWorkloads = (workloads) => {
    return workloads.map((workload) => ({
      ...workload,          // Spread the existing properties of the workload
      states: 'Pending',    // Add the new 'states' key with the value 'Pending'
    }));
  };
  

  renderStatusBadge(status) {
    const styles = {
      Pending: { backgroundColor: '#ffcc00', color: '#ffffff', padding: '3px 8px', borderRadius: '4px' },
      Submitted: { backgroundColor: '#4caf50', color: '#ffffff', padding: '3px 8px', borderRadius: '4px' },
      'In-progress': { backgroundColor: '#9e9e9e', color: '#ffffff', padding: '3px 8px', borderRadius: '4px' },
    };

    return (
      <span style={styles[status]}>
        {status}
      </span>
    );
  }

  render() {
    const { workloads, recentEnvironments } = this.state;
    console.log("this is the workloads", workloads);

    return (
      <Box p={3}>
        <Typography variant="h5" gutterBottom>Workloads</Typography>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Box>
            <Button variant="outlined" sx={{ borderColor: 'blue', color: 'blue' }} style={{ marginRight: 8 }}>All Workloads</Button>
            <Button variant="outlined" sx={{ borderColor: 'blue', color: 'blue' }}>Well-Architected Framework Review</Button>
          </Box>
          <Link to={`${APP_PREFIX_PATH}/wafr/createworkload`}>
            <Button variant="contained" sx={{ background: 'blue' }}>Create New Workload</Button>
          </Link>
        </Box>

        {/* Table with Header */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Workloads</strong></TableCell>
                <TableCell><strong>Assessments States</strong></TableCell>
                {/* <TableCell><strong>Workload Type</strong></TableCell> */}
                <TableCell><strong>Last Uploaded</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* Conditional Rendering: Show table rows or message */}
              {workloads.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    <Typography variant="body1" color="textSecondary">{NO_WORKLOADS_MESSAGE}</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                workloads.map((workload) => (
                  <TableRow key={workload.WorkloadId}>
                    <TableCell sx={{color:'blue' }} >
                      <Link to={`${APP_PREFIX_PATH}/wafr/workload/${workload.WorkloadId}`}>
                        {workload.WorkloadId}
                      </Link>
                    </TableCell>
                    <TableCell>{this.renderStatusBadge(workload.states)}</TableCell>
                    {/* <TableCell sx={{ color: 'blue' }}>{workload.type}</TableCell> */}
                    <TableCell>{workload.UpdatedAt}</TableCell>
                    <TableCell>
                      <MoreVert />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }
}

export default WorkloadsTable;


// import React, { Component } from 'react';
// import {
//   Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, Typography
// } from '@mui/material';
// import { MoreVert } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import { APP_PREFIX_PATH } from 'Configs/AppConfig';
// import { getRecentVisitedEnvironments } from 'Utils';
// import axios from 'axios';

// // Define constants for message and API URL
// const NO_WORKLOADS_MESSAGE = "There are no workloads.";
// const API_URL = `https://dpgg16uo5d.execute-api.us-east-1.amazonaws.com/dev/show_workload`;

// class WorkloadsTable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       recentEnvironments: null,
//       workloads: [], // Default to an empty array
//     };
//   }

//   componentDidMount() {
//     const recentEnvironments = getRecentVisitedEnvironments();
//     // console.log('recentEnvironments',recentEnvironments);
    
//     // Update state with the fetched data
//     if (recentEnvironments) {
//       this.setState({ recentEnvironments }, this.fetchWorkloads);  
//     }
//   }

//   // Axios function to fetch API data
//   fetchWorkloads = async () => {
//     const { recentEnvironments } = this.state;

//     if (recentEnvironments && recentEnvironments.length > 0) {
//       const accountId = recentEnvironments[0].accountId; // Assuming the accountId is at index 0

//       try {
//         const response = await axios.get(`${API_URL}?AccountId=${657907747545}`);
//         this.setState({ workloads: response.data });
//         console.log("Fetched workloads:", response.data);
//       } catch (error) {
//         this.setState({ error: 'Failed to fetch workloads' });
//         console.error('Error fetching workloads:', error);
//       }
//     }
//   };

//   renderStatusBadge(status) {
//     const styles = {
//       Pending: { backgroundColor: '#ffcc00', color: '#ffffff', padding: '3px 8px', borderRadius: '4px' },
//       Submitted: { backgroundColor: '#4caf50', color: '#ffffff', padding: '3px 8px', borderRadius: '4px' },
//       'In-progress': { backgroundColor: '#9e9e9e', color: '#ffffff', padding: '3px 8px', borderRadius: '4px' },
//     };

//     return (
//       <span style={styles[status] || { backgroundColor: '#000', color: '#fff', padding: '3px 8px', borderRadius: '4px' }}>
//         {status || 'Unknown'}
//       </span>
//     );
//   }

//   render() {
//     const { workloads } = this.state;

//     return (
//       <Box p={3}>
//         <Typography variant="h5" gutterBottom>Workloads</Typography>
//         <Box display="flex" justifyContent="space-between" mb={2}>
//           <Box>
//             <Button variant="outlined" sx={{ borderColor: 'blue', color: 'blue' }} style={{ marginRight: 8 }}>All Workloads</Button>
//             <Button variant="outlined" sx={{ borderColor: 'blue', color: 'blue' }}>Well-Architected Framework Review</Button>
//           </Box>
//           <Link to={`${APP_PREFIX_PATH}/wafr/createworkload`}>
//             <Button variant="contained" sx={{ background: 'blue', color: 'black' }}>Create New Workload</Button>
//           </Link>
//         </Box>

//         {/* Table with Header */}
//         <TableContainer component={Paper}>
//          <Table>
//             <TableHead>
//              <TableRow>
//                <TableCell><strong>Workloads</strong></TableCell>
//                  <TableCell><strong>Assessments States</strong></TableCell>
//                <TableCell><strong>Workload Type</strong></TableCell>
//                  <TableCell><strong>Last Uploaded</strong></TableCell>
//                 <TableCell><strong>Actions</strong></TableCell>
//               </TableRow>
//              </TableHead>
//              <TableBody>
//                {/* Conditional Rendering: Show table rows or message */}
//               {workloads.length === 0 ? (
//                 <TableRow>
//                   <TableCell colSpan={5} align="center">
//                     <Typography variant="body1" color="textSecondary">{NO_WORKLOADS_MESSAGE}</Typography>
//                   </TableCell>
//                 </TableRow>
//               ) : (
//                 workloads.map((workload) => (
//                   <TableRow key={workload.id}>
//                     <TableCell sx={{color:'black' }} >
//                       <Link to={`${APP_PREFIX_PATH}/wafr/workload`}>
//                         {workload.id}
//                       </Link>
//                     </TableCell>
//                     <TableCell>{this.renderStatusBadge(workload.status)}</TableCell>
//                     <TableCell sx={{ color: 'blue' }}>{workload.type}</TableCell>
//                     <TableCell>{workload.lastUploaded}</TableCell>
//                     <TableCell>
//                       <MoreVert />
//                     </TableCell>
//                   </TableRow>
//                 ))
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     );
//   }
// }

// export default WorkloadsTable;
