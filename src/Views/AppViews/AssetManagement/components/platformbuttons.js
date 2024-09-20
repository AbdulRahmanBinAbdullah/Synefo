


// import { Button, Grid, Box } from '@mui/material';

// const PlatformButtons = ({ platforms, activePlatform, onPlatformClick }) => (
//   <Box my={2}>
//     <Grid container spacing={2}>
//       {platforms.map((platform, index) => (
//         <Grid item xs={6} sm={3} key={index}>
//           <Button
//             fullWidth
//             variant={activePlatform === platform ? 'contained' : 'outlined'}
//             onClick={() => onPlatformClick(platform)}
//             disabled={activePlatform !== platform} // Disable if not active
//           >
//             {platform}
//           </Button>
//         </Grid>
//       ))}
//       <Grid item xs={12} sm="auto">
//         <Button variant="outlined" color="primary" fullWidth>
//           Filters
//         </Button>
//       </Grid>
//     </Grid>
//   </Box>
// );

// export default PlatformButtons;

import { Button, Grid, Box } from '@mui/material';

const PlatformButtons = ({ platforms, activePlatform, onPlatformClick }) => (
  <Box my={2}>
    <Grid container spacing={2}>
      {platforms.map((platform, index) => (
        <Grid item xs={6} sm={3} key={index}>
          <Button
            fullWidth
            variant={activePlatform === platform ? 'contained' : 'outlined'}
            onClick={() => onPlatformClick(platform)}
            disabled={activePlatform !== platform} // Disable if not active
          >
            {platform}
          </Button>
        </Grid>
      ))}
    </Grid>
    <Grid container spacing={2} mt={2}>
      <Grid item xs={12} sm="auto">
        <Button variant="outlined" color="primary" fullWidth>
          Filters
        </Button>
      </Grid>
    </Grid>
  </Box>
);

export default PlatformButtons;
