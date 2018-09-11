import React, {Component} from 'react';
import styled from 'styled-components'

import {Block, InlineBlock} from '../common/Atom';
import Header from "../components/Header";
import {instructions} from "../data/Instructions";
import {Image, Panel} from "react-bootstrap";


export default function Instruction() {
    return (
        <Block id={'instruction'}>
            <Header>{'ИНСТРУКЦИЯ ПО ЗАМЕРАМ'}</Header>
            {instructions.map((item, index) =>
                <PanelWrapper key={index} id="collapsible-panel-example-2" defaultExpanded>
                    <Panel.Heading>
                        <Panel.Title toggle>
                            {item.title}
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            {item.text}
                            <Image src={item.image} responsive />
                        </Panel.Body>
                    </Panel.Collapse>
                </PanelWrapper>
            )}
        </Block>
    );
}

const PanelWrapper = styled(Panel)`
    width: 95%;
    color: #000;
    opacity: 0.8;
`;

