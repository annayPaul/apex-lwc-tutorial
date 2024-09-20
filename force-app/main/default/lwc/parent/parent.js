import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    percentage=20;
    handleChange(event){
        this.percentage = event.target.value;
    }
}