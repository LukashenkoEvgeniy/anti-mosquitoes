import {computed, observable, toJS} from 'mobx';
import OrderApi from '../api/OrderApi';

export default class OrderStore {

    @observable orders = [];
    orderApi = new OrderApi();

    add(orderContract) {
        this.orders.push(orderContract);
        console.log(orderContract)
    }

    remove(orderContract) {
        this.orders.remove(orderContract);
    }

    getAll() {
        return this.orders;
    }

    @computed
    get countItems() {
        console.log(this.orders.length);
        return this.orders.length;
    }

    @computed
    get ifOrderExist() {
        console.log(this.orders.length);
        return !!this.orders.length;
    }

    @computed
    get finalPrice() {
        console.log(this.orders.length);
        return this.orders.length ? this.orders.map(order => order.price).reduce((prev, next) => prev + next) : null;
    }

    sendOrder(order) {
        order.orders = toJS(this.getAll());
        return this.orderApi.sendOrder(order).then(response => {
            console.log(response);
            if (response.ok){
                this.orders.clear();
                return new Promise(resolve => resolve('Ваш заказ принят в обработку!'))
            }
            return new Promise((resolve, reject) => reject('Проблемы с сервером'));
        });

    }
}