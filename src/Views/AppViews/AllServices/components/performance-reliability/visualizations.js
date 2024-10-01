import React from 'react';
import CPUUtilizationChart from './charts/cpuutilization';
import DiskStorageUtilizationChart from './charts/Diskstorage';
import NetworkTrafficChart from './charts/NetworkTaffic';
import EC2InstanceEventsTable from './charts/instanceeventstable';
import OutgoingNetworkTrafficChart from './charts/NetworkTrafficOutGoing';
import EC2InstanceStateTable from './charts/Instancebystate';
const EC2Dashboard = () => {
  return (
    <div className="p-2 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md"> {/* Reduced card size */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>CPU Utilization by Instance Id</h2>
          <p className="text-sm text-gray-600 mb-4">The average CPU utilization percentage by instance</p>

          <CPUUtilizationChart />

        </div>
        <div className="bg-white p-4 rounded-lg shadow-md" > {/* Reduced card size */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Disk Storage Utilization by Instance ID (GB)</h2>
          <p className="text-sm text-gray-600 mb-4">The amount of storage capacity consumed on a disk, including the total disk space, used disk space, and free disk space.</p>

          <DiskStorageUtilizationChart />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
     
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Incoming Network Traffic by Instance ID</h2>
          <p className="text-sm text-gray-600 mb-4">Total incoming traffic count by instance ID (MB)</p>

        <NetworkTrafficChart />

        </div>
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> 
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Outgoing Network Traffic by Instance ID</h2>
          <p className="text-sm text-gray-600 mb-4">Total outgoing traffic count by instance ID (MB)</p>

       <OutgoingNetworkTrafficChart/>
        </div>
      </div>


   

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg  h-96">
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>EC2 Instance Events</h2>

          <EC2InstanceEventsTable />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>EC2 Instance State by Instance ID</h2>

          <EC2InstanceStateTable />
        </div>
      </div>



    

    </div>
  );
};

export default EC2Dashboard;