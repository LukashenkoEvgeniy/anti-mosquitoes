import React from 'react';
import {Provider} from 'mobx-react';
import { hot } from 'react-hot-loader'

import Content from './Content.jsx';
import UIStore from '../stores/UIStore';
import OrderStore from '../stores/OrderStore';

function App() {
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
 /*
    1 зафиксировать корзину
    2 добавить число товаро к значку корзины
    3 сделать лейблы под калькулятором маленьки с площадью и доп фигней
    4 выделить цену в калькулторе
    5 в оформлении заказа разобраться с адоптивностью таблицы
    6 в офрмлениии заказа поправить стили и добавить лейблов с данными
    7 написать сервак для приема заказов
    8 написать запрос для оправки заказа

  */