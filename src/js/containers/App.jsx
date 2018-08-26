import React from 'react';
import {Provider} from 'mobx-react';
import { hot } from 'react-hot-loader'

import Content from './Content.jsx';
import Navigation from './Navigation.jsx';
import UIStore from '../stores/UIStore';
import BasketStore from '../stores/BasketStore';

function App() {
    const stores = {
        uiStore: new UIStore(),
        basketStore: new BasketStore()
    };

    return (
        <Provider {...stores}>
            <Content/>
        </Provider>
    );
}

export default hot(module)(App)