import React from 'react';
import {Provider} from 'mobx-react';
import { hot } from 'react-hot-loader'

import Content from './Content.jsx';
import UIStore from '../stores/UIStore';
import OrderStore from '../stores/OrderStore';
import AOS from 'aos';


function App() {

    AOS.init();

    const stores = {
        uiStore: new UIStore(),
        orderStore: new OrderStore()
    };

    return (
        <Provider {...stores}>
            <Content/>
        </Provider>
    );
}

export default hot(module)(App)