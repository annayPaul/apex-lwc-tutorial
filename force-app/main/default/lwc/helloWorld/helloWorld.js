import { LightningElement } from 'lwc';
// https://trailhead.salesforce.com/content/learn/projects/quick-start-lightning-web-components/create-a-hello-world-lightning-web-component?trail_id=build-lightning-web-components
export default class HelloWorld extends LightningElement {
    greeting = "World";
    changeHandler(event){
        this.greeting = event.target.value;
    }
}