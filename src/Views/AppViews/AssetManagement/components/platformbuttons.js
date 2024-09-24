
// import { useState } from 'react';
// import { Button, Grid, Box ,Typography} from '@mui/material';
// import PlatformFilters from './Filters';
// import aws from "assets/img/assetmanagement/aws.png";
// import azure from "assets/img/assetmanagement/azure.png";
// import gcloud from "assets/img/assetmanagement/gcloud.png";

// const PlatformButtons = ({ platforms, activePlatform, onPlatformClick }) => {
//   const [filtersOpen, setFiltersOpen] = useState(false);
//   const [filters, setFilters] = useState({ region: '', awsAccount: '', productEnclave: '' });

//   // Map the platform names to their respective images
//   const platformImages = {
//     'Amazon Web Services': aws,
//     'Google Cloud Platform': gcloud,
//     'Azure Cloud': azure,
//   };

//   const handleFiltersSubmit = (newFilters) => {
//     setFilters(newFilters); // Save submitted filters
//     setFiltersOpen(false);  // Close the filter popover
//   };

//   return (
//     <Box my={1}>
//       {/* Platform buttons */}
//       <Grid container spacing={0}>
//         {platforms.map((platform, index) => (
//         <Grid
//         item
//         xs={6}
//         sm={3}
//         key={1}
//         sx={{ padding: '0 4px' }}
//       >
//         <Box
//           sx={{
//             fontFamily: 'Poppins',
//             textTransform: 'none',
//             textAlign: 'left',
//             display: 'flex',
//             alignItems: 'center',
//             padding: '10px',
//             backgroundColor: 'white',
//             borderRadius: '12px',
//             boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
//             border: '1px solid #e0e0e0',
//           }}
//         >
       
//             <img
//               src={platformImages[platform]}

//               alt="Amazon Web Services"
//               style={{
//                 width: '48px',
//                 height: '40px',
//                 borderRadius: '8px',
//                 backgroundColor: 'white',
//                 boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//                 padding: '8px',
//                 marginRight: '10px'
//               }}
//             />
         
//           <Box
//             sx={{
//               fontWeight: '500',
//               fontSize: '16px',
//               color: '#4A4A68',
//             }}
//           >
//                     {platform}

//           </Box>
//         </Box>
        
//       </Grid>
//         ))}
        
//       </Grid>



//       {/* Filters button section */}
//       <Grid container mt={2}>
//         <Grid item xs={12} sm="auto">
//           <Button
//             variant="outlined"
//             sx={{ color: "#023AFF", textTransform: 'none', borderColor: "#023AFF" }}
//             fullWidth
//             onClick={() => setFiltersOpen(true)}  // Open the filter popover
//           >
//             Filters
//           </Button>
//         </Grid>
//       </Grid>

//       {/* Platform Filters Popover */}
//       <PlatformFilters
//         open={filtersOpen}
//         onClose={() => setFiltersOpen(false)}  // Close the filter popover
//         onSubmit={handleFiltersSubmit}  // Handle filter submission
//       />

//     </Box>
//   );
// };

// export default PlatformButtons;



import { useState } from 'react';
import { Button, Grid, Box, Typography } from '@mui/material';
import PlatformFilters from './Filters';
import aws from "assets/img/assetmanagement/aws.png";
import azure from "assets/img/assetmanagement/azure.svg";
import gcloud from "assets/img/assetmanagement/gcloud.svg";

const PlatformButtons = ({ activePlatform, onPlatformClick }) => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({ region: '', awsAccount: '', productEnclave: '' });

  // Define platforms and their respective images
  const platforms = [
    { name: 'Amazon Web Services', image: aws },
    { name: 'Google Cloud Platform', image: gcloud },
    { name: 'Azure Cloud', image: azure },
  ];

  const handleFiltersSubmit = (newFilters) => {
    setFilters(newFilters);
    setFiltersOpen(false);
  };

  return (
    <Box my={1}>
      {/* Platform buttons */}
      {/* Filters button section */}
      <Grid container spacing={0}>
  {/* First AWS button */}
  <Grid item xs={6} sm={3} sx={{ padding: '0 4px' }}>
    <Box
      sx={{
        fontFamily: 'Poppins',
        textTransform: 'none',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e0e0e0',
      }}
    >
      <img
        src={aws}
        alt="aws"
        style={{
          width: '48px',
          height: '40px',
          borderRadius: '8px',
          backgroundColor: 'white',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          padding: '8px',
          marginRight: '10px',
        }}
      />
      <Box
        sx={{
          fontWeight: '500',
          fontSize: '16px',
          color: '#4A4A68',
        }}
      >
        Aws
      </Box>
    </Box>
  </Grid>

  <Grid item xs={6} sm={3} sx={{ padding: '0 4px' }}>
    <Box
      sx={{
        fontFamily: 'Poppins',
        textTransform: 'none',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e0e0e0',
      }}
    >
      <img
        src={azure}
        alt="azure"
        style={{
          width: '65px',
          height: '40px',
          borderRadius: '8px',
          backgroundColor: 'white',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          padding: '8px',
          marginRight: '10px',
        }}
      />
      <Box
        sx={{
          fontWeight: '500',
          fontSize: '16px',
          color: '#4A4A68',
        }}
      >
        Azure
      </Box>
    </Box>
  </Grid>

  {/* Third AWS button */}
  <Grid item xs={6} sm={3} sx={{ padding: '0 4px' }}>
    <Box
      sx={{
        fontFamily: 'Poppins',
        textTransform: 'none',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e0e0e0',
      }}
    >
      <img
        src={gcloud}
        alt="aws"
        style={{
          width: '55px',
          height: '40px',
          borderRadius: '8px',
          backgroundColor: 'white',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
          padding: '8px',
          marginRight: '10px',
        }}
      />
      <Box
        sx={{
          fontWeight: '500',
          fontSize: '16px',
          color: '#4A4A68',
        }}
      >
        Gcloud
      </Box>
    </Box>
  </Grid>
</Grid>

      <Grid container mt={2}>
        <Grid item xs={12} sm="auto">
          <Button
            variant="outlined"
            sx={{ color: "#023AFF", textTransform: 'none', borderColor: "#023AFF" }}
            fullWidth
            onClick={() => setFiltersOpen(true)}  // Open the filter popover
          >
            Filters
          </Button>
        </Grid>
      </Grid>

      {/* Platform Filters Popover */}
      <PlatformFilters
        open={filtersOpen}
        onClose={() => setFiltersOpen(false)}  // Close the filter popover
        onSubmit={handleFiltersSubmit}  // Handle filter submission
      />
    </Box>
  );
};

export default PlatformButtons;
