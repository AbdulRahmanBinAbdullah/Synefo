// import StatCard from 'Components/statCard/statCard';
// import {
//     Card,
//     CardContent,
//     Button,
//     Grid,
//     Box,
//     Table,
//     TableHead,
//     TableRow,
//     TableCell,
//     TableBody,
//     TableContainer,
//     Paper
// } from '@mui/material';
// import aws from "../../../assets/img/wafr/aws-icon.png"

// const data = [
//     { id: 'i-00083a8272ba6d2', name: 'web server', finding: 'Over-provisioned', reason: 'CPU Over-provisioned, EBS IPOS Over...', state: 'Running', currentType: 'r6g.large', recommendedType: 't2.micro' },
//     { id: 'i-00083a8272ba6d2', name: 'web server', finding: 'Over-provisioned', reason: 'CPU Over-provisioned, EBS IPOS Over...', state: 'Running', currentType: 't4g.large', recommendedType: 't2.micro' },
//     { id: 'i-00083a8272ba6d2', name: 'web server', finding: 'Over-provisioned', reason: 'CPU Over-provisioned, EBS IPOS Over...', state: 'Running', currentType: 'r6g.large', recommendedType: 't2.micro' },
//     { id: 'i-00083a8272ba6d2', name: 'web server', finding: 'Over-provisioned', reason: 'CPU Over-provisioned, EBS IPOS Over...', state: 'Running', currentType: 't4g.large', recommendedType: 't2.micro' },
//     { id: 'i-00083a8272ba6d2', name: 'web server', finding: 'Optimized', reason: '-', state: 'Running', currentType: 't2.micro', recommendedType: 't2.micro' },
// ];

// class CostOptimization extends Component {
//     render() {
//         return (
//             <div className="p-8">
//                 <h1 className="text-2xl font-bold">Cost Optimization</h1>

//                 <Grid container spacing={3} className="my-6">
//                     <Grid item xs={10} sm={3} md={3}>
//                         <StatCard title="Under Utilize" value="1,082" percentage="20%" />
//                     </Grid>
//                     <Grid item xs={10} sm={3} md={3}>
//                         <StatCard title="Over Utilize" value="833" percentage="19%" />
//                     </Grid>
//                     <Grid item xs={10} sm={3} md={3}>
//                         <StatCard title="Needs Optimization" value="3,833" percentage="32%" />
//                     </Grid>
//                     <Grid item xs={10} sm={3} md={3}>
//                         <StatCard title="Abandoned" value="3,264" percentage="29%" />
//                     </Grid>
//                 </Grid>

//                 <div className="flex justify-between items-center mb-4">
//                     <h2 className="text-lg font-bold">Recommendations for EC2 Instances (5)</h2>
//                     <div className="flex gap-4">
//                         <Button variant="contained" color="primary">Remediation</Button>
//                         <Button variant="outlined" color="primary">Suppressing</Button>
//                     </div>
//                 </div>
                

//                 <TableContainer component={Paper}>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell>Instance ID</TableCell>
//                                 <TableCell>Instance Name</TableCell>
//                                 <TableCell>Finding</TableCell>
//                                 <TableCell>Finding Reason</TableCell>
//                                 <TableCell>Recommendation Instance State</TableCell>
//                                 <TableCell>Current Instance Type</TableCell>
//                                 <TableCell>Recommended Instance Type</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {data.map((row, idx) => (
//                                 <TableRow key={idx}>
//                                     <TableCell>{row.id}</TableCell>
//                                     <TableCell>{row.name}</TableCell>
//                                     <TableCell>{row.finding}</TableCell>
//                                     <TableCell>{row.reason}</TableCell>
//                                     <TableCell>{row.state}</TableCell>
//                                     <TableCell>{row.currentType}</TableCell>
//                                     <TableCell>{row.recommendedType}</TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </div>
//         );
//     }
// }

// // const StatCard = ({ title, value, percentage }) => (
// //     <Card className="shadow-lg">
// //         <CardContent>
// //             <h3 className="text-xl font-semibold">{title}</h3>
// //             <div className="flex items-center">
// //                 <p className="text-2xl font-bold mr-2">{value}</p>
// //                 {percentage && <span className="text-green-500">▲ {percentage}</span>}
// //             </div>
// //         </CardContent>
// //     </Card>
// // );

// export default CostOptimization;


import React from 'react';
import { AppBar, Toolbar, Typography ,Button,Paper} from '@mui/material';
import menuicon from 'assets/img/allservices/menuicon.png'
import CostSpendDisplay from './components/costdisplay';
import Component from './components/loader';
import Ec2Recommendations from './components/charts/ec2Recommendations';
import EBS from './components/charts/ebsRecommendations';
import RDS from './components/charts/RDS';
import Lambda from './components/charts/lambda';
import Autoscale from './components/charts/Autoscale';
import Allresources from './components/allresources';

const CostOptimization = () => {
  return (
    <div>
    <AppBar position="static" color="transparent" elevation={0}>
    <Toolbar className="justify-between">
  <div className="flex items-center">
    <Typography
      variant="h6"
      component="div"
      className="text-indigo-600 font-bold"
      style={{ color: '#383874' }}
      sx={{ fontFamily: 'Poppins' }}
    >
      Cost
    </Typography>
  </div>
  <div className="flex items-center">
    <Allresources />
  </div>
</Toolbar>

      <CostSpendDisplay />
    </AppBar>
    <Component />
    <Ec2Recommendations />
    <EBS />
    <RDS />
    <Lambda />
    <Autoscale />
  </div>
  
  );
};

export default CostOptimization;