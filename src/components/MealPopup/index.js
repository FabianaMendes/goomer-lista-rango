import React, { useState } from 'react';
import { formatCurrency } from '../../utils/helpers';

import { 
    PopUp,
    Card, 
    MealImg, 
    MealData, 
    Title, 
    Description, 
    Price, 
    Footer, 
    Counter, 
    AddToCart
} from './styles';

import { FaTimes } from 'react-icons/fa';

export default function MealPopup({ trigger, setTrigger, image, name, description, price }) {

    const [counter, setCounter] = useState(1);
    
    function handleEncrease() {
        setCounter(counter + 1);
    }
        
    function handleDecrease() {
        if(counter === 0){
            return counter;
        } else {
            setCounter(counter - 1);
        }
    } 

    return (trigger) ? (
        <PopUp>
            <Card>
                <button onClick={() => setTrigger(false)}>
                    <FaTimes/>
                </button>
                <MealImg src={image} alt={image}/>
                <MealData>
                    <Title>{name}</Title>
                    <Description>
                        {description}
                    </Description>
                    <Price>{formatCurrency(price)}</Price>
                </MealData>
                <Footer>
                    <Counter>
                        <button onClick={handleDecrease}> - </button>
                            {counter}
                        <button onClick={handleEncrease}> + </button>
                    </Counter>
                    <AddToCart onClick={() => setTrigger(false)}>
                        Adicionar <span>{formatCurrency(price)}</span>
                    </AddToCart>
                </Footer>
            </Card>
        </PopUp>

        ) : "";
}