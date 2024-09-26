import { LightningElement } from 'lwc';

export default class Scratch extends LightningElement {
    selectedOption = "";

    handleSelection(event){
        this.selectedOption = event.detail.value;
    }

    get options(){
        return [
            {label: 'Option 1', value: 1}, 
            {label: 'Option 2', value: 2}, 
            {label: 'Option 3', value: 3},
            {label: 'Option 4', value: 4},
        ]
    }
}