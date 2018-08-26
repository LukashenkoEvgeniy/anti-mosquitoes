import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components';
import scrollToComponent from 'react-scroll-to-component';

import {Glyphicon, Nav, Navbar, NavItem} from 'react-bootstrap';
import Advantages from './Advantages.jsx';

const Navigation = inject('basketStore', 'uiStore')(observer(({basketStore, uiStore}) => {

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
                <Navbar.Toggle />
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
                    <NavItem
                        eventKey={1}
                        href="#">
                        <Glyphicon glyph="glyphicon glyphicon-shopping-cart" />
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </NavbarWrapper>
    );
}));

export default Navigation;


const NavbarWrapper = styled(Navbar)`
    border-radius: 0px;
    position: fixed;
    width: 100%;
`;