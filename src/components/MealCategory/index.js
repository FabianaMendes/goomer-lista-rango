import React, { useState } from 'react';

import MealCard from '../MealCard';

import { Container, Title, MealCardsContainer } from './styles';

import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import mealImg from '../../assets/dish-img.png';

export default function MealCategory({title}) {

    const [cardsList, setCardsList] = useState(false);

    return(
        <Container>
            <Title onClick={() => setCardsList(!cardsList)}>
                {title}
                <button>
                    {cardsList ? <FaChevronDown/> : <FaChevronRight/>}
                </button>
            </Title>
            <MealCardsContainer className={cardsList ? "" : "hidden"}>
                <MealCard 
                    mealImg={mealImg}
                    promo="Promo Almoço"
                    title="Nome do Prato"
                    description="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do"
                    promotionPrice="19,90"
                    regularPrice="19,90"
                />
                <MealCard 
                    mealImg={mealImg}
                    promo="Promo Almoço"
                    title="Nome do Prato"
                    description="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do"
                    promotionPrice="19,90"
                    regularPrice="19,90"
                />
                <MealCard 
                    mealImg={mealImg}
                    promo="Promo Almoço"
                    title="Nome do Prato"
                    description="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do"
                    promotionPrice="19,90"
                    regularPrice="19,90"
                />
            </MealCardsContainer>
        </Container>
    )
}