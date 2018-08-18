import React from 'react';
import styled from 'styled-components'

export default function AdvantageCard({title, image}) {
    return (
        <CardWrapper>
            <img src={image} alt={title}/>
            <p>{title}</p>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    border: 1px solid #1477da;
    min-width: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;