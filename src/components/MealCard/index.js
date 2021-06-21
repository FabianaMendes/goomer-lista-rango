import React, { useState } from 'react';
import { useRestaurant } from '../../contexts/provider';
import { formatCurrency } from '../../utils/helpers';

import { 
    Container,
    Card, 
    MealImg, 
    MealData, 
    TagPromo, 
    MealTitle, 
    Description, 
    Prices,
    PromotionPrice, 
    RegularPrice  
} from './styles';

import MealPopup from '../MealPopup';

import { FaAward } from 'react-icons/fa';

export default function MealCard({ category, searchTerm }) {

    const [popup, setPopup] = useState(false);
    const { menu } = useRestaurant();

    function filterMeals(item) {
        if(item.group === category){
            return item;
        }
    }

    const mealList = menu.filter(filterMeals);
    
   
    return (
        <>
        {mealList.filter((meal) => {
            if(searchTerm === "") {
                return mealList;
            } else if (meal.name.toLowerCase().includes(searchTerm.toLowerCase())){
                return meal;
            }
        }).map((element, index) => (
            <Container key={index}>
                <Card onClick={() => setPopup(true)} >
                    <MealImg src={element.image} alt={element.image}/>
                    <MealData>
                        <TagPromo><FaAward/>Promo almoço</TagPromo>
                        <MealTitle>{element.name}</MealTitle>
                        <Description>
                            {element.group}
                        </Description>
                        <Prices>
                            <PromotionPrice>{element.price}</PromotionPrice>
                            <RegularPrice>{element.price}</RegularPrice>
                        </Prices>
                    </MealData>
                </Card>
                <MealPopup
                    key={element.name}
                    trigger={popup}
                    setTrigger={setPopup}
                    image={element.image}
                    title={element.name}
                    description={element.group}
                    price={element.price}
                />
            </Container>
        ))}
        </>
    )
};