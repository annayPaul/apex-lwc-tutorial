import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {
    constructor(){
        super();
        console.log('Grandparent Constructor')
    }

    connectedCallback(){
        console.log('Grandparent connected');
    }

    disconnectedCallback(){
        console.log('Grandparent disconnected');
    }

    renderedCallback(){
        console.log('Grandparent rendered');
    }
}