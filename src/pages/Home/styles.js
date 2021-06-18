import styled from 'styled-components';

export const Container = styled.div`
    color: ${props => props.theme.colors.black};
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 25px;

    height: 128px;
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 400;

    margin: 30px 0;
`;

export const InputBlock = styled.div`
    width: 62%;
    
    border-radius: 45px;
    background-color: ${props => props.theme.colors.tertiary};
    box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .2);

    display: flex;
    justify-content: space-between;

    > label {
        width: 260px;

        display: flex;
        align-items: center;

        background-color: ${props => props.theme.colors.white};

        border-radius: 45px 0 0 45px;

        padding-left: 38px;

        font-size: 16px;

        font-weight: 500;
    }

    > input {
        font-size: 16px;

        background-color: transparent;

        padding: 10px;

        width: 65%;
    }

    > button {
        font-size: 20px;

        color: ${props => props.theme.colors.black};

        background-color: transparent;

        width: 55px;
    }
`;

export const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 40px;
    row-gap: 34px;

    padding: 28px 70px;
`;