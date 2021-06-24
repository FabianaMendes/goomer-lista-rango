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
    MenuContainer,
    MealCategories, 
    CategoryTitle, 
    MealCardsContainer 
} from './styles';

import { FaChevronDown, FaChevronRight } from 'react-icons/fa';


export default function RestaurantPage() {

    const [cardsList, setCardsList] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const { menu, restaurant } = useRestaurant();
    const restaurantHours = restaurant.hours;
    const Weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    
    /**Mapeia todos os grupos */
    const groups = menu.map(item => {
        return item.group;
    });
    
    /**Reduz todos os grupos encontrados a uma lista, sem repetição de grupos */
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
                    {restaurantHours ? restaurantHours.map((hours, index) => (
                        <Days key={index}>
                            {Weekdays[hours.days[0]-1]} à {Weekdays[hours.days[hours.days.length-1]-1]}: 
                            <strong> {hours.from} às {hours.to} </strong>
                        </Days>
                    )) : <Days>Sempre aberto</Days>}
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
                <MenuContainer>
                    {categories.map((category, index) =>(
                        <MealCategories key={index}>
                            <CategoryTitle onClick={() => setCardsList(!cardsList)}>
                                {category}
                                {cardsList ? <FaChevronDown/> : <FaChevronRight/>}
                            </CategoryTitle>
                            
                            <MealCardsContainer id={category} className={cardsList ? "" : "hidden"}>
                                <MealCard category={category} searchTerm={searchTerm}/> 
                            </MealCardsContainer>
                        </MealCategories>
                    ))}
                </MenuContainer>
            </RestaurantMealList>
        </GridLayout>
    );
}