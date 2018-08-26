import React from 'react';
import styled from 'styled-components'

import {H1} from '../../common/Atom'
import imgUrl from '../../../static/img/window.png';

export default function PresentationImage({}) {
    return (
        <ImgWrapper src={imgUrl}/>
    )
}

const ImgWrapper = styled.img`
    height: 300px;
`;