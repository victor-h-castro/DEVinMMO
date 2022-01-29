import axios from 'axios';

const axiosMMO = axios.create({
  baseURL: 'https://mmo-games.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
    'x-rapidapi-key': 'd1d532ba70mshf5daab06749b3aap14d785jsn7ebb9ebe3d7d',
  },
});

axiosMMO.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'BIP BOP, ERRORRRRR!!!'),
);

export default axiosMMO;
