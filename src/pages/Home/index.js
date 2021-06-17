import React from 'react';

import RestaurantCard from '../../components/RestaurantCard';

import { Container, Header, Title, ListContainer } from './styles';

export default function Home() {
    return (
        <Container>
            <Header>
                <Title>Bem-vindo ao Lista Rango</Title>
                <input type="search" placeholder="Buscar estabelecimento"/>
            </Header>
            <ListContainer>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </ListContainer>
        </Container>
    );
}