

import React from 'react';
import { Grid, Box } from '@mui/material';
import TopServicesTable from './TopServices';
import RegionWiseResourcesTable from './Regionresources';
import LineChart from './linechart';
import WAFRDashboard from './WAFR dashboard';





const Dashboard = () => {
  return (
    <div className="p-2 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md"> {/* Reduced card size */}
          <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Cost Spent on Top Services</h2>
          <LineChart />
        </div>
        <div className="bg-white p-4 rounded-lg " > {/* Reduced card size */}
         
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Top 4 Services</h2>

          <TopServicesTable />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>WAFR</h2>

          <WAFRDashboard />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Region Wise Resources</h2>

          <RegionWiseResourcesTable	 />
        </div>
      </div>


     


     


      

    </div>
  );
};

export default Dashboard;