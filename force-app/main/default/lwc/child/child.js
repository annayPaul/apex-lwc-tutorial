import { LightningElement, api } from 'lwc';

export default class Child extends LightningElement {
    constructor(){
        super();
        console.log('Child Constructor');
    }
    @api percentage;

    get design(){
        return `background-color: aqua; min-height: 50px; width: ${this.percentage}%; border:1px solid black `;
    }

    connectedCallback(){
        console.log('Child Connected Callback');
    }

    disconnectedCallback(){
        console.log('Child Disconnected Callback');
    }

    renderedCallback(){
        console.log('Child Rendered Callback');
    }
}