import { IParams } from '../../interfaces';
import axios from './axios-api';

const getDapplets = (params: IParams) => {
  return axios.get('/v1/dapplets', { params });
};

const getAllTags = () => {
  return axios.get('/v1/tags');
};

const getImage = (image: string) => {
  return axios.get(`/v1/files/${image}`);
};

const api = {
  getDapplets,
  getAllTags,
  getImage,
};

export default api;
