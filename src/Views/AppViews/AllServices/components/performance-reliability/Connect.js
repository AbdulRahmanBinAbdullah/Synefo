import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { X as CloseIcon } from 'lucide-react';
import tick from 'assets/img/allservices/tick.png'

const ConnectResourcesDialog = ({ open, onClose }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirm = () => {
    setShowConfirmation(true);
  };

  const handleClose = () => {
    setShowConfirmation(false);
    onClose();
  };

  const ConfirmationPopup = () => (
    <Dialog open={showConfirmation} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogContent className="text-center">
        <img src={tick} alt='done' className="mx-auto mb-4" />
        <Typography variant="h6" style={{ fontFamily: 'Poppins', color: '#383874', marginBottom: '8px' }}>
          Done!
        </Typography>
        <Typography variant="body1" style={{ fontFamily: 'Poppins', color: '#383874', marginBottom: '16px' }}>

        Webserver 1 resource is Connected
        </Typography>
        <Button
          onClick={handleClose}
          variant="contained"
          style={{ 
            fontFamily: 'Poppins', 
            fontWeight: 600, 
            backgroundColor: '#384CFF',
            color: 'white',
            padding: '8px 16px'
          }}
        >
          Done
        </Button>
      </DialogContent>
    </Dialog>
  );

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
        <DialogTitle className="flex justify-between items-center">
          <Typography variant="h6" component="div">
            Connect Resources
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
              Do You Want to Connect?
            </Typography>
          </div>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center', marginTop: 0 }}>
          <Button 
            onClick={handleConfirm} 
            className='flex justify-center items-center' 
            variant="contained" 
            sx={{backgroundColor:"#384CFF"}}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <ConfirmationPopup />
    </>
  );
};

export default ConnectResourcesDialog;