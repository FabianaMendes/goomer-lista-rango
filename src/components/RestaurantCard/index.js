import React, { useEffect, useState, useMemo } from 'react';

import { Container, StatusTag, Card, Logo, RestaurantData, Title, Subtitle } from './styles';

export default function RestaurantCard({ restaurant, onSelectRestaurant }) {
    const [isOpen, setIsOpen] = useState();
    const hours = restaurant.hours;
    
    useEffect(() => {
        if(!hours) {
            setIsOpen(true);
        } else { 
            const today = new Date();
            const hourNow = today.getHours();
            
            hours.map(hour => {
                const hourFrom = parseInt(hour.from);
                const hourTo = parseInt(hour.to);

                if((hour.days).includes(today.getDay()+1)){
                    if((hourFrom <= hourNow) && (hourTo > hourNow)){
                        setIsOpen(true);
                    } else {
                        setIsOpen(false);
                    }
                }
                return(isOpen)
            })
        }
    },[hours, isOpen]);

    const openTag = useMemo(() => {
        return isOpen 
        ? {
            title: 'Aberto agora',
            color: '#2B0D61'
        } : {
            title: 'Fechado',
            color: '#B5ABD4'
        }
    },[isOpen]); 


    return(
        <Container>
            <StatusTag color={openTag.color}>{openTag.title}</StatusTag>
            <Card onClick={() => onSelectRestaurant(restaurant)}>
                <Logo src={restaurant.image} alt={restaurant.image}/>
                <RestaurantData>
                    <Title>{restaurant.name}</Title>
                    <Subtitle>{restaurant.address}</Subtitle>
                </RestaurantData>
            </Card>
        </Container>
    );
}