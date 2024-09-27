import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import { getObjectInfo } from "lightning/uiObjectInfoApi";
import { LightningElement, api, track, wire } from "lwc";
import getFields from "@salesforce/apex/Scratch.getFields";

export default class Scratch extends LightningElement {
  // Flexipage provides recordId and objectApiName
  @api objectApiName;
  @track objectInfo;
  @wire(getFields, {objectName: "PDF_Scanner__c"})
  objectInfo;

  connectedCallback(){
    console.log('connected');
  }

  renderedCallback(){
    console.log('rendered'+this.objectInfo?.data);
  }

  get fields() {
    console.log(this.objectInfo?.data?.fields);
    return this.objectInfo?.data?.fields;
  }

}