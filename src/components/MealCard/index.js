import React, { useState, useEffect } from 'react';
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
    CurrentPrice, 
    RegularPrice  
} from './styles';

import MealPopup from '../MealPopup';

import { FaAward } from 'react-icons/fa';

export default function MealCard({ category, searchTerm }) {

    const [popup, setPopup] = useState(false);
    const [hasPromotion, setHasPromotion] = useState(false);
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


    useEffect(() => {
        mealList.map(item => {
            const sales = item.sales
            if(!sales) {
                setHasPromotion(false);
            } else { 
                const today = new Date();
                const hourNow = today.getHours();

                sales.map(sale => {
                    const promotionTime = sale.hours

                    promotionTime.map(hour => {
                        if((hour.days).includes(today.getDay()+1)){
                            console.log('hoje tem!')
                            if((hour.from <= hourNow) && (hour.to > hourNow)){
                                console.log('hoje tem e está na hora!')
                                setHasPromotion(true);
                            } else {
                                console.log('hoje tem mas está fora do horário')
                            }
                        } else {
                            console.log('hoje não tem')
                        }
                    })
                })  
            }
        })
    },[hasPromotion]);
    
   
    return (
        filter.map((meal, index) => (
            <Container key={index}>
                <Card onClick={() => setPopup(true)}>
                    <MealImg src={meal.image} alt={meal.image}/>
                    <MealData>
                        <MealTitle>{meal.name}</MealTitle>
                        <Description>
                            {meal.group}
                        </Description>
                        {hasPromotion ? meal.sales.map((sale, index) => (
                            <Prices key={index}>
                                <TagPromo ><FaAward/>{sale.description}</TagPromo>
                                <CurrentPrice>{formatCurrency(sale.price)}</CurrentPrice>
                                <RegularPrice>{formatCurrency(meal.price)}</RegularPrice>
                            </Prices>
                        )) : 
                            <Prices>
                                <CurrentPrice>{formatCurrency(meal.price)}</CurrentPrice>
                            </Prices>
                        }
                            
                    </MealData>
                </Card>
                <MealPopup
                    trigger={popup}
                    setTrigger={setPopup}
                    meal={meal}
                />
            </Container>
        ))
        
    );
}