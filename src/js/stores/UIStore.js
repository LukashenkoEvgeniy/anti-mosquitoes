import {computed, observable, action} from 'mobx';

export default class UIStore {

    @observable popupVisible = false;
    navRefs = new Map();

    @action
     tooglePopup(){
        this.popupVisible = !this.popupVisible
    }

    @computed
    get popupVisibility(){
        return this.popupVisible;
    }

    addNavRef(name, ref){
        this.navRefs.set(name, ref);
    }

    getNavRef(name){
        return this.navRefs.get(name);
    }
}