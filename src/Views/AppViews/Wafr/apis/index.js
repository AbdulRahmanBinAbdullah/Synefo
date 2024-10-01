import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
    baseURL: 'https://dpgg16uo5d.execute-api.us-east-1.amazonaws.com/dev/create-workload', // Base URL
    headers: {
        'Content-Type': 'application/json', // Ensure that you're sending JSON
        // You can add authorization headers or other headers if needed
        // 'Authorization': `Bearer ${token}`
    },
    timeout: 60000, // Optional: Timeout after 60 seconds
});

// Utility function for creating workload
export const createWorkload = async (payload) => {
    try {
        // Send a POST request to the API with the payload
        const response = await apiClient.post('', payload);
        return response.data; // Return the data from the response
    } catch (error) {
        // Handle errors (e.g., log them, show a message to the user)
        console.error('Error creating workload:', error);
        throw error; // Optionally rethrow the error to handle it in the calling function
    }
};
