// import React from 'react';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import { Line, Bar } from 'react-chartjs-2';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardContent, Typography } from '@mui/material';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

// const wafrData = [
//   { workload: '45ad26d', status: 'Pending', type: 'Well-Architected Framework Review', updated: '2023-12-01 10:30:15' },
//   { workload: 'da42ba114', status: 'Pending', type: 'Well-Architected Framework Review', updated: '2023-12-01 10:30:15' },
//   { workload: '4aa915ee5', status: 'Pending', type: 'Well-Architected Framework Review', updated: '2023-12-01 10:30:15' },
//   { workload: '90d5e45a', status: 'Pending', type: 'Well-Architected Framework Review', updated: '2023-12-01 10:30:15' },
// ];

// const topServicesData = {
//   labels: ['EC2', 'Lambda', 'RDS Instance', 'Amazon S3'],
//   datasets: [
//     {
//       label: 'CPU Utilization',
//       data: [85, 80, 65, 60],
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//     {
//       label: 'Memory Utilization',
//       data: [65, 70, 50, 45],
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//   ],
// };

// const costData = {
//   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//   datasets: [
//     {
//       label: 'EC2',
//       data: [300, 400, 350, 500, 450, 550, 500, 600, 550, 700, 650, 600],
//       borderColor: 'rgb(255, 159, 64)',
//       backgroundColor: 'rgba(255, 159, 64, 0.5)',
//     },
//     {
//       label: 'Load Balancer',
//       data: [400, 450, 400, 500, 450, 500, 550, 600, 550, 650, 600, 650],
//       borderColor: 'rgb(54, 162, 235)',
//       backgroundColor: 'rgba(54, 162, 235, 0.5)',
//     },
//     {
//       label: 'S3',
//       data: [200, 250, 300, 350, 300, 400, 350, 450, 400, 500, 450, 400],
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//   ],
// };

// const resources = [
//   { region: 'US East (N. Virginia)', resources: 150, totalCost: '$12,000', resourceTypes: 'EC2, S3, Lambda' },
//   { region: 'US West (Oregon)', resources: 100, totalCost: '$8,500', resourceTypes: 'EC2, CloudFront, RDS' },
//   { region: 'US West (N. California)', resources: 80, totalCost: '$7,000', resourceTypes: 'S3, RDS, EC2' },
//   { region: 'Asia Pacific (Mumbai)', resources: 90, totalCost: '$6,200', resourceTypes: 'Lambda, EC2, S3' },
//   { region: 'South America (Sao Paulo)', resources: 50, totalCost: '$4,000', resourceTypes: 'S3, RDS, CloudFront' },
//   { region: 'US East (Ohio)', resources: 40, totalCost: '$2,000', resourceTypes: 'EC2, S3, Lambda' },
// ];

// const Dashboard = () => {
//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <Card className="shadow-md">
//           <CardContent>
//             <Typography variant="h6" className="mb-2">WAFR</Typography>
//             <TableContainer>
//               <Table size="small">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>WORKLOADS</TableCell>
//                     <TableCell>STATUS</TableCell>
//                     <TableCell>WORKLOAD TYPE</TableCell>
//                     <TableCell>UPDATED</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {wafrData.map((row, index) => (
//                     <TableRow key={index}>
//                       <TableCell>{row.workload}</TableCell>
//                       <TableCell>
//                         <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">
//                           {row.status}
//                         </span>
//                       </TableCell>
//                       <TableCell>{row.type}</TableCell>
//                       <TableCell>{row.updated}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </CardContent>
//         </Card>
        
//         <Card className="shadow-md">
//           <CardContent>
//             <Typography variant="h6" className="mb-2">Top 4 Services</Typography>
//             <TableContainer>
//               <Table size="small">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>SERVICE NAME</TableCell>
//                     <TableCell>CPU UTILIZATION</TableCell>
//                     <TableCell>MEMORY UTILIZATION</TableCell>
//                     <TableCell>COST (MONTHLY)</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {topServicesData.labels.map((service, index) => (
//                     <TableRow key={index}>
//                       <TableCell>{service}</TableCell>
//                       <TableCell>{topServicesData.datasets[0].data[index]}%</TableCell>
//                       <TableCell>{topServicesData.datasets[1].data[index]}%</TableCell>
//                       <TableCell>${(index + 1) * 1500}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </CardContent>
//         </Card>
//       </div>

//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <Card className="shadow-md">
//           <CardContent>
//             <Typography variant="h6" className="mb-2">Cost Spent on Top Services</Typography>
//             <div className="h-64">
//               <Line 
//                 data={costData}
//                 options={{
//                   responsive: true,
//                   maintainAspectRatio: false,
//                   scales: {
//                     y: {
//                       beginAtZero: true,
//                       ticks: {
//                         callback: function(value) {
//                           return '$' + value;
//                         }
//                       }
//                     }
//                   }
//                 }}
//               />
//             </div>
//           </CardContent>
//         </Card>

//         <Card className="shadow-md">
//           <CardContent>
//             <Typography variant="h6" className="mb-2">Region Wise Resources</Typography>
//             <TableContainer>
//               <Table size="small">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>REGION</TableCell>
//                     <TableCell>NO. OF RESOURCES</TableCell>
//                     <TableCell>TOTAL COST</TableCell>
//                     <TableCell>RESOURCE TYPES</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {resources.map((resource, index) => (
//                     <TableRow key={index}>
//                       <TableCell>{resource.region}</TableCell>
//                       <TableCell>{resource.resources}</TableCell>
//                       <TableCell>{resource.totalCost}</TableCell>
//                       <TableCell>{resource.resourceTypes}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';
import { Grid, Box } from '@mui/material';
import TopServicesTable from './TopServices';
import RegionWiseResourcesTable from './Regionresources';
import LineChart from './linechart';
import WAFRDashboard from './WAFR dashboard';
export default function Dashboard() {
  return (
    <Box sx={{ p: 1}}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <LineChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <RegionWiseResourcesTable />
        </Grid>
        <Grid item xs={12} md={6}>
          <WAFRDashboard />
        </Grid>
        <Grid item xs={12} md={6}>
          <TopServicesTable />
        </Grid>

      </Grid>
    </Box>
  );
}
