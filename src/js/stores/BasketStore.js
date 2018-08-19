import {computed, observable} from 'mobx';

export default class BasketStore {

    @observable items = [];

    add(item){
        this.items.push(item);
        console.log(item)
    }

    @computed
    get countItems(){
        console.log(this.items.length);
        return this.items.length;
    }
}