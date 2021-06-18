import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export function fetchRestaurants() {
    return axios.get(`${API_URL}/restaurants`)
}

export function searchRestaurant(name) {
    return axios.get(`${API_URL}/restaurants`, name)
}

export function getMenu(id) {
    return axios.get(`${API_URL}/restaurants/${id}/menu`)
}