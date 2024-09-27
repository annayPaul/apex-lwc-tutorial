import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import { getObjectInfo } from "lightning/uiObjectInfoApi";
import { LightningElement, api, track, wire } from "lwc";
import getFields from "@salesforce/apex/Scratch.getFields";

export default class Scratch extends LightningElement {
  @api inputObject = "Account";
  inputText = "";
  selectedOption = "";
  temp = [];

  @api objectApiName;
  @track objectInfo;
  parent = this;
  @wire(getFields, {objectName: "$inputObject"})
  objectInfo;

  @track optionsArray = [
    {label: "None", value: "None"}
  ]

  handleSubmit(e){
    e.preventDefault();
    console.log('submitted....')
    this.inputText = this.refs.searchInput.value;
    this.optionsArray.push({label: this.inputText, value: this.inputText});
    this.inputText = "";
  }

  handleObjectSubmit(e){
    e.preventDefault();
    console.log('aaaaaaaaaaaaa.......');
    // console.log(this.refs.objectSearch.value);
    this.inputObject = this.refs.objectSearch.value;
    // console.log('submit ' + this.inputObject);
    this.temp = [];
    for(let field of this.objectInfo?.data){
      this.temp.push({label: field, value: field})
    }
    console.log('haaaa...........');
    // console.log('temp' + thisJ.temp);
    this.optionsArray = [{label: "None", value: "None"}, ...this.temp];
    console.log('la la la la ...............');
    this.inputObject = "";
  }


  handleSelection(event){
    this.selectedOption = event.detail.value;
  }


  get options(){
    return this.optionsArray;
  }

}