import React, { useEffect, useState, useMemo } from 'react';

import { Container, StatusTag, Card, Logo, RestaurantData, Title, Subtitle } from './styles';

export default function RestaurantCard({ restaurant, onSelectRestaurant }) {
    const [isOpen, setIsOpen] = useState();
    
    useEffect(() => {
        const hours = restaurant.hours
        if(hours === undefined || hours.length === 0) {
            setIsOpen(true)
        } else { 
            const status = hours.map(hour => {
                const today = new Date()
                const hourNow = today.getHours()
                const weekdayNow = (today.getDay()+1)
                let days = hour.days

                if(days.includes(weekdayNow)){
                    const formatedHourFrom = parseInt(hour.from)
                    const formatedHourTo = parseInt(hour.to)
                    console.log(restaurant.id, days, formatedHourFrom, formatedHourTo, hourNow)
                    if(formatedHourFrom < hourNow && formatedHourTo > hourNow){
                        return setIsOpen(true)
                    } else {
                        return setIsOpen(false)
                    }
                } 
            })
        }
    },[]);

    const openTag = useMemo(() => {
        return isOpen === true 
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