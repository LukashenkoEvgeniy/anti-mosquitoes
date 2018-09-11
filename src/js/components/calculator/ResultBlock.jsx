import React from 'react';
import styled from 'styled-components'

export default function ResultBlock({price, oldPrice, square}) {

    return (
        <Block>
            <SmallText>{`Площадь москитной сетки: ${square} м2`}</SmallText>
            <p>{`Стоимость москитной сетки: ${price} грн`}</p>
            <SmallText>{'крепления (ручки, зажимы) уже учтены в стоимости'}</SmallText>
            <SmallText>{'доставка не  входит в стоимость'}</SmallText>
        </Block>
    )
}

const Block = styled.div`
    padding: 10px;
`;
const SmallText = styled.p`
    font-size: 14px;
`;