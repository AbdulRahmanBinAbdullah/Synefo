import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { X as CloseIcon } from 'lucide-react';

const StopResourcesDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle className="flex justify-between items-center">
        <Typography variant="h6" component="div">
          Stop Resources
        </Typography>
        <CloseIcon onClick={onClose} className="cursor-pointer" />
      </DialogTitle>
      <DialogContent>
        <div>
          <Typography variant="body1" style={{ color: '#383874' }}>Instance Name</Typography>
          <Typography variant="body1" style={{ color: '#383874' }}>Webserver1</Typography>
        </div>

        <div style={{ marginTop: '12px' }}>
          <Typography variant="body1" style={{ color: '#383874' }}>Instance ID</Typography>
          <Typography variant="body1" style={{ color: '#383874' }}>i-1234567890abcdef0</Typography>
        </div>

        <div style={{ marginTop: '12px' }}>
          <Typography variant="body1" style={{ color: '#384CFF', textAlign: 'center' }}>
            Do You Want to stop?
          </Typography>
        </div>
      </DialogContent>
      <DialogActions style={{ justifyContent: 'center', marginTop: 0 }}>
        <Button onClick={onClose} className='flex justify-center items-center' variant="contained" sx={{backgroundColor:"#384CFF"}}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StopResourcesDialog;
