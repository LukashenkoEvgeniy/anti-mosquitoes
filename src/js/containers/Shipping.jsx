import React, {Component} from 'react';
import styled from 'styled-components'

import {Block, H1} from '../common/Atom';
import Header from '../components/Header';
import Body from '../components/Body';
import DescriptionText from '../components/shipping/DescriptionText';


export default function Shipping() {
    return (
        <Block id={'shipping'}>
            <Header>{'ОПЛАТА И ДОСТАВКА'}</Header>
            <Body>
                {[<DescriptionText key={1}/>]}
            </Body>
        </Block>
    );
}

