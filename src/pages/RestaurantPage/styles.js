import styled from 'styled-components';

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    grid-template-rows: 185px auto;
    grid-template-areas: 
    'HD HD'
    'LC AS';

    height: 100vh;

    padding: 0 74px;
`;

export const Aside = styled.div`
    grid-area: AS;

    background-color: ${props => props.theme.colors.secondary};
    border-radius: 2px;
`;

export const Container = styled.div`
    grid-area: HD;

    margin: 24px 0 16px;

    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    height: 145px;
    width: 145px;

    margin-right: 20px;
`;

export const RestaurantData = styled.div`
    display: flex;
    flex-direction: column;

    width: 48%;

    color: ${props => props.theme.colors.black};
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 500;
`;

export const Description = styled.p`
    font-size: 16px;
    
    margin: 5px 0;
`;

export const Days = styled.span`
    font-size: 12px;
    margin: 2px 0;

    > strong {
        font-weight: 600;
    }
`;

export const RestaurantMealList = styled.div`
    grid-area: LC;
`;

export const MenuContainer = styled.div`
    width: 90%;

    margin: 24px 0;
`;

export const MealCategories = styled.div`
    width: 100%;

    .hidden {
        display: none;
    }
`;

export const CategoryTitle = styled.button`
    width: 100%;
    padding: 12px 33px 12px 13px;

    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.white};

    font-weight: 600;
`;

export const MealCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 24px;
    column-gap: 30px;

    padding: 24px 0;
`;