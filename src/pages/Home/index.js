import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useRestaurant } from '../../contexts/provider';
import { loadRestaurants } from '../../services';

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
        loadRestaurants()
        .then(response => {
            setRestaurantsData(response.data)
        })
        .catch(() => {
            alert('Erro ao listar restaurantes');
        })
    }, []);

    /**Atualiza a lista de restaurantes a cada minuto*/
    setTimeout(() => {
        loadRestaurants()
        .then(response => {
            setRestaurantsData(response.data)
        })
    }, 60000);
    
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
        } else if (restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return restaurant;
        }
        return null;
    });
    

    return (
        <Container>
            <Header>
                <Title>Bem-vindo ao Lista Rango</Title>
                <Input 
                    inputColor="#FBFBFB" 
                    title="Buscar estabelecimento"
                    width="62%"
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