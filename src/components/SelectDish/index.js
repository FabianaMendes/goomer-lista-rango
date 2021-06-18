import React from 'react';

import DishCard from '../DishCard';

import { Container, Title, DishCardsContainer } from './styles';

import { FaChevronDown } from 'react-icons/fa';
import dishImg from '../../assets/dish-img.png';

export default function SelectDish({title}) {
    return(
        <Container>
            <Title>
                {title}
                <button><FaChevronDown/></button>
            </Title>
            <DishCardsContainer>
                <DishCard 
                    dishImg={dishImg}
                    promo="Promo Almoço"
                    title="Nome do Prato"
                    description="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do"
                    promotionPrice="19,90"
                    regularPrice="19,90"
                />
                <DishCard 
                    dishImg={dishImg}
                    promo="Promo Almoço"
                    title="Nome do Prato"
                    description="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do"
                    promotionPrice="19,90"
                    regularPrice="19,90"
                />
                <DishCard 
                    dishImg={dishImg}
                    promo="Promo Almoço"
                    title="Nome do Prato"
                    description="Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do"
                    promotionPrice="19,90"
                    regularPrice="19,90"
                />
            </DishCardsContainer>
        </Container>
    )
}