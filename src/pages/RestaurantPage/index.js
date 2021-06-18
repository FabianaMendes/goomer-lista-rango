import React from 'react';

import { GridLayout, Aside } from './styles';
import RestaurantPageHeader from '../../components/RestaurantPageHeader';
import RestaurantMealList from '../../components/RestaurantMealList';


export default function RestaurantPage() {
    return(
        <GridLayout>
            <RestaurantPageHeader/>
            <Aside/>
            <RestaurantMealList/>
        </GridLayout>
    );
}