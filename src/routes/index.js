import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from '../components/Layout';
import Home from '../pages/Home';
import RestaurantPage from '../pages/RestaurantPage';

export default function Routes() {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/rest" component={RestaurantPage}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}