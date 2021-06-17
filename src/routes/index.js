import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout';
import Home from '../pages/Home';
import RestaurantPage from '../pages/RestaurantPage';

export default function Routes() {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" component={Home}/>
                    <Route path="/:type" component={RestaurantPage}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}