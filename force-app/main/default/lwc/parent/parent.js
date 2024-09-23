import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    count = 1;
    handleEventChange(){
        this.count = this.count + 1;
    }
}