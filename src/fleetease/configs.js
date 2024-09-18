// apiConfig.js
const API_BASE_URL = 'http://127.0.0.1:8000';
const WEBSOCKET_BASE_URL = 'ws://127.0.0.1:8000/communicate';

const VEHICLE_FETCH = `${API_BASE_URL}/vehicle/vehicles`;
const BUYER_VEHICLES = `${API_BASE_URL}/vehicle/buyer-vehicles`;
const REFURB_REQUEST = `${API_BASE_URL}/refurb/create-refurbishment`;
const ADD_VEHICLE_URL= `${API_BASE_URL}/vehicle/create_vehicle`;
const GET_VEHICLE_URL= `${API_BASE_URL}/vehicle/vehicles`;
const PURCHASE_URL= `${API_BASE_URL}/vehicle/purchase_vehicle`;
const GET_CUSTOMER_DETAILS = `${API_BASE_URL}/user/get-details`;
const GET_CUSTOMER_VEHICLE_DETAILS = `${API_BASE_URL}/user/get-uservehicles`;
const SEARCH_FILTER = `${API_BASE_URL}/vehicle/filter-vehicles`;
const CHAT_API = `${WEBSOCKET_BASE_URL}/chat-api`;
const ENQUIRY_API = `${API_BASE_URL}/communicate/enquiry`;
const LOGIN_API = `${API_BASE_URL}/user/login`;
const REGISTER_API = `${API_BASE_URL}/user/register`;

const apiConfig = {
  API_BASE_URL,
  BUYER_VEHICLES,
  VEHICLE_FETCH,
  REFURB_REQUEST,
  ADD_VEHICLE_URL,
  GET_VEHICLE_URL,
  GET_CUSTOMER_DETAILS,
  GET_CUSTOMER_VEHICLE_DETAILS,
  SEARCH_FILTER,
  CHAT_API,
  ENQUIRY_API,
  LOGIN_API,
  REGISTER_API,
  PURCHASE_URL
};

export default apiConfig;
