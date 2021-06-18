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

export default function RestaurantPageHeader({ title, description, weekdays, saturdays, sundays}) {
    return (
        <Container>
            <Logo src={logo} alt="logo-rest.png" />
            <RestaurantData>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Days>Segunda à Sexta: <strong>{weekdays}</strong></Days>
                <Days>Sábados: <strong>{saturdays}</strong></Days>
                <Days>Domingos e Feriados: <strong>{sundays}</strong></Days>
            </RestaurantData>
        </Container>
    );
}