import React from 'react';

import { Container, Card, Logo, RestaurantData, Title, Subtitle } from './styles';


export default function RestaurantCard({ restaurant, onSelectRestaurant }) {

    return(
        <Container>
            <span>"Aberto agora"</span>
            <Card onClick={() => onSelectRestaurant(restaurant)}>
                <Logo src={restaurant.image} alt={restaurant.image}/>
                <RestaurantData>
                    <Title>{restaurant.name}</Title>
                    <Subtitle>{restaurant.address}</Subtitle>
                </RestaurantData>
            </Card>
        </Container>
    );
}