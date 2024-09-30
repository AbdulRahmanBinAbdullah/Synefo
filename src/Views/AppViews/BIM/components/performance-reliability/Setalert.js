// import React, { useState,useEffect,useRef } from 'react';
// import { ChevronDown, X } from 'lucide-react';

// const SetAlertForm = ({ open, onClose }) => {
//     const [instanceName, setInstanceName] = useState('');
//     const [alertName, setAlertName] = useState('');
//     const [selectedMetric, setSelectedMetric] = useState('');
//     const [comparisonOperator, setComparisonOperator] = useState('');
//     const modalRef = useRef(null);
  
//     const handleClose = () => {
//       onClose();
//     };
  
//     useEffect(() => {
//       const handleClickOutside = (event) => {
//         if (modalRef.current && !modalRef.current.contains(event.target)) {
//           handleClose();
//         }
//       };
  
//       if (open) {
//         document.addEventListener('mousedown', handleClickOutside);
//       }
  
//       return () => {
//         document.removeEventListener('mousedown', handleClickOutside);
//       };
//     }, [open, onClose]);
//   return (
//     open && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
//         <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
//           <div className="flex justify-end mb-4">
//             <button onClick={handleClose}>
//               <X className="text-gray-400 hover:text-gray-600" size={24} />
//             </button>
//           </div>
//           <h2 className="text-xl font-bold mb-4 text-indigo-800">Set Alert</h2>
//           <form className="space-y-4">
//             <div className="relative">
//               <select
//                 className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
//                 value={instanceName}
//                 onChange={(e) => setInstanceName(e.target.value)}
//               >
//                 <option value="" disabled hidden>Type Instance Name</option>
//                 <option value="instance1">Instance 1</option>
//                 <option value="instance2">Instance 2</option>
//               </select>
//               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             </div>

//             <input
//               type="text"
//               placeholder="Type Alert Name"
//               className="w-full p-2 border rounded-md"
//               value={alertName}
//               onChange={(e) => setAlertName(e.target.value)}
//             />

//             <div className="flex space-x-2">
//               <div className="relative flex-1">
//                 <select
//                   className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
//                   value={selectedMetric}
//                   onChange={(e) => setSelectedMetric(e.target.value)}
//                 >
//                   <option value="" disabled hidden>Select Metrics</option>
//                   <option value="cpu">CPU</option>
//                   <option value="memory">Memory</option>
//                 </select>
//                 <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//               </div>
//               <input
//                 type="text"
//                 placeholder="CPU-% OR Memory-Bytes"
//                 className="flex-1 p-2 border rounded-md"
//                 readOnly
//               />
//             </div>

//             <div className="relative">
//               <select
//                 className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
//                 value={comparisonOperator}
//                 onChange={(e) => setComparisonOperator(e.target.value)}
//               >
//                 <option value="" disabled hidden>Select comparison operator</option>
//                 <option value="gt">&gt;</option>
//                 <option value="lt">&lt;</option>
//                 <option value="eq">=</option>
//               </select>
//               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             </div>

//             <div className="flex justify-end space-x-2">
//               <button type="button" className="px-4 py-2 border rounded-md text-indigo-600 hover:bg-indigo-50" onClick={handleClose}>
//                 Cancel
//               </button>
//               <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
//                 Remind me
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   );
// };

// export default SetAlertForm;



// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronDown, X } from 'lucide-react';

// const SetAlertForm = ({ open, onClose }) => {
//   const [instanceName, setInstanceName] = useState('');
//   const [alertName, setAlertName] = useState('');
//   const [selectedMetric, setSelectedMetric] = useState('');
//   const [comparisonOperator, setComparisonOperator] = useState('');
//   const modalRef = useRef(null);

//   const handleClose = () => {
//     onClose();
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         handleClose();
//       }
//     };

//     if (open) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [open, onClose]);

//   return (
//     open && (
//       <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
//         <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
//           <div className="flex justify-between items-center mb-4">
//             {/* <h2 className='text-500' sx={{fontFamily:'poppins'}}>Set Alert</h2> */}
//             <h2 
//   style={{ fontWeight: 500, color: '#383874'
//     , fontFamily: 'Poppins' }}
// >
//   Set Alert
// </h2>

//             <button onClick={handleClose}>
//               <X className="text-gray-400 hover:text-gray-600" size={24} />
//             </button>
//           </div>
//           <form className="space-y-4">
//             <div className="relative">
//               <select
//                 className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
//                 value={instanceName}
//                 onChange={(e) => setInstanceName(e.target.value)}
//                 style={{ fontSize: '12px' ,color:'#667085',fontWeight:400}} // Set font size for select options
//               >
//                 <option value="" disabled hidden style={{ fontSize: '12px' }}>Type Instance Name</option>
//                 <option value="instance1" style={{ fontSize: '12px' }}>Instance 1</option>
//                 <option value="instance2" style={{ fontSize: '12px' }}>Instance 2</option>
//               </select>
//               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             </div>

//             <input
//               type="text"
//               placeholder="Type Alert Name"
//               className="w-full p-2 border rounded-md"
//               style={{ fontSize: '12px',color:'#667085',fontWeight:400 }} // Set font size for placeholder
//               value={alertName}
//               onChange={(e) => setAlertName(e.target.value)}
//             />

//             <div className="flex space-x-2">
//               <div className="relative flex-1">
//                 <select
//                   className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
//                   value={selectedMetric}
//                   onChange={(e) => setSelectedMetric(e.target.value)}
//                   style={{ fontSize: '12px' ,color:'#667085',fontWeight:400}} // Set font size for select options
//                 >
//                   <option value="" disabled hidden style={{ fontSize: '12px' }}>Select Metrics</option>
//                   <option value="cpu" style={{ fontSize: '12px' }}>CPU</option>
//                   <option value="memory" style={{ fontSize: '12px' }}>Memory</option>
//                 </select>
//                 <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="CPU-% OR Memory-Bytes"
//                 className="flex-1 p-2 border rounded-md"
//                 style={{ fontSize: '12px' ,color:'#667085',fontWeight:400}} // Set font size for placeholder
//               />
//             </div>

//             <div className="relative">
//               <select
//                 className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
//                 value={comparisonOperator}
//                 onChange={(e) => setComparisonOperator(e.target.value)}
//                 style={{ fontSize: '12px',color:'#667085',fontWeight:400 }} // Set font size for select options
//               >
//                 <option value="" disabled hidden style={{ fontSize: '12px' }}>Select comparison operator</option>
//                 <option value="gt" style={{ fontSize: '12px' }}>&gt;</option>
//                 <option value="lt" style={{ fontSize: '12px' }}>&lt;</option>
//                 <option value="eq" style={{ fontSize: '12px' }}>=</option>
//               </select>
//               <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             </div>

//             <div className="flex justify-center space-x-2">
//   <button 
//     type="button" 
//     className="px-4 py-2 border rounded-md text-indigo-600 hover:bg-indigo-50" 
//     onClick={handleClose} 
//     style={{ fontSize: '16px',fontWeight:600,color:'#384CFF',borderColor:'#384CFF' }}
//   >
//     Cancel
//   </button>
//   <button 
//     type="submit" 
//     className="px-4 py-2  text-white rounded-md hover:bg-indigo-700" 
//     style={{ fontSize: '16px',fontWeight:600,backgroundColor:'#384CFF'    }}
//   >
//     Remind me
//   </button>
// </div>

//           </form>
//         </div>
//       </div>
//     )
//   );
// };

// export default SetAlertForm;




import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, X, Check } from 'lucide-react';
import tick from 'assets/img/allservices/tick.png'
const SetAlertForm = ({ open, onClose }) => {
  const [instanceName, setInstanceName] = useState('');
  const [alertName, setAlertName] = useState('');
  const [selectedMetric, setSelectedMetric] = useState('');
  const [comparisonOperator, setComparisonOperator] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const modalRef = useRef(null);

  const handleClose = () => {
    onClose();
    setShowConfirmation(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, onClose]);

  const ConfirmationPopup = () => (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50 ">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="mb-4">
          {/* <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
            <Check className="text-white" size={32} />
          </div> */}

          <img src={tick} alt='done' style={{width:'65%',marginLeft:'23px'}} />
        </div>
        <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Poppins', color: '#383874' }}>Done!</h2>
        <p className="mb-2" style={{ fontFamily: 'Poppins', color: '#383874' }}>Alert {alertName} is set</p>
        <p className="mb-4" style={{ fontFamily: 'Poppins', color: '#383874' }}>{selectedMetric} {comparisonOperator} 20%</p>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={handleClose}
          style={{ fontFamily: 'Poppins', fontWeight: 600, backgroundColor: '#384CFF' }}
        >
          Done
        </button>
      </div>
    </div>
  );

  return (
    open && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
        {showConfirmation ? (
          <ConfirmationPopup />
        ) : (
          <div ref={modalRef} className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 
                style={{ fontWeight: 500, color: '#383874', fontFamily: 'Poppins' }}
              >
                Set Alert
              </h2>
              <button onClick={handleClose}>
                <X className="text-gray-400 hover:text-gray-600" size={24} />
              </button>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="relative">
                <select
                  className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
                  value={instanceName}
                  onChange={(e) => setInstanceName(e.target.value)}
                  style={{ fontSize: '12px', color: '#667085', fontWeight: 400, fontFamily: 'Poppins' }}
                >
                  <option value="" disabled hidden>Type Instance Name</option>
                  <option value="instance1">Instance 1</option>
                  <option value="instance2">Instance 2</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>

              <input
                type="text"
                placeholder="Type Alert Name"
                className="w-full p-2 border rounded-md"
                style={{ fontSize: '12px', color: '#667085', fontWeight: 400, fontFamily: 'Poppins' }}
                value={alertName}
                onChange={(e) => setAlertName(e.target.value)}
              />

              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <select
                    className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
                    value={selectedMetric}
                    onChange={(e) => setSelectedMetric(e.target.value)}
                    style={{ fontSize: '12px', color: '#667085', fontWeight: 400, fontFamily: 'Poppins' }}
                  >
                    <option value="" disabled hidden>Select Metrics</option>
                    <option value="CPU">CPU</option>
                    <option value="Memory">Memory</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="CPU-% OR Memory-Bytes"
                  className="flex-1 p-2 border rounded-md"
                  style={{ fontSize: '12px', color: '#667085', fontWeight: 400, fontFamily: 'Poppins' }}
                />
              </div>

              <div className="relative">
                <select
                  className="w-full p-2 border rounded-md appearance-none bg-white pr-8"
                  value={comparisonOperator}
                  onChange={(e) => setComparisonOperator(e.target.value)}
                  style={{ fontSize: '12px', color: '#667085', fontWeight: 400, fontFamily: 'Poppins' }}
                >
                  <option value="" disabled hidden>Select comparison operator</option>
                  <option value=">">&gt;</option>
                  <option value="&lt;">&lt;</option>
                  <option value="=">=</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>

              <div className="flex justify-center space-x-2">
                <button 
                  type="button" 
                  className="px-4 py-2 border rounded-md text-indigo-600 hover:bg-indigo-50" 
                  onClick={handleClose} 
                  style={{ fontSize: '16px', fontWeight: 600, color: '#384CFF', borderColor: '#384CFF', fontFamily: 'Poppins' }}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 text-white rounded-md hover:bg-indigo-700" 
                  style={{ fontSize: '16px', fontWeight: 600, backgroundColor: '#384CFF', fontFamily: 'Poppins' }}
                >
                  Remind me
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    )
  );
};

export default SetAlertForm;