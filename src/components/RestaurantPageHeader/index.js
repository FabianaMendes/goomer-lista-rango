import React from 'react';

import { 
    Container, 
    Logo, 
    RestaurantData, 
    Title, 
    Description, 
    Days
} from './styles';

import logo from '../../assets/logo-rest.png';

export default function RestaurantPageHeader() {
    return (
        <Container>
            <Logo src={logo} alt="logo-rest.png" />
            <RestaurantData>
                <Title>Nome do Restaurante</Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Description>
                <Days>Segunda à Sexta: <strong>11:30 às 15:00</strong></Days>
                <Days>Sábados: <strong>11:30 às 22:00</strong></Days>
                <Days>Domingos e Feriados: <strong>11:30 às 15:00</strong></Days>
            </RestaurantData>
        </Container>
    );
}