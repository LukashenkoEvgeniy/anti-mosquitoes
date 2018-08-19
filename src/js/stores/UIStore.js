import {computed, observable, action} from 'mobx';

export default class BasketStore {

    @observable popupVisible = false;

    @action
     tooglePopup(){
        this.popupVisible = !this.popupVisible
    }

    @computed
    get popupVisibility(){
        return this.popupVisible;
    }
}