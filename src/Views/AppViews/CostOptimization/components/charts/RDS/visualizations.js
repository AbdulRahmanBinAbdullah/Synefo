import React from 'react';
import CpuUtilizationChart from '../EC2Instance/CPUutilization';
import MemoryUtilizationChart from '../EC2Instance/memoryutilization';

import Networkin from '../EC2Instance/Networkin';
import Networkout from '../EC2Instance/Networkout';

import DiskReadOperations from '../EC2Instance/Diskreadoperations';
import DiskWriteOperations from '../EC2Instance/Diskwriteoperations';

import DiskReadBandwidth from '../EC2Instance/DiskReadBandwidth';
import DiskWriteBandwidth from '../EC2Instance/DiskWriteBandwidth';

import EBSRead from '../EC2Instance/EBSReadOperations';
import EBSWrite from '../EC2Instance/EBSWrite';

import EBSReadbandwidth from '../EC2Instance/EBSreadbandwidth';
import EBSWriteBandwidth from '../EC2Instance/EBSwriteBandwidth';
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
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Memory Utilization(percent)</h2>
        {/* Reduced card size */}
          <MemoryUtilizationChart />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md ">
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Swap in (KB)</h2>

          <Networkin />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md "> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Swap out (KB)</h2>

          <Networkout />
        </div>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md ">
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Database Connections (count)</h2>

          <DiskReadOperations />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md "> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Network receive throughput (MiB/second)</h2>

          <DiskWriteOperations />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md ">
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Network transmit throughput (MiB/second)</h2>

          <DiskReadBandwidth />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md "> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>EBS read operations (per second)</h2>

          <DiskWriteBandwidth />
        </div>
      </div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md ">
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>EBS Write Operations (per second)</h2>

          <EBSRead />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md "> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>EBS Write Operations (per second)</h2>

          <EBSWrite />
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md ">
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>EBS read throughput (MiB/second)</h2>

          <EBSReadbandwidth />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md "> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>EBS write throughput (MiB/second)</h2>

          <EBSWriteBandwidth />
        </div>
      </div>


      


    </div>
  );
};

export default EC2Dashboard;