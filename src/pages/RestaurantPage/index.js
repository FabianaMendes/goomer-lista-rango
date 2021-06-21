import React, { useState } from 'react';
import { useRestaurant } from '../../contexts/provider';

import Input from '../../components/Input';
import MealCard from '../../components/MealCard';

import { 
    GridLayout, 
    Aside, 
    Container, 
    Logo, 
    RestaurantData, 
    Title, 
    Description, 
    Days,
    RestaurantMealList,
    OptionsContainer,
    MealCategories, 
    CategoryTitle, 
    MealCardsContainer 
} from './styles';

import { FaChevronDown, FaChevronRight } from 'react-icons/fa';


export default function RestaurantPage() {

    const [cardsList, setCardsList] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const { menu, restaurant } = useRestaurant();

    const groups = menu.map(item => {
        return item.group;
    });

    const categories = groups.reduce((group, item) => {
        return group.includes(item) ? group : [...group, item]
    }, []);
    

    return(
        <GridLayout>
            <Container>
                <Logo src={restaurant.image} alt="logo-rest.png" />
                <RestaurantData>
                    <Title>{restaurant.name}</Title>
                    <Description>{restaurant.address}</Description>
                    <Days>Segunda à Sexta: <strong>1</strong></Days>
                    <Days>Sábados: <strong>1</strong></Days>
                    <Days>Domingos e Feriados: <strong>1</strong></Days>
                </RestaurantData>
            </Container>
            <Aside/>
            <RestaurantMealList>    
                <Input 
                    inputColor="#E6E6E6" 
                    title="Buscar no cardápio"
                    width="832px"
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <OptionsContainer>
                    {categories.map((category, index) =>(
                        <MealCategories key={index}>
                            <CategoryTitle onClick={() => setCardsList(!cardsList)}>
                                {category}
                                <button>
                                    {cardsList ? <FaChevronDown/> : <FaChevronRight/>}
                                </button>
                            </CategoryTitle>
                            <MealCardsContainer className={cardsList ? "" : "hidden"}>
                                <MealCard category={category} searchTerm={searchTerm}/> 
                            </MealCardsContainer>
                        </MealCategories>
                    ))}
                </OptionsContainer>
            </RestaurantMealList>
        </GridLayout>
    );
}