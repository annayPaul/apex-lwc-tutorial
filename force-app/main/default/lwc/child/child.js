import { api, LightningElement } from 'lwc';

export default class Child extends LightningElement {
    handleOnClick(){
        this.dispatchEvent(new CustomEvent('increment'));
    }
} 