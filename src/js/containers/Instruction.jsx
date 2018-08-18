import React, {Component} from 'react';
import styled from 'styled-components'

import {Block, InlineBlock} from '../common/Atom';
import Header from "../components/Header";
import {instructions} from "../data/Instructions";


export default function Instruction() {
    return (
        <Block>
            <Header>{'ИНСТРУКЦИЯ ПО ЗАМЕРАМ'}</Header>
            {instructions.map((item, index) =>
                <Block key={index}>
                    <InlineBlock>
                        <TextWrapper>{item.title}</TextWrapper>
                        {item.image && <ImageWrapper src={item.image}/>}
                    </InlineBlock>
                </Block>
            )}
        </Block>
    );
}

const TextWrapper = styled.p`
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
  }
`;

const ImageWrapper = styled.img`
    width: 50%;
    @media (max-width: 768px) {
        width: 100%;
  }
`;
