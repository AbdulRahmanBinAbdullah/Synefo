
import { useState } from 'react';
import { Button, Grid, Box } from '@mui/material';
import PlatformFilters from './Filters';
import aws from "assets/img/assetmanagement/aws.png";
import azure from "assets/img/assetmanagement/azure.png";
import gcloud from "assets/img/assetmanagement/gcloud.png";

const PlatformButtons = ({ platforms, activePlatform, onPlatformClick }) => {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({ region: '', awsAccount: '', productEnclave: '' });

  // Map the platform names to their respective images
  const platformImages = {
    'Amazon Web Services': aws,
    'Google Cloud Platform': gcloud,
    'Azure Cloud': azure,
  };

  const handleFiltersSubmit = (newFilters) => {
    setFilters(newFilters); // Save submitted filters
    setFiltersOpen(false);  // Close the filter popover
  };

  return (
    <Box my={2}>
      {/* Platform buttons */}
      <Grid container spacing={0}>
        {platforms.map((platform, index) => (
          <Grid item xs={6} sm={3} key={index} sx={{ padding: '0 4px' }}>
            <Button
              variant={activePlatform === platform ? 'contained' : 'outlined'}
              onClick={() => onPlatformClick(platform)}
              disabled={activePlatform !== platform}
              startIcon={
                <img
                  src={platformImages[platform]}
                  alt={platform}
                  style={{ width: 24, height: 24 }}
                />
              }
              sx={{
                fontFamily: 'Poppins',
                textTransform: 'none',
                textAlign: 'left',
                color: activePlatform === platform ? '#383874' : 'rgba(56, 56, 116, 0.5)',
                background: activePlatform === platform ? '#ffffff' : 'rgba(56, 56, 116, 0.1)',
                margin: 0,
                width: '100%',
              }}
            >
              {platform}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Filters button section */}
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
