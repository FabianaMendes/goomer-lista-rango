import axios from 'axios';

//const API_URL = process.env.REACT_APP_API_URL;
export const API_URL = 'https://challange.goomer.com.br';

export function fetchRestaurants() {
    return axios.get(`${API_URL}/restaurants`)
}