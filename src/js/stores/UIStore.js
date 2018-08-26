import {computed, observable, action} from 'mobx';

export default class UIStore {

    @observable modalVisiblity = false;
    navRefs = new Map();

    @action
    hideModal() {
        this.modalVisiblity = false;
    }

    @action
    showModal() {
        this.modalVisiblity = true;
    }

    @computed
    get modalVisibility() {
        return this.modalVisiblity;
    }

    addNavRef(name, ref) {
        this.navRefs.set(name, ref);
    }

    getNavRef(name) {
        return this.navRefs.get(name);
    }
}