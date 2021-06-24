import axios from 'axios';
import API_URL from './api';

export async function loadRestaurants() {
    return await axios.get(`${API_URL}/restaurants`)
}