import React from 'react';
import {Provider} from 'mobx-react';
import { hot } from 'react-hot-loader'

import Content from './Content.jsx';
import Navigation from './Navigation.jsx';
import BasketStore from '../stores/BasketStore';
import UIStore from '../stores/UIStore';

function App() {
    const stores = {
        basketStore : new BasketStore(),
        uiStore: new UIStore()
    };

    return (
        <Provider {...stores}>
            <Content/>
        </Provider>
    );
}

export default hot(module)(App)