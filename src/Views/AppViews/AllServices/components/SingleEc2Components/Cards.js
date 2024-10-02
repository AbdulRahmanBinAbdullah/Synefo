
// import React from 'react';

// const UtilizationCards = () => {
//   const data = [
//     {
//       title: 'CPU Utilization',
//       current: '25%',
//       average: '30%',
//       max: '40%',
//     },
//     {
//       title: 'Memory Utilization',
//       current: '15GB',
//       average: '25GB',
//       max: '50GB',
//     },
//     {
//       title: 'Storage Utilization',
//       'Root volume usage': '25%',
//       'EBS volume 1 usage': '30%',
//       'EBS volume 2 usage': '40%',
//     },
//     {
//       title: 'Network Utilization',
//       'Inbound Traffic': '25%',
//       'Outbound Traffic': '30%',
//       'Data Transferred': '40%',
//     },
//   ];

//   return (
//     <div className="flex justify-around mt-4">
//       {data.map((item, index) => (
//         <div
//           key={index}
//           className="bg-white shadow-md rounded-lg m-2 border border-gray-200"
//         >
//           <div className='px-4 pt-2'>
//             {/* <img src='' alt='' /> */}
//             <h2 className="text-lg font-semibold text-gray-700">{item.title}</h2>
//           </div>
//           <hr className="my-2" />
//           <div className="text-sm text-gray-500 py-2 px-6">
//             {Object.entries(item).map(([key, value]) =>
//               key !== 'title' ? (
//                 <div className="flex justify-between my-1" key={key}>
//                   <span>{key}</span>
//                   <span className="font-medium text-gray-800">{value}</span>
//                 </div>
//               ) : null
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UtilizationCards;



import React from 'react';

const UtilizationCards = () => {
  const data = [
    {
      title: 'CPU Utilization',
      current: '25%',
      average: '30%',
      max: '40%',
    },
    {
      title: 'Memory Utilization',
      current: '15GB',
      average: '25GB',
      max: '50GB',
    },
    {
      title: 'Storage Utilization',
      'Root volume usage': '25%',
      'EBS volume 1 usage': '30%',
      'EBS volume 2 usage': '40%',
    },
    {
      title: 'Network Utilization',
      'Inbound Traffic': '25%',
      'Outbound Traffic': '30%',
      'Data Transferred': '40%',
    },
  ];

  return (
    <div className="flex justify-around flex-wrap">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg w-80 m-4 border border-gray-200"
        >
          <div className="px-4 pt-3">
            <h2 className="text-lg font-semibold text-gray-700">{item.title}</h2>
          </div>
          <hr className="my-2" />
          <div className="text-sm text-gray-500 py-2 px-8">
            {Object.entries(item).map(([key, value]) =>
              key !== 'title' ? (
                <div className="flex justify-between my-2" key={key}>
                  <span className='font-medium text-base'>{key}</span>
                  <span className="font-semibold text-base text-gray-800">{value}</span>
                </div>
              ) : null
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UtilizationCards;
