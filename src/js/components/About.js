import React from 'react';
import styled from 'styled-components'

export function About() {
    return (
        <Content>
            <H2>{'- внутреняя и наружная'}</H2>
            <H2>{'- надёжный профиль и крепления'}</H2>
            <H2>{'- несколько цветов'}</H2>
            <H2>{'- открывание на петлях'}</H2>
        </Content>
    )
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const H2 = styled.h2`
    color: yellow;
`;