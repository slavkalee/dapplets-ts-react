import axios from './axios-api';

const getDapplets = (params: any) => {
  return axios
    .get('/v1/dapplets', { params })
    .then((response) => response.data);
};

const getAllTags = () => {
  return axios.get('/v1/tags').then((response) => response.data);
};

const api = {
  getDapplets,
  getAllTags,
};

export default api;
