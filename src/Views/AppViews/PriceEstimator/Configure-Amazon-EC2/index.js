import React, { Component } from "react";

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
        };
    }

    handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        this.setState({ [name]: type === "checkbox" ? checked : value });
    };

    render() {
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

                <div className="">
                    <h1 className="text-2xl font-bold mb-4">Payment Options</h1>
                    <p className="mb-4 text-black">Estimated commitment price based on the following selections:</p>
                    <div className="flex flex-wrap mb-4">
                        <p className="mr-4 text-black"><strong>Instance Type:</strong> {this.state.instanceType}</p>
                        <p className="text-black"><strong>Operating System:</strong> {this.state.operatingSystem}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
                        {/* Compute Savings Plans */}
                        <div className="bg-white p-4 rounded-lg shadow h-96 flex flex-col justify-between">
                            {/* Top Content */}
                            <div>
                                <h2 className="font-bold mb-2">COMPUTE SAVINGS PLANS</h2>
                                <p className="text-sm mb-4 text-black">Up to 66% discount, automatically applies to all usage on EC2 instances and Lambda</p>

                                <div className="mb-4">
                                    <h3 className="font-semibold mb-2">Reservation Term</h3>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="computeTerm" value="1 year" className="form-radio" />
                                            <span className="ml-2">1 Year</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="computeTerm" value="3 year" className="form-radio" checked />
                                            <span className="ml-2">3 Year</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h3 className="font-semibold mb-2">Payment Options</h3>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="computePayment" value="No Upfront" className="form-radio " />
                                            <span className="ml-2">No Upfront</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="computePayment" value="Partial Upfront" className="form-radio" checked />
                                            <span className="ml-2">Partial Upfront</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input type="radio" name="computePayment" value="All Upfront" className="form-radio" />
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
                        <button className="border border-[#384CFF] text-[#384CFF] hover:bg-blue-100 px-4 py-2 rounded">Optional</button>
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
