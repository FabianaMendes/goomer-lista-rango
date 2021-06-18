import styled from 'styled-components';

export const InputBlock = styled.div`
    width: ${props => props.width};
    
    border-radius: 45px;
    background-color: ${props => props.inputColor};
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