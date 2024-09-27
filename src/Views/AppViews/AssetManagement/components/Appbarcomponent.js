import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material'

const AppBarComponent = () => (

    <Toolbar sx={{m:1}}>
      <Typography 
  variant="h6" 
  sx={{ 
    flexGrow: 1, 
    fontFamily: 'Poppins', 
    fontSize: '34px', 
    fontWeight: 400, 
    lineHeight: '44px', 
    letterSpacing: '-0.44px', 
    textAlign: 'left' ,
    color: '#383874',
    marginLeft:-3

  }}
>
  ASSETS MANAGEMENT
</Typography>
<Button 
  variant="contained" 
  sx={{ background: '#384CFF', '&:hover': { background: '#2B3DA0' } }} // Change hover color if needed
>
  Back
</Button>


    </Toolbar>
  
)

export default AppBarComponent
