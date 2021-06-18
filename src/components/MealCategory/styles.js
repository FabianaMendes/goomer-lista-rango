import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    .hidden {
        display: none;
    }
`;

export const Title = styled.div`
    width: 100%;
    padding: 12px 33px 12px 13px;

    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.black};

    font-weight: 600;

    &:hover {
        cursor: pointer;
    }

    > button {
        background-color: transparent;
        color: ${props => props.theme.colors.black};
    }
`;

export const MealCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    row-gap: 24px;
    column-gap: 30px;

    padding: 24px 0;
`;

