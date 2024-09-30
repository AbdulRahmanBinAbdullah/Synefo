import React from 'react';
import SystemHealth from './Systemhealth';
import EC2instancesummary from './instancesummary';
import CPUUtilizationChart from './Cpuutilization';
import MemoryUtilizationChart from './Memoryutilizationchart';
import NetworkTraffic from './NetworkTraffic';
import DiskIOOperations from './DiskIOoperations';
import AutoScalingEC2InstanceTable from './Autoscaling';
import ResourcesDashboard from './Resources';
const EC2Dashboard = () => {
  return (
    <div className="p-2 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md"> {/* Reduced card size */}
          <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Overall System Health</h2>
          <p className="text-sm text-gray-600 mb-4">Real-Time Health Status Overview and Incident Tracking</p>
          <SystemHealth />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md" > {/* Reduced card size */}
          <EC2instancesummary />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> {/* Reduced card size, fixed height */}
          <CPUUtilizationChart />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> {/* Reduced card size, fixed height */}
          <MemoryUtilizationChart />
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> {/* Reduced card size, fixed height */}
          <NetworkTraffic />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> {/* Reduced card size, fixed height */}
          <DiskIOOperations />
        </div>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 m-4">
      <div className="bg-white p-4 rounded-lg shadow-md h-80"> {/* Reduced card size, fixed height */}
          <AutoScalingEC2InstanceTable />
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 m-4">
      <div className="bg-white p-4 rounded-lg shadow-md h-100"> {/* Reduced card size, fixed height */}
          <ResourcesDashboard />
        </div>
      </div>

    </div>
  );
};

export default EC2Dashboard;