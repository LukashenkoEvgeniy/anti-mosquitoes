import React, {Component} from 'react';
import styled from 'styled-components'

import {Block} from '../common/Atom';
import Header from '../components/Header';
import AdvantageCard from '../components/advantages/AdvantageCard';
import {advantages} from '../data/Advantages'
import PopupContent from '../components/order/PopupContent.jsx';


export default function OrderPopup() {
    return (
        <PopupContent/>
    );
}

const AdvantageCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    alight-items: center;
    justify-content: center;
    padding-top: 10em;
`;


