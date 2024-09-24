// import React from 'react';
// import {
//     Card,
//     CardContent,
//     Grid,
//     CircularProgress,
//     Typography
// } from '@mui/material';

// // StatCard component with Circular Progress and percentage indicator
// const StatCard = ({ title, value, percentage }) => (
//     <Card sx={{ boxShadow: 3, borderRadius: 4,width:150, hight:100 }}  >
//         <CardContent>
//             <Grid container alignItems="center" spacing={2}>
//                 <Grid item>
//                     <div style={{ position: 'relative', display: 'inline-flex' }}>
//                         <CircularProgress
//                             variant="determinate"
//                             value={parseFloat(percentage)}
//                             size={40}
//                             thickness={5}
//                             sx={{
//                                 color: getProgressColor(percentage),
//                             }}
//                         />
//                         <div
//                             style={{
//                                 position: 'absolute',
//                                 top: 0,
//                                 left: 0,
//                                 bottom: 0,
//                                 right: 0,
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                             }}
//                         >
//                             <Typography variant="caption" component="div" color="textSecondary">
//                                 {`${percentage}`}
//                             </Typography>
//                         </div>
//                     </div>
//                 </Grid>

//                 <Grid item>
//                     <Grid container direction="column" spacing={1}>
//                         <Grid item>
//                             <Typography variant="h6" fontWeight="base">
//                                 {title}
//                             </Typography>
//                         </Grid>
//                         <Grid item>
//                             {/* Combining value and percentage in the same column */}
//                             <Typography variant="h5" fontWeight="base" color="primary">
//                                 {value}
//                             </Typography>
//                             <Typography variant="body2" color="success.main">
//                                 ▲ 10%
//                             </Typography>
//                         </Grid>
//                     </Grid>
//                 </Grid>

//             </Grid>
//         </CardContent>
//     </Card>
// );

// // Helper function to determine color based on percentage
// const getProgressColor = (percentage) => {
//     const value = parseFloat(percentage);
//     if (value >= 30) return '#4caf50'; // Green for 30% and above
//     if (value >= 20) return '#ff9800'; // Orange for 20% and above
//     return '#f44336'; // Red for less than 20%
// };

// export default StatCard;


import React from 'react';
import {
    Card,
    CardContent,
    Grid,
    CircularProgress,
    Typography
} from '@mui/material';

// StatCard component with Circular Progress and percentage indicator
const StatCard = ({ title, value, percentage }) => (
    <Card sx={{ 
        boxShadow: 3, 
        borderRadius: 4, 
        width: 160,  // Adjusted width
        height: 100, // Adjusted height
        padding: 1,  // Reduced padding
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <CardContent sx={{ padding: '8px' }}> {/* Reduced padding inside CardContent */}
            <Grid container alignItems="center" spacing={1}> {/* Adjust spacing between items */}
                <Grid item>
                    <div style={{ position: 'relative', display: 'inline-flex' }}>
                        <CircularProgress
                            variant="determinate"
                            value={parseFloat(percentage)}
                            size={30}  
                            thickness={5}
                            sx={{
                                color: getProgressColor(percentage),
                            }}
                        />x 
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography variant="caption" component="div" color="textSecondary">
                                {`${percentage}%`}
                            </Typography>
                        </div>
                    </div>
                </Grid>

                <Grid item>
                    <Grid container direction="column" spacing={0.5}>
                        <Grid item>
                            <Typography 
                                variant="subtitle2" /* Reduced size for title */
                                fontWeight="medium"
                                noWrap /* Ensure long text doesn't overflow */
                            >
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography 
                                variant="h6" /* Reduced size for value */
                                fontWeight="medium" 
                                color="primary"
                            >
                                {value}
                            </Typography>
                            <Typography 
                                variant="body2" /* Reduced size for percentage increase text */
                                color="success.main"
                            >
                                ▲ 10%
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

// Helper function to determine color based on percentage
const getProgressColor = (percentage) => {
    const value = parseFloat(percentage);
    if (value >= 30) return '#4caf50'; // Green for 30% and above
    if (value >= 20) return '#ff9800'; // Orange for 20% and above
    return '#f44336'; // Red for less than 20%
};

export default StatCard;
