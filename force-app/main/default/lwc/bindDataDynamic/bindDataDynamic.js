import { LightningElement } from 'lwc';

export default class BindDataDynamic extends LightningElement {
    myValue = 'Elon Musk';
    handleChange(e){
        this.myValue = e.target.value;
    }
}