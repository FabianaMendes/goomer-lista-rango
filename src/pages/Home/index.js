import React, { useState, useEffect } from 'react';
import { fetchRestaurants } from '../../api';

import { Container } from './styles';

import RestaurantList from '../../components/RestaurantsList';

export default function Home() {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetchRestaurants()
          .then(response => {
            setRestaurants(response.data)
            console.log(response.data)
          })
          .catch(() => {
            alert('Erro ao listar restaurantes');
        })
    }, []);
    
    

    return (
        <Container>
            <RestaurantList
                restaurants={restaurants}
                onClick={() => {}}
            />
        </Container>
    );
}