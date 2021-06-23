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

    /**Compara a categoria recebida com a da refeição, se for igual retorna a refeição*/
    function filterMeals(item) {
        if(item.group === category){
            return item;
        }
    };

    /**Filtra as refeições que aparecerão no container, de acordo com a função filterMeals 
     * Dessa forma só serão listadas as refeições correspondentes a cada categoria
    */
    const mealList = menu.filter(filterMeals);

    /**Função que verifica o termo de busca. Se houver ela devolve a lista de itens que 
     * incluem o termo digitado, se não houver, retorna todos os itens
    */
    const filter = mealList.filter((meal) => {
        if(searchTerm === "") {
            return mealList;
        } else if (meal.name.toLowerCase().includes(searchTerm.toLowerCase())){
            return meal;
        }
    });
    
   
    return (
        <>
        {filter.map((element, index) => (
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
                            <PromotionPrice>{formatCurrency(Number(element.price))}</PromotionPrice>
                            <RegularPrice>{formatCurrency(element.price)}</RegularPrice>
                        </Prices>
                    </MealData>
                </Card>
                <MealPopup
                    key={element.name}
                    trigger={popup}
                    setTrigger={setPopup}
                    image={element.image}
                    name={element.name}
                    description={element.group}
                    price={element.price}
                />
            </Container>
        ))}
        </>
    )
};