import {computed, observable} from 'mobx';

export default class OrderContract {

    id = null;
    color = null;
    type = null;
    height = null;
    width = null;
    price = null;
    oldPrice = null;

    constructor(contract = {}){
        this.id = '_' + Math.random().toString(36).substr(2, 9);
        this.color = contract.color;
        this.type = contract.type;
        this.height = contract.height;
        this.width = contract.width;
        this.price = contract.price;
        this.oldPrice = contract.oldPrice;
    }

    set setColor(value) {
        this.color = value;
    }

    set setType(value) {
        this.type = value;
    }

    set setHeight(value) {
        this.height = value;
    }

    set setWidth(value) {
        this.width = value;
    }

    set setPrice(value) {
        this.price = value;
    }
}