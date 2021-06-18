import styled from 'styled-components';

export const Container = styled.div`
    height: 115px;
    width: 386px;

    box-shadow: 0 4px 8px 0px rgba(0, 0, 0, .2);

    display: flex;
    align-items: center;

    &:hover {
        cursor: pointer;
        box-shadow: 0 5px 10px 0px rgba(0, 0, 0, .25);
        transform: scale(1.01);
    } 
`;

export const MealImg = styled.img`
    height: 115px;
`;

export const MealData = styled.div`
    position: relative;

    height: 100%;

    padding: 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TagPromo = styled.div`
    position: absolute;

    right: 8px;
    top: 10px;

    background-color: ${props => props.theme.colors.success};
    color: ${props => props.theme.colors.white};

    border-radius: 11px;
    
    font-size: 8px;
    font-weight: 700;

    padding: 6px 12px;

    display: flex;
    align-items: center;

    > svg {
        font-size: 12px;
        margin-right: 2px;
    }
`;

export const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
`;

export const Description = styled.p`
    font-size: 12px;
`;

export const Prices = styled.div``;

export const PromotionPrice = styled.span`
    font-size: 16px;
    font-weight: 500;

    color: ${props => props.theme.colors.primary};

    margin-right: 7px;
`;

export const RegularPrice = styled.span`
    font-size: 12px;
    font-weight: 500;

    text-decoration: line-through;

    color: ${props => props.theme.colors.gray};
`;
