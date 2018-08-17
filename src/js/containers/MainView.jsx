import React, {Component} from 'react';
import styled from 'styled-components'

import bg from '../../static/img/background_image.jpg';
import Content from './Content.jsx';

export default class MainView extends Component {
    render() {
        return (
            <BackgroundImage>
                <Content/>
            </BackgroundImage>
        );
    }
}

const BackgroundImage = styled.div`
    width: 100%
    height: 100%
    background-image: url(${bg});
    background-position: center;
    display: flex;
`;
