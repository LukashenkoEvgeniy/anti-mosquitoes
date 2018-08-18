import React from 'react';
import styled from 'styled-components'

import {H2} from '../../common/Atom';

export default function PresentationText({}) {
    return (
        <TextWrapper>
            <H2>{'- внутреняя и наружная'}</H2>
            <H2>{'- надёжный профиль и крепления'}</H2>
            <H2>{'- несколько цветов'}</H2>
            <H2>{'- открывание на петлях'}</H2>
        </TextWrapper>
    )
}

const TextWrapper = styled.div`
    
`;