import axios from 'axios';

const api = axios.create({
  baseURL: 'https://private-228b1-dashupmenu.apiary-mock.com/'
});

export default api;