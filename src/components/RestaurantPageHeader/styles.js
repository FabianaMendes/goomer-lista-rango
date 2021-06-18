import styled from "styled-components";

export const Container = styled.div`
    grid-area: HD;

    margin: 24px 0 16px;

    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    height: 145px;

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
    
    margin-bottom: 5px;
`;

export const Days = styled.span`
    font-size: 12px;

    > strong {
        font-weight: 600;
    }
`;