import React, { useState } from 'react';
import { Popover, MenuItem, Select, FormControl, InputLabel, Button, Box, Grid } from '@mui/material';

export default function PlatformFilters({ open, onClose, onSubmit }) {
  const [region, setRegion] = useState('');
  const [awsAccount, setAwsAccount] = useState('');
  const [productEnclave, setProductEnclave] = useState('');

  const handleClear = () => {
    setRegion('');
    setAwsAccount('');
    setProductEnclave('');
  };

  const handleSubmit = () => {
    onSubmit({ region, awsAccount, productEnclave });
    onClose();
  };

  const selectSx = {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: "#023AFF",
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: "#023AFF",
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: "#023AFF",
    },
  };

  return (
    <Popover
      open={open}
      onClose={onClose}
      anchorReference="anchorPosition"
      anchorPosition={{ top: '50%' }}
      PaperProps={{
        sx: {
          position: 'fixed',
          top: '50%',
          left: '25%',
        }
      }}
    >
      <Box sx={{ p: 2, width: 'auto', minWidth: 600 }}>
        <Grid container spacing={2} alignItems="flex-end">
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="region-label" sx={{ color:'#383874'}}>Region</InputLabel>
              <Select
                labelId="region-label"
                value={region}
                label="Region"
                onChange={(e) => setRegion(e.target.value)}
                sx={selectSx}
              >
                <MenuItem value="us-east-1">US East (N. Virginia)</MenuItem>
                <MenuItem value="us-west-2">US West (Oregon)</MenuItem>
                <MenuItem value="eu-west-1">EU (Ireland)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="aws-account-label" sx={{ color:'#383874'}}>AWS Account</InputLabel>
              <Select
                labelId="aws-account-label"
                value={awsAccount}
                label="AWS Account"
                onChange={(e) => setAwsAccount(e.target.value)}
                sx={selectSx}
              >
                <MenuItem value="account1">Account 1</MenuItem>
                <MenuItem value="account2">Account 2</MenuItem>
                <MenuItem value="account3">Account 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth size="small">
              <InputLabel id="product-enclave-label" sx={{ color:'#383874'}}>Product Enclave</InputLabel>
              <Select
                labelId="product-enclave-label"
                value={productEnclave}
                label="Product Enclave"
                onChange={(e) => setProductEnclave(e.target.value)}
                sx={selectSx}
              >
                <MenuItem value="enclave1">Enclave 1</MenuItem>
                <MenuItem value="enclave2">Enclave 2</MenuItem>
                <MenuItem value="enclave3">Enclave 3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, gap: 2 }}>
          <Button
            onClick={handleClear}
            sx={{
              color: 'text.secondary',
              textTransform: 'none',
              border: '1px solid #E2E8F0',
              borderRadius: '4px',
              padding: '6px 16px',
              fontSize: '14px',
              fontWeight: 500,
            }}
          >
            Clear
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
                backgroundColor:"#023AFF",
              color: 'white',
              textTransform: 'none',
              borderRadius: '4px',
              padding: '6px 16px',
              fontSize: '14px',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#2563EB',
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Popover>
  );
}
