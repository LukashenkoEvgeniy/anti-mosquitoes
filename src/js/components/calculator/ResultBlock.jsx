import React from 'react';
import styled from 'styled-components'

import {H2} from '../../common/Atom';
import calc from '../../utils/PriceCalculator';

export default function ResultBlock({price, oldPrice, square}) {

    return (
        <div>
            <p>{'Площадь москитной сетки (м2): ' + square}</p>
            <p>{'Стоимость москитной сетки (грн): ' + oldPrice + ' ' + price}</p>
            <p>{'крепления (ручки, зажимы) уже учтены в стоимости'}</p>
        </div>
    )
}

const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const InputWithLabel = styled.div`
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
`;

const Input = styled.input`
    width: 171px;
    type: 'text'
`;

const Select = styled.select`
    width: 175px;
`;