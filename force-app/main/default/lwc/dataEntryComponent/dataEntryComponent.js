import { api, LightningElement } from 'lwc';

export default class DataEntryComponent extends LightningElement {
    @api textColor = "#00FF00";

    renderedCallback(){
        this.refs.heading.style.color = this.textColor;
    }
}