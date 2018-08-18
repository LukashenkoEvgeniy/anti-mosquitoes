import React from 'react';
import styled from 'styled-components'

import Advantages from './Advantages.jsx';
import Presentation from './Presentation.jsx';
import Instruction from './Instruction.jsx';
import Calculator from './Calculator.jsx';
import Description from './Description.jsx';


export default function Content() {
    return (
        <ContentWrapper>
            <Presentation/>
            <Advantages/>
            <Description/>
            <Instruction/>
            <Calculator/>
        </ContentWrapper>
    );
}

const ContentWrapper = styled.div`
    margin-right: auto;
    margin-left: auto;
        width: 100%;
        box-sizing: border-box;
            display: block;
                font-family: 'Open Sans', serif;
`;