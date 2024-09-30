import React from 'react';
import InstancesInAvailabilityZones	 from './charts/availabilityzones';
import SuccessfulEventsInEC2 from './charts/succesfulEvents';
import DataTransferChart from './charts/dataTransferIn';
import DataTransferOutChart from './charts/dataTransferOut';
const EC2Dashboard = () => {
  return (
    <div className="p-2 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg "> {/* Reduced card size */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Instances Launched in Availability Zones
        </h2>
         

          <InstancesInAvailabilityZones />

        </div>
        <div className="bg-white p-4 rounded-lg shadow-md" > {/* Reduced card size */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins',fontSize:'16px'}} style={{color:'#383874'}}>      Successful Events in EC2
        </h2>
        <SuccessfulEventsInEC2 />

        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
     
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Data transfer IN by Instances ID</h2>
        <p className="text-sm text-gray-600 mb-4">Total data transferred  IN count by instance ID (GB)</p>

        <DataTransferChart/>

        </div>
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> 
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Data transfer OUT by Instances ID</h2>
        <p className="text-sm text-gray-600 mb-4">Total data transferred  OUT count by instance ID (GB)</p>

        <DataTransferOutChart/>
        </div>
      </div>


   

      
      



     



    

    </div>
  );
};

export default EC2Dashboard;