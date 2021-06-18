import styled from "styled-components";

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

export const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 40px;
    row-gap: 34px;

    padding: 28px 70px;
`;