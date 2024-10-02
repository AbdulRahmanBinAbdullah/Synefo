


// import React from 'react';

// const CircularProgress = ({ percentage, color }) => (
//   <div className="relative w-16 h-16 sm:w-20 sm:h-20">
//     <svg className="w-30 h-39" viewBox="0 0 100 100">
//       <circle
//         className="text-gray-200 stroke-current"
//         strokeWidth="10"
//         cx="50"
//         cy="50"
//         r="40"
//         fill="transparent"
//       ></circle>
//       <circle
//         className={`${color} stroke-current`}
//         strokeWidth="10"
//         strokeLinecap="round"
//         cx="50"
//         cy="50"
//         r="40"
//         fill="transparent"
//         strokeDasharray={`${percentage * 2.51} 251.2`}
//         transform="rotate(-90 50 50)"
//       ></circle>
//     </svg>
//     <div className="absolute inset-0 flex items-center justify-center">
//       <span className="text-md sm:text-md font-semibold">{percentage}%</span>
//     </div>
//   </div>
// );

// const Card = ({ title, percentage, total, change, color, resources }) => (
//   <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-64 md:w-72 flex flex-col">
//     <div className="flex items-center justify-between mb-4">
//       <CircularProgress percentage={percentage} color={color} />
//       <div className="text-right">
//         <h2 className="text-lg font-semibold" style={{ fontSize: "16px", color: '#383874' }}>{title}</h2>
//         <div className="flex justify-between items-baseline">
//           <p className="text-xl sm:text-2xl font-bold" style={{ color: '#383874' }}>{total}</p>
//           <p className="text-sm text-green-500 ml-2">▲ {change}%</p>
//         </div>
//       </div>
//     </div>
//     <div className="mt-auto">
//       <h3 className="text-sm font-semibold text-gray-600 mb-2">Resources</h3>
//       {resources.map((resource, index) => (
//         <div key={index} className="flex justify-between text-sm">
//           <span className="text-gray-600">{resource.name}</span>
//           <span className="text-gray-800 font-medium" style={{ color: '#383874' }}>{resource.count.padStart(1, '0')}</span>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default function Component() {
//   const cards = [
//     {
//       title: "Under Utilize",
//       percentage: 20,
//       total: 1082,
//       change: 10,
//       color: "text-purple-500",
//       resources: [
//         { name: "EC2", count: "00" },
//         { name: "EBS", count: "02" },
//         { name: "RDS DB", count: "03" },
//         { name: "Lambda", count: "03" },
//         { name: "Auto Scaling", count: "01" },
//       ],
//     },
//     {
//       title: "Over-provisioned",
//       percentage: 19,
//       total: 833,
//       change: 10,
//       color: "text-orange-500",
//       resources: [
//         { name: "EC2", count: "04" },
//         { name: "EBS", count: "01" },
//         { name: "RDS DB", count: "00" },
//         { name: "Lambda", count: "00" },
//         { name: "Auto Scaling", count: "01" },
//       ],
//     },
//     {
//       title: "Needs Optimization",
//       percentage: 32,
//       total: 3833,
//       change: 10,
//       color: "text-green-500",
//       resources: [
//         { name: "EC2", count: "00" },
//         { name: "EBS", count: "00" },
//         { name: "RDS DB", count: "00" },
//         { name: "Lambda", count: "02" },
//         { name: "Auto Scaling", count: "01" },
//       ],
//     },
//     {
//       title: "Abandoned",
//       percentage: 29,
//       total: 3264,
//       change: 10,
//       color: "text-pink-500",
//       resources: [
//         { name: "EC2", count: "00" },
//         { name: "EBS", count: "00" },
//         { name: "RDS DB", count: "00" },
//         { name: "Lambda", count: "01" },
//         { name: "Auto Scaling", count: "01" },
//       ],
//     },
//   ];

//   return (
//     <div className="flex flex-wrap justify-start gap-4 p-4 bg-gray-100 h-30">
//       <div className="flex flex-row flex-wrap justify-start gap-1">
//         {cards.map((card, index) => (
//           <Card key={index} {...card} />
//         ))}
//       </div>
//     </div>
//   );
// }



import React from 'react';

const CircularProgress = ({ percentage, color }) => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20">
    <svg className="w-30 h-39" viewBox="0 0 100 100">
      <circle
        className="text-gray-200 stroke-current"
        strokeWidth="10"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
      ></circle>
      <circle
        className={`${color} stroke-current`}
        strokeWidth="10"
        strokeLinecap="round"
        cx="50"
        cy="50"
        r="40"
        fill="transparent"
        strokeDasharray={`${percentage * 2.51} 251.2`}
        transform="rotate(-90 50 50)"
      ></circle>
    </svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-md sm:text-md font-semibold" style={{ color: '#383874' }}>{percentage}%</span>
    </div>
  </div>
);

const Card = ({ title, percentage, total, change, color, resources }) => (
  <div className="bg-white rounded-lg shadow-md p-4 w-full sm:w-64 md:w-72 flex flex-col">
    <div className="flex items-center justify-between mb-4">
      <CircularProgress percentage={percentage} color={color} />
      <div className="text-right">
        <h2 className="text-lg font-semibold" style={{ fontSize: "16px", color: '#383874' }}>{title}</h2>
        <div className="flex justify-between items-baseline">
          <p className="text-xl sm:text-2xl font-bold" style={{ color: '#383874' }}>{total}</p>
          <p className="text-sm text-green-500 ml-2">▲ {change}%</p>
        </div>
      </div>
    </div>
    <div className="mt-auto">
      <h3 className="text-sm font-semibold" style={{ color: '#383874' }}>Resources</h3>
      {resources.map((resource, index) => (
        <div key={index} className="flex justify-between text-sm">
          <span className="text-gray-600">{resource.name}</span>
          <span className="text-gray-800 font-medium" style={{ color: '#383874' }}>{resource.count.padStart(1, '0')}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function Component() {
  const cards = [
    {
      title: "Under Utilize",
      percentage: 20,
      total: 1082,
      change: 10,
      color: "text-purple-500",
      resources: [
        { name: "EC2", count: "00" },
        { name: "EBS", count: "02" },
        { name: "RDS DB", count: "03" },
        { name: "Lambda", count: "03" },
        { name: "Auto Scaling", count: "01" },
      ],
    },
    {
      title: "Over-provisioned",
      percentage: 19,
      total: 833,
      change: 10,
      color: "text-orange-500",
      resources: [
        { name: "EC2", count: "04" },
        { name: "EBS", count: "01" },
        { name: "RDS DB", count: "00" },
        { name: "Lambda", count: "00" },
        { name: "Auto Scaling", count: "01" },
      ],
    },
    {
      title: "Needs Optimization",
      percentage: 32,
      total: 3833,
      change: 10,
      color: "text-green-500",
      resources: [
        { name: "EC2", count: "00" },
        { name: "EBS", count: "00" },
        { name: "RDS DB", count: "00" },
        { name: "Lambda", count: "02" },
        { name: "Auto Scaling", count: "01" },
      ],
    },
    {
      title: "Abandoned",
      percentage: 29,
      total: 3264,
      change: 10,
      color: "text-pink-500",
      resources: [
        { name: "EC2", count: "00" },
        { name: "EBS", count: "00" },
        { name: "RDS DB", count: "00" },
        { name: "Lambda", count: "01" },
        { name: "Auto Scaling", count: "01" },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap justify-start gap-4 p-4 bg-gray-100 h-30">
      <div className="flex flex-row flex-wrap justify-start gap-1">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
