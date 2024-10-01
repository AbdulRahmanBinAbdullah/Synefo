import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const RegionalCostDistribution = () => {
  const regions = [
    { name: 'US East(ohio)', cost: 779.94, color: '#FF9999' },
    { name: 'US East(N.Virginia)', cost: 237.75, color: '#FFDD99' },
    { name: 'US West(N.California)', cost: 320.80, color: '#FFB366' },
    { name: 'Asia Pacific(HongKong)', cost: 310.67, color: '#99FF99' },
    { name: 'Asia Pacific(Hyderabad)', cost: 765.13, color: '#9999FF' },
  ];

  const totalCost = regions.reduce((sum, region) => sum + region.cost, 0).toFixed(2);

  const data = {
    labels: regions.map(region => region.name),
    datasets: [{
      data: regions.map(region => region.cost),
      backgroundColor: regions.map(region => region.color),
      borderColor: regions.map(region => region.color),
      borderWidth: 1,
    }],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    
  };

  return (
   
        <div className="flex items-center justify-between">
            <div  className='w-1/3' sx={{  ml: { s:0,m:'0px',l:0} }}>



            <Doughnut data={data} options={options} />
          </div>
          <div className="mr-3">
            <div className="flex items-center mb-4">
              <span className="text-gray-700 mr-2 font-bold" style={{fontWeight:'700px',color:'#383874'}}>TOTAL MONTHLY COST: </span>
              <span className="ext-gray-800 font-bold" style={{fontWeight:'700px',color:'#383874'}}>${totalCost}</span>
            </div>
            {regions.map((region, index) => (
              <div key={index} className="flex items-center mb-2">
                <div
                
                  style={{ backgroundColor: region.color,
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    marginRight: '10px',
                   }}
                />
                <span className="flex-grow "  style={{fontWeight:'500px',color:'#383874'}}>{region.name}</span>
                <span className=" ml-3" style={{fontWeight:'500px',color:'#383874'}}>${region.cost.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      
  );
};

export default RegionalCostDistribution;