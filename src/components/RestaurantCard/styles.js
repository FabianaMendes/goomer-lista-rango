import styled from 'styled-components';


export const Container = styled.div`
    position: relative;

    height: 100px;
    width: 367px;

    box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .2);
    border-radius: 4px;

    cursor: pointer;

    &:hover span {
        box-shadow: 0 5px 10px 0px rgba(0, 0, 0, .25);
        filter: brightness(0.95);
    }
`;

export const StatusTag = styled.span`

        position: absolute;
        top: 0;
        right: 0;
        transform: translate(15px, -15px);

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        background-color: ${(props) => props.color}; /*Informação vem da Tag Aberto/Fechado*/ 
        color: ${props => props.theme.colors.white};
        box-shadow: 0 1px 2px 0px rgba(0, 0, 0, .2);

        font-size: 8px;
        font-weight: 700;

        border-radius: 50px;

        height: 48px;
        width: 48px;
`;

export const Card = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    height: 100px;
    width: 100px;
    margin-right: 25px;

    border-radius: 4px 0 0 4px;
`;

export const RestaurantData = styled.div`
`;

export const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
`;

export const Subtitle = styled.p`
    font-size: 12px;
    font-weight: 400;
`;