import { LightningElement, wire, api } from 'lwc';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE_FIELD from '@salesforce/schema/Account.Phone';

export default class WireWithProperty extends LightningElement {
     @api recordId;
     @wire(getRecord, {recordId: "$recordId", fields: [ACCOUNT_NAME_FIELD, ACCOUNT_PHONE_FIELD]}) record({
          error,
          data
     }){
          if(data){
               console.log(data);
          }else{
               console.log(error);
          }
     };

     get name(){
          return  getFieldValue(this.record.data, ACCOUNT_NAME_FIELD);
     }

     get phone(){
          return getFieldValue(this.record.data, ACCOUNT_PHONE_FIELD);
     }
}