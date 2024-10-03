import React, { useEffect, useState } from 'react';
import RemediatePopup from '../remediate';
import axios from 'axios';

export default function Ec2Recommendations() {
  const [instances, setInstances] = useState([]);
  const [selectedInstance, setSelectedInstance] = useState(null); // Track selected instance
  const [showRemediatePopup, setShowRemediatePopup] = useState(false);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://b3mqipcan0.execute-api.us-east-1.amazonaws.com/dev/recommendations/ec2?accountId=657907747545&region=us-east-1',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        const formattedInstances = result.map((instance) => ({
          id: instance.instanceId,
          name: instance.instanceName,
          finding: instance.finding.replace(/_/g, ' '), // Replace underscores with spaces
          findingReason: instance.findingReason || '-',
          recommendationState:
            instance.recommendationInstanceState.charAt(0).toUpperCase() +
            instance.recommendationInstanceState.slice(1),
          currentType: instance.currentInstanceType,
          recommendedType: instance.recommendedInstanceType,
          currentCost: instance.currentCost, // Add current cost
          recommendedCost: instance.recommendedCost, // Add recommended cost
        }));
        setInstances(formattedInstances);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleInstanceSelection = (instance) => {
    setSelectedInstance(instance); // Set selected instance on checkbox click
  };

  const handleRemediationClick = async () => {
    if (selectedInstance) {
      // Prepare request data
      const requestData = {
        instanceId: selectedInstance.instanceId,
        recommendedType: selectedInstance.recommendedInstanceType,
        currentType: selectedInstance.currentInstanceType,
        recommendationState: selectedInstance.recommendedCost,
      };
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      };
  
      // fetch(
      //   'https://b3mqipcan0.execute-api.us-east-1.amazonaws.com/dev/instances/resize?accountId=657907747545&instanceId=i-068be6cc8c0087aa1&region=us-east-1', // Replace with actual remediation API endpoint
      //   requestOptions
      // )
      //   .then((response) => {
      //     if (!response.ok) {
      //       throw new Error(`Server responded with status: ${response.status}`);
      //     }
      //     // Check if there's content to parse
      //     if (response.headers.get('Content-Length') === '0') {
      //       return null;  // No content in the response
      //     }
  
      //     return response.json();  // Parse the response if not empty
      //   })
      //   .then((result) => {
      //     if (result && result.success) {
      //       alert('Remediation successful!');
      //       setShowRemediatePopup(true); // Show success popup
      //     } else {
      //       alert('Failed to remediate the instance.');
      //     }
      //   })
      //   .catch((error) => {
      //     console.error('Error during remediation:', error);
      //     alert('Error during remediation.');
      //   });
      try {
        const response = await axios.get(
          'https://b3mqipcan0.execute-api.us-east-1.amazonaws.com/dev/instances/resize?accountId=657907747545&instanceId=i-068be6cc8c0087aa1&region=us-east-1',requestOptions
          // {
          //   headers: {
          //     'Content-Type': 'application/json', // Set any headers if necessary
          //   },
          //   // You can also include requestOptions here if needed
          // }
        );
    
        // Check if response is OK and if there's content
        if (response.status !== 200) {
          throw new Error(`Server responded with status: ${response.status}`);
        }
    
        if (response.data && response.data.success) {
          alert('Remediation successful!');
          setShowRemediatePopup(true); // Show success popup
        } else {
          alert('Failed to remediate the instance.');
        }
      } catch (error) {
        console.error('Error during remediation:', error);
        alert('Error during remediation.');
      }
    } else {
      alert('Please select an instance for remediation.');
    }
  };
  

  const handleClosePopup = () => {
    setShowRemediatePopup(false);
    setSelectedInstance(null); // Clear selected instance after closing
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">
            Recommendations for EC2 Instances ({instances.length})
          </h2>
          <div className="space-x-2">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              onClick={handleRemediationClick} // Call remediation API
            >
              Remediation
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
              Suppressing
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {/* Table headers */}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Instance ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Finding
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recommended Type
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {instances.map((instance, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600"
                        onChange={() => handleInstanceSelection(instance)} // Set instance when checked
                      />
                      <span>{instance.id}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {instance.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {instance.finding}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {instance.currentType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {instance.recommendedType}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {showRemediatePopup && selectedInstance && (
        <RemediatePopup
          onClose={handleClosePopup}
          recommendationData={selectedInstance} // Pass selected instance data
        />
      )}
    </div>
  );
}
