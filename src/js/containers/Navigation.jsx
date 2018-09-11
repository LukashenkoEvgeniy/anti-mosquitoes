import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';
import scrollToComponent from 'react-scroll-to-component';

import {Badge, Glyphicon, Nav, Navbar, NavItem} from 'react-bootstrap';
import Advantages from './Advantages.jsx';

const Navigation = inject('orderStore', 'uiStore')(observer(({orderStore, uiStore}) => {

    function scroll(component) {
        console.log('scroll to', component);
        console.log(uiStore.getNavRef(component));
        scrollToComponent(uiStore.getNavRef(component), {offset: 0, align: 'top', duration: 500, ease: 'outCube'});
    }

    return (
        <NavbarWrapper
            collapseOnSelect
            inverse>
            <Navbar.Header>
                <Navbar.Brand>
                    <a onClick={() => scroll('Presentation')}>{'Anti-Mosquitoes'}</a>
                </Navbar.Brand>
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



const BadgeWrapper = styled(Navbar)`
    background: rgba(106, 6, 145, 0.97);
`;

const NavbarWrapper = styled(Navbar)`
    border-radius: 0px;
    position: fixed;
    width: 100%;
    z-index: 10;
`;

const NavItemBasked = styled(NavItem)`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
