
import axios from 'axios';
import store from './store';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
});

// Set up a variable to track the number of ongoing requests
let ongoingRequests = 0;

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Increment the ongoing requests count
    ongoingRequests++;

    // Dispatch a Vuex action to start loading
    store.dispatch('startLoading');

    return config;
  },
  (error) => {
    // Handle request error
    console.error('Request interceptor error:', error);
    // Decrement the ongoing requests count
    ongoingRequests--;

    // Dispatch a Vuex action to stop loading when all requests are complete
    if (ongoingRequests === 0) {
      store.dispatch('stopLoading');
    }

    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Decrement the ongoing requests count
    ongoingRequests--;

    // Dispatch a Vuex action to stop loading when all requests are complete
    if (ongoingRequests === 0) {
      store.dispatch('stopLoading');
    }

    return response;
  },
  (error) => {
    // Decrement the ongoing requests count
    ongoingRequests--;

    // Handle response error
    console.error('Response interceptor error:', error);

    // Dispatch a Vuex action to stop loading when all requests are complete
    if (ongoingRequests === 0) {
      store.dispatch('stopLoading');
    }

    return Promise.reject(error);
  }
);

export default api;