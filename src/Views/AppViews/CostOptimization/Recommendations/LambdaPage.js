// LambdaRecommendationPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import { APP_PREFIX_PATH } from 'Configs/AppConfig';
import axios from 'axios';

function LambdaRecommendationPage() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedInstanceId, setSelectedInstanceId] = useState(null);
  const [remediationConfirmation, setRemediationConfirmation] = useState(false);
  const [suppressingConfirmation, setSuppressingConfirmation] = useState(false);
  const [filter, setFilter] = useState('All Resources');

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
      const lambdaResponse = await axios.get(
        ' http://localhost:3000/dev/recommendations/lambda?accountId=657907747545&region=us-east-1'
      );
      setLambdaRecommendations(lambdaResponse.data);
      
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
  const handleSuppression = () => {
    setSelectedInstanceId(null); 
    setSuppressingConfirmation(true); 
  };

  // Function to handle bubble click for instance selection
  const handleBubbleClick = (event) => {
    const bubble = event.target;
    const instanceId = bubble.dataset.instanceId;

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
      const updatedInstances = lambdaRecommendations.filter(
        (instance) => instance.id !== selectedInstanceId
      );

      // Update state to reflect the suppression
      setLambdaRecommendations(updatedInstances);
      setSelectedInstanceId(null); 
      setSuppressingConfirmation(true);
    }
  }

  const handleRemediation = () => {
    if (selectedInstanceId) {
      // Navigate to remediation page with selected instance ID
      alert(`Navigating to remediation for instance ${selectedInstanceId}`);
      // navigate('/remediation', { state: { instanceId: selectedInstanceId } }); // Example
    } else {
      alert('Please select an instance for remediation.');
    }
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
    if (selectedFilter === 'Lambda') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization`, { state: {Recommendations} });
    } else if (selectedFilter === 'EC2') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization/ec2`, { state: { ec2Recommendations } });
    } else if (selectedFilter === 'EBS') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization/ebs`, { state: { ebsRecommendations } });
    } else if (selectedFilter === 'RDS DB') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization/rds`, { state: { rdsRecommendations } });
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
            <option value="All Resources">Lambda</option>
            <option value="EC2">EC2</option>
            <option value="EBS">EBS</option>
            <option value="RDS DB">RDS DB</option>
            <option value="Lambda">All Resources</option>
            <option value="Auto Scaling">Auto Scaling</option>
          </select>
        </div>
      </div>

            {/* Display Lambda Recommendations as a Table */}
            <div className='lambda-container'>
        <div>
          <h3 className='title'>Lambda Recommendations</h3>
          {lambdaRecommendations.length > 0 ? (
            <table className="recommendations-table">
              <thead>
                <tr>
                  <th>Function Name</th>
                  <th>Current Memory Size</th>
                  <th>Recommended Memory Size</th>
                  <th>Finding</th>
                  <th>Finding Reason</th>
                </tr>
              </thead>
              <tbody>
                {lambdaRecommendations.map((rec, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        onChange={(event) => handleCheckboxChange(event, rec.message)}
                        checked={selectedInstanceId === rec.message}
                      />
                      {/* Display instance ID next to the checkbox */}
                      <span>{rec.message}</span>
                    </td>
                    {/* <td>{rec.currentMemorySize}</td>
                    <td>{rec.recommendedMemorySize}</td>
                    <td>{rec.finding}</td>
                    <td>{rec.findingReason}</td> */}
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
            <p>No Lambda recommendations available.</p>
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
        <p>Done! Function successfully suppressed.</p>
        <button className="modal-button" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
};

export default LambdaRecommendationPage;
