import React, { useState, useEffect, useMemo } from 'react';
import { useRestaurant } from '../../contexts/provider';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import Input from '../../components/Input';
import RestaurantCard from '../../components/RestaurantCard';

import { Container, Header, Title, ListContainer } from './styles';

export default function Home() {

    const [restaurantsData, setRestaurantsData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const { selectedRestaurant } = useRestaurant();
    const history = useHistory();

    /**Busca a lista de restaurantes sempre que a página é recarregada */
    useEffect(() => {
        async function loadRestaurants() {
            const response = await api.get('/restaurants');
            setRestaurantsData(response.data);
        }
        loadRestaurants();
    }, []);
    
    /**Ao clicar, envia as informações do restaurante escolhido para o provider */
    function handleSelectRestaurant(restaurant) {
        const id = (restaurant.id)
        selectedRestaurant(restaurant, id)
        .then(() => {
            history.push('/rest');
        })
    };

    /**Quando digitar no campo de busca, verifica se há restaurantes com o termo informado */ 
    const filter = restaurantsData.filter((restaurant) => {
        if(searchTerm === "") {
            return restaurantsData;
        } else if(restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return restaurant;
        } 
    });
    

    return (
        <Container>
            <Header>
                <Title>Bem-vindo ao Lista Rango</Title>
                <Input 
                    inputColor="#FBFBFB" 
                    title="Buscar estabelecimento"
                    width="840px"
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
            </Header>
            <ListContainer>
                {filter.map((restaurant, index )=> (
                    <RestaurantCard
                        key={index}
                        restaurant={restaurant}
                        onSelectRestaurant={handleSelectRestaurant}
                    />
                ))}
            </ListContainer>
        </Container>
    );
}