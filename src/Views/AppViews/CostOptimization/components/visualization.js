import React from 'react';

const EC2Dashboard = () => {
  return (
    <div className="p-2 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md"> {/* Reduced card size */}
          
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md" > {/* Reduced card size */}
       </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> {/* Reduced card size, fixed height */}
       </div>
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> {/* Reduced card size, fixed height */}
      </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> {/* Reduced card size, fixed height */}
          
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> {/* Reduced card size, fixed height */}
        </div>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 m-4">
      <div className="bg-white p-4 rounded-lg shadow-md h-80"> {/* Reduced card size, fixed height */}
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 m-4">
      <div className="bg-white p-4 rounded-lg shadow-md h-100"> {/* Reduced card size, fixed height */}
        </div>
      </div>

    </div>
  );
};

export default EC2Dashboard;