import React, {Component} from 'react';
import styled from 'styled-components'

import {Block, H1} from '../common/Atom';
import Header from '../components/Header';
import CalculatorBlock from '../components/calculator/CalculatorBlock.jsx';
import CalculatorImage from '../components/calculator/CalculatorImage';
import Body from '../components/Body';


export default function Calculator() {
    return (
        <Block id={'price'}
               data-aos="fade-up"
               data-aos-offset="200"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
               data-aos-anchor-placement="top-center"
        >
            <Header>{'РАСЧЁТ СТОИМОСТИ'}</Header>
            <Body>
            <CalculatorImage/>
            <CalculatorBlock/>
            </Body>
        </Block>
    );
}

