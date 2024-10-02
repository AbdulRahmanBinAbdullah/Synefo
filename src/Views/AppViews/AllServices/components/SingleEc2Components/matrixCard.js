// import React from 'react';
// import Security from "../../../../../assets/img/wafr/security.png"
// import TotalCost from "../../../../../assets/img/wafr/total-cost.png"
// import TotalReliability from "../../../../../assets/img/wafr/total-reliability.png"
// import Operations  from "../../../../../assets/img/wafr/operations.png"
// import Performance from "../../../../../assets/img/wafr/performance.png"

// class MetricCards extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedCard: null
//     };
//   }

//   handleCardClick = (index) => {
//     this.setState({ selectedCard: index });
//   }

//   render() {
//     const metrics = [
//       { title: 'Security', imgSrc: Security, color: 'bg-[#FAA24B] ', score: '0/10' },
//       { title: 'Total Cost', imgSrc: TotalCost, color: 'bg-[#8198BE] ', score: '0/10' },
//       { title: 'Total Reliability', imgSrc: TotalReliability, color: 'bg-[#66C8FF] ', score: '0/10' },
//       { title: 'Operations', imgSrc: Operations, color: 'bg-[#FF708B] ', score: '0/10' },
//       { title: 'Performance', imgSrc: Performance, color: 'bg-[#8676FF] ', score: '0/10' },
//     ];

//     return (
//       <div className="flex space-x-4 w-full">
//         {metrics.map((metric, index) => (
//           <div
//             key={index}
//             className={`flex items-center w-full bg-white py-4 px-4 rounded-lg cursor-pointer transition-all ${
//               this.state.selectedCard === index ? 'border-2 border-blue-500' : 'border border-gray-200'
//             } `}
//             onClick={() => this.handleCardClick(index)}
//           >
//             {/* <metric.icon className={`w-10 h-10 mr-3 p-2 rounded-lg ${metric.color}`} /> */}
//             <img
//               src={metric.imgSrc}
//               alt={metric.title}
//               className={`w-10 h-10 mr-3 p-2 rounded-lg ${metric.color}`}
//             />
//             <div>
//               <h3 className="font-semibold text-sm">{metric.title}</h3>
//               <p className="text-md text-black mt-1 text-nowrap">{metric.score} <span className="text-gray-500">Answer Saved</span></p>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default MetricCards;



import React from 'react';
import costicon from "assets/img/allservices/costicon.png";
import icon from "assets/img/allservices/Icon.png";
import inactivity from "assets/img/allservices/inactivity-Icon.png";
import CircularProgress from '../Circularprogress';

const data = [
  {
    icon: costicon,
    title: "Overall Cost",
    amount: "Synetiks",
    // change: "10%",
    // direction: "up",
    showChange: true,
    backgroundColor: "#8676FF"
  },
  {
    icon: icon,
    title: "Active Instances",
    amount: "002",
    showChange: false,
    backgroundColor: "#8676FF"
  },
  {
    icon: inactivity,
    title: "Inactivity Instances",
    amount: "ID:i-0123456",
    showChange: false,
    backgroundColor: "#3697EF"
  },
  {
    icon: <CircularProgress progress={48.3} size={48} strokeWidth={4} />,
    title: 'Error Rate',
    amount: "48.3%",
    change: "10%",
    direction: "up",
    showChange: true,
    backgroundColor: "#8676FF"
  },
  // {
  //   icon: throtles,
  //   title: "Throttles Request",
  //   amount: "04",
  //   showChange: false,
  //   backgroundColor: "#8676FF"
  // },

];

const CardComponentTailwind = () => {
  return (
    <div className="flex start  space-x-4 p-2">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center bg-white  rounded-lg p-1 flex-1"
        >
          <div className="rounded-lg p-2 flex justify-center items-center">
            {typeof item.icon === 'string' ? (
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 rounded-lg"
                style={{
                  backgroundColor: item.backgroundColor,
                  padding: '10px',
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
                <div className={`flex items-center ml-1 ${item.direction === "up" ? "text-green-500" : ""}`}>
                  <span className="text-xs">{item.direction === "up" ? "▲" : ""}</span>
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