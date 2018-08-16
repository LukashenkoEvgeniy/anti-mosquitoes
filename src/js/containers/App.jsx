import React from 'react';
import styled from 'styled-components'

import MainView from '../components/MainView.jsx';

export default function App() {
    return (
        <AppContainer>
            <MainView/>
        </AppContainer>
    );
}

const AppContainer = styled.div`
    width: 100%
    height: 100%
`;