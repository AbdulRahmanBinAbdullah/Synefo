// import React from "react";
// import awsIcon from "../../../../assets/img/assetmanagement/aws.svg";

// const Header = () => {
//   return (
//     <div className="flex flex-col items-center justify-between p-4 bg-gray-100">
//       {/* Left Side: Logo and Title */}
//       <div className="flex items-center justify-between space-x-3">
//         <div className="flex justify-between gap-2">
//           <div className="bg-white rounded-md">
//             <img src={awsIcon} alt="AWS" className="w-8 h-8" />
//           </div>
//           <h6 className="text-lg font-semibold text-gray-700">
//             Amazon Web Services
//           </h6>
//         </div>
//         <button className="text-gray-500 hover:text-gray-700">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//       </div>

//       <hr />

//       {/* Right Side: Alerts Button */}
//       <div className="flex items-center">
//         {/* Middle: Breadcrumb Navigation */}
//         <nav className="flex space-x-1 text-gray-600">
//           <a href="/" className="hover:text-blue-600">
//             AWS (657297475456)
//           </a>
//           <span className="text-gray-400">›</span>
//           <a href="/vpc" className="hover:text-blue-600">
//             VPC 1
//           </a>
//           <span className="text-gray-400">›</span>
//           <a href="/app-service" className="hover:text-blue-600">
//             App Service
//           </a>
//           <span className="text-gray-400">›</span>
//           <span className="text-gray-800">EC2</span>
//         </nav>
//         <button className="flex items-center text-blue-600 hover:text-blue-800">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 mr-1"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path d="M10 2a6 6 0 00-6 6v5H3.293a1 1 0 00-.293.707v.293l.014.3.008.026.018.066.022.071a1 1 0 00.213.354l.025.026a1 1 0 00.075.071c.018.018.038.033.056.05l.028.023.1.066a1.007 1.007 0 00.384.153l.062.01.075.008h11a1 1 0 001-.92v-.188c.016-.04.016-.08.026-.12.004-.015.008-.03.01-.046a1 1 0 00.09-.406V13a1 1 0 00-.293-.707H16V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
//           </svg>
//           Alerts
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;



import React from "react";
import awsIcon from "../../../../assets/img/assetmanagement/aws.svg";

const Header = () => {
  return (
    <div className="p-4 bg-white">
      {/* Top Section: Logo, Title, and Down Arrow */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-white shadow-md rounded-md">
            <img src={awsIcon} alt="AWS" className="w-8 h-8" />
          </div>
          <h6 className="text-lg font-semibold text-gray-700">
            Amazon Web Services
          </h6>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Horizontal Line */}
      <hr className="my-3" />

      {/* Bottom Section: Breadcrumbs and Alerts */}
      <div className="flex justify-between items-center ">
        {/* Breadcrumb Navigation */}
        <nav className="flex space-x-1 text-gray-600">
          <a href="/" className="hover:text-blue-600">
            AWS (657297475456)
          </a>
          <span className="text-gray-400">›</span>
          <a href="/vpc" className="hover:text-blue-600">
            VPC 1
          </a>
          <span className="text-gray-400">›</span>
          <a href="/app-service" className="hover:text-blue-600">
            App Service
          </a>
          <span className="text-gray-400">›</span>
          <span className="text-gray-800">EC2</span>
        </nav>

        {/* Alerts Button */}
        <button className="flex items-center text-blue-600 hover:text-blue-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a6 6 0 00-6 6v5H3.293a1 1 0 00-.293.707v.293l.014.3.008.026.018.066.022.071a1 1 0 00.213.354l.025.026a1 1 0 00.075.071c.018.018.038.033.056.05l.028.023.1.066a1.007 1.007 0 00.384.153l.062.01.075.008h11a1 1 0 001-.92v-.188c.016-.04.016-.08.026-.12.004-.015.008-.03.01-.046a1 1 0 00.09-.406V13a1 1 0 00-.293-.707H16V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          Alerts
        </button>
      </div>
    </div>
  );
};

export default Header;
