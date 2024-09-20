import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const AppBarComponent = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <IconButton edge="start" color="inherit">
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        ASSETS MANAGEMENT
      </Typography>
      <Button color="primary" variant="contained">
        Back
      </Button>
    </Toolbar>
  </AppBar>
)

export default AppBarComponent
