import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import { getObjectInfo } from "lightning/uiObjectInfoApi";
import { LightningElement, api, track, wire } from "lwc";

export default class Scratch extends LightningElement {
  // Flexipage provides recordId and objectApiName
  @api objectApiName;
  @track objectInfo;
  @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
  objectInfo;

  connectedCallback(){
    console.log('connected');
  }

  renderedCallback(){
    console.log('rendered')
  }

  get fields() {
    console.log(this.objectInfo?.data?.fields);
    return this.objectInfo?.data?.fields;
  }

}