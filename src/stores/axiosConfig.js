import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.100.54';
if(localStorage.getItem('token')) axios.defaults.headers.common['Authorization'] = "JWT " + localStorage.getItem('token');
else delete axios.defaults.headers.common['Authorization'];

export default function setAuthToken() {
  if(localStorage.getItem('token')) axios.defaults.headers.common['Authorization'] = "JWT " + localStorage.getItem('token');
  else delete axios.defaults.headers.common['Authorization'];
};
