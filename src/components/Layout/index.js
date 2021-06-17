import React from 'react';

import { Container, Header } from './styles';

export default function Layout({children}) {
    return(
        <Container>
            <Header/>
            {children}
        </Container>
    );
}