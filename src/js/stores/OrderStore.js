import {computed, observable} from 'mobx';

export default class OrderStore {

    @observable orders = [];

    add(orderContract){
        this.orders.push(orderContract);
        console.log(orderContract)
    }

    getAll(){
        return this.orders;
    }

    @computed
    get countItems(){
        console.log(this.orders.length);
        return this.orders.length;
    }

    @computed
    get finalPrice(){
        console.log(this.orders.length);
        return this.orders.length ? this.orders.map(order => order.price).reduce((prev, next) => prev + next) : null;
    }
}