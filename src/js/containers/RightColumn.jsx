import React from 'react';
import styled from 'styled-components'

import {Header} from '../components/Header';
import {About} from '../components/About';

export default function RightColumn() {
    return (
        <Content>
            <Header/>
            <About/>
        </Content>
    );
}

const Content = styled.div`
    
`;


