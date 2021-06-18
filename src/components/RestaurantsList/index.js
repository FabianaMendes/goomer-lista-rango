import React, { useState } from 'react';
import { searchRestaurant } from '../../api';

import Input from '../../components/Input';
import RestaurantCard from '../../components/RestaurantCard';

import { Header, Title, ListContainer } from './styles';

export default function RestaurantList({ restaurants, onClick }) {

    const [restaurant, setRestaurant] = useState('');

    function handleRestaurant(event) {
        setRestaurant(event.target.value);
        searchRestaurant(restaurant);
        console.log(restaurant);
    }

    return(
        <>
            <Header>
                <Title>Bem-vindo ao Lista Rango</Title>
                <Input 
                    inputColor="#FBFBFB" 
                    title="Buscar estabelecimento"
                    width="840px"
                    onChange={handleRestaurant}
                />
            </Header>
            <ListContainer>
                {restaurants.map(restaurant => (
                    <RestaurantCard
                        key={restaurant.id}
                        title={restaurant.name}
                        subtitle={restaurant.address}
                        status="Aberto agora"
                        logoImg={restaurant.image}
                        onClick={onClick}
                    />
                ))}
            </ListContainer>
        </>
    )
}