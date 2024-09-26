// import React from 'react';

// const EC2instancesummary = () => {
//   const instances = [
//     { name: 'WebServer1', id: 'i-1234567890abcdef0', type: 't2.micro', zone: 'us-east-1a', status: 'Running' },
//     { name: 'DBServer1', id: 'i-0987654321fedcba0', type: 'm5.large', zone: 'us-west-2a', status: 'Stopped' },
//     { name: 'AppServer1', id: 'i-0987654321fedcba0', type: 'r5.2xlarge', zone: 'us-east-1a', status: 'Running' },
//     { name: 'WorkerNode1', id: 'i-0987654321fedcba0', type: 'r5.4xlarge', zone: 'us-east-1a', status: 'Running' },
//   ];

//   return (
//     <div className="p-2">
//       <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>EC2 INSTANCE SUMMARY</h2>

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Instance Name</th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Instance ID</th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Instance Type</th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">availability zone</th>
//               <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Status</th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {instances.map((instance, index) => (
//               <tr key={index} >
//                 <td className="px-4 py-2 text-sm text-gray-900">{instance.name}</td>
//                 <td className="px-4 py-2 text-sm text-gray-900 font-mono">{instance.id}</td>
//                 <td className="px-4 py-2 text-sm text-gray-900">{instance.type}</td>
//                 <td className="px-4 py-2 text-sm text-gray-900">{instance.zone}</td>
//                 <td className="px-4 py-2 text-sm">
//                   <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                     instance.status === 'Running' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
//                   }`}>
//                     {instance.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default EC2instancesummary;




import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const instances = [
  { name: 'WebServer1', id: 'i-1234567890abcdef0', type: 't2.micro', zone: 'us-east-1a', status: 'Running' },
  { name: 'DBServer1', id: 'i-0987654321fedcba0', type: 'm5.large', zone: 'us-west-2a', status: 'Stopped' },
  { name: 'AppServer1', id: 'i-0987654321fedcba0', type: 'r5.2xlarge', zone: 'us-east-1a', status: 'Running' },
  { name: 'WorkerNode1', id: 'i-0987654321fedcba0', type: 'r5.4xlarge', zone: 'us-east-1a', status: 'Running' },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '10px 8px',
  color:'#383874'

}));






const EC2InstanceSummary = () => {
  return (
    <div className="overflow-x-auto overflow-y-auto">
       <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>EC2 INSTANCE SUMMARY</h2>

      <TableContainer component={Paper} className="min-w-80 h-70">
        <Table className="min-w-full" size="small">
          <TableHead >
            <TableRow >
              <StyledTableCell className="font-bold "  sx={{color:'#383874',  fontWeight: 'bold'
}}>Instance Name</StyledTableCell>
              <StyledTableCell className="font-bold " sx={{color:'#383874',fontWeight: 'bold'}}>Instance ID</StyledTableCell>
              <StyledTableCell className="font-bold " sx={{color:'#383874',fontWeight: 'bold'}}>Instance Type</StyledTableCell>
              <StyledTableCell className="font-bold " sx={{color:'#383874',fontWeight: 'bold'}}>Availability Zone</StyledTableCell>
              <StyledTableCell className="font-bold " sx={{color:'#383874',fontWeight: 'bold'}}>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {instances.map((instance) => (
              <TableRow key={instance.id}>
                <StyledTableCell className="text-gray-900">{instance.name}</StyledTableCell>
                <StyledTableCell className="font-mono text-gray-900">{instance.id}</StyledTableCell>
                <StyledTableCell className="text-gray-900">{instance.type}</StyledTableCell>
                <StyledTableCell className="text-gray-900">{instance.zone}</StyledTableCell>
                <StyledTableCell>
                  <span className={` text-xs font-semibold ${
                    instance.status === 'Running' ? ' text-green-800' : ' text-red-800'
                  }`}>
                    {instance.status}
                  </span>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EC2InstanceSummary;
