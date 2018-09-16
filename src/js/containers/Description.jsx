import React, {Component} from 'react';
import styled from 'styled-components'

import {Block, H1} from '../common/Atom';
import Header from "../components/Header";
import Body from "../components/Body";
import DescriptionText from "../components/description/DescriptionText";
import DescriptionImage from "../components/description/DescriptionImage";



export default function Description() {
    return (
        <Block id={'components'}
               data-aos="fade-right"
               data-aos-offset="200"
               data-aos-delay="50"
               data-aos-duration="1000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
               data-aos-once="false"
               data-aos-anchor-placement="top-center"
        >
            <Header>{'ВНУТРЕННЯЯ МОСКИТНАЯ СЕТКА'}</Header>

            <Body>
                <DescriptionText/>
                <DescriptionImage/>
            </Body>
        </Block>
    );
}

