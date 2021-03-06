import React from 'react';
import styled from 'styled-components'

import {H2} from '../../common/Atom';

export default function PresentationText({}) {
    return (
        <TextWrapper>
            <H2>{'- внутреннее крепление'}</H2>
            <H2>{'- надёжный профиль и крепления'}</H2>
            <H2>{'- несколько цветов'}</H2>
            <H2>{'- cвежий воздух без незваных «гостей»'}</H2>
            <H2>{'- прочная прозрачная ткань'}</H2>
            <H2>{'- не закрывает вид из окна'}</H2>
        </TextWrapper>
    )
};

const TextWrapper = styled.div`
    ${H2} {
        text-align: left;
    } 
`;