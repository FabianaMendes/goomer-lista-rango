import React, { useState, useEffect, useMemo } from 'react';
import { useRestaurant } from '../../contexts/provider';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import Input from '../../components/Input';
import RestaurantCard from '../../components/RestaurantCard';

import { Container, Header, Title, ListContainer } from './styles';


export default function Home() {

    const [restaurants, setRestaurants] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const { selectedRestaurant } = useRestaurant();
    const history = useHistory();

    /**Busca a lista de restaurantes sempre que a página é recarregada */
    useEffect(() => {
        async function loadRestaurants() {
            const response = await api.get('/restaurants');
            setRestaurants(response.data);
        }
        loadRestaurants();
    }, []);
    
    /**Envia as informações do restaurante escolhido para o provider */
    function handleSelectRestaurant(restaurant) {
        const id = (restaurant.id)
        selectedRestaurant(restaurant, id)
        .then(() => {
            history.push('/rest');
        })
    };

    /**Quando digitar no campo de busca, verifica se há restaurantes com o termo informado */ 
    const filter = restaurants.filter((restaurant) => {
        if(searchTerm === "") {
            return restaurants;
        } else if(restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return restaurant;
        } 
    });

    useEffect(() => {
        const now = new Date;
        const weekday = now.getDay()+1;
        console.log(now, weekday);
    }, []);


    //const openTag = useMemo(() => {
    //    return isOpen === true
    //    ? {
    //        title: 'Aberto Agora',
    //        tagColor: '#2B0D61'
    //    } : {
    //        title: 'Fechado',
    //        tagColor: '#B5ABD4'
    //    }
    //})

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