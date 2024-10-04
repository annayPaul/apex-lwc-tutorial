import { api, LightningElement } from 'lwc';

export default class CustomTextEditor extends LightningElement {
    @api textColor = '';

    handleChange(event){
        this.textColor = this.refs.colorValue.value;
        console.log(this.textColor);
    }
}