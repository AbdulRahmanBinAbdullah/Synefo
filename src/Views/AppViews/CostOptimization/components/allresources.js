import { useState } from 'react';
import { Button, Menu, MenuItem, ListItemIcon, Typography } from '@mui/material';
import { ChevronDown } from 'lucide-react'; // You can use this for an icon if needed
import menuicon from 'assets/img/allservices/menuicon.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'Configs/AppConfig';


export default function Component() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [selectedMenuItem, setSelectedMenuItem] = useState('All Resources');
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (item) => {
    setSelectedMenuItem(item);
    setAnchorEl(null);
  };

  const handleEC2Instances = () => {
    // Implement navigation logic here
    navigate(`${APP_PREFIX_PATH}/CostOptimization/EC2`);

  };

  const handleAvailability = () => {
    // Implement availability logic here
  };

  const handleAutoScaleNavigate = () => {
    // Implement auto scaling navigation logic here
  };

  const handleCostNavigate = () => {
    // Implement cost navigation logic here
  };

  return (
    <>
      <Button
        className="sla"
        variant="contained"
        onClick={handleMenuClick}
        sx={{ backgroundColor: '#DDE1F8', color: '#383874', paddingLeft: '16px', paddingRight: '16px' }}
      >
        {selectedMenuItem}
        <ChevronDown className="ml-2 h-4 w-4" />
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={() => handleMenuClose(selectedMenuItem)}>
        <MenuItem
          onClick={() => {
            handleEC2Instances();
            handleMenuClose('EC2 Instances');
          }}
          sx={{
            backgroundColor: '#EEF2FF',
            '&:hover': { backgroundColor: '#E0E7FF' },
          }}
        >
          <ListItemIcon>
            <img src={menuicon} alt="menu" />
          </ListItemIcon>
          <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#3730A3' }}>
            EC2 Instances
          </Typography>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleAvailability();
            handleMenuClose('Availability & End User');
          }}
        >
          <ListItemIcon>
            <img src={menuicon} alt="menu" />
          </ListItemIcon>
          <Typography variant="body1" sx={{ color: '#3730A3' }}>
            EBS Voluems
          </Typography>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleAutoScaleNavigate();
            handleMenuClose('Auto Scaling & Security');
          }}
        >
          <ListItemIcon>
            <img src={menuicon} alt="menu" />
          </ListItemIcon>
          <Typography variant="body1" sx={{ color: '#3730A3' }}>
Lambda functions
          </Typography>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleCostNavigate();
            handleMenuClose('Cost');
          }}
        >
          <ListItemIcon>
            <img src={menuicon} alt="menu" />
          </ListItemIcon>
          <Typography variant="body1" sx={{ color: '#3730A3' }}>
            RDS DB Instances
          </Typography>
        </MenuItem>


        <MenuItem
          onClick={() => {
            handleCostNavigate();
            handleMenuClose('Cost');
          }}
        >
          <ListItemIcon>
            <img src={menuicon} alt="menu" />
          </ListItemIcon>
          <Typography variant="body1" sx={{ color: '#3730A3' }}>
            Auto Scaling groups
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
