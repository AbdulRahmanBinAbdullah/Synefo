


// import React from 'react';
// import costicon from "assets/img/allservices/costicon.png";
// import icon from "assets/img/allservices/Icon.png";
// import inactivity from "assets/img/allservices/inactivity-Icon.png";
// import throtles from "assets/img/allservices/throttlesrequest.png";
// import CircularProgress from './Circularprogress';

// const data = [
//   {
//     icon: costicon,
//     title: "Overall Cost",
//     amount: "$4,383",
//     change: "10%",
//     direction: "up",
//     showChange: true,
//     backgroundColor: "#8676FF"
//   },
//   {
//     icon: icon,
//     title: "Active Instances",
//     amount: "20",
//     showChange: false,
//     backgroundColor: "#8676FF"
//   },
//   {
//     icon: inactivity,
//     title: "Inactivity Instances",
//     amount: "05",
//     showChange: false,
//     backgroundColor: "#3697EF"
//   },
//   {
//     icon: throtles,
//     title: "Throttles Request",
//     amount: "04",
//     showChange: false,
//     backgroundColor: "#8676FF"
//   },
//   {
//     icon: <CircularProgress progress={48.3} size={48} strokeWidth={4} />,
//     title: 'Error Rate',
//     amount: "48.3%",
//     direction: "up",
//     showChange: true,
//     backgroundColor: "#8676FF"
//   }
// ];

// const CardComponentTailwind = () => {
//   return (
//     <div className="flex justify-between items-stretch space-x-4 p-4">
//       {data.map((item, index) => (
//         <div
//           key={index}
//           className="flex items-center bg-white shadow-lg rounded-lg p-3 flex-1"
//         >
//           <div className="rounded-lg p-2 flex justify-center items-center">
//             {typeof item.icon === 'string' ? (
//               <img
//                 src={item.icon}
//                 alt={item.title}
//                 className="w-12 h-12 rounded-lg"
//                 style={{
//                   backgroundColor: item.backgroundColor,
//                   boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//                   padding: '6px',
//                 }}
//               />
//             ) : (
//               <div>{item.icon}</div>
//             )}
//           </div>
//           <div className="ml-3 flex-1">
//             <p className="text-gray-700 text-sm">{item.title}</p>
//             <div className="flex items-center mt-1">
//               <p className="text-base font-bold text-gray-800">{item.amount}</p>
//               {item.showChange && (
//                 <div className={`flex items-center ml-1 ${item.direction === "up" ? "text-green-500" : "text-red-500"}`}>
//                   <span className="text-xs">{item.direction === "up" ? "▲" : "▼"}</span>
//                   <span className="text-xs ml-1">{item.change}</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardComponentTailwind;



import React from 'react';
import costicon from "assets/img/allservices/costicon.png";
import icon from "assets/img/allservices/Icon.png";
import inactivity from "assets/img/allservices/inactivity-Icon.png";
import throtles from "assets/img/allservices/throttlesrequest.png";
import CircularProgress from './Circularprogress';

const data = [
  {
    icon: costicon,
    title: "Overall Cost",
    amount: "$4,383",
    change: "10%",
    direction: "up",
    showChange: true,
    backgroundColor: "#8676FF"
  },
  {
    icon: icon,
    title: "Active Instances",
    amount: "20",
    showChange: false,
    backgroundColor: "#8676FF"
  },
  {
    icon: inactivity,
    title: "Inactivity Instances",
    amount: "05",
    showChange: false,
    backgroundColor: "#3697EF"
  },
  {
    icon: <CircularProgress progress={48.3} size={48} strokeWidth={4} />,
    title: 'Error Rate',
    amount: "48.3%",
    direction: "up",
    showChange: true,
    backgroundColor: "#8676FF"
  },
  {
    icon: throtles,
    title: "Throttles Request",
    amount: "04",
    showChange: false,
    backgroundColor: "#8676FF"
  },

];

const CardComponentTailwind = () => {
  return (
    <div className="flex justify-between items-stretch space-x-4 p-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center bg-white shadow-lg rounded-lg p-3 flex-1"
        >
          <div className="rounded-lg p-2 flex justify-center items-center">
            {typeof item.icon === 'string' ? (
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 rounded-lg"
                style={{
                  backgroundColor: item.backgroundColor,
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                  padding: '6px',
                }}
              />
            ) : (
              <div>{item.icon}</div>
            )}
          </div>
          <div className="ml-3 flex-1">
            <p  style={{ fontFamily: 'Roboto', fontSize: '12px', fontWeight: 500, lineHeight: '32px', letterSpacing: '0.44px', textAlign: 'left',color:'#383874'
 }}>
              {item.title}
            </p>
            <div className="flex items-center mt-1">
              <p className="text-base font-bold text-gray-800">{item.amount}</p>
              {item.showChange && (
                <div className={`flex items-center ml-1 ${item.direction === "up" ? "text-green-500" : "text-red-500"}`}>
                  <span className="text-xs">{item.direction === "up" ? "▲" : "▼"}</span>
                  <span className="text-xs ml-1">{item.change}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponentTailwind;
