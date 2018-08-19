import React, {Component} from 'react';
import styled from 'styled-components'

import {Block, H1} from '../common/Atom';
import Header from "../components/Header";
import Body from "../components/Body";
import DescriptionText from "../components/description/DescriptionText";
import DescriptionImage from "../components/description/DescriptionImage";



export default function Description() {
    return (
        <Block id={'components'}>
            <Header>{'ВНУТРЕННЯЯ МОСКИТНАЯ СЕТКА'}</Header>

            <Body>
                <DescriptionText/>
                <DescriptionImage/>
            </Body>
        </Block>
    );
}

