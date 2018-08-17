import React, {Component} from 'react';
import styled from 'styled-components'
import {Header} from '../components/Header';
import RightColumn from './RightColumn.jsx';
import LeftColumn from './LeftColumn.jsx';

export default class Content extends Component {
    render() {
        return (
            <ContentWrapper>

                <RightColumn/>
                <LeftColumn/>

            </ContentWrapper>
        );
    }
}

const ContentWrapper = styled.div`
    margin: 20px 100px 20px 100px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;