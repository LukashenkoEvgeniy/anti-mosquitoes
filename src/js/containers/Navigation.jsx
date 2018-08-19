import React, {Component} from 'react';
import styled from 'styled-components'
import {inject, observer} from 'mobx-react';


const Navigation = inject('basketStore')(observer(({basketStore}) => {
    return (
        <NavigationBar>
            <Item href="#mesh">{'МОСКИТНАЯ СЕТКА'}</Item>
            <Item href="#advantages">{'ПРЕИМУЩЕСТВА'}</Item>
            <Item href="#components">{'КОМПЛЕКТУЮЩИЕ'}</Item>
            <Item href="#instruction">{'ИНСТРУКЦИЯ'}</Item>
            <Item href="#price">{'СТОИМОСТЬ'}</Item>
            <Item href="">{basketStore.countItems + 'КОРЗИНА'}</Item>
        </NavigationBar>
    );
}));

export default Navigation;

const NavigationBar = styled.nav`
    width: 100%;
    height: 3em;
    position: fixed
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black
    @media (max-width: 700px) {
        flex-direction: column;
        height: 7em;

    }
`;

const Item = styled.a`
    color: white;
`;


