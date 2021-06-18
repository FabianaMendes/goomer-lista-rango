import React, { useState } from 'react';

import { 
    Container, 
    DishImg, 
    DishData, 
    TagPromo, 
    Title, 
    Description, 
    Prices,
    PromotionPrice, 
    RegularPrice 
} from './styles';

import DishPopup from '../DishPopup';

import { FaAward } from 'react-icons/fa';

export default function DishCard({dishImg, promo, title, description, promotionPrice, regularPrice}) {
    
    const [popup, setPopup] = useState(false);

    return(
        <>
        <Container onClick={() => setPopup(true)}>
            <DishImg src={dishImg} alt="dish-img"/>
            <DishData>
                <TagPromo><FaAward/>{promo}</TagPromo>
                <Title>{title}</Title>
                <Description>
                    {description}
                </Description>
                <Prices>
                    <PromotionPrice>R$ {promotionPrice}</PromotionPrice>
                    <RegularPrice>R$ {regularPrice}</RegularPrice>
                </Prices>
            </DishData>
        </Container>
        <DishPopup
            trigger={popup}
            setTrigger={setPopup}
        />
        </>
    );
}