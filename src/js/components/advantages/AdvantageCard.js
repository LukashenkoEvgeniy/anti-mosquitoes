import React from 'react';
import styled from 'styled-components'
import {Image} from "react-bootstrap";

export default function AdvantageCard({title, image}) {
    return (
        <CardWrapper>
            <ImageWrapper src={image} alt={title} circle/>
            <TextWrapper>{title}</TextWrapper>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    margin:  5px 0 5px 0 ;
    min-width: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ImageWrapper = styled(Image)`
    width: 150px;
    height: 150px;
`;

const TextWrapper = styled.p`
    text-align: center;
`;

