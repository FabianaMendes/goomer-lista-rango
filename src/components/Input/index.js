import React from 'react';

import { InputBlock } from './styles';

import { BiSearch } from 'react-icons/bi';

export default function Input({title, inputColor, width, onChange}){
    return(
        <InputBlock inputColor={inputColor} width={width}>
            <label>{title}</label>
            <input type="search" onChange={onChange}/>
            <button type="submit"><BiSearch/></button>
        </InputBlock>
    );
}

