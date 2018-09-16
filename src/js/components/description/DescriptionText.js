import React from 'react';
import styled from 'styled-components'

import {H2} from '../../common/Atom';

export default function DescriptionText({}) {
    return (
        <TextWrapper>
            Цвет профиля: <br/>
            БЕЛЫЙ, КОРИЧНЕВЫЙ<br/>
            Устанавливается внутри оконной рамы. С помощью Z-образных металлических креплений <br/>
            фиксируется в проёме окна. Есть ручки. Эта сетка уменьшает немного больше световой проём, <br/>
            чем наружная сетка, но имеет более жёсткую и надёжную фиксацию.
        </TextWrapper>
    )
}

const TextWrapper = styled.p`
    
`;