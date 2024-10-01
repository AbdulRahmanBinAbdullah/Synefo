// RDSRecommendationPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../index.css'; 
import axios from 'axios';
import { APP_PREFIX_PATH } from 'Configs/AppConfig';

function RDSRecommendationPage() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [selectedOption, setSelectedOption] = useState(null); 
  const [selectedInstanceId, setSelectedInstanceId] = useState(null);
  const [remediationConfirmation, setRemediationConfirmation] = useState(false);
  const [suppressingConfirmation, setSuppressingConfirmation] = useState(false);
  const [filter, setFilter] = useState('All Resources'); // Add filter state

  // Dummy EC2 instance data for testing
  
    // States to hold fetched recommendations
    const [Recommendations, setRecommendations] = useState([]);
    const [recommendationsData, setRecommendationsData] = useState([]);
    const [ec2Recommendations, setEc2Recommendations] = useState([]);
    const [ebsRecommendations, setEbsRecommendations] = useState([]);
    const [rdsRecommendations, setRdsRecommendations] = useState([]);
    const [lambdaRecommendations, setLambdaRecommendations] = useState([]);
    const [autoScalingRecommendations, setAutoScalingRecommendations] = useState([]);
  
    // Function to fetch recommendations from the backend API
    const fetchRecommendations = async () => {
      try {
        // Fetch EC2 Recommendations
        const rdsResponse = await axios.get(
          ' http://localhost:3000/dev/recommendations/rds?accountId=657907747545&region=us-east-1'
        );
        setRdsRecommendations(rdsResponse.data);
        
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };
  
    useEffect(() => {
      fetchRecommendations();
    }, []);
  
    // Handle option selection
    const handleOptionSelect = (index) => {
      setSelectedOption(index);
    };
  
    // Function to handle suppressing actions
    const handleSuppressing = () => {
      setSelectedInstanceId(null); 
      setSuppressingConfirmation(true); 
    };
  
    // Function to handle bubble click for instance selection
    const handleBubbleClick = (event) => {
      const bubble = event.target;
      const instanceId = bubble.dataset.dbIdentifier;
  
      bubble.classList.toggle('selected'); 
  
      if (bubble.classList.contains('selected')) {
        setSelectedInstanceId(instanceId);
      } else {
        setSelectedInstanceId(null);
      }
    };
  
    // Function to confirm suppressing an instance
    const handleSuppressingConfirm = () => {
      if (selectedInstanceId) { 
        const updatedInstances = rdsRecommendations.filter(
          (instance) => instance.id !== selectedInstanceId
        );
  
        // Update state to reflect the suppression
        setRdsRecommendations(updatedInstances);
        setSelectedInstanceId(null); 
        setSuppressingConfirmation(true);
      }
    }
  
    const handleSuppression = (instanceId) => {
      console.log(`Suppression clicked for instance: ${instanceId}`);
      // Add your suppression logic here, e.g., API call or state change
    };
    
    const handleRemediation = (instanceId) => {
      console.log(`Remediation clicked for instance: ${instanceId}`);
      // Add your remediation logic here, e.g., API call or state change
    };
  
  
     // Checkbox handling logic
     const handleCheckboxChange = (event, instanceId) => {
      if (event.target.checked) {
        setSelectedInstanceId(instanceId);
      } else {
        setSelectedInstanceId(null);
      }
    };
  
    const handleFilterChange = (event) => {
      const selectedFilter = event.target.value;
      setFilter(selectedFilter);
    if (selectedFilter === 'RDS DB') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization`, { state: {Recommendations} });
    } else if (selectedFilter === 'EC2') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization/ec2`, { state: { ec2Recommendations } });
    } else if (selectedFilter === 'EBS') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization/ebs`, { state: { ebsRecommendations } });
    } else if (selectedFilter === 'Lambda') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization/lambda`, { state: { lambdaRecommendations } });
    } else if (selectedFilter === 'Auto Scaling') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization/asg`, { state: { autoScalingRecommendations } });
    }
  };


  return (
    <div className="container">
      <div className='cost-optimization'>
        <h2>Cost Optimization</h2>

        <div className="filter-container">
          <select value={filter} onChange={handleFilterChange}>
            <option value="All Resources">RDS DB</option>
            <option value="EC2">EC2</option>
            <option value="EBS">EBS</option>
            <option value="RDS DB">All Resources</option>
            <option value="Lambda">Lambda</option>
            <option value="Auto Scaling">Auto Scaling</option>
          </select>
        </div>
      </div>
       {/* Display RDS Recommendations as a Table */}
       <div className='rds-container'>
        <div>
          <h3 className='title'>RDS Recommendations</h3>
          {rdsRecommendations.length > 0 ? (
            <table className="recommendations-table">
              <thead>
                <tr>
                  <th>DB Instance ID</th>
                  <th>DB Instance Name</th>
                  <th>Current Instance Class</th>
                  <th>Recommended Instance Class</th>
                  <th>Finding</th>
                  <th>Finding Reason</th>
                </tr>
              </thead>
              <tbody>
                {rdsRecommendations.map((rec, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        onChange={(event) => handleCheckboxChange(event, rec.dbIdentifier)}
                        checked={selectedInstanceId === rec.dbIdentifier}
                      />
                      {/* Display instance ID next to the checkbox */}
                      <span>{rec.dbIdentifier}</span>
                    </td>
                    <td>{rec.engine}</td>
                    <td>{rec.InstanceFinding}</td>
                    <td>{rec.InstancefindingReasons}</td>
                    <td>{rec.currentInstanceType}</td>
                    <td>{rec.recommendedInstanceType}</td>
                    <td>
                    {/* Add Suppression Button */}
                    <button onClick={() => handleSuppression(rec.instanceId)}>
                      Suppression
                    </button>

                    {/* Add Remediation Button */}
                    <button onClick={() => handleRemediation(rec.instanceId)}>
                      Remediation
                    </button>
                  </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No RDS recommendations available.</p>
          )}
        </div>
      </div>
      <div className="recommendations-actions">
        <button onClick={handleSuppressingConfirm}>Suppress</button>
        <button onClick={handleRemediation}>Remediate</button>
      </div>

      {suppressingConfirmation && (
        <SuppressingConfirmationModal onClose={() => setSuppressingConfirmation(false)} />
      )}
    </div>
  );
}

// Suppressing confirmation modal component
const SuppressingConfirmationModal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-body">
        <div className="check-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <p>Done! Instance successfully suppressed.</p>
        <button className="modal-button" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
};

export default RDSRecommendationPage;
