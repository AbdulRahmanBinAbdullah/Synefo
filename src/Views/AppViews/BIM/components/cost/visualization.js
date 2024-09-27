import React from 'react';
import RegionalCostDistribution from './charts/regionalcost';
import CostByInstanceTypeChart from './charts/costbyinstance';
const EC2Dashboard = () => {
  return (
    <div className="p-2 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md"> {/* Reduced card size */}
          <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Overall System Health</h2>
          <p className="text-sm text-gray-600 mb-4">Real-Time Health Status Overview and Incident Tracking</p>
          <RegionalCostDistribution />
        </div>


        <div className="bg-white p-4 rounded-lg shadow-md"> {/* Reduced card size */}
          <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Cost by Instance Type</h2>
          <p className="text-sm text-gray-600 mb-4">Monthly cost Breakdown by instance type</p>
          <CostByInstanceTypeChart />
        </div>

      </div>
      
      </div>

  );
};

export default EC2Dashboard;