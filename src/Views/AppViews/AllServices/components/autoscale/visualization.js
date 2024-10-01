import React from 'react';
import SecurityGroups from './charts/securitygroups';
import SecurityGroupsRules from './charts/securitygrouprule';
import ElasticIp from './charts/elasticip';
import Keypairs from './charts/keypairs';
import Volumes from './charts/volumes';
import Snapshots from './charts/snapshots';
import Ami from './charts/ami';
// const EC2Dashboard = () => {
//   return (
//     <div className="p-2 bg-gray-100">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
//         <div className=" p-4 rounded-lg  h-96"> {/* Reduced card size */}
       
//           <SecurityGroups />

//         </div>
//         <div className="p-4 rounded-lg  h-96 mt-2" > {/* Reduced card size */}
      
//           <SecurityGroupsRules />
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
     
//         <div className="p-4 rounded-lg  h-96"> {/* Reduced card size, fixed height */}
        
//         <ElasticIp />

//         </div>
//         <div className="p-4 rounded-lg  h-96"> 
        
//        <Keypairs/>
//         </div>
//       </div>


   

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">

//       <div className="p-4 rounded-lg  h-96">
        
//           <Volumes />
//         </div>
//         <div className="p-4 rounded-lg  h-96"> {/* Reduced card size, fixed height */}

//           <Snapshots />
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-1 gap-4 m-4">

// <div className="p-4 rounded-lg  h-96">
  
//     <Ami />
// </div>
// </div>

    

//     </div>
//   );
// };

// export default EC2Dashboard;



const EC2Dashboard = () => {
  return (
    <div className="p-2 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg shadow-md"> {/* Reduced card size */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Security Group Details</h2>
         

          <SecurityGroups />

        </div>
        <div className="bg-white p-4 rounded-lg shadow-md" > {/* Reduced card size */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Security Group Inbound and Outbound Rule Count</h2>

          <SecurityGroupsRules />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
     
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>List Elastic IP</h2>

        <ElasticIp />

        </div>
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> 
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Key Pairs</h2>

       <Keypairs/>
        </div>
      </div>


   

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg  h-96">
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Volumes</h2>

          <Volumes />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md h-96"> {/* Reduced card size, fixed height */}
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Snapshots</h2>

          <Snapshots />
        </div>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 m-4">
        <div className="bg-white p-4 rounded-lg  h-96">
        <h2 className="font-bold mb-4" sx={{fontFamily:'poppins'}} style={{color:'#383874'}}>Amazon Machine Images (AMIs)</h2>

          <Ami />
        </div>
        
      </div>



    

    </div>
  );
};

export default EC2Dashboard;