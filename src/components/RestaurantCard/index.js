import React from 'react';

import { Container, Card, Logo, RestaurantData, Title, Subtitle } from './styles';

import logo from '../../assets/logo-rest.png';

export default function RestaurantCard() {
    return(
        <Container>
            <span>Aberto agora</span>
            <Card>
                <Logo src={logo} alt="logo-rest.png"/>
                <RestaurantData>
                    <Title>Nome do Restaurante</Title>
                    <Subtitle>Endereço do Restaurante</Subtitle>
                </RestaurantData>
            </Card>
        </Container>
    );
}