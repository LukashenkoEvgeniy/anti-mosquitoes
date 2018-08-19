import React from 'react';
import styled from 'styled-components'

import {H1} from '../../common/Atom'
import imgUrl from '../../../static/img/calc.png';

export default function CalculatorImage({}) {
    return (
        <ImgWrapper src={imgUrl}/>
    )
}

const ImgWrapper = styled.img`
    height: 100%;
`;