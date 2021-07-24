import axios from './axios-api';

const getDapplets = () => {
  return axios.get('/v1/dapplets').then((response) => response.data);
};

const dappletApi = {
  getDapplets,
};

export default dappletApi;
