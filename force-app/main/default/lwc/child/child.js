import { LightningElement, api } from 'lwc';

export default class Child extends LightningElement {
    @api percentage;

    get style(){
        return `background-color: aqua; min-height: 50px; width: ${this.percentage}; min-width: 10px; border:1px solid black `;
    }
}