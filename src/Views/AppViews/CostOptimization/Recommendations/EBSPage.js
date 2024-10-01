import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../index.css'; 
import axios from 'axios';
import { APP_PREFIX_PATH } from 'Configs/AppConfig';

function EBSRecommendationPage() {
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
        const ebsResponse = await axios.get(
          ' http://localhost:3000/dev/recommendations/ebs?accountId=657907747545&region=us-east-1'
        );
        setEbsRecommendations(ebsResponse.data);
        
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
      const instanceId = bubble.dataset.volumeId;
  
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
        const updatedInstances = ebsRecommendations.filter(
          (instance) => instance.id !== selectedInstanceId
        );
  
        // Update state to reflect the suppression
        setEbsRecommendations(updatedInstances);
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

    if (selectedFilter === 'EBS') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization`, { state: {Recommendations} });
    } else if (selectedFilter === 'EC2') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization/ec2`, { state: { ebsRecommendations } });
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
          <option value="All Resources">EBS</option>
          <option value="EC2">EC2</option>
          <option value="EBS">All Resources</option>
          <option value="RDS DB">RDS DB</option>
          <option value="Lambda">Lambda</option>
          <option value="Auto Scaling">Auto Scaling</option>
        </select>
      </div>
    </div>


      {/* Display EBS Recommendations as a Table */}
      <div className='ebs-container'>
        <div>
          <h3 className='title'>EBS Recommendations</h3>
          {ebsRecommendations.length > 0 ? (
            <table className="recommendations-table">
              <thead>
                <tr>
                  <th>Volume ID</th>
                  <th>Volume Name</th>
                  <th>Current Size</th>
                  <th>Recommended Size</th>
                  <th>Finding</th>
                  <th>Finding Reason</th>
                </tr>
              </thead>
              <tbody>
                {ebsRecommendations.map((rec, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        onChange={(event) => handleCheckboxChange(event, rec.volumeId)}
                        checked={selectedInstanceId === rec.volumeId}
                      />
                      {/* Display instance ID next to the checkbox */}
                      <span>{rec.volumeId}</span>
                    </td>
                    <td>{rec.volumeName}</td>
                    <td>{rec.currentSize}</td>
                    <td>{rec.recommendedSize}</td>
                    <td>{rec.finding}</td>
                    <td>{rec.findingReason}</td>
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
            <p>No EBS recommendations available.</p>
          )}
        </div>
      </div>
      <h3>Compare {recommendationsData[1]?.currentType} (option 1) with {recommendationsData[0]?.currentType} (current)</h3>
      <p>
        Use the graphed metrics below to determine which instance type is the optimal choice for your application.
      </p>

      {/* Metrics and graphs (placeholder) */}
      <div className="metrics-container">
        <div className="metric-section">
          <div className="metric-title">CPU Utilization (%)</div>
          {/* Add graph implementation here */}
        </div>
        {/* Other metric sections */}
      </div>

      {/* Recommendations section */}
      <div className="recommendations-container">
        <h2>Recommendations</h2>
        <div className="recommendations-actions">
          <button className="recommendations-button" onClick={handleSuppressingConfirm}>
            Suppress
          </button>
          <button onClick={handleRemediation}>Remediate</button>
        </div>

        <table>
          <thead>
            <tr>
              <th>Instance ID</th>
              <th>Instance Name</th>
              <th>Finding</th>
              <th>Finding Reason</th>
              <th>Recommendation Instance Grade</th>
              <th>Current Instance Type</th>
              <th>Recommended Instance Type</th>
            </tr>
          </thead>
          <tbody>
            {recommendationsData.map((item) => (
              <tr key={item.id}>
                <td>
                  <div
                    className="instance-bubble"
                    data-instance-id={item.id}
                    onClick={handleBubbleClick}
                  >
                    {/* Bubble for selection */}
                  </div>
                </td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.finding}</td>
                <td>{item.reason}</td>
                <td>{item.grade}</td>
                <td>{item.currentType}</td>
                <td>{item.recommendedType}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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

export default EBSRecommendationPage;
