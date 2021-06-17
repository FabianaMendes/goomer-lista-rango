import styled from 'styled-components';

export const Container = styled.div`
    color: ${props => props.theme.colors.black};
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 25px;

    > input {
        font-size: 16px;

        padding: 10px 40px;

        border-radius: 45px;
        background-color: ${props => props.theme.colors.tertiary};
        box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .2);

        width: 62%;
    }
`;

export const Title = styled.h1`
    font-size: 24px;
    font-weight: 400;

    margin: 30px 0;
`;

export const ListContainer = styled.div`
`;