import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';
import scrollToComponent from 'react-scroll-to-component';

import {Badge, Glyphicon, Nav, Navbar, NavItem} from 'react-bootstrap';
import Advantages from './Advantages.jsx';

const Navigation = inject('orderStore', 'uiStore')(observer(({orderStore, uiStore}) => {

    function scroll(component) {
        scrollToComponent(uiStore.getNavRef(component), {offset: 0, align: 'top', duration: 500, ease: 'outCube'});
    }

    return (
        <NavbarWrapper
            collapseOnSelect
            inverse>
            <Navbar.Header>
                <NavbarBrand>
                    <a onClick={() => scroll('Presentation')}><b>АНТИ-МОСКИТ</b></a>
                </NavbarBrand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem
                        eventKey={1}
                        onClick={() => scroll('Presentation')}
                    >
                        {'МОСКИТНАЯ СЕТКА'}
                    </NavItem>
                    <NavItem
                        eventKey={2}
                        onClick={() => scroll('Advantages')}
                    >
                        {'ПРЕИМУЩЕСТВА'}
                    </NavItem>
                    <NavItem
                        eventKey={3}
                        onClick={() => scroll('Description')}
                    >
                        {'КОМПЛЕКТУЮЩИЕ'}
                    </NavItem>
                    <NavItem
                        eventKey={4}
                        onClick={() => scroll('Instruction')}
                    >
                        {'ИНСТРУКЦИЯ'}
                    </NavItem>
                    <NavItem
                        eventKey={5}
                        onClick={() => scroll('Calculator')}
                    >
                        {'СТОИМОСТЬ'}
                    </NavItem>
                    <NavItem
                        eventKey={5}
                        onClick={() => scroll('Shipping')}
                    >
                        {'ОПЛАТА И ДОСТАВКА'}
                    </NavItem>

                </Nav>
                <Nav pullRight>
                    <NavItemBasked
                        eventKey={1}
                        href="#"
                        onClick={() => orderStore.ifOrderExist ? uiStore.showModal() : null}
                    >
                        {orderStore.ifOrderExist ? <BadgeWrapper>{orderStore.countItems}</BadgeWrapper> : null}
                        <Glyphicon glyph="glyphicon glyphicon-shopping-cart"/>
                    </NavItemBasked>
                </Nav>
            </Navbar.Collapse>
        </NavbarWrapper>
    );
}));

export default Navigation;

const BadgeWrapper = styled(Badge)`
    background: #7B63AB;
`;

const NavbarWrapper = styled(Navbar)`
    border-radius: 0px;
    background: #27363A;
    border: 0px;
    box-shadow: 0 0 10px #FCD05C;
    position: fixed;
    width: 100%;
    z-index: 10;
`;

const NavItemBasked = styled(NavItem)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NavbarBrand = styled(Navbar.Brand)`
  color: #7B63AB; !important;
`;
