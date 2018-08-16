import React, {Component} from 'react';
import styled from 'styled-components'

import bg from '../../static/img/background_image.jpg';

export default class MainView extends Component {
    render() {
        return (
            <BackgroundImage>
                <p>TEST</p>
            </BackgroundImage>
        );
    }
}

const BackgroundImage = styled.div`
    background-color: red;
    width: 100%
    height: 100%
    background-image: url(${bg});
`;
