import React from 'react';
import styled from 'styled-components'
import {Image} from "react-bootstrap";

export default function AdvantageCard({title, image}) {
    return (
        <CardWrapper>
            <ImageWrapper src={image} alt={title} circle/>
            <p>{title}</p>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
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