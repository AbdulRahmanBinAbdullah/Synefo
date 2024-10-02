import React from 'react';

const VolumeBarComponent = ({ totalCost }) => {
  return (
    <div className="flex justify-start items-center bg-white rounded-lg shadow-sm p-4 mx-6">
      <div className="flex items-center space-x-4">
        <span className="text-indigo-900 text-lg">Volume ID:</span>
        <span className="text-indigo-900 text-lg" style={{ marginLeft: '12px' }}>
          {totalCost}
        </span>
      </div>
    </div>
  );
};

export default function VolumeBar() {
  return (
    <VolumeBarComponent totalCost="vol-069160df434c07318" />
  );
}