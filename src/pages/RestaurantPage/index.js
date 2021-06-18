import React from 'react';

import { GridLayout, Aside } from './styles';
import RestaurantPageHeader from '../../components/RestaurantPageHeader';
import RestaurantMealList from '../../components/RestaurantMealList';


export default function RestaurantPage({ restaurant }) {


    return(
        <GridLayout>
            <RestaurantPageHeader
                title="Nome do Restaurante" 
                description="Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua" 
                weekdays="11:30 às 15:00" saturdays="11:30 às 22:00" sundays="11:30 às 15:00"
            />
            <Aside/>
            <RestaurantMealList/>
        </GridLayout>
    );
}