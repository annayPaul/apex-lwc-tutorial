import { LightningElement } from 'lwc';

export default class GetterExpression extends LightningElement {
    firstName = '';
    lastName = '';

    handleChange(e){
        // if(e.target.name === 'firstName'){
        //     this.firstName = e.target.value;
        // }else if(e.target.name === 'lastName'){
        //     this.lastName = e.target.value;
        // }else{
        //     return;
        // }
        this[e.target.name] = e.target.value;
    }

    get upperCaseName(){
        return `${this.firstName.toUpperCase()} ${this.lastName.toUpperCase()}`
    }
}