// import React, { Component } from 'react';

// class ConfigureAmazonEC2 extends Component {
//   render() {
//     return (
//       <div className="p-6 ">
//         <h2 className="text-2xl font-semibold mb-8 ">Configure Amazon EC2</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//           {/* Tenancy */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Tenancy</label>
//             <select className="w-full p-3 border rounded-md">
//               <option>Shared Instance</option>
//               <option>Dedicated Instance</option>
//             </select>
//           </div>
          
//           {/* Location Type */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">Choose a Location Type</label>
//             <select className="w-full p-3 border rounded-md">
//               <option>Region</option>
//               <option>Availability Zone</option>
//             </select>
//           </div>
//         </div>

//         {/* Operating System */}
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-2">Operating System</label>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100 transition">Windows</button>
//             <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100 transition">Linux</button>
//             <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100 transition">Red Hat Enterprise Linux</button>
//             <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100 transition">Ubuntu Pro</button>
//           </div>
//         </div>

//         {/* Use Case */}
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700 mb-2">Use Case</label>
//           <select className="w-full p-3 border rounded-md">
//             <option>Select</option>
//             <option>Web Server</option>
//             <option>Database</option>
//             <option>Application Hosting</option>
//           </select>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-end content-end space-x-4">
//           <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100 transition">Cancel</button>
//           <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Continue</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default ConfigureAmazonEC2;

import React, { Component } from 'react';
import Dropdown from '../components/Dropdown';
import { APP_PREFIX_PATH } from 'Configs/AppConfig';
import { Link } from 'react-router-dom';

class ConfigureAmazonEC2 extends Component {
  render() {
    const windowsOptions = ['Windows Server ', 'Windows Server with SQL Server Standard', 'Windows Server with SQL Server Web', 'Windows Server with SQL Server Enterprise'];
    const redHatOptions = ['Red Hat Enterprise Linux', 'Red Hat Enterprise Linux with HA', 'Red Hat Enterprise Linux with SQL Server Standard', 'Red Hat Enterprise Linux with SQL Server Web','Red Hat Enterprise Linux with SQL Server Enterprise','Red Hat Enterprise Linux with HA and SQL Server Standard','Red Hat Enterprise Linux with HA and SQL Server Enterprise'];
    const  linuxOptions = ['Linux', 'Linux with SQL Server Standard', 'Linux with SQL Server Web', 'Linux with SQL Server Enterprise','SUSE Linux Enterprise Server'];

    return (
      <div className="p-6 min-h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-8">Configure Amazon EC2</h2>

          {/* Tenancy and Location Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Tenancy */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tenancy</label>
              <select className="w-full p-3 border rounded-md">
                <option>Shared Instance</option>
                <option>Dedicated Instance</option>
              </select>
            </div>

            {/* Location Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Choose a Location Type</label>
              <select className="w-full p-3 border rounded-md">
                <option>Region</option>
                <option>Availability Zone</option>
              </select>
            </div>
          </div>

          {/* Operating System */}
          
          <div className="mb-6">
         <label className="block text-sm font-medium text-gray-700 mb-2">Operating System</label>
          <div className="flex justify-between flex-wrap">
               <Dropdown title="Windows" options={windowsOptions} />
               <Dropdown title="Linux" options={redHatOptions} />
               <Dropdown title="Red Hat Enterprise Linux" options={linuxOptions} />
               <Dropdown title="Ubuntu Pro "  />
            </div>
          </div>

          {/* Use Case */}
          <div className="mb-6 w-[450px] ">
            <label className="block text-sm font-medium text-gray-700 mb-2">Use Case</label>
            <select className="w-full p-3 border rounded-md">
              <option>Select</option>
              <option>Web Server</option>
              <option>Database</option>
              <option>Application Hosting</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mt-8">
          <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100 transition">
            Cancel
          </button>
          <Link to={`${APP_PREFIX_PATH}/assets/price-estimator/configure-amazon-ec2`} >
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
            Continue
          </button>
          </Link>
        </div>
      </div>
    );
  }
}
 
export default ConfigureAmazonEC2;

