import React, {Component} from 'react';
import styled from 'styled-components'

import {Block} from '../common/Atom';
import Header from '../components/Header';
import AdvantageCard from '../components/advantages/AdvantageCard';
import {advantages} from '../data/Advantages'


export default function Advantages() {


    return (
        <Block>
            <Header>{'ПРЕИМУЩЕСТВА РАМОЧНОЙ СЕТКИ'}</Header>

            <AdvantageCards>
                {advantages.map((item, index) => <AdvantageCard
                    image={item.image}
                    key={index}
                    title={item.title}
                />)}
            </AdvantageCards>
        </Block>
    );
}

const AdvantageCards = styled.div`
    border: 1px solid #1477da;
    display: flex;
    flex-wrap: wrap;
    alight-items: center;
    justify-content: center;
    padding-top: 10em;
`;


