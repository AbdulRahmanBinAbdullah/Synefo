import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import { APP_PREFIX_PATH } from 'Configs/AppConfig';
import axios from 'axios';

function EC2RecommendationPage() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedInstanceId, setSelectedInstanceId] = useState(null);
  const [remediationConfirmation, setRemediationConfirmation] = useState(false);
  const [suppressingConfirmation, setSuppressingConfirmation] = useState(false);
  const [filter, setFilter] = useState('All Resources');

  // States to hold fetched recommendations
  const [ec2Recommendations, setEc2Recommendations] = useState([]);
  const [ebsRecommendations, setEbsRecommendations] = useState([]);
  const [rdsRecommendations, setRdsRecommendations] = useState([]);
  const [lambdaRecommendations, setLambdaRecommendations] = useState([]);
  const [autoScalingRecommendations, setAutoScalingRecommendations] = useState([]);

  // Function to fetch recommendations from the backend API
  const fetchRecommendations = async () => {
    try {
      // Fetch EC2 Recommendations
      const ec2Response = await axios.get(
        ' http://localhost:3000/dev/recommendations/ec2?accountId=657907747545&region=us-east-1'
      );
      setEc2Recommendations(ec2Response.data);
      
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
      const updatedInstances = ec2Recommendations.filter(
        (instance) => instance.id !== selectedInstanceId
      );

      // Update state to reflect the suppression
      setEc2Recommendations(updatedInstances);
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

    if (selectedFilter === 'EC2') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization`, { state: { ec2Recommendations } });
    } else if (selectedFilter === 'EBS') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization/ebs`, { state: { ebsRecommendations } });
    } else if (selectedFilter === 'RDS DB') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization/rds`, { state: { rdsRecommendations } });
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
            <option value="All Resources">EC2</option>
            <option value="EC2">All Resources</option>
            <option value="EBS">EBS</option>
            <option value="RDS DB">RDS DB</option>
            <option value="Lambda">Lambda</option>
            <option value="Auto Scaling">Auto Scaling</option>
          </select>
        </div>
      </div>


      {/* ... your existing code ... */}

      {/* EC2 Recommendations */}
      <div className='ec2-container'>
        <div>
          <h3>EC2 Recommendations</h3>
          {ec2Recommendations.length > 0 ? (
            <table className="recommendations-table">
              <thead>
                <tr>
                  <th>Instance ID</th>
                  <th>Instance Name</th>
                  <th>Current Instance Type</th>
                  <th>Recommended Instance Type</th>
                  <th>Finding</th>
                  <th>Finding Reason</th>
                  <th>Recommendation State</th>
                </tr>
              </thead>
              <tbody>
                {ec2Recommendations.map((rec, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        onChange={(event) => handleCheckboxChange(event, rec.instanceId)}
                        checked={selectedInstanceId === rec.instanceId}
                      />
                      {/* Display instance ID next to the checkbox */}
                      <span>{rec.instanceId}</span>
                    </td>
                    <td>{rec.instanceName}</td>
                    <td>{rec.currentInstanceType}</td>
                    <td>{rec.recommendedInstanceType}</td>
                    <td>{rec.finding}</td>
                    <td>{rec.findingReason}</td>
                    <td>{rec.recommendationInstanceState}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No EC2 recommendations available.</p>
          )}
        </div>
      </div>
      {/* ... your existing code ... */}

      {/* Modals for confirming actions */}
      {/* Suppressing Confirmation Modal */}
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

export default EC2RecommendationPage;