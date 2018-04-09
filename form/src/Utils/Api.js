import axios from 'axios';

const create = (baseUrl = '/') => {
  const api = axios.create({
    baseURL: baseUrl,
    timeout: 90000,
    headers: {
      'X-Client': 'serenas-web',
    },
  });

  const sendForm = (data) => api.post('submitForm', data);

  return {
    sendForm,
  };
};

export default {
  create,
};
