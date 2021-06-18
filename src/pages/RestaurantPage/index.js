import React from 'react';

import { GridLayout, Aside } from './styles';
import RestaurantPageHeader from '../../components/RestaurantPageHeader';
import RestaurantDishList from '../../components/RestaurantDishList';


export default function RestaurantPage() {
    return(
        <GridLayout>
            <RestaurantPageHeader/>
            <Aside/>
            <RestaurantDishList/>
        </GridLayout>
    );
}