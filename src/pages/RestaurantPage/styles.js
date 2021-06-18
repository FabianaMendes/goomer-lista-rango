import styled from 'styled-components';

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: auto 280px;
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

