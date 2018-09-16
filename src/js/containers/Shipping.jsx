import React, {Component} from 'react';
import styled from 'styled-components'

import {Block, H1} from '../common/Atom';
import Header from '../components/Header';
import Body from '../components/Body';
import DescriptionText from '../components/shipping/DescriptionText';


export default function Shipping() {
    return (
        <Block id={'shipping'}
               data-aos="fade-down-left"
               data-aos-offset="200"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
               data-aos-anchor-placement="top-center"
        >

            <Header>{'ОПЛАТА И ДОСТАВКА'}</Header>
            <Body>
            {[<DescriptionText key={1}/>]}
            </Body>
        </Block>
    );
}

