import React from 'react';
import { ChevronDown } from "lucide-react";

const InstanceComparisonHeader = () => {
  return (
    <div className="bg-white p-4 rounded-lg  m-6">
      <h2 className="text-lg font-semibold mb-1" style={{color:'#383874'}}>Compare t4g.micro (option 1) with t2.micro (current)</h2>
      <p className="text-xs text-gray-600 mb-3" style={{color:'#383874'}}>Use the graphed metrics below to determine which instance type is the optimal choice for your application.</p>
      
      <div className="flex flex-row gap-2">
        <div className="flex-1">
          <label htmlFor="statistic" className="block text-xs font-medium text-gray-700 mb-1">Statistic</label>
          <div className="relative">
            <select id="statistic" className="w-full border border-gray-300 rounded-md p-1 pr-8 text-sm appearance-none">
              <option value="maximum">Maximum</option>
              <option value="average">Average</option>
              <option value="minimum">Minimum</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
        
        <div className="flex-1">
          <label htmlFor="timeRange" className="block text-xs font-medium text-gray-700 mb-1">Time Range</label>
          <div className="relative">
            <select id="timeRange" className="w-full border border-gray-300 rounded-md p-1 pr-8 text-sm appearance-none">
              <option value="2weeks">Last 2 weeks</option>
              <option value="1month">Last month</option>
              <option value="3months">Last 3 months</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default InstanceComparisonHeader;