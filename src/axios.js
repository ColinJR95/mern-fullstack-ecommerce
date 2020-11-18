import axios from 'axios';

const instance = axios.create({
	baseURL: "http://localhost:5001/mern-ecommerce-f7e99/us-central1/api" // THIS IS THE API URL 
});

export default instance;

