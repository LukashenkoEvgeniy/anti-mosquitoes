import React, {Component} from 'react';
import styled from 'styled-components'

import {Block, H1} from '../common/Atom';
import Header from '../components/Header';
import CalculatorBlock from '../components/calculator/CalculatorBlock.jsx';
import CalculatorImage from '../components/calculator/CalculatorImage';
import Body from '../components/Body';


export default function Calculator() {
    return (
        <Block id={'price'}>
            <Header>{'РАСЧЁТ СТОИМОСТИ'}</Header>
            <Body>
                <CalculatorImage/>
                <CalculatorBlock/>
            </Body>


        </Block>
    );
}

