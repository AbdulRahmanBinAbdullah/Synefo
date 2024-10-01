// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import StopResourcesDialog from './performance-reliability/StopResource';

// const instances = [
//   { name: 'WebServer1', id: 'i-1234567890abcdef0', type: 't2.micro', zone: 'us-east-1a', status: 'Running' },
//   { name: 'DBServer1', id: 'i-0987654321fedcba0', type: 'm5.large', zone: 'us-west-2a', status: 'Stopped' },
//   { name: 'AppServer1', id: 'i-0987654321fedcba0', type: 'r5.2xlarge', zone: 'us-east-1a', status: 'Running' },
//   { name: 'WorkerNode1', id: 'i-0987654321fedcba0', type: 'r5.4xlarge', zone: 'us-east-1a', status: 'Running' },
//   { name: 'WorkerNode1', id: 'i-0987654321fedcba0', type: 'r5.4xlarge', zone: 'us-east-1a', status: 'Running' },
//   { name: 'WorkerNode1', id: 'i-0987654321fedcba0', type: 'r5.4xlarge', zone: 'us-east-1a', status: 'Running' },
// ];

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   padding: '10px 8px',
//   color: '#383874',
// }));

// const EC2InstanceSummary = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedInstance, setSelectedInstance] = useState(null);

//   const handleOpen = (instance) => {
//     setSelectedInstance(instance);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div className="overflow-x-auto overflow-y-auto">
//       <h2 className="font-bold mb-4" sx={{ fontFamily: 'poppins' }} style={{ color: '#383874' }}>
//         EC2 INSTANCE SUMMARY
//       </h2>

//       <TableContainer className="h-80">
//         <Table stickyHeader>
//           <TableHead>
//             <TableRow>
//               <StyledTableCell sx={{ color: '#383874', fontFamily: 'Roboto', fontWeight: 500 }}>
//                 Instance Name
//               </StyledTableCell>
//               <StyledTableCell sx={{ color: '#383874', fontWeight: 'bold', fontFamily: 'Roboto', fontWeight: 500 }}>
//                 Instance ID
//               </StyledTableCell>
//               <StyledTableCell sx={{ color: '#383874', fontWeight: 'bold', fontFamily: 'Roboto', fontWeight: 500 }}>
//                 Instance Type
//               </StyledTableCell>
//               <StyledTableCell sx={{ color: '#383874', fontWeight: 'bold', fontFamily: 'Roboto', fontWeight: 500 }}>
//                 Availability Zone
//               </StyledTableCell>
//               <StyledTableCell sx={{ color: '#383874', fontWeight: 'bold', fontFamily: 'Roboto', fontWeight: 500 }}>
//                 Status
//               </StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {instances.map((instance) => (
//               <TableRow key={instance.id}>
//                 <StyledTableCell className="text-gray-900">
//                   <Link
//                     component="button"
//                     variant="body2"
//                     onClick={() => handleOpen(instance)}
//                     sx={{ textDecoration: 'none', cursor: 'pointer', color: '#007bff' }}
//                   >
//                     {instance.name}
//                   </Link>
//                 </StyledTableCell>
//                 <StyledTableCell className="text-gray-900">{instance.id}</StyledTableCell>
//                 <StyledTableCell className="text-gray-900">{instance.type}</StyledTableCell>
//                 <StyledTableCell className="text-gray-900">{instance.zone}</StyledTableCell>
//                 <StyledTableCell>
//                   <span
//                     className={`cursor-pointer text-xs font-semibold ${
//                       instance.status === 'Running' ? ' text-green-800' : ' text-red-800'
//                     }`}
//                     onClick={() => handleOpen(instance)}
//                   >
//                     {instance.status}
//                   </span>
//                 </StyledTableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {selectedInstance && (
//         <StopResourcesDialog open={open} onClose={handleClose} instance={selectedInstance} />
//       )}
//     </div>
//   );
// };

// export default EC2InstanceSummary;



import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { styled } from '@mui/material/styles';
import StopResourcesDialog from './performance-reliability/StopResource';
import { APP_PREFIX_PATH } from 'Configs/AppConfig';

const instances = [
  { name: 'WebServer1', id: 'i-1234567890abcdef0', type: 't2.micro', zone: 'us-east-1a', status: 'Running' },
  { name: 'DBServer1', id: 'i-0987654321fedcba0', type: 'm5.large', zone: 'us-west-2a', status: 'Stopped' },
  { name: 'AppServer1', id: 'i-0987654321fedcba0', type: 'r5.2xlarge', zone: 'us-east-1a', status: 'Running' },
  { name: 'WorkerNode1', id: 'i-0987654321fedcba0', type: 'r5.4xlarge', zone: 'us-east-1a', status: 'Running' },
  { name: 'WorkerNode1', id: 'i-0987654321fedcba0', type: 'r5.4xlarge', zone: 'us-east-1a', status: 'Running' },
  { name: 'WorkerNode1', id: 'i-0987654321fedcba0', type: 'r5.4xlarge', zone: 'us-east-1a', status: 'Running' },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '10px 8px',
  color: '#383874',
}));

const EC2InstanceSummary = () => {
  const [open, setOpen] = useState(false);
  const [selectedInstance, setSelectedInstance] = useState(null);

  const handleOpen = (instance) => {
    setSelectedInstance(instance);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="overflow-x-auto overflow-y-auto">
      <h2 className="font-bold mb-4" sx={{ fontFamily: 'poppins' }} style={{ color: '#383874' }}>
        EC2 INSTANCE SUMMARY
      </h2>

      <TableContainer className="h-80">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ color: '#383874', fontFamily: 'Roboto', fontWeight: 500 }}>
                Instance Name
              </StyledTableCell>
              <StyledTableCell sx={{ color: '#383874', fontWeight: 'bold', fontFamily: 'Roboto', fontWeight: 500 }}>
                Instance ID
              </StyledTableCell>
              <StyledTableCell sx={{ color: '#383874', fontWeight: 'bold', fontFamily: 'Roboto', fontWeight: 500 }}>
                Instance Type
              </StyledTableCell>
              <StyledTableCell sx={{ color: '#383874', fontWeight: 'bold', fontFamily: 'Roboto', fontWeight: 500 }}>
                Availability Zone
              </StyledTableCell>
              <StyledTableCell sx={{ color: '#383874', fontWeight: 'bold', fontFamily: 'Roboto', fontWeight: 500 }}>
                Status
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {instances.map((instance) => (
              <TableRow key={instance.id}>
                <StyledTableCell className="text-gray-900">
                  <Link
                    to={`${APP_PREFIX_PATH}/assets/AllServices/${instance.id}`} // Add the dynamic route to navigate to
                    style={{ textDecoration: 'none', color: '#007bff' }}
                  >
                    {instance.name}
                  </Link>
                </StyledTableCell>
                <StyledTableCell className="text-gray-900">{instance.id}</StyledTableCell>
                <StyledTableCell className="text-gray-900">{instance.type}</StyledTableCell>
                <StyledTableCell className="text-gray-900">{instance.zone}</StyledTableCell>
                <StyledTableCell>
                  <span
                    className={`cursor-pointer text-xs font-semibold ${
                      instance.status === 'Running' ? ' text-green-800' : ' text-red-800'
                    }`}
                    onClick={() => handleOpen(instance)}
                  >
                    {instance.status}
                  </span>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedInstance && (
        <StopResourcesDialog open={open} onClose={handleClose} instance={selectedInstance} />
      )}
    </div>
  );
};

export default EC2InstanceSummary;
