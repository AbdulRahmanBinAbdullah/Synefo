
// Terminatebuttons.js
import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import StartResourcesDialog from './StartResourceDialog';
import StopResourcesDialog from './StopResource';
import ConnectResourcesDialog from './Connect';
function Terminatebuttons() {
  const [openStart, setOpenStart] = useState(false);
  const [openStop, setOpenStop] = useState(false);
  const [openConnect,  setOpenConnect]=useState(false);
  const handleOpenStart = () => setOpenStart(true);
  const handleCloseStart = () => setOpenStart(false);
  
  const handleOpenStop = () => setOpenStop(true);
  const handleCloseStop = () => setOpenStop(false);


  const handleOpenConnect= () =>setOpenConnect (true);
  const handleCloseConnect = () => setOpenConnect(false);




  return (
    <>
      <Box display="flex" className='p-0' justifyContent="start">
        <Button size='small' variant='contained'
          sx={{ color: '#ffffff', textTransform: 'none', backgroundColor: '#384CFF', ml: 3 }}
          onClick={handleOpenStart}>
          Start
        </Button>
        <Button size='small' variant='contained'
          sx={{ color: '#ffffff', textTransform: 'none', backgroundColor: '#384CFF', ml: 3 }}
          onClick={handleOpenStop}>
          Stop
        </Button>
        <Button size='small' variant='contained' 
        sx={{ color: '#ffffff', textTransform: 'none', backgroundColor: '#384CFF', ml: 3 }}>Reboot</Button>
        <Button size='small' variant='contained' 
        sx={{ color: '#ffffff', textTransform: 'none', backgroundColor: '#384CFF', ml: 3 }}
        onClick={handleOpenConnect}>Connect
        </Button>
        <Button size='small' variant='contained' sx={{ color: '#ffffff', textTransform: 'none', backgroundColor: '#384CFF', ml: 3 }}>Terminate</Button>
      </Box>

      <StartResourcesDialog open={openStart} onClose={handleCloseStart} />
      <StopResourcesDialog open={openStop} onClose={handleCloseStop} />
      <ConnectResourcesDialog open={openConnect} onClose={handleCloseConnect}/>
    </>
  );
}

export default Terminatebuttons;
