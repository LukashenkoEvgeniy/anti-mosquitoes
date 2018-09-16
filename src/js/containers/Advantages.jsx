import React, {Component} from 'react';
import styled from 'styled-components'

import {Block} from '../common/Atom';
import Header from '../components/Header';
import AdvantageCard from '../components/advantages/AdvantageCard';
import {advantages} from '../data/Advantages'


export default function Advantages() {


    return (
        <Block id={'advantages'}
               data-aos="fade-up"
               data-aos-offset="100"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
               data-aos-anchor-placement="top-center"
        >
            <Header>{'ПРЕИМУЩЕСТВА РАМОЧНОЙ СЕТКИ'}</Header>

            <AdvantageCards>
                {advantages.map((item, index) =>
                    <AdvantageCard
                        image={item.image}
                        key={index}
                        title={item.title}
                    />)}
            </AdvantageCards>
        </Block>
    );
}

const AdvantageCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
`;


