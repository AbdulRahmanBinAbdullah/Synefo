import React from 'react';

import Networkin from '../EC2Instance/Networkin';
import Networkout from '../EC2Instance/Networkout';

import DiskReadOperations from '../EC2Instance/Diskreadoperations';
import DiskWriteOperations from '../EC2Instance/Diskwriteoperations';

import DiskReadBandwidth from '../EC2Instance/DiskReadBandwidth';

const EC2Dashboard = () => {
  return (
    <div className="p-2 bg-gray-100">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md ">
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Read Operations (per second)</h2>

          <Networkin />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md "> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Write Operations (per second)</h2>

          <Networkout />
        </div>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md ">
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Read Bandwidth (MiB/second)</h2>

          <DiskReadOperations />
        </div>
        
      </div>


      

      
      


      


    </div>
  );
};

export default EC2Dashboard;