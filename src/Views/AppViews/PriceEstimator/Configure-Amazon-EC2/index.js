import React, { Component } from "react";
import axios from 'axios';

class ConfigureAmazonEC2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workload: "constant",
            numberOfInstances: "",
            instanceType: "",
            instanceFamily: "Any instance family",
            vCPUs: "Any vCPUs",
            memory: "Any instance family",
            networkPerformance: "Any network performance",
            showCurrentGen: true,
            showModal: false, // Modal visibility state
            showPopup: null,
            enableMonitoring: false,
            selectedOption: "", // Track selected option
            showConfirmationPopup: false,
        };
    }

    componentDidMount() {
        this.fetchInstanceData();
    }

    fetchInstanceData = async () => {
        try {
            const response = await axios.get('https://gxfwk81zq7.execute-api.us-east-1.amazonaws.com/dev/ec2/price?instanceType=t2');
            this.setState({ instanceData: response.data, loading: false });
        } catch (error) {
            console.error('Error fetching instance data:', error);
            this.setState({ error: 'Failed to fetch instance data', loading: false });
        }
    }

    closeAllPopups = () => {
        this.setState({
            showModal: false, // Close the main modal
            showConfirmationPopup: false, // Close the confirmation popup
            showPopup: null, // Close any specific popups
        });
    };




    // Toggle modal visibility
    toggleModal = () => {
        this.setState(prevState => ({ showModal: !prevState.showModal }));
    };

    // Handle option selection
    handleOptionSelect = (option) => {
        this.setState({ selectedOption: option, showModal: true, showPopup: option });
    };

    closePopup = () => {
        this.setState({ showPopup: null }); // Close the popup by setting to null
    };

    handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        this.setState({ [name]: type === "checkbox" ? checked : value });
    };

    render() {

        const { loading, error, instanceData } = this.state;

        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error}</div>;

        return (
            <div className="p-6">
                <h2 className="text-3xl font-semibold mb-6">Configure Amazon EC2</h2>

                {/* Workloads Section */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold">Workloads</h3>
                    <p className="text-gray-500 mb-4">
                        Choose the graph that best represents your monthly workload
                    </p>
                    <div className="flex space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="workload"
                                value="constant"
                                checked={this.state.workload === "constant"}
                                onChange={this.handleInputChange}
                            />
                            <span className="ml-2">Constant Usage</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="workload"
                                value="daily"
                                checked={this.state.workload === "daily"}
                                onChange={this.handleInputChange}
                            />
                            <span className="ml-2">Daily Spike Traffic</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="workload"
                                value="weekly"
                                checked={this.state.workload === "weekly"}
                                onChange={this.handleInputChange}
                            />
                            <span className="ml-2">Weekly Spike Traffic</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="workload"
                                value="monthly"
                                checked={this.state.workload === "monthly"}
                                onChange={this.handleInputChange}
                            />
                            <span className="ml-2">Monthly Spike Traffic</span>
                        </label>
                    </div>
                </div>

                {/* Number of Instances */}
                <div className="mb-6 max-w-[850px]">
                    <div className="flex items-center justify-between mb-2">
                        <label htmlFor="numberOfInstances" className="block ">
                            Number of Instances
                        </label>
                        <p className="text-gray-400">Please specify the total number of instances that you need each month.</p>
                    </div>
                    <input
                        type="number"
                        name="numberOfInstances"
                        value={this.state.numberOfInstances}
                        onChange={this.handleInputChange}
                        placeholder="Please specify the total number of instances that you need each month."
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Chosen Instance Type */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold">EC2 Instance (05)</h3>
                    <p className="text-gray-500 mb-4">
                        Based on your input, this is the lowest cost EC2 instance: t2.nano
                    </p>
                    <div className="text-gray-700">
                        <p className="text-gray-700 text-base font-medium mb-3">Chosen Instance : t2.nano</p>
                        <div className="flex gap-4">
                            <p className="text-gray-700">Family: t2</p>
                            <p className="text-gray-700">CPU: 1vCPU</p>
                            <p className="text-gray-700">Memory: 0.5 GiB</p>
                        </div>
                    </div>
                </div>

                {/* Search Instance Type */}
                <div className="mb-6 max-w-[850px]">
                    <label htmlFor="instanceType" className="block mb-2">
                        Search Instance Type
                    </label>
                    <input
                        type="text"
                        name="instanceType"
                        value={this.state.instanceType}
                        onChange={this.handleInputChange}
                        placeholder="Enter instance type"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Dropdowns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div>
                        <label htmlFor="instanceFamily" className="block mb-2">
                            Instance Family
                        </label>
                        <select
                            name="instanceFamily"
                            value={this.state.instanceFamily}
                            onChange={this.handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option>Any instance family</option>
                            {/* Add more options here as needed */}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="vCPUs" className="block mb-2">
                            vCPUs
                        </label>
                        <select
                            name="vCPUs"
                            value={this.state.vCPUs}
                            onChange={this.handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option>Any vCPUs</option>
                            {/* Add more options here as needed */}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="memory" className="block mb-2">
                            Memory (GiB)
                        </label>
                        <select
                            name="memory"
                            value={this.state.memory}
                            onChange={this.handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option>Any instance family</option>
                            {/* Add more options here as needed */}
                        </select>
                    </div>
                </div>

                {/* Network Performance */}
                <div className="mb-6">
                    <label htmlFor="networkPerformance" className="block mb-2">
                        Network Performance
                    </label>
                    <select
                        name="networkPerformance"
                        value={this.state.networkPerformance}
                        onChange={this.handleInputChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option>Any network performance</option>
                        {/* Add more options here as needed */}
                    </select>
                </div>

                {/* Show current generation instances */}
                <div className="mb-6">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            name="showCurrentGen"
                            checked={this.state.showCurrentGen}
                            onChange={this.handleInputChange}
                            className="mr-2"
                        />
                        Show only current generation instances
                    </label>
                </div>

                {/* Instance Data Table */}
                <div className="overflow-x-auto mb-6">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border-b">Instance Name</th>
                                <th className="py-2 px-4 border-b">vCPUs</th>
                                <th className="py-2 px-4 border-b">Memory</th>
                                <th className="py-2 px-4 border-b">Network Performance</th>
                                <th className="py-2 px-4 border-b">Storage</th>
                                {/* <th className="py-2 px-4 border-b">On-Demand Hourly Cost</th> */}
                                <th className="py-2 px-4 border-b">Current Generation</th>
                                {/* <th className="py-2 px-4 border-b">Potential Effective Hourly Cost (savings %)</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {instanceData && instanceData.map((instance, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                    <td className="py-2 px-4 border-b">{instance.instanceType}</td>
                                    <td className="py-2 px-4 border-b text-center">{instance.vCPUs}</td>
                                    <td className="py-2 px-4 border-b text-center">{instance.memory}</td>
                                    <td className="py-2 px-4 border-b">{instance.networkPerformance}</td>
                                    <td className="py-2 px-4 border-b">{instance.storage}</td>
                                    {/* <td className="py-2 px-4 border-b text-right">
                                        {instance.onDemandCost !== undefined ? `$${instance.onDemandCost.toFixed(4)}` : 'N/A'}
                                    </td> */}
                                    <td className="py-2 px-4 border-b text-center">{instance.currentGeneration}</td>
                                    {/* <td className="py-2 px-4 border-b text-right">
                                        {instance.potentialCost !== undefined ? `$${instance.potentialCost.toFixed(4)} (${instance.potentialSavings})` : 'N/A'}
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="">
                    <h1 className="text-2xl font-bold mb-4">Payment Options</h1>
                    <p className="mb-4 text-black">Estimated commitment price based on the following selections:</p>
                    <div className="flex flex-wrap mb-4">
                        <p className="mr-4 text-black"><strong>Instance Type:</strong> {this.state.instanceType}</p>
                        <p className="text-black"><strong>Operating System:</strong> {this.state.operatingSystem}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6">
                        {/* Compute Savings Plans */}
                        <div className="bg-white p-4 rounded-lg shadow h-96 flex flex-col justify-between">
                            {/* Top Content */}
                            <div>
                                <h2 className="font-bold mb-2">COMPUTE SAVINGS PLANS</h2>
                                <p className="text-sm mb-4 text-black">Up to 66% discount, automatically applies to all usage on EC2 instances and Lambda</p>

                                <div className="mb-4">
                                    <h3 className="font-semibold mb-2">Reservation Term</h3>
                                    <div>
                                        <label className="inline-flex items-center" htmlFor="computeTerm1">
                                            <input type="radio" name="computeTerm" value="1 year" className="form-radio" id="computeTerm1" color="blue-600"/>
                                            <span className="ml-2" >1 Year</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center" htmlFor="computeTerm2">
                                            <input type="radio" name="computeTerm" value="3 year" className="form-radio" id="computeTerm2" checked />
                                            <span className="ml-2">3 Year</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h3 className="font-semibold mb-2">Payment Options</h3>
                                    <div>
                                        <label className="inline-flex items-center" htmlFor="computePayment1">
                                            <input type="radio" name="computePayment" value="No Upfront" className="form-radio" id="computePayment1" />
                                            <span className="ml-2">No Upfront</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center" htmlFor="computePayment2">
                                            <input type="radio" name="computePayment" value="Partial Upfront" className="form-radio" id="computePayment2" checked />
                                            <span className="ml-2">Partial Upfront</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center" htmlFor="computePayment3">
                                            <input type="radio" name="computePayment" value="All Upfront" className="form-radio" id="computePayment3" />
                                            <span className="ml-2">All Upfront</span>
                                        </label>
                                    </div>
                                </div>
                            </div>


                            {/* Bottom Content */}
                            <div className="flex justify-between">
                                <p className="text-black"><strong>Upfront:</strong> $0.00</p>
                                <p className="text-black"><strong>Monthly:</strong> $3.80/Month</p>
                            </div>
                        </div>


                        {/* EC2 Instance Saving Plans */}
                        <div className="bg-white p-4 rounded-lg shadow h-96 flex flex-col justify-between">
                            {/* Top Content */}
                            <div>
                                <h2 className="font-bold mb-2">EC2 INSTANCE SAVING PLANS</h2>
                                <p className="text-sm mb-4 text-black">Get deeper discounts when you commit to a specific instance family and region</p>

                                <div className="mb-4">
                                    <h3 className="font-semibold mb-2">Reservation Term</h3>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="ec2Term" value="1 year" className="form-radio" />
                                            <span className="ml-2">1 Year</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="ec2Term" value="3 year" className="form-radio" checked />
                                            <span className="ml-2">3 Year</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h3 className="font-semibold mb-2">Payment Options</h3>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="ec2Payment" value="No Upfront" className="form-radio" />
                                            <span className="ml-2">No Upfront</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="ec2Payment" value="Partial Upfront" className="form-radio" checked />
                                            <span className="ml-2">Partial Upfront</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="ec2Payment" value="All Upfront" className="form-radio" />
                                            <span className="ml-2">All Upfront</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Content */}
                            <div className="flex justify-between">
                                <p className="text-black"><strong>Upfront:</strong> $0.00</p>
                                <p className="text-black"><strong>Monthly:</strong> $3.50/Month</p>
                            </div>
                        </div>


                        {/* On-Demand */}
                        <div className="bg-white p-4 rounded-lg shadow h-96 flex flex-col justify-between">
                            {/* Top Content */}
                            <div>
                                <h2 className="font-bold mb-2">ON-DEMAND</h2>
                                <p className="text-sm mb-4 text-black">Maximum flexibility</p>

                                <div className="mb-4">
                                    <h3 className="font-semibold mb-2">Expected Utilization</h3>
                                    <p className="text-sm mb-2 text-black">Enter the expected usage of Amazon EC2 Instance</p>
                                    <input
                                        type="text"
                                        name="usage"
                                        value={this.state.usage}
                                        onChange={this.handleInputChange}
                                        className="w-full p-2 border rounded"
                                        placeholder="Usage"
                                    />
                                </div>

                                <div className="mb-4">
                                    <h3 className="font-semibold mb-2">Usage Type</h3>
                                    <select
                                        name="usageType"
                                        value={this.state.usageType}
                                        onChange={this.handleInputChange}
                                        className="w-full p-2 border rounded"
                                    >
                                        <option value="utilization per hour">Utilization per hour</option>
                                        {/* Add other options as needed */}
                                    </select>
                                </div>
                            </div>

                            {/* Bottom Content */}
                            <div className="flex justify-between">
                                <p className="text-black"><strong>Instance:</strong> $0.0081/Hour</p>
                                <p className="text-black"><strong>Monthly:</strong> $5.91/Month</p>
                            </div>
                        </div>


                        {/* Spot Instance */}
                        <div className="bg-white p-4 rounded-lg shadow h-96 flex flex-col justify-between">
                            {/* Top Content */}
                            <div>
                                <h2 className="font-bold mb-2">SPOT INSTANCE</h2>
                                <p className="text-sm mb-4 text-black">Leverage cost-effective EC2 spare capacity. Recommended for fault-tolerant and interruption-tolerant applications</p>
                                <p className="mb-4 text-black"><strong>The historical average discount for t2.nano is 65%</strong></p>

                                <div className="mb-4">
                                    <h3 className="font-semibold mb-2">Assume percentage discount for my estimate</h3>
                                    <input
                                        type="text"
                                        name="spotDiscount"
                                        value={this.state.spotDiscount}
                                        onChange={this.handleInputChange}
                                        className="w-full p-2 border rounded"
                                        placeholder="%"
                                    />
                                </div>
                            </div>

                            {/* Bottom Content */}
                            <div className="flex justify-between">
                                <p className="text-black"><strong>Instance:</strong> $0.0081/Hour</p>
                                <p className="text-black"><strong>Monthly:</strong> $5.91/Month</p>
                            </div>
                        </div>

                    </div>

                    <div className="mt-8 flex justify-between">
                        <div className="p-1">

                            {/* Optional button to open modal */}
                            <button
                                onClick={this.toggleModal}
                                className="bg-white text-blue-500 border-solid border-blue-500 px-6 py-2 rounded w-[300px] hover:text-blue-400 hover:border-blue-400 hover:bg-white"
                            >
                                Optional
                            </button>

                            {this.state.showModal && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div className="absolute left-[100px] top-[80px] bg-white p-10 rounded-lg shadow-lg w-[900px] h-[400px]">
                                        <div className="flex justify-between items-center mb-5">
                                            <h2 className="text-3xl font-semibold text-gray-600">Optional</h2>
                                            {/* Close button */}
                                            <button
                                                onClick={this.toggleModal} // Call to close the modal
                                                className="text-gray-400 border border-gray-600 rounded-full w-8 h-8 text-2xl flex items-center justify-center hover:bg-gray-200"
                                            >
                                                &times; {/* Close symbol (X) */}
                                            </button>
                                        </div>
                                        <ul className="space-y-4 p-10">
                                            <div className="grid grid-cols-2 gap-x-20 gap-y-20 justify-center items-center">
                                                <button
                                                    onClick={() => this.handleOptionSelect("Amazon Elastic Block Store (EBS)")}
                                                    className="text-blue-600 bg-white-100 p-3 border-solid border-blue-500 rounded hover:bg-blue-200 w-[350px]"
                                                >
                                                    Amazon Elastic Block Store (EBS)
                                                </button>

                                                <button
                                                    onClick={() => this.handleOptionSelect("Detailed Monitoring")}
                                                    className="text-blue-600 bg-white-100 p-3 border-solid border-blue-500 rounded hover:bg-blue-200 w-[350px]"
                                                >
                                                    Detailed Monitoring
                                                </button>
                                                <button
                                                    onClick={() => this.handleOptionSelect("Data Transfer")}
                                                    className="text-blue-600 bg-white-100 p-3 border-solid border-blue-500 rounded hover:bg-blue-200 w-[350px] mb-10"
                                                >
                                                    Data Transfer
                                                </button>
                                                <button
                                                    onClick={() => this.handleOptionSelect("Additional Costs")}
                                                    className="text-blue-600 bg-white-100 p-3 border-solid border-blue-500 rounded hover:bg-blue-200 w-[350px] mb-10"
                                                >
                                                    Additional Costs
                                                </button>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {/* Popup for Amazon Elastic Block Store (EBS) */}
                            {this.state.showPopup === "Amazon Elastic Block Store (EBS)" && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div className="bg-white p-6 rounded shadow-lg w-[800px]">
                                        <div className="flex justify-between items-center mb-4">
                                            <h2 className="text-2xl font-semibold text-gray-600">Elastic Block Store (EBS)</h2>
                                            <button
                                                onClick={this.closePopup} // Call to close the popup
                                                className="text-gray-400 border border-gray-600 rounded-full w-8 h-8 text-2xl flex items-center justify-center hover:bg-gray-200"
                                            >
                                                &times; {/* Close symbol (X) */}
                                            </button>
                                        </div>

                                        {/* Dropdowns for storage options and IOPS per volume */}
                                        <div className="grid grid-cols-2 gap-4 mt-4">
                                            {/* Storage Options Dropdown */}
                                            <div>
                                                <label className="block text-gray-600 mb-1 mt-2">Storage for each EC2 instance</label>
                                                <select
                                                    className="block w-full p-2 border border-gray-300 rounded"
                                                    onChange={(e) => this.setState({ selectedStorage: e.target.value })} // Update selected storage
                                                >
                                                    <option value="">Select Storage Option</option>
                                                    <option>General Purpose (gp3)</option>
                                                    <option>General Purpose SSD (gp2)</option>
                                                    <option>Provisioned IOPS SSD (io1)</option>
                                                    <option>Provisioned IOPS SSD (io2)</option>
                                                    <option>Throughput Optimized HDD (1st)</option>
                                                    <option>Cold HDD (sc 1)</option>
                                                    <option>Magnetic (Previous generation)</option>
                                                </select>
                                            </div>

                                            {/* IOPS Input */}
                                            <div>
                                                <label className="block text-gray-600 mb-1 mt-2">
                                                    {this.state.selectedStorage ? `${this.state.selectedStorage} - IOPS` : "General Purpose SSD (gp3) - IOPS"}
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="IOPS per volume"
                                                    className="block w-full p-2 border border-gray-300 rounded"
                                                />
                                            </div>
                                        </div>

                                        {/* Throughput Section */}
                                        <div className="mt-6">
                                            <h4 className="text-lg font-semibold text-gray-600 mb-4">
                                                {this.state.selectedStorage ? `${this.state.selectedStorage} - Throughput` : "General Purpose SSD (gp3) - Throughput"}
                                            </h4>
                                            <div className="grid grid-cols-2 gap-4">
                                                {/* Value Input */}
                                                <div>
                                                    <label className="block text-gray-600">Value</label>
                                                    <input
                                                        type="text"
                                                        placeholder="-"
                                                        className="block w-full p-2 border border-gray-300 rounded"
                                                    />
                                                </div>

                                                {/* Unit Dropdown */}
                                                <div>
                                                    <label className="block text-gray-600">Unit</label>
                                                    <select className="block w-full p-2 border border-gray-300 rounded">
                                                        <option value="" disabled selected>
                                                            Enter
                                                        </option>
                                                        <option>KBps</option>
                                                        <option>MBps</option>
                                                        <option>GBps</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                {/* Storage Amount */}
                                                <div>
                                                    <label className="block text-gray-600 mb-1 mt-2">Storage Amount</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Amount"
                                                        className="block w-full p-2 border border-gray-300 rounded"
                                                    />
                                                </div>

                                                {/* Unit Dropdown */}
                                                <div>
                                                    <label className="block text-gray-600 mb-1 mt-2">Unit</label>
                                                    <select className="block w-full p-2 border border-gray-300 rounded">
                                                        <option value="" disabled selected>
                                                            Enter
                                                        </option>
                                                        <option>MB</option>
                                                        <option>GB</option>
                                                        <option>TB</option>
                                                    </select>
                                                </div>
                                                <div className="grid grid-cols-1 gap-4">
                                                    <div>
                                                        <label className="block text-gray-600 mb-1 mt-2">Snapshot Frequency</label>
                                                        <select className="block w-full p-2 border border-gray-300 rounded">
                                                            <option value="" disabled selected>
                                                                Enter
                                                            </option>
                                                            <option>No Snapshot Storage</option>
                                                            <option>Hourly</option>
                                                            <option>Daily</option>
                                                            <option>4x Daily</option>
                                                            <option>8x Daily</option>
                                                            <option>Weekly</option>
                                                            <option>Monthly</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 gap-4">
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-600 mt-4">SHOW CALCULATIONS</h3>
                                                <p className="text-gray-700 mt-2">730 TOTAL EC2 hours / 730 hours in a month = 1.00 instance months</p>
                                                <p className="text-gray-700 mt-2">EBS Storage Cost: 0 USD</p>
                                                <p className="text-gray-700 mt-2">Elastic Block Store (EBS) total Cost (monthly) : 0.00 USD</p>
                                                <div className="flex justify-end mt-2">
                                                    <button
                                                        onClick={this.closePopup} // Function to handle cancel
                                                        className="bg-gray-300 text-gray-700 p-2 rounded mr-2 hover:bg-gray-400"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={() => this.setState({ showConfirmationPopup: true })} // Show the confirmation popup
                                                        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                                                    >
                                                        Confirm
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {this.state.showPopup === "Detailed Monitoring" && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div className="bg-white p-6 rounded shadow-lg w-[600px]"> {/* Increased width and height */}
                                        <div className="flex justify-between items-center mb-4">
                                            <h2 className="text-2xl font-semibold text-gray-600">Detailed Monitoring</h2>
                                            <button
                                                onClick={this.closePopup} // Call to close the popup
                                                className="text-gray-400 border border-gray-600 rounded-full w-8 h-8 text-2xl flex items-center justify-center hover:bg-gray-200"
                                            >
                                                &times; {/* Close symbol (X) */}
                                            </button>
                                        </div>

                                        {/* Checkbox for enabling monitoring */}
                                        <div className="flex items-center mb-4">
                                            <input
                                                type="checkbox"
                                                id="enableMonitoring"
                                                className="mr-2"
                                                onChange={this.toggleMonitoring} // Function to handle checkbox state
                                            />
                                            <label htmlFor="enableMonitoring" className="text-gray-600">
                                                Enable Monitoring
                                            </label>
                                        </div>

                                        {/* Calculations section */}
                                        <h3 className="text-lg font-semibold text-gray-600 mt-4">CALCULATIONS</h3>
                                        <p className="text-gray-700">Metrics Cost (monthly): 0.00 USD</p>

                                        {/* Buttons at the bottom right */}
                                        <div className="flex justify-end mt-8">
                                            <button
                                                onClick={this.closePopup} // Function to handle cancel
                                                className="bg-gray-300 text-gray-700 p-2 rounded mr-2 hover:bg-gray-400"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={() => this.setState({ showConfirmationPopup: true })} // Show the confirmation popup
                                                className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                                            >
                                                Confirm
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {this.state.showPopup === "Data Transfer" && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div className="bg-white p-6 rounded shadow-lg w-[900px]">
                                        <div className="flex justify-between items-center mb-4">
                                            <h2 className="text-2xl font-semibold text-gray-600">Data Transfer</h2>
                                            <button
                                                onClick={this.closePopup} // Call to close the popup
                                                className="text-gray-400 border border-gray-600 rounded-full w-8 h-8 text-2xl flex items-center justify-center hover:bg-gray-200"
                                            >
                                                &times; {/* Close symbol (X) */}
                                            </button>
                                        </div>

                                        {/* INBOUND DATA TRANSFER Heading */}
                                        <h3 className="text-lg font-semibold text-gray-600 mb-4">INBOUND DATA TRANSFER</h3>

                                        {/* Flex container for the 3 headings in a single row */}
                                        <div className="flex justify-between mb-4">
                                            {/* Data Transfer Form Heading */}
                                            <div className="flex flex-col items-start w-1/3 mx-2">
                                                <h4 className="text-md font-semibold text-gray-600 mb-2">Data Transfer form</h4>
                                                <select className="border border-gray-300 p-2 rounded w-full">
                                                    <option value="" disabled selected>
                                                        Data Transfer form
                                                    </option>
                                                    <option value="internet">Internet (free)</option>
                                                    <option value="all_other_regions">All Other Regions (free)</option>
                                                </select>
                                            </div>

                                            {/* Enter Amount Heading */}
                                            <div className="flex flex-col items-start w-1/3 mx-2">
                                                <h4 className="text-md font-semibold text-gray-600 mb-2">Enter Amount</h4>
                                                <input
                                                    type="text"
                                                    placeholder="Enter"
                                                    className="border border-gray-300 p-2 rounded w-full"
                                                />
                                            </div>

                                            {/* Data Amount Heading */}
                                            <div className="flex flex-col items-start w-1/3 mx-2">
                                                <h4 className="text-md font-semibold text-gray-600 mb-2">Data Amount</h4>
                                                <select className="border border-gray-300 p-2 rounded w-full">
                                                    <option value="" disabled selected>
                                                        Enter
                                                    </option>
                                                    <option value="mb_per_month">MB per month</option>
                                                    <option value="gb_per_month">GB per month</option>
                                                    <option value="tb_per_month">TB per month</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* INTRA-REGION DATA TRANSFER Heading */}
                                        <h3 className="text-lg font-semibold text-gray-600 mb-4">INTRA-REGION DATA TRANSFER</h3>

                                        {/* Flex container for the 2 headings in a single row */}
                                        <div className="grid grid-cols-3 gap-4 mt-4">
                                            {/* Enter Amount Heading */}
                                            <div className="flex flex-col items-start w-1/2 mx-2">
                                                <h4 className="text-md font-semibold text-gray-600 mb-2">Enter Amount</h4>
                                                <input
                                                    type="text"
                                                    placeholder="Enter"
                                                    className="border border-gray-300 p-2 rounded w-[270px]"
                                                />
                                            </div>

                                            {/* Data Amount Heading */}
                                            <div className="flex flex-col items-start w-1/2 mx-2">
                                                <h4 className="text-md font-semibold text-gray-600 mb-2">Data Amount</h4>
                                                <select className="border border-gray-300 p-2 rounded w-[270px]">
                                                    <option value="" disabled selected>
                                                        Enter
                                                    </option>
                                                    <option value="mb_per_month">MB per month</option>
                                                    <option value="gb_per_month">GB per month</option>
                                                    <option value="tb_per_month">TB per month</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* OUTBOUND DATA TRANSFER Heading */}
                                        <h3 className="text-lg font-semibold text-gray-600 mb-4">OUTBOUND DATA TRANSFER</h3>

                                        {/* Flex container for the 3 headings in a single row */}
                                        <div className="flex justify-between mb-4">
                                            {/* Data Transfer To Heading */}
                                            <div className="flex flex-col items-start w-1/3 mx-2">
                                                <h4 className="text-md font-semibold text-gray-600 mb-2">Data Transfer To</h4>
                                                <select className="border border-gray-300 p-2 rounded w-full">
                                                    <option value="" disabled selected>
                                                        Enter
                                                    </option>
                                                    <option value="internet">Internet (0.05 USD-0.09 USD per GB)</option>
                                                    <option value="amazon_cloudfront">Amazon CloudFront (Free)</option>
                                                    <option value="us_east_nova">US East (N. Virginia) (0.01 USD per GB)</option>
                                                    <option value="us_east_verizon">US East (Verizon) (0.01 USD per GB)</option>
                                                </select>
                                            </div>

                                            {/* Enter Amount Heading */}
                                            <div className="flex flex-col items-start w-1/3 mx-2">
                                                <h4 className="text-md font-semibold text-gray-600 mb-2">Enter Amount</h4>
                                                <input
                                                    type="text"
                                                    placeholder="Enter"
                                                    className="border border-gray-300 p-2 rounded w-full"
                                                />
                                            </div>

                                            {/* Data Amount Heading */}
                                            <div className="flex flex-col items-start w-1/3 mx-2">
                                                <h4 className="text-md font-semibold text-gray-600 mb-2">Data Amount</h4>
                                                <select className="border border-gray-300 p-2 rounded w-full">
                                                    <option value="" disabled selected>
                                                        Enter
                                                    </option>
                                                    <option value="mb_per_month">MB per month</option>
                                                    <option value="gb_per_month">GB per month</option>
                                                    <option value="tb_per_month">TB per month</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Calculations section */}
                                        <h3 className="text-lg font-semibold text-gray-600 mt-4">SHOW CALCULATIONS</h3>
                                        <p className="text-gray-700 mt-2">Intra Region:</p>
                                        <p className="text-gray-700 mt-2">(0 GB x 0.01 USD per GB outbound) + (0 GB x 0.01 USD per GB inbound) = 0.00 USD</p>

                                        {/* Buttons at the bottom right */}
                                        <div className="flex justify-end mt-8">
                                            <button
                                                onClick={this.closePopup} // Function to handle cancel
                                                className="bg-gray-300 text-gray-700 p-2 rounded mr-2 hover:bg-gray-400"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={() => this.setState({ showConfirmationPopup: true })} // Show the confirmation popup
                                                className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                                            >
                                                Confirm
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {this.state.showPopup === "Additional Costs" && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div className="bg-white p-6 rounded shadow-lg w-[800px]">
                                        <div className="flex justify-between items-center mb-4">
                                            <h2 className="text-2xl font-semibold text-gray-600">Additional Costs</h2>
                                            <button
                                                onClick={this.closePopup} // Call to close the popup
                                                className="text-gray-400 border border-gray-600 rounded-full w-8 h-8 text-2xl flex items-center justify-center hover:bg-gray-200"
                                            >
                                                &times; {/* Close symbol (X) */}
                                            </button>
                                        </div>

                                        {/* Placeholder text */}
                                        <p className="text-gray-600 mb-2">Enter any placeholder cost such as Licensing to add to your estimate:</p>
                                        <input
                                            type="text"
                                            placeholder="-"
                                            className="border border-gray-300 p-2 rounded w-full mb-4" // Styling for the input box
                                        />

                                        {/* Calculations section */}
                                        <h3 className="text-lg font-semibold text-gray-600 mt-4">Calculations</h3>
                                        <p className="text-gray-700">Additional Cost (monthly): 0.00 USD</p>

                                        {/* Buttons at the bottom right */}
                                        <div className="flex justify-end mt-8">
                                            <button
                                                onClick={this.closePopup} // Function to handle cancel
                                                className="bg-gray-300 text-gray-700 p-2 rounded mr-2 hover:bg-gray-400"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={() => this.setState({ showConfirmationPopup: true })} // Show the confirmation popup
                                                className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                                            >
                                                Confirm
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Confirmation Popup */}
                            {this.state.showConfirmationPopup && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div className="bg-white p-6 rounded shadow-lg w-[400px]">
                                        <div className="flex justify-center mb-4">
                                            {/* Success Checkmark Icon */}
                                            <div className="w-16 h-16 bg-green-100 flex items-center justify-center rounded-full">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    className="w-12 h-12 text-green-600"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Success Message */}
                                        <h2 className="text-2xl font-semibold text-center text-gray-600">Done!</h2>
                                        <p className="text-center text-gray-600 mt-4">Your changes have been saved.</p>

                                        {/* Done Button */}
                                        <div className="flex justify-center mt-6">
                                            <button
                                                onClick={this.closeAllPopups} // Call to close all popups
                                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                            >
                                                Done
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="border border-[#384CFF] text-[#384CFF] hover:bg-blue-100 px-4 py-2 rounded mr-2">Cancel</button>
                            <button className="bg-[#384CFF] hover:bg-blue-600 text-white px-4 py-2 rounded">Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConfigureAmazonEC2;

