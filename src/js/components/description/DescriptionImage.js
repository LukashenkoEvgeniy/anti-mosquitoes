import React from 'react';
import styled from 'styled-components'

import imgUrl from '../../../static/img/description.png';

export default function DescriptionImage({}) {
    return (
        <ImageWrapper src={imgUrl}/>
    )
}

const ImageWrapper = styled.img`
    width: 70%;
    @media (max-width: 768px) {
        width: 100%;
  }
 `;