import React, { Component } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, Typography
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'Configs/AppConfig';
import axios from 'axios';



class WorkloadsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workloads: [
        { id: '45sdf28d', status: 'Pending', type: 'Well-Architected Framework Review', lastUploaded: '2023-12-01 10:30:15' },
        { id: 'ds42es114', status: 'Submitted', type: 'Well-Architected Framework Review', lastUploaded: '2023-12-01 10:30:15' },
        { id: '4se21se5', status: 'Submitted', type: 'Well-Architected Framework Review', lastUploaded: '2023-12-01 10:30:15' },
        { id: '95dse45ss', status: 'In-progress', type: 'Well-Architected Framework Review', lastUploaded: '2023-12-01 10:30:15' },
        // Add more data here as needed
      ],
    };
  }

  // Axios function to fetch API data
  // fetchWorkloads = async () => {
  //   try {
  //     const response = await axios.get('YOUR_API_URL'); // Replace with your actual API endpoint
  //     this.setState({ workloads: response.data }); // Update the state with fetched data
  //   } catch (error) {
  //     this.setState({ error: 'Failed to fetch workloads' }); // Handle error
  //     console.error('Error fetching workloads:', error);
  //   }
  // };

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
    const { workloads } = this.state;

    return (
      <Box p={3}>
        <Typography variant="h5" gutterBottom>Workloads</Typography>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Box>
            <Button variant="outlined" sx={{ borderColor: 'blue', color: 'blue' }} style={{ marginRight: 8 }}>All Workloads</Button>
            <Button variant="outlined" sx={{ borderColor: 'blue', color: 'blue' }} >Well-Architected Framework Review</Button>
          </Box>
          <Link to={`${APP_PREFIX_PATH}/wafr/createworkload`}>
            <Button variant="contained" sx={{ background: 'blue' }} >Create New Workload</Button>
          </Link>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Workloads</strong></TableCell>
                <TableCell><strong>Assessments States</strong></TableCell>
                <TableCell><strong>Workload Type</strong></TableCell>
                <TableCell><strong>Last Uploaded</strong></TableCell>
                <TableCell><strong>Actions</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {workloads.map((workload) => (
                <TableRow key={workload.id}>
                  <TableCell>
                    <Link to={`${APP_PREFIX_PATH}/wafr/workload`}>
                      {workload.id}
                    </Link>
                  </TableCell>
                  <TableCell>{this.renderStatusBadge(workload.status)}</TableCell>
                  <TableCell sx={{ color: 'blue' }}>{workload.type}</TableCell>
                  <TableCell>{workload.lastUploaded}</TableCell>
                  <TableCell>
                    <MoreVert />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
  }
}

export default WorkloadsTable;
