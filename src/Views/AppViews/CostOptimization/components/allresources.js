import { useState,useEffect } from 'react';
import { Button, Menu, MenuItem, ListItemIcon, Typography } from '@mui/material';
import { ChevronDown } from 'lucide-react'; // You can use this for an icon if needed
import menuicon from 'assets/img/allservices/menuicon.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { APP_PREFIX_PATH } from 'Configs/AppConfig';
import SettingsIcon from '@mui/icons-material/Settings';


export default function Component() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case `${APP_PREFIX_PATH}/CostOptimization/EC2`:
        setSelectedMenuItem('EC2 Instances');
        break;
      case `${APP_PREFIX_PATH}/CostOptimization/EBS`:
        setSelectedMenuItem('EBS Volumes');
        break;
      case `${APP_PREFIX_PATH}/CostOptimization/RDS`:
        setSelectedMenuItem('RDS functions');
        break;

        case `${APP_PREFIX_PATH}/CostOptimization/lambda`:
          setSelectedMenuItem('Lambda functions');
          break;
        
      default:
          setSelectedMenuItem('All Resources')
    }},[location.pathname]);
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

  const handleEBSVolumes = () => {
    // Implement navigation logic here
    navigate(`${APP_PREFIX_PATH}/CostOptimization/EBS`);

  };
  const handlelambda=()=>{
    navigate(`${APP_PREFIX_PATH}/CostOptimization/lambda`)
  }
  
  const handleRDS = () => {
    navigate(`${APP_PREFIX_PATH}/CostOptimization/RDS`);

  };

  const handleCostNavigate = () => {
    // Implement cost navigation logic here
  };
  
  return (
    <>
      <Button
        className="sla"
        variant="contained"
        startIcon={<SettingsIcon />}
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
            handleEBSVolumes();
            handleMenuClose('EBS Volumes');
          }}
        >
          <ListItemIcon>
            <img src={menuicon} alt="menu" />
          </ListItemIcon>
          <Typography variant="body1" sx={{ color: '#3730A3' }}>
            EBS Volumes
          </Typography>
        </MenuItem>

        <MenuItem
          onClick={() => {
            handlelambda();
            handleMenuClose('Lambda functions');
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
            handleRDS();

            handleMenuClose('RDS DB Instances');
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
            handleMenuClose('Auto Scaling groups');
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
