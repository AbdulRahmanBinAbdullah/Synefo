// import React, { useState } from 'react';
// import { Dialog, DialogContent, DialogTitle, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

// const FilterModal = ({ open, onClose, onSubmit }) => {
//   const [selectedDepartment, setSelectedDepartment] = useState('');

//   const handleSubmit = () => {
//     onSubmit(selectedDepartment);
//     onClose();
//   };

//   const handleClear = () => {
//     setSelectedDepartment('');
//   };

//   return (
//     <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
//       <DialogTitle>Filter</DialogTitle>
//       <DialogContent>
//         <h3 className="mb-4 font-semibold">Select Department</h3>
//         <RadioGroup
//           value={selectedDepartment}
//           onChange={(e) => setSelectedDepartment(e.target.value)}
//         >
//           {['HR', 'Invoice', 'Vendor', 'Analytics', 'Finance', 'Operations'].map((dept) => (
//             <FormControlLabel key={dept} value={dept} control={<Radio />} label={dept} />
//           ))}
//         </RadioGroup>
//         <div className="flex justify-between mt-6">
//           <Button onClick={handleClear} variant="outlined" color="inherit">
//             Clear
//           </Button>
//           <Button onClick={handleSubmit} variant="contained" color="primary">
//             Submit
//           </Button>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default FilterModal;



import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, RadioGroup, FormControlLabel, Radio, Button, Grid } from '@mui/material';
import { APP_PREFIX_PATH } from 'Configs/AppConfig';

const FilterModal = ({ open, onClose, onSubmit }) => {
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleSubmit = () => {
    onSubmit(selectedDepartment);
    onClose();
  };

  const handleClear = () => {
    setSelectedDepartment('');
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Filter</DialogTitle>
      <DialogContent>
        <h3 className="mb-4 font-semibold">Select Department</h3>
        <Grid container spacing={2}> {/* Add Grid container */}
          {['HR', 'Invoice', 'Vendor', 'Analytics', 'Finance', 'Operations'].map((dept) => (
            <Grid item xs={4} key={dept}> {/* 2 radio buttons per row (12/6=2) */}
              <FormControlLabel value={dept} control={<Radio />} label={dept} />
            </Grid>
          ))}
        </Grid> {/* Close Grid container */}
        <div className="flex justify-center mt-6">
          <Button onClick={handleClear} variant="outlined" color="inherit">
            Clear
          </Button>
          <Button onClick={handleSubmit} sx={{ml:3 ,backgroundColor:" #384CFF",color:'#ffffff'
}} variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;

