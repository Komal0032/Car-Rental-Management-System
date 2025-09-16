import axios from 'axios';

const BASE_URL = 'http://localhost:8085/api';

const getAllCars = () => {
  return axios.get(`${BASE_URL}/cars`);
};

export default {
  getAllCars,
};
