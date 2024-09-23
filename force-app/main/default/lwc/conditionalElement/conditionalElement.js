import { LightningElement } from 'lwc';

export default class ConditionalElement extends LightningElement {
    myValue = "Brain Station 23";
    show = false;
    handleChange(e){
        this.show = e.target.checked;
    }
}