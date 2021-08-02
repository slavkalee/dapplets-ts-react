import axios from 'axios';

axios.defaults.baseURL = 'https://dapplets-hiring-api.herokuapp.com/api';
axios.interceptors.request.use(
  function (config) {
    for (let key in config.params) {
      if (typeof config.params[key] !== 'number') {
        config.params[key] = JSON.stringify(config.params[key]);
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;
