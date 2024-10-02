import React, { useState } from 'react';
import { ChevronDown } from "lucide-react";

const InstanceComparisonHeader = () => {
  const [timeRange, setTimeRange] = useState('last2weeks');

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm m-6">
      <h2 className="text-xl font-semibold mb-2" style={{color:'#383874'}}>Current Resource Utilization</h2>
      <p className="text-sm text-gray-600 mb-4" style={{color:'#383874'}}>The following graphed metrics show the utilization of the current resource during the look-back period.</p>
      
      <div className="relative inline-block w-64">
        <label htmlFor="timeRange" className="block text-sm font-medium text-gray-700 mb-1">
          Time Range
        </label>
        <div className="relative">
          <select
            id="timeRange"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="last2weeks">Last 2 weeks</option>
            <option value="lastmonth">Last month</option>
            <option value="last3months">Last 3 months</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstanceComparisonHeader;