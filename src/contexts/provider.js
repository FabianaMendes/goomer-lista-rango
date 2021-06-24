import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import API_URL from '../services/api';

const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {
    const [restaurant, setRestaurant] = useState([]);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        const storagedRestaurant = localStorage.getItem('restaurant');
        const storagedMenu = localStorage.getItem('menu');

        if (storagedRestaurant && storagedMenu ) {
            setMenu(JSON.parse(storagedMenu));
            setRestaurant(JSON.parse(storagedRestaurant));
        }
    }, []);

    async function selectedRestaurant(restaurant, id) {
        setMenu(null);
        setRestaurant(null);
        localStorage.removeItem('restaurant')
        localStorage.removeItem('menu')
        try {
            const response = await axios.get(`${API_URL}/restaurants/${id}/menu`);
            setRestaurant(restaurant);
            setMenu(response.data);
            localStorage.setItem('restaurant', JSON.stringify(restaurant));
            localStorage.setItem('menu', JSON.stringify(response.data));
        } catch(error) {
            alert('Restaurante não encontrado');
        }
    };

    return (
        <RestaurantContext.Provider value={{ restaurant, menu, selectedRestaurant }}>
            {children}
        </RestaurantContext.Provider>
    );
};

function useRestaurant() {
    const context = useContext(RestaurantContext);
    return context;
}

export { RestaurantProvider, useRestaurant };