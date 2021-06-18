import React from 'react'

import InputContainer from '../InputContainer';
import SelectDish from '../SelectDish';

import { Container, ListContainer } from './styles';

export default function RestaurantDishList() {
    return(
    <Container>    
        <InputContainer 
            inputColor="#E6E6E6" 
            title="Buscar no cardápio"
            width="832px"
        />
        <ListContainer>
            <SelectDish title="Almoços"/>
            <SelectDish title="Bebidas"/>
            <SelectDish title="Sobremesas"/>
        </ListContainer>
    </Container>
    );
}