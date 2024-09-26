import { LightningElement } from 'lwc';

export default class SimpleDropdown extends LightningElement {
    expanded = false;

    handleClick() {
        this.expanded = !this.expanded;
    }

    get isOpen(){
        if(this.expanded){
            return "slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
        }
        return "slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click"
    }
}