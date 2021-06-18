import React from 'react';

import RestaurantCard from '../../components/RestaurantCard';
import Input from '../../components/Input';

import { Container, Header, Title, ListContainer } from './styles';

export default function Home() {
    return (
        <Container>
            <Header>
                <Title>Bem-vindo ao Lista Rango</Title>
                <Input 
                    inputColor="#FBFBFB" 
                    title="Buscar estabelecimento"
                    width="840px"
                />
            </Header>
            <ListContainer>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </ListContainer>
        </Container>
    );
}