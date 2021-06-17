import React from 'react';

import RestaurantCard from '../../components/RestaurantCard';

import { Container, Header, Title, InputBlock, ListContainer } from './styles';

import { BiSearch } from 'react-icons/bi';

export default function Home() {
    return (
        <Container>
            <Header>
                <Title>Bem-vindo ao Lista Rango</Title>
                <InputBlock>
                    <input type="search" placeholder="Buscar estabelecimento"/>
                    <button type="submit"><BiSearch/></button>
                </InputBlock>
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