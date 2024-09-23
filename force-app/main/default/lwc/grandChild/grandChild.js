import { LightningElement } from 'lwc';

export default class GrandChild extends LightningElement {
    constructor(){
        super();
        console.log('Grandchild Constructor')
    }

    connectedCallback(){
        console.log('Grandchild connected');
    }

    disconnectedCallback(){
        console.log('Grandchild disconnected');
    }

    renderedCallback(){
        console.log('Grandchild rendered');
    }
}