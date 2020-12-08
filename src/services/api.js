//http://www.sujeitoprogramador.com/r-api/?api=filmes
import axios from 'axios';
const api = axios.create({
  baseURL: 'http://www.sujeitoprogramador.com/',
});

export default api;
