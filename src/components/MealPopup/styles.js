import styled from 'styled-components';

export const PopUp = styled.div`
    background-color: rgba(0, 0, 0, 0.3);

    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;

    position: fixed;
    z-index: 999;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.div`
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0 4px 8px 0px rgba(0, 0, 0, .3);
    border-radius: 8px;

    height: 485px;
    width: 600px;

    padding-top: 23px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    position: relative;

    > button {
        position: absolute;
        top: -24px;
        right: -24px;

        height: 48px;
        width: 48px;

        border-radius: 50px;
        font-size: 25px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${props => props.theme.colors.white};
        box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .29);

        &:hover {
            box-shadow: 0 5px 10px 0px rgba(0, 0, 0, .29);
            transform: scale(1.01);
        }
    }
`;

export const MealImg = styled.img`
    height: 196px;
    width: 553px;
`;

export const MealData = styled.div`
    position: relative;

    width: 100%;
`;

export const Title = styled.h1`
    margin: 0 0 5px 10px;

    font-size: 24px;
    font-weight: 500;
`;

export const Description = styled.p`
    width: 65%;

    margin-left: 16px;

    font-size: 16px;
`;

export const Price = styled.span`
    position: absolute;
    right: 9px;
    bottom: 0;

    font-size: 32px;
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
`;

export const Footer = styled.div`
    padding: 20px 12px;

    border-top: 1px solid ${props => props.theme.colors.secondary};
    
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Counter = styled.div`
    height: 50px;
    width: 125px;

    border: 1px solid ${props => props.theme.colors.secondary};
    border-radius: 4px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    font-size: 25px;
    font-weight: 500;
    color: ${props => props.theme.colors.primary};

    > button {
        font-size: 38px;
        font-weight: 500;
        color: ${props => props.theme.colors.primary};

        background: transparent;
        width: 100%;
    }
`;

export const AddToCart = styled.button`
    background-color: ${props => props.theme.colors.primary};
    border-radius: 4px;

    height: 50px;
    width: 265px;

    color: ${props => props.theme.colors.white};
    font-size: 20px;
    font-weight: 500;

    display: flex;
    justify-content: space-between;

    padding: 14px;
`;
