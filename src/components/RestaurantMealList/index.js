import React, { useState } from 'react'

import Input from '../Input';
import MealCategory from '../MealCategory';

import { Container, OptionsContainer } from './styles';

export default function RestaurantMealList() {
    const [meal, setMeal] = useState('');

    function searchMeal(event){
        setMeal(event.target.value);
        console.log(meal);
    }

    return(
        <Container>    
            <Input 
                inputColor="#E6E6E6" 
                title="Buscar no cardápio"
                width="832px"
                onChange={searchMeal}
            />
            <OptionsContainer>
                <MealCategory title="Almoços"/>
                <MealCategory title="Bebidas"/>
                <MealCategory title="Sobremesas"/>
            </OptionsContainer>
        </Container>
    );
}