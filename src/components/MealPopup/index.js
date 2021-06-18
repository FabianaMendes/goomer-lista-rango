import React, { useState } from 'react';

import { 
    Container,
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
import mealImg from '../../assets/meal-img.png'

export default function MealPopup(props) {

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

    return (props.trigger) ? (

        <Container >
            <Card>
                <button onClick={() => props.setTrigger(false)}>
                    <FaTimes/>
                </button>
                <MealImg src={mealImg} alt="meal-img"/>
                <MealData>
                    <Title>Nome do prato</Title>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Description>
                    <Price>R$ 19,90</Price>
                </MealData>
                <Footer>
                    <Counter>
                        <button onClick={handleDecrease}> - </button>
                            {counter}
                        <button onClick={handleEncrease}> + </button>
                    </Counter>
                    <AddToCart>
                        Adicionar <span>R$ 19,90</span>
                    </AddToCart>
                </Footer>
            </Card>
        </Container>

        ) : "";
}