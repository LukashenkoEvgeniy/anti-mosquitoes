import React from 'react';
import styled from 'styled-components'

import {Block, H1} from '../common/Atom';
import Header from '../components/Header';
import Body from '../components/Body';
import PresentationText from '../components/presentation/PresentationText';
import PresentationImage from '../components/presentation/PresentationImage';



export default function Presentation() {
    return (
        <Block id={'mesh'}>
            <Header>{'РАМОЧНАЯ МОСКИТНАЯ СЕТКА'}</Header>
            <Body>
                <PresentationText/>
                <PresentationImage/>
            </Body>
        </Block>
    );
}

// const BlockWrapper = styled(Block)`
//     background-image: url(${bg});
// `;