import React from 'react';

import { InputBlock } from './styles';

import { BiSearch } from 'react-icons/bi';

export default function InputContainer({title, inputColor, width}){
    return(
        <InputBlock inputColor={inputColor} width={width}>
            <label>{title}</label>
            <input type="search"/>
            <button type="submit"><BiSearch/></button>
        </InputBlock>
    );
}

