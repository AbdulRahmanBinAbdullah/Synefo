
import React, { Component } from 'react';
import SelectComponent from '../SelectComponent';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import toggleButtonClasses from '@mui/material';
import ToggleButton from '../components/toggleButton';

class CreateWorkloadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            workloadName: '',
            isWorkloadResources: '',
            lens: '',
            awsAccount: '',
            workloadType: '',
            environment: '',
            description: '',
            istoggle: false,
            tags: [{ key: '', value: '' }],
        };
    }


    handleAddTag = () => {
        this.setState(prevState => ({
            tags: [...prevState.tags, { key: '', value: '' }]
        }));
    };

    handleTagChange = (index, field, value) => {
        this.setState(prevState => {
            const newTags = [...prevState.tags];
            newTags[index][field] = value;
            return { tags: newTags };
        });
    };

    handleWorkloadResourcesy = () => {
        this.setState((prevState) => ({
            isWorkloadResources: !prevState.isWorkloadResources,
        }));
    };


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleLensChange = (newLens) => {
        this.setState({ lens: newLens });
    };

    handleAwsAccountChange = (newAwsAccount) => {
        this.setState({ awsAccount: newAwsAccount });
    };

    handleWorkloadTypeChange = (newWorkloadType) => {
        this.setState({ workloadType: newWorkloadType });
    };

    handleEnvironmentChange = (newEnvironment) => {
        this.setState({ environment: newEnvironment });
    };

    handleToggle = (toggleValue) => {
        this.setState({ istoggle: toggleValue });
    };

    render() {

        const wafrLenses = ['Well-Architected Framework Review (WAFR)', 'Other lens 1', 'Other lens 2'];
        const awsAccounts = ['Account 1', 'Account 2', 'Account 3']; // Add your accounts
        const workloadTypes = ['Type 1', 'Type 2', 'Type 3']; // Add your types
        const environments = ['Production', 'Staging', 'Development']; // Add your environments

        const { workloadName, lens, awsAccount, workloadType, environment, description, isWorkloadResources, istoggle } = this.state;

        return (
            <div className="px-8 py-6 bg-white shadow-md rounded-lg w-full">

                <h2 className="text-2xl font-medium mb-6">Create New Workload</h2>

                <form noValidate autoComplete="off">
                    <div className='w-[450px] '>
                        {/* Workload Name */}
                        <div className="mb-6">
                            <label htmlFor="workloadName" className="block text-gray-700 text-lg font-medium mb-2">
                                Workload Name
                            </label>
                            <input
                                type="text"
                                id="workloadName"
                                name="workloadName"
                                value={workloadName}
                                onChange={this.handleChange}
                                placeholder="Enter workload name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Select Lens */}
                        <div className="mb-4">
                            <SelectComponent
                                lenses={wafrLenses}
                                placeholder="Select an option"
                                label="Select WAFR Lens"
                                onLensChange={this.handleLensChange}
                            />
                        </div>

                        <toggleButtonClasses />
                        {/* AWS Account */}
                        <div className="mb-4">
                            <SelectComponent
                                lenses={awsAccounts}
                                placeholder="Select AWS account to pull resources from"
                                label="AWS account to pull resources from"
                                onLensChange={this.handleAwsAccountChange}
                            />
                        </div>


                        {/* toggle button  */}
                        <div className='mb-4 flex items-center gap-6'>
                            <ToggleButton isOn={istoggle} onChange={(value) => this.handleToggle(value)} />
                            <p className='text-black'>Create workload on your AWS account</p>
                        </div>

                        {istoggle && (
                            <div className="mb-4">
                                <SelectComponent
                                    lenses={awsAccounts}
                                    placeholder="nOps-Demo"
                                    label="AWS account to save WAFR progress"
                                    onLensChange={this.handleAwsAccountChange}
                                />
                            </div>)
                        }


                        {/* Workload Type */}
                        <div className="mb-4">
                            <SelectComponent
                                lenses={workloadTypes}
                                placeholder="Select AWS account to pull resources from"
                                label="Select Workload Type"
                                onLensChange={this.handleWorkloadTypeChange}
                            />
                        </div>

                        {/* Environment */}
                        <div className="mb-4">
                            <SelectComponent
                                lenses={environments}
                                placeholder="Production"
                                label="Select Environment"
                                onLensChange={this.handleEnvironmentChange}
                            />
                        </div>

                    </div>
                    {/* Description */}
                    <div className="mb-4 w-2/3">
                        <label htmlFor="description" className="block text-gray-700 text-lg font-medium mb-2">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={description}
                            onChange={this.handleChange}
                            placeholder="Please enter a brief description of the workload"
                            rows="4"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>


                    {/* Specify Workload Resources Button */}
                    <div className="flex mb-6">
                        <button
                            type="button"
                            onClick={this.handleWorkloadResourcesy}
                            className="bg-[#B5C2FB] text-[#383874] text-lg font-semibold px-6 py-4 rounded-lg flex gap-8 items-center space-x-2"
                        >
                            <span>Specify Workload Resources</span>
                            {isWorkloadResources ? <KeyboardDoubleArrowUpIcon /> : <KeyboardDoubleArrowDownIcon />}

                        </button>
                    </div>


                    {/* this is for the work specify workload resources */}
                    {isWorkloadResources && (
                        <div className="">
                            <div className="w-[450px] ">
                                {/* Regions */}
                                <div className="mb-4">
                                    <SelectComponent
                                        lenses={awsAccounts}
                                        placeholder="All Regions"
                                        label="Regions"
                                        onLensChange={this.handleAwsAccountChange}
                                    />
                                </div>

                                {/* AWS Managed Services */}
                                <div className="mb-4">
                                    <SelectComponent
                                        lenses={workloadTypes}
                                        placeholder="All AWS Managed services"
                                        label="AWS Managed Services"
                                        onLensChange={this.handleWorkloadTypeChange}
                                    />
                                </div>

                                {/* VPC */}
                                <div className="mb-4">
                                    <SelectComponent
                                        lenses={environments}
                                        placeholder="All AWS Managed services"
                                        label="VPC"
                                        onLensChange={this.handleEnvironmentChange}
                                    />
                                </div>
                            </div>

                            <p className="text-lg font-medium text-gray-500 mb-4">SELECT TAGS</p>

                            {/* <div className="flex justify-between items-center gap-10 w-2/3">
                                <div className="mb-2 w-full">
                                    <SelectComponent
                                        lenses={environments}
                                        placeholder="Select Tag Key"
                                        label="Select Tag Name"
                                        onLensChange={this.handleEnvironmentChange}
                                    />
                                </div>

                                <div className="mb-4 w-full">
                                    <SelectComponent
                                        lenses={environments}
                                        placeholder="Select Tag Key"
                                        label="Select Tag Value"
                                        onLensChange={this.handleEnvironmentChange}
                                    />
                                </div>
                            </div> */}

                            {this.state.tags.map((tag, index) => (
                                <div key={index} className="flex justify-between items-center gap-10 w-2/3 mb-4">
                                    <div className="w-full">
                                        <SelectComponent
                                            lenses={environments}
                                            placeholder="Select Tag Key"
                                            label="Select Tag Name"
                                            onLensChange={(value) => this.handleTagChange(index, 'key', value)}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <SelectComponent
                                            lenses={environments}
                                            placeholder="Select Tag Value"
                                            label="Select Tag Value"
                                            onLensChange={(value) => this.handleTagChange(index, 'value', value)}
                                        />
                                    </div>
                                </div>
                            ))}
                            <div>
                                <button
                                    className='text-blue-500 font-medium'
                                    onClick={this.handleAddTag}
                                    type="button"
                                >
                                    + add another Tag
                                </button>
                            </div>
                        </div>
                    )}
                    {/* Cancel and Save Buttons */}
                    <div className="flex justify-start gap-6 mt-6">
                        <button type="button" className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg">
                            Cancel
                        </button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateWorkloadForm;

