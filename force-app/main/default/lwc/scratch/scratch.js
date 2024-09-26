import { LightningElement, track } from 'lwc';

export default class Scratch extends LightningElement {
    selectedOption = "";
    inputText = "";

    @track
    optionsArray = [
        {label: 'Option 1', value: 'Option 1'}, 
        {label: 'Option 2', value: 'Option 2'}, 
        {label: 'Option 3', value: 'Option 3'},
        {label: 'Option 4', value: 'Option 4'},
    ];

    handleSubmit(event){
        event.preventDefault();
        this.inputText = this.refs.searchInput.value;
        this.optionsArray.push({label: this.inputText, value: this.inputText});
        this.inputText = "";
    }

    handleSelection(event){
        this.selectedOption = event.detail.value;
    }

    get options(){
        return this.optionsArray
    }
}