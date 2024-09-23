import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    percentage=20;
    handleChange(event){
        this.percentage = event.target.value;
    }

    constructor(){
        super();
        console.log('Parent');
    }
    connectedCallback(){
        console.log('Parent Connected');
    }
    disconnectedCallback(){
        console.log('Parent Disconnected');
    }

    renderedCallback(){
        console.log('Parent Rendered')
    }
}