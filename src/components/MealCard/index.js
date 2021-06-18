import React, { useState } from 'react';

import { 
    Container, 
    MealImg, 
    MealData, 
    TagPromo, 
    Title, 
    Description, 
    Prices,
    PromotionPrice, 
    RegularPrice 
} from './styles';

import MealPopup from '../MealPopup';

import { FaAward } from 'react-icons/fa';

export default function MealCard({mealImg, promo, title, description, promotionPrice, regularPrice}) {
    
    const [popup, setPopup] = useState(false);

    return(
        <>
        <Container onClick={() => setPopup(true)}>
            <MealImg src={mealImg} alt="meal-img"/>
            <MealData>
                <TagPromo><FaAward/>{promo}</TagPromo>
                <Title>{title}</Title>
                <Description>
                    {description}
                </Description>
                <Prices>
                    <PromotionPrice>R$ {promotionPrice}</PromotionPrice>
                    <RegularPrice>R$ {regularPrice}</RegularPrice>
                </Prices>
            </MealData>
        </Container>
        <MealPopup
            trigger={popup}
            setTrigger={setPopup}
        />
        </>
    );
}