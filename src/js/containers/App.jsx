import React from 'react';
import {Provider} from 'mobx-react';
import { hot } from 'react-hot-loader'

import Content from './Content.jsx';
import BasketStore from '../stores/BasketStore';

function App() {

    const basketStore = new BasketStore();

    return (
        <Provider basketStore={basketStore}>
            <Content/>
        </Provider>
    );
}

export default hot(module)(App)