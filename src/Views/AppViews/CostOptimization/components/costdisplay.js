import React from 'react';

const CostSummaryBar = ({ totalCost, totalSpend }) => {
  return (
<div className="flex justify-start items-center bg-white rounded-lg shadow-sm p-4 w-full mx-auto">
  <div className="flex items-center space-x-4">
    <span className="text-indigo-900 text-l">Total Cost</span>
    <span className="text-indigo-900 text-l" style={{ marginLeft: '12px' }}>${totalCost}</span>
  </div>
  <div className="w-px h-8 bg-gray-300 mx-4"></div> {/* Add margin on x-axis */}
  <div className="flex items-center space-x-4">
    <span className="text-indigo-900 text-l">Total Spend</span>
    <span className="text-indigo-900 text-l">${totalSpend}</span>
  </div>
</div>

  );
};

export default function CostSummaryBarExample() {
  return (
    <CostSummaryBar totalCost={1500} totalSpend={800} />
  );
}
