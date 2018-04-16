import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.100.54';

export default function setAuthToken() {
  if(localStorage.getItem('token')) axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
  else delete axios.defaults.headers.common['Authorization'];
};
