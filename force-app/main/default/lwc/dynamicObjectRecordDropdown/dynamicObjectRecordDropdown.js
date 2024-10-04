import { api, LightningElement, track, wire } from 'lwc';
import getFields from "@salesforce/apex/Scratch.getFields";

export default class DynamicObjectRecordDropdown extends LightningElement {
  @api objectInput = "Account";
  @api Field;
  inputText = "";
  selectedOption = "";
  temp = [];

  @track objectInfo;

  @wire(getFields, {objectName: "$objectInput"})
  objectInfo;

  @track optionsArray = [
    {label: "None", value: "None"}
  ]

  handleObjectInputChange(e){
    // Can do debouncing!
    this.objectInput = this.refs.objectSearch.value;
  }

  handleSubmit(e){
    e.preventDefault();

    this.inputText = this.refs.searchInput.value;
    this.optionsArray.push({label: this.inputText, value: this.inputText});
    this.inputText = "";
  }

  handleObjectInputSubmit(e){
    e.preventDefault();

    this.objectInput = this.refs.objectSearch.value;
    this.temp = [];

    for(let field of this.objectInfo?.data){
      this.temp.push({label: field, value: field})
    }

    this.optionsArray = [{label: "None", value: "None"}, ...this.temp];
    this.objectInput = "";
  }


  handleSelection(event){
    this.selectedOption = event.detail.value;
  }


  get options(){
    return this.optionsArray;
  }
}