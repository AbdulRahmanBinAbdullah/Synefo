// import React from 'react';
// import { Server, Box, Layers, FunctionSquare, Database, GitMerge, Activity, LineChart, Search, FileText, Mail } from 'lucide-react';
// import EC2DashboardHeader from './producthome';
// const Service = ({ name, Icon, number, color }) => (
//   <div className={`flex items-center justify-between p-3 rounded-lg bg-white shadow-sm`}>
//     <div className="flex items-center">
//       <Icon className={`w-6 h-6 mr-2 ${color}`} />
//       <span className="text-sm font-medium text-gray-600">{name}</span>
//     </div>
//     <span className="text-lg font-bold text-indigo-600">{number}</span>
//   </div>
// );

// const services = [
//   { name: "EC2", Icon: Server, number: "02", color: "text-orange-500" },
//   { name: "EKS", Icon: Box, number: "05", color: "text-orange-500" },
//   { name: "ECS", Icon: Layers, number: "10", color: "text-orange-500" },
//   { name: "Lambda", Icon: FunctionSquare, number: "10", color: "text-orange-500" },
//   { name: "Redshift", Icon: Database, number: "02", color: "text-purple-500" },
//   { name: "RDS", Icon: Database, number: "02", color: "text-blue-500" },
//   { name: "AppMesh", Icon: GitMerge, number: "02", color: "text-purple-500" },
//   { name: "Kinesis", Icon: Activity, number: "02", color: "text-purple-500" },
//   { name: "Time-Series", Icon: LineChart, number: "02", color: "text-blue-500" },
//   { name: "Athena", Icon: Search, number: "02", color: "text-purple-500" },
//   { name: "Workdocs", Icon: FileText, number: "02", color: "text-red-500" },
//   { name: "Workmail", Icon: Mail, number: "02", color: "text-red-500" },
// ];

// const AWSDashboard = () => {
//     return (
//       <div className="w-full p-4 bg-white-100">
//         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
//           {services.map((service) => (
//             <Service key={service.name} {...service} />
//           ))}
//         </div>
//       </div>
//     );
//   };
  
// export default AWSDashboard;




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Server, Box, Layers, FunctionSquare, Database, GitMerge, Activity, LineChart, Search, FileText, Mail } from 'lucide-react';
// import { APP_PREFIX_PATH } from 'Configs/AppConfig';

// const Service = ({ name, Icon, number, color, link }) => (
//   <Link to={`${APP_PREFIX_PATH}/assets/AllServices/EC2`} className="flex items-center justify-between p-3 rounded-lg bg-white shadow-sm hover:bg-gray-100">
//     <div className="flex items-center">
//       <Icon className={`w-6 h-6 mr-2 ${color}`} />
//       <span className="text-sm font-medium text-gray-600">{name}</span>
//     </div>
//     <span className="text-lg font-bold text-indigo-600">{number}</span>
//   </Link>
// );

// const services = [
//   { name: "EC2", Icon: Server, number: "02", color: "text-orange-500", link: "/ec2" }, // Link to the EC2 page
//   { name: "EKS", Icon: Box, number: "05", color: "text-orange-500", link: "#" },
//   { name: "ECS", Icon: Layers, number: "10", color: "text-orange-500", link: "#" },
//   { name: "Lambda", Icon: FunctionSquare, number: "10", color: "text-orange-500", link: "#" },
//   { name: "Redshift", Icon: Database, number: "02", color: "text-purple-500", link: "#" },
//   { name: "RDS", Icon: Database, number: "02", color: "text-blue-500", link: "#" },
//   { name: "AppMesh", Icon: GitMerge, number: "02", color: "text-purple-500", link: "#" },
//   { name: "Kinesis", Icon: Activity, number: "02", color: "text-purple-500", link: "#" },
//   { name: "Time-Series", Icon: LineChart, number: "02", color: "text-blue-500", link: "#" },
//   { name: "Athena", Icon: Search, number: "02", color: "text-purple-500", link: "#" },
//   { name: "Workdocs", Icon: FileText, number: "02", color: "text-red-500", link: "#" },
//   { name: "Workmail", Icon: Mail, number: "02", color: "text-red-500", link: "#" },
// ];

// const AWSDashboard = () => {
//     return (
//       <div className="w-full p-4 bg-white-100">
//         <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
//           {services.map((service) => (
//             <Service key={service.name} {...service} />
//           ))}
//         </div>
//       </div>
//     );
// };

// export default AWSDashboard;




import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Box, Layers, FunctionSquare, Database, GitMerge, Activity, LineChart, Search, FileText, Mail } from 'lucide-react';
import { APP_PREFIX_PATH } from 'Configs/AppConfig';

const Service = ({ name, Icon, number, color, link, disabled }) => {
  const commonClasses = "flex items-center justify-between p-3 rounded-lg bg-white shadow-sm";
  
  if (disabled) {
    return (
      <div className={`${commonClasses}  opacity-60`}>
        <div className="flex items-center">
          <Icon className={`w-6 h-6 mr-2 ${color}`} />
          <span className="text-sm font-medium text-gray-600">{name}</span>
        </div>
        <span className="text-lg font-bold text-indigo-600">{number}</span>
      </div>
    );
  }

  return (
    <Link to={link} className={`${commonClasses} hover:bg-gray-100`}>
      <div className="flex items-center">
        <Icon className={`w-6 h-6 mr-2 ${color}`} />
        <span className="text-sm font-medium text-gray-600">{name}</span>
      </div>
      <span className="text-lg font-bold text-indigo-600">{number}</span>
    </Link>
  );
};

const services = [
  { name: "EC2", Icon: Server, number: "02", color: "text-orange-500", link: `${APP_PREFIX_PATH}/assets/AllServices/EC2`, disabled: false },
  { name: "EKS", Icon: Box, number: "05", color: "text-orange-500", link: "#", disabled: true },
  { name: "ECS", Icon: Layers, number: "10", color: "text-orange-500", link: "#", disabled: true },
  { name: "Lambda", Icon: FunctionSquare, number: "10", color: "text-orange-500", link: "#", disabled: true },
  { name: "Redshift", Icon: Database, number: "02", color: "text-purple-500", link: "#", disabled: true },
  { name: "RDS", Icon: Database, number: "02", color: "text-blue-500", link: "#", disabled: true },
  { name: "AppMesh", Icon: GitMerge, number: "02", color: "text-purple-500", link: "#", disabled: true },
  { name: "Kinesis", Icon: Activity, number: "02", color: "text-purple-500", link: "#", disabled: true },
  { name: "Time-Series", Icon: LineChart, number: "02", color: "text-blue-500", link: "#", disabled: true },
  { name: "Athena", Icon: Search, number: "02", color: "text-purple-500", link: "#", disabled: true },
  { name: "Workdocs", Icon: FileText, number: "02", color: "text-red-500", link: "#", disabled: true },
  { name: "Workmail", Icon: Mail, number: "02", color: "text-red-500", link: "#", disabled: true },
];

const AWSDashboard = () => {
  return (
    <div className="w-full p-4 bg-white-100">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {services.map((service) => (
          <Service key={service.name} {...service} />
        ))}
      </div>
    </div>
  );
};

export default AWSDashboard;