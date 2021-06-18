import React from 'react';

import { Container, Card, Logo, RestaurantData, Title, Subtitle } from './styles';


export default function RestaurantCard({title, subtitle, status, logoImg, onClick}) {
    return(
        <Container>
            <span>{status}</span>
            <Card onClick={onClick}>
                <Logo src={logoImg} alt={logoImg}/>
                <RestaurantData>
                    <Title>{title}</Title>
                    <Subtitle>{subtitle}</Subtitle>
                </RestaurantData>
            </Card>
        </Container>
    );
}