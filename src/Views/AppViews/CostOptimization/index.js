import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { APP_PREFIX_PATH } from 'Configs/AppConfig';
import { X } from 'lucide-react';
import RemediatePopup from './RemediateDialog'; 


const RecommendationsComponent = () => {
  const [selectedInstanceId, setSelectedInstanceId] = useState(null);
    const [Recommendations, SetRecommendations] = useState([]);
  const [ec2Recommendations, setEc2Recommendations] = useState([]);
  const [ebsRecommendations, setEbsRecommendations] = useState([]);
  const [rdsRecommendations, setRdsRecommendations] = useState([]);
  const [lambdaRecommendations, setLambdaRecommendations] = useState([]);
  const [asgRecommendations, setAsgRecommendations] = useState([]);
  const [currentResourceType, setCurrentResourceType] = useState([]);
  const [isSuppressionModalOpen, setIsSuppressionModalOpen] = useState([]);
  const [isRemediatePopupOpen, setIsRemediatePopupOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [selectedItems, setSelectedItems] = useState({
    ec2: [],
    ebs: [],
    rds: [],
    lambda: [],
    asg: []
  });
  const [cost, setCost] = useState(0);
  const [spend, setSpend] = useState(0);
  const [filter, setFilter] = useState("All Resources");
  const [showDropdown, setShowDropdown] = useState({
    ec2: false,
    ebs: false,
    rds: false,
    lambda: false,
    asg: false
  });
  const navigate = useNavigate();

  const fetchRecommendations = async () => {
    try {
      const ec2Response = await axios.get('http://localhost:3000/dev/recommendations/ec2?accountId=657907747545&region=us-east-1');
      setEc2Recommendations(ec2Response.data);
      
      const ebsResponse = await axios.get('http://localhost:3000/dev/recommendations/ebs?accountId=657907747545&region=us-east-1');
      setEbsRecommendations(ebsResponse.data);
      
      const rdsResponse = await axios.get('http://localhost:3000/dev/recommendations/rds?accountId=657907747545&region=us-east-1');
      setRdsRecommendations(rdsResponse.data);
      console.log("RDS Recommendations:", rdsResponse.data); // Log RDS recommendations
      
      const lambdaResponse = await axios.get('http://localhost:3000/dev/recommendations/lambda?accountId=657907747545&region=us-east-1');
      setLambdaRecommendations(lambdaResponse.data);
      console.log("Lambda Recommendations:", lambdaResponse.data); // Log Lambda recommendations
      
      const asgResponse = await axios.get('http://localhost:3000/dev/recommendations/asg?accountId=657907747545&region=us-east-1');
      setAsgRecommendations(asgResponse.data);
      console.log("ASG Recommendations:", asgResponse.data); // Log ASG recommendations
      
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  useEffect(() => {
    fetchRecommendations();
  }, []);

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === 'All Resources') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization`,{ state: {Recommendations} });
    } else if (selectedFilter === 'EC2') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization/ec2`, { state: { ec2Recommendations } });
    } else if (selectedFilter === 'EBS') {
        navigate(`${APP_PREFIX_PATH}/assets/cost-optimization/ebs`, { state: { ebsRecommendations } });
    } else if (selectedFilter === 'RDS DB') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization/rds`, { state: { rdsRecommendations } });
    } else if (selectedFilter === 'Lambda') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization/lambda`, { state: { lambdaRecommendations } });
    } else if (selectedFilter === 'Auto Scaling') {
      navigate(`${APP_PREFIX_PATH}/assets/cost-optimization/asg`, { state: { asgRecommendations } });
    }
  };

  const handleCheckboxChange = (resourceType, id, isChecked) => {
    setSelectedItems(prev => ({
      ...prev,
      [resourceType]: isChecked 
        ? [...prev[resourceType], id]
        : prev[resourceType].filter(item => item !== id)
    }));
  };


  const Table = ({ title, data }) => {

    const [selectedId, setSelectedId] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  
    const handleOpenDialog = (id) => {
      setSelectedId(id);
      setIsDialogOpen(true);
    };
  
    const handleCloseDialog = () => {
      setIsDialogOpen(false);
      setSelectedId(null); // Clear the selected ID when closing
    };
  }

  const handleDropdownClick = (resourceType, action) => {
    setShowDropdown(prev => ({
      ...prev,
      [resourceType]: {
        ...prev[resourceType],
        [action]: !prev[resourceType][action]
      }
    }));
  };
  const SuppressionModal = ({ isOpen, onClose, instances, onConfirm }) => {
    const [selectedInstance, setSelectedInstance] = useState('');
  
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Suppress</h2>
            <button onClick={onClose} className="close-button">
              <X size={24} />
            </button>
          </div>
          <div className="modal-body">
            <label htmlFor="instance-select">Select Instance</label>
            <select
              id="instance-select"
              value={selectedInstance}
              onChange={(e) => setSelectedInstance(e.target.value)}
            >
              <option value="">Select Instance</option>
              {instances.map((instance) => (
                <option key={instance.id} value={instance.id}>
                  {instance.id}
                </option>
              ))}
            </select>
            <p>Do you want to suppress the instance?</p>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => onConfirm(selectedInstance)}
              className="confirm-button"
              disabled={!selectedInstance}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  };
  

  const handleSuppressionClick = (resourceType) => {
    setCurrentResourceType(resourceType);
    setIsSuppressionModalOpen(true);
  };


  const handleRemediateClick = (resourceType) => {
    const selectedIds = selectedItems[resourceType];
    if (selectedIds.length === 0) return;
  
    // Find the first selected item to use its details
    const selectedItem = getRecommendationsForType(resourceType).find(item => selectedIds.includes(getItemId(item, resourceType)));
    
    setSelectedResource({
      resourceType,
      id: selectedIds.join(', '), // Join multiple IDs if more than one is selected
      currentSize: getItemSize(selectedItem, resourceType, 'current'),
      recommendedSize: getItemSize(selectedItem, resourceType, 'recommended'),
      finding: getItemFinding(selectedItem, resourceType),
      currentCost: 10, // Replace with actual calculation if available
      recommendedCost: 2 // Replace with actual calculation if available
    });
    setIsRemediatePopupOpen(true);
  };
  
  // Helper functions
  const getRecommendationsForType = (type) => {
    switch(type) {
      case 'ec2': return ec2Recommendations;
      case 'ebs': return ebsRecommendations;
      case 'rds': return rdsRecommendations;
      case 'lambda': return lambdaRecommendations;
      case 'asg': return asgRecommendations;
      default: return [];
    }
  };
  
  const getItemId = (item, type) => {
    switch(type) {
      case 'ec2': return item.instanceId;
      case 'ebs': return item.volumeId;
      case 'rds': return item.dbIdentifier;
      case 'lambda': 
      case 'asg': return item.message;
      default: return '';
    }
  };
  
  const getItemSize = (item, type, sizeType) => {
    if (!item) return 'N/A';
    switch(type) {
      case 'ec2': return sizeType === 'current' ? item.currentInstanceType : item.recommendedInstanceType;
      case 'ebs': return sizeType === 'current' ? item.currentSize : item.recommendedSize;
      case 'rds': return sizeType === 'current' ? item.currentInstanceType : item.recommendedInstanceType;
      default: return 'N/A';
    }
  };
  
  const getItemFinding = (item, type) => {
    if (!item) return 'N/A';
    switch(type) {
      case 'ec2':
      case 'ebs': return item.finding;
      case 'rds': return item.InstanceFinding;
      case 'lambda':
      case 'asg': return 'Finding not available';
      default: return 'N/A';
    }
  };

   const handleSuppressionConfirm = (instanceId) => {
    if (instanceId) {
      console.log(`Suppressing ${currentResourceType} with ID: ${instanceId}`);
      
      // Update the state to remove the suppressed item
      switch (currentResourceType) {
        case 'ec2':
          setEc2Recommendations(prev => prev.filter(item => item.instanceId !== instanceId));
          break;
        case 'ebs':
          setEbsRecommendations(prev => prev.filter(item => item.volumeId !== instanceId));
          break;
        case 'rds':
          setRdsRecommendations(prev => prev.filter(item => item.dbIdentifier !== instanceId));
          break;
        case 'lambda':
          setLambdaRecommendations(prev => prev.filter(item => item.message !== instanceId));
          break;
        case 'asg':
          setAsgRecommendations(prev => prev.filter(item => item.message !== instanceId));
          break;
        default:
          console.error('Unknown resource type:', currentResourceType);
      }
    }
    setIsSuppressionModalOpen(false);
  };

  const getInstancesForResourceType = (resourceType) => {
    switch (resourceType) {
      case 'ec2':
        return ec2Recommendations.map(item => ({ id: item.instanceId }));
      case 'ebs':
        return ebsRecommendations.map(item => ({ id: item.volumeId }));
      case 'rds':
        return rdsRecommendations.map(item => ({ id: item.dbIdentifier }));
      case 'lambda':
        return lambdaRecommendations.map(item => ({ id: item.message }));
      case 'asg':
        return asgRecommendations.map(item => ({ id: item.message }));
      default:
        return [];
    }
  };

  


  

  

  

  const Card = ({ title, resources, percentage, change, color }) => {
    return (
      <div className="card">
        <div className="card-header">
          <div className="circular-progress">
            <svg className="circular-progress-svg" viewBox="0 0 36 36">
              <path
                className="circular-progress-bg"
                d="M18 1.0845A16.9155 16.9155 0 0 0 1.0845 18 16.9155 16.9155 0 0 0 18 34.9155 16.9155 16.9155 0 0 0 34.9155 18 16.9155 16.9155 0 0 0 18 1.0845z"
              />
              <path
                className="circular-progress-bar"
                strokeDasharray={`${resources}, 100`}
                d="M18 1.0845A16.9155 16.9155 0 0 0 1.0845 18 16.9155 16.9155 0 0 0 18 34.9155 16.9155 16.9155 0 0 0 34.9155 18 16.9155 16.9155 0 0 0 18 1.0845z"
                style={{
                  stroke: color,
                }}
              />
            </svg>
            <span className="card-percentage">{resources}%</span>
          </div>
          <div className="card-title">{title}</div>
          <div className="card-value">
            <span className="card-number">{percentage}</span>
            <span className="card-change" style={{ color: '#4CAF50' }}>
              ▲{change}%
            </span>
          </div>
        </div>
      </div>
    );
  };

  
  
  
  return (
    <div className="container">
      <div className='cost-optimization'>
        <h2>Cost Optimization</h2>

        <div className="filter-container">
          <select value={filter} onChange={handleFilterChange}>
            <option value="All Resources">All Resources</option>
            <option value="EC2">EC2</option>
            <option value="EBS">EBS</option>
            <option value="RDS DB">RDS DB</option>
            <option value="Lambda">Lambda</option>
            <option value="Auto Scaling">Auto Scaling</option>
          </select>
        </div>
      </div>

      <div className="cost-info">
        <div className="cost-item">
          <div className='total-cost'>
            <div className="cost-label">Total Cost:</div>
            <div className="cost-value">${cost}</div>
          </div>
          <div className='total spend'>
            <div className="cost-label">Total Spend:</div>
            <div className="cost-value">${spend}</div>
          </div>
        </div>
      </div>

       {/* Cards for different resource types */}
       <div className="cards-container">
        <Card title="Under Utilize" resources={20} percentage={1082} change={10} color="#6495ED" />
        <Card title="Over-provisioned" resources={19} percentage={833} change={10} color="#FFC107" />
        <Card title="Needs Optimization" resources={32} percentage={3833} change={10} color="#4CAF50" />
        <Card title="Abandoned" resources={29} percentage={3264} change={10} color="#F44336" />
      </div>

      {/* Recommendations for different resource types */}
      <Table title="Recommendations for EC2 Instances" data={ec2Recommendations} />
      <Table title="Recommendations for EBS Volumes" data={ebsRecommendations} />
      <Table title="Recommendations for RDS DB Instances" data={rdsRecommendations} />
      <Table title="Recommendations for Lambda Functions" data={lambdaRecommendations} />
      <Table title="Recommendations for Auto Scaling Groups" data={asgRecommendations} />

      
      {/* Display EC2 Recommendations as a Table */}
      <div className='ec2-container'>
        <div>
          <div className='cost-header'>
            <h3 className='title'>EC2 Recommendations</h3>
            
            {/* Suppression and Remediation Buttons */}
            <button onClick={() => handleSuppressionClick('ec2')}>Suppress</button>
            <button 
            onClick={() => handleRemediateClick('ec2')}
            disabled={selectedItems.ec2.length === 0}
          >
            Remediate
          </button>
          </div>
          
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
                  onChange={(event) => handleCheckboxChange('ec2', rec.instanceId, event.target.checked)}
                  checked={selectedItems.ec2.includes(rec.instanceId)}
                />
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

      {/* Display EBS Recommendations as a Table */}
      <div className='ebs-container'>
        <div>
          <h3 className='title'>EBS Recommendations</h3>
          {/* Suppression and Remediation Buttons */}
          <button onClick={() => handleSuppressionClick('ebs')}>Suppress</button>
          <button 
            onClick={() => handleRemediateClick('ec2')}
            disabled={selectedItems.ec2.length === 0}
          >
            Remediate
          </button>
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
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No EBS recommendations available.</p>
          )}
        </div>
      </div>

      {/* Display RDS Recommendations as a Table */}
      <div className='rds-container'>
        <div>
          <h3 className='title'>RDS Recommendations</h3>
          {/* Suppression and Remediation Buttons */}
          <button onClick={() => handleSuppressionClick('rds')}>Suppress</button>
          <button 
            onClick={() => handleRemediateClick('ec2')}
            disabled={selectedItems.ec2.length === 0}
          >
            Remediate
          </button>
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
                    {/* Add Suppression Button */}
                    </td>
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
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No RDS recommendations available.</p>
          )}
        </div>
      </div>

      {/* Display Lambda Recommendations as a Table */}
      <div className='lambda-container'>
        <div>
          <h3 className='title'>Lambda Recommendations</h3>
          {/* Suppression and Remediation Buttons */}
          <button onClick={() => handleSuppressionClick('lambda')}>Suppress</button>
          <button 
            onClick={() => handleRemediateClick('ec2')}
            disabled={selectedItems.ec2.length === 0}
          >
            Remediate
          </button>
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
                    
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No Lambda recommendations available.</p>
          )}
        </div>
      </div>

      {/* Display ASG Recommendations as a Table */}
      <div className='asg-container'>
        <div>
          <h3 className='title'>Auto Scaling Group Recommendations</h3>
          {/* Suppression and Remediation Buttons */}
          <button onClick={() => handleSuppressionClick('lambda')}>Suppress</button>
          <button 
            onClick={() => handleRemediateClick('ec2')}
            disabled={selectedItems.ec2.length === 0}
          >
            Remediate
          </button>
          {asgRecommendations.length > 0 ? (
            <table className="recommendations-table">
              <thead>
                <tr>
                  <th>ASG Name</th>
                  <th>Current Instance Type</th>
                  <th>Recommended Instance Type</th>
                  <th>Finding</th>
                  <th>Finding Reason</th>
                </tr>
              </thead>
              <tbody>
                {asgRecommendations.map((rec, index) => (
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
                    {/* <td>{rec.currentInstanceType}</td>
                    <td>{rec.recommendedInstanceType}</td>
                    <td>{rec.finding}</td>
                    <td>{rec.findingReason}</td> */}
                   
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No Auto Scaling Group recommendations available.</p>
          )}
        </div>
      </div>

      <SuppressionModal
        isOpen={isSuppressionModalOpen}
        onClose={() => setIsSuppressionModalOpen(false)}
        instances={getInstancesForResourceType(currentResourceType)}
        onConfirm={handleSuppressionConfirm}
      />
      
      {/* Remediation Confirmation Dialog */}
      {selectedResource && (
        <RemediatePopup
          isOpen={isRemediatePopupOpen}
          onClose={() => setIsRemediatePopupOpen(false)}
          instanceId={selectedResource.id}
          finding={selectedResource.finding}
          currentSize={selectedResource.currentSize}
          recommendedSize={selectedResource.recommendedSize}
          currentCost={selectedResource.currentCost}
          recommendedCost={selectedResource.recommendedCost}
        />
      )}
    </div>
  );
};

export default RecommendationsComponent;
