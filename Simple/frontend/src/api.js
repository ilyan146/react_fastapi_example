import axios from 'axios';

// Create an instance of axios with the base URL -- The variable is called api and now the base URL is set and if you want to change you only need to change it here, this is common best practice
const api = axios.create({
  baseURL: "http://localhost:8000"
});

// Export the Axios instance
export default api;