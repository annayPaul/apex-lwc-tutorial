import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    handleClick(){
        this.template.querySelector('c-child').refresh();
    }
}