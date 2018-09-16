import React, {Component} from 'react';
import styled from 'styled-components'

import {Block, H1} from '../common/Atom';
import Header from '../components/Header';

import DescriptionText from '../components/description/DescriptionText';
import DescriptionImage from '../components/description/DescriptionImage';



export default function Description() {
    return (
        <Block
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-offset="200"
            data-aos-once="false"
            id={'components'}
        >
            <Header>{'ВНУТРЕННЯЯ МОСКИТНАЯ СЕТКА'}</Header>

            <Body>
                <DescriptionText/>
                <DescriptionImage/>
            </Body>
        </Block>
    );
}

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

