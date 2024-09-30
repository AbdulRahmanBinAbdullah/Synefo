import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
  Box,
  Radio,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  Select,
  MenuItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const SchedulerModal = ({ open, onClose }) => {
  const [schedulerName, setSchedulerName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedDay, setSelectedDay] = useState(null);

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dateOptions = [...Array(31).keys()].map((i) => i + 1);

  const handleConfirm = () => {
    console.log({ schedulerName, startDate, endDate, selectedDay });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} >
      <DialogTitle>
        <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
          Scheduler
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box mb={2}>
          <Typography variant="subtitle1" component="div" style={{ fontWeight: 'bold', marginBottom: '8px' }}>
            Scheduler Name
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            value={schedulerName}
            onChange={(e) => setSchedulerName(e.target.value)}
            placeholder="Name"
          />
        </Box>
        <Box display="flex" justifyContent="space-between" mb={2}>
  <FormControl 
    variant="outlined" 
    size="small" 
     // Adjust the width and add some margin
  >
    <Select
      value={startDate}
      onChange={(e) => setStartDate(e.target.value)}
      displayEmpty
    >
      <MenuItem value="" disabled>
        Select Start Date
      </MenuItem>
      {dateOptions.map((day) => (
        <MenuItem key={day} value={day}>
          {day}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
  <FormControl 
    variant="outlined" 
    size="small" 
    sx={{ width: 'calc(50% - 8px)' }}  // Adjust the width and add some margin
  >
    <Select
      value={endDate}
      onChange={(e) => setEndDate(e.target.value)}
      displayEmpty
    >
      <MenuItem value="" disabled>
        Select End Date
      </MenuItem>
      {dateOptions.map((day) => (
        <MenuItem key={day} value={day}>
          {day}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
</Box>
<FormControl component="fieldset">
  <RadioGroup
    row
    aria-label="days"
    name="days"
    value={selectedDay}
    onChange={(e) => setSelectedDay(e.target.value)}
    sx={{ display: 'flex', justifyContent: 'space-between'}} // Added flex properties here
  >
    {days.map((day) => (
      <Box key={day} display="flex" flexDirection="column" alignItems="center" > 
        <Radio
          value={day}
          size="small"
          sx={{ padding: '2px' }}
        />
        <FormLabel component="legend"  sx={{ fontSize: '0.75rem' ,ml:3,mr:2}}>{day}</FormLabel>
      </Box>
    ))}
  </RadioGroup>
</FormControl>

        
        <Box display="flex" justifyContent="center" mt={2}>
  <Button
    size='small'
    variant="contained"
    onClick={handleConfirm}
    style={{
      backgroundColor: '#4318FF',
      color: 'white',
      textTransform: 'none',
      marginTop: '16px',
    }}
  >
    Confirm
  </Button>
</Box>

      </DialogContent>
    </Dialog>
  );
};

export default SchedulerModal;