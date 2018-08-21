import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import styled from 'styled-components'

import {Button, Glyphicon, MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";

const Navigation = inject('basketStore')(observer(({basketStore}) => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">{'Anti-Mosquitoes'}</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#mesh">
                        {'МОСКИТНАЯ СЕТКА'}
                    </NavItem>
                    <NavItem eventKey={2} href="#advantages">
                        {'ПРЕИМУЩЕСТВА'}
                    </NavItem>
                    <NavItem eventKey={3} href="#components">
                        {'КОМПЛЕКТУЮЩИЕ'}
                    </NavItem>
                    <NavItem eventKey={4} href="#instruction">
                        {'ИНСТРУКЦИЯ'}
                    </NavItem>
                    <NavItem eventKey={5} href="#price">
                        {'СТОИМОСТЬ'}
                    </NavItem>

                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                            <Glyphicon glyph="glyphicon glyphicon-shopping-cart" />
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}));

export default Navigation;
