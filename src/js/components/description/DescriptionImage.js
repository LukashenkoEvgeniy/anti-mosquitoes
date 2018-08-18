import React from 'react';
import styled from 'styled-components'

import imgUrl from '../../../static/img/description.png';

export default function DescriptionImage({}) {
    return (
        <ImgWrapper src={imgUrl}/>
    )
}

const ImgWrapper = styled.img`
    height: 100%;
`;