import React from 'react';
import CpuUtilizationChart from './CPUutilization';
import MemoryUtilizationChart from './memoryutilization';

import Networkin from './Networkin';
import Networkout from './Networkout';

import DiskReadOperations from './Diskreadoperations';
import DiskWriteOperations from './Diskwriteoperations';

import DiskReadBandwidth from './DiskReadBandwidth';
import DiskWriteBandwidth from './DiskWriteBandwidth';

import EBSRead from './EBSReadOperations';
import EBSWrite from './EBSWrite';

import EBSReadbandwidth from './EBSreadbandwidth';
import EBSWriteBandwidth from './EBSwriteBandwidth';
const EC2Dashboard = () => {
  return (
    <div className="p-2 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md"> {/* Reduced card size */}
           <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>CPU Utilization (%)</h2>
          {/* <p className="text-sm text-gray-600 mb-4">Real-Time Health Status Overview and Incident Tracking</p> */}
           
          
          
          
          <CpuUtilizationChart />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md" >
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Memory Utilization (%)</h2>
        {/* Reduced card size */}
          <MemoryUtilizationChart />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md ">
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Network in (MiB/second)</h2>

          <Networkin />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md "> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Network out (MiB/second)</h2>

          <Networkout />
        </div>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md ">
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Disk Read Operations (per second)</h2>

          <DiskReadOperations />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md "> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Disk Write Operations (per second)</h2>

          <DiskWriteOperations />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md ">
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Disk Read Bandwidth (MiB/second)</h2>

          <DiskReadBandwidth />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md "> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Disk Write Bandwidth (MIB/second)</h2>

          <DiskWriteBandwidth />
        </div>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md ">
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>EBS Read Operations (per second)</h2>

          <EBSRead />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md "> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>EBS Write Operations (per second)</h2>

          <EBSWrite />
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md ">
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>EBS Read Bandwidth (per second)</h2>

          <EBSReadbandwidth />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md "> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>EBS Write Bandwidth (per second)</h2>

          <EBSWriteBandwidth />
        </div>
      </div>


      


    </div>
  );
};

export default EC2Dashboard;